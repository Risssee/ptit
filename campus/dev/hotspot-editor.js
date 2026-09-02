(function (root) {
  "use strict";

  if (new URLSearchParams(root.location.search).get("hotspotedit") !== "1") return;

  async function copy(text) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (_) {
        // Trinh duyet co the chan Clipboard API; dung textarea tam lam du phong.
      }
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  // DEV ONLY: hover a hotspot to see its name; click the badge to copy it.
  function createHotspotInspector(api) {
    const badge = document.createElement("button");
    badge.type = "button";
    badge.id = "hotspot-name-inspector";
    badge.title = "Click để copy tên hotspot";
    badge.style.cssText = [
      "position:fixed", "display:none", "z-index:10000", "max-width:360px",
      "padding:8px 10px", "border:1px solid rgba(255,255,255,.35)",
      "border-radius:8px", "background:rgba(10,12,16,.94)",
      "box-shadow:0 6px 24px rgba(0,0,0,.35)", "color:#fff",
      "font:600 12px/1.35 monospace", "text-align:left", "cursor:copy",
      "pointer-events:auto"
    ].join(";");
    document.body.appendChild(badge);

    let pointerX = 0;
    let pointerY = 0;
    let activeName = "";
    let hideTimer = 0;
    const installed = new Set();

    document.addEventListener("pointermove", (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    }, { passive: true });

    function positionBadge() {
      const gap = 14;
      const width = badge.offsetWidth || 240;
      const height = badge.offsetHeight || 42;
      badge.style.left = `${Math.min(pointerX + gap, innerWidth - width - 8)}px`;
      badge.style.top = `${Math.min(pointerY + gap, innerHeight - height - 8)}px`;
    }

    function show(name) {
      clearTimeout(hideTimer);
      const krpano = api.getKrpano();
      activeName = String(name || "");
      const linkedScene = krpano?.get(`hotspot[${activeName}].linkedscene`) || "";
      badge.textContent = linkedScene ? `${activeName}  →  ${linkedScene}` : activeName;
      badge.style.display = "block";
      positionBadge();
    }

    function hide() {
      hideTimer = root.setTimeout(() => {
        if (!badge.matches(":hover")) badge.style.display = "none";
      }, 650);
    }

    badge.addEventListener("pointerenter", () => clearTimeout(hideTimer));
    badge.addEventListener("pointerleave", hide);
    badge.addEventListener("click", () => {
      if (!activeName) return;
      copy(activeName).then(() => {
        const oldText = badge.textContent;
        badge.textContent = `Đã copy: ${activeName}`;
        root.setTimeout(() => { badge.textContent = oldText; }, 900);
      });
    });

    root.PTITDevHotspotInspector = { show, hide };

    function attachToCurrentHotspots() {
      const krpano = api.getKrpano();
      if (!krpano) return;
      const scene = krpano.get("xml.scene") || "";
      const count = Number(krpano.get("hotspot.count")) || 0;

      for (let index = 0; index < count; index += 1) {
        const name = krpano.get(`hotspot[${index}].name`);
        if (!name) continue;
        const key = `${scene}:${name}`;
        if (installed.has(key)) continue;
        const oldOver = krpano.get(`hotspot[${name}].onover`) || "";
        const oldOut = krpano.get(`hotspot[${name}].onout`) || "";
        const safeName = String(name).replace(/'/g, "\\'");
        krpano.set(`hotspot[${name}].onover`, `${oldOver};js(window.PTITDevHotspotInspector.show('${safeName}'));`);
        krpano.set(`hotspot[${name}].onout`, `${oldOut};js(window.PTITDevHotspotInspector.hide());`);
        installed.add(key);
      }
    }

    root.setInterval(attachToCurrentHotspots, 500);
    attachToCurrentHotspots();
  }

  function initialize() {
    const api = root.PTITHotspotEditorAPI;
    const main = document.querySelector(".app-main");
    const pano = document.getElementById("pano");
    if (!api || !main || !pano) return root.setTimeout(initialize, 200);

    createHotspotInspector(api);

    const panel = document.createElement("div");
    panel.id = "hotspot-editor";
    panel.style.cssText = "position:absolute;right:14px;bottom:14px;z-index:280;width:280px;background:rgba(12,14,20,.92);border:1px solid rgba(255,255,255,.2);border-radius:10px;padding:10px;color:#fff;font-size:12px";
    panel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><strong>Đặt hotspot</strong><button data-action="pick">Đặt điểm</button></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        <input data-field="scene" placeholder="scene" readonly style="grid-column:1/3">
        <input data-field="name" value="info_new_hotspot" placeholder="name" style="grid-column:1/3">
        <input data-field="ath" placeholder="ath"><input data-field="atv" placeholder="atv">
        <input data-field="title" value="Thông tin" placeholder="title" style="grid-column:1/3">
        <textarea data-field="text" rows="2" placeholder="text" style="grid-column:1/3">Đang cập nhật...</textarea>
      </div>
      <div style="display:flex;gap:6px;margin-top:8px"><button data-action="create">Tạo ngay</button><button data-action="xml">Copy XML</button><button data-action="js">Copy JS</button></div>
      <div data-field="status" style="margin-top:8px;color:#b8c4ff">Chỉ hoạt động khi có ?hotspotedit=1</div>`;
    panel.querySelectorAll("input,textarea,button").forEach((el) => {
      el.style.cssText += ";padding:5px;border-radius:6px;border:1px solid #555;background:#111;color:#fff";
    });
    main.appendChild(panel);

    const field = (name) => panel.querySelector(`[data-field="${name}"]`);
    const status = field("status");
    let waitingForPoint = false;
    const currentScene = () => api.getKrpano()?.get("xml.scene") || "";
    field("scene").value = currentScene();

    panel.querySelector('[data-action="pick"]').addEventListener("click", () => {
      waitingForPoint = true;
      status.textContent = "Click lên pano tại vị trí muốn đặt hotspot";
    });

    pano.addEventListener("click", (event) => {
      if (!waitingForPoint) return;
      event.preventDefault();
      event.stopPropagation();
      const krpano = api.getKrpano();
      krpano.call("screentosphere(mouse.x,mouse.y,tmp_ath,tmp_atv);");
      field("scene").value = currentScene();
      field("ath").value = Number(krpano.get("tmp_ath")).toFixed(3);
      field("atv").value = Number(krpano.get("tmp_atv")).toFixed(3);
      waitingForPoint = false;
      status.textContent = `Đã đặt điểm: ${field("ath").value}, ${field("atv").value}`;
    }, true);

    const item = () => ({
      id: (field("name").value.replace(/^info_/, "") || "new_hotspot").replace(/[^a-zA-Z0-9_]/g, "_"),
      ath: Number(field("ath").value),
      atv: Number(field("atv").value),
      title: field("title").value || "Thông tin",
      text: field("text").value || "Đang cập nhật...",
      audio: "",
      tooltip: "Thông tin"
    });
    const valid = (value) => field("scene").value && Number.isFinite(value.ath) && Number.isFinite(value.atv);

    panel.querySelector('[data-action="create"]').addEventListener("click", () => {
      const value = item();
      if (!valid(value)) return status.textContent = "Hãy đặt điểm hợp lệ trước";
      api.createHotspot(field("scene").value, value);
      status.textContent = "Đã tạo hotspot tạm trên scene hiện tại";
    });
    panel.querySelector('[data-action="xml"]').addEventListener("click", () => {
      const value = item();
      const xml = `<hotspot name="info_${value.id}" style="skin_info_hotspot" ath="${value.ath}" atv="${value.atv}" infotitle="${value.title}" infotext="${value.text}" onclick="info_show_from_hotspot(get(name));" />`;
      copy(xml).then(() => status.textContent = "Đã copy XML");
    });
    panel.querySelector('[data-action="js"]').addEventListener("click", () => {
      const value = item();
      copy(`${field("scene").value}: [${JSON.stringify(value, null, 2)}]`).then(() => status.textContent = "Đã copy JS");
    });

    root.setInterval(() => { field("scene").value = currentScene(); }, 300);
  }

  initialize();
})(window);
