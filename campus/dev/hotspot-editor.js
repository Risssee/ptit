(function (root) {
  "use strict";

  if (new URLSearchParams(root.location.search).get("hotspotedit") !== "1") return;

  function copy(text) {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    return Promise.resolve();
  }

  function initialize() {
    const api = root.PTITHotspotEditorAPI;
    const main = document.querySelector(".app-main");
    const pano = document.getElementById("pano");
    if (!api || !main || !pano) return root.setTimeout(initialize, 200);

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
