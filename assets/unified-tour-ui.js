(() => {
  const config = window.PTIT_UNIFIED_UI || {};
  const currentScript = document.currentScript;
  const root = new URL("../", currentScript.src);
  const url = (path) => new URL(path, root).href;
  const isCampusPage = /\/campus\//i.test(location.pathname);

  const navigationGroups = [
    {
      id: "campus", mark: "K", title: "Khuôn viên", subtitle: "Cổng chính và không gian ngoài trời",
      places: [
        { id: "campus", title: "Cổng chính", href: url("campus/tour.html?startscene=scene_1") },
        { id: "japanese-garden", title: "Vườn Nhật", href: url("campus/tour.html?startscene=scene_vswthdn_nhtgtt_1") }
      ]
    },
    {
      id: "a1", mark: "A1", title: "Tòa A1", subtitle: "Khu hành chính và phòng học",
      places: [
        { id: "a1-building", title: "Tòa A1", href: url("campus/tour.html?startscene=scene_gpbk2218_1773131077123") }
      ]
    },
    {
      id: "labs", mark: "LAB", title: "Trung tâm & phòng lab", subtitle: "Các không gian thực hành nổi bật",
      places: [
        { id: "cts", title: "Lab CTS", href: url("campus/tour.html?startscene=scene_cts_c1") },
        { id: "cie", title: "Trung tâm CIE", href: url("campus/tour.html?startscene=scene_cie_cuatruoc") },
        { id: "fpt", title: "Phòng LAB FPT", href: url("campus/tour.html?startscene=scene_fpt1") },
        { id: "game", title: "PTIT Game Lab", href: url("campus/tour.html?startscene=scene_game_0l") }
      ]
    },
    {
      id: "a2", mark: "A2", title: "Tòa A2", subtitle: "Giảng đường và hội trường",
      places: [
        { id: "a2-building", title: "Tòa A2", href: url("campus/tour.html?startscene=scene_10") },
        { id: "a2-classroom", title: "Phòng học A2", href: url("campus/tour.html?startscene=scene_gpbk0065_1773206564173") },
        { id: "a2-hall", title: "Hội trường A2", href: url("campus/tour.html?startscene=scene_gpbk0066_1773206449967") }
      ]
    },
    {
      id: "a3", mark: "A3", title: "Tòa A3", subtitle: "Giảng đường và phòng học",
      places: [
        { id: "a3-building", title: "Tòa A3", href: url("campus/tour.html?startscene=scene_gpbk2195_1773130397237") },
        { id: "a3-classroom", title: "Phòng học A3", href: url("campus/tour.html?startscene=scene_gpbk2237_1773200161431") }
      ]
    },
    {
      id: "amenities", mark: "TI", title: "Tiện ích sinh viên", subtitle: "Học tập, ăn uống và thể thao",
      places: [
        { id: "library", title: "Thư viện", href: url("campus/tour.html?startscene=scene_gpbk2202_1773130555661") },
        { id: "canteen", title: "Canteen", href: url("campus/tour.html?startscene=scene_gpbk2282_1773201339253") },
        { id: "basketball", title: "Sân bóng rổ", href: url("campus/tour.html?startscene=scene_gpbk2260_1773200808324") },
        { id: "volleyball", title: "Sân bóng chuyền", href: url("campus/tour.html?startscene=scene_gpbk2286_1773201396711") }
      ]
    }
  ];

  document.body.classList.add("ptit-unified-ui");
  const shell = document.createElement("div");
  shell.className = "ptit-ui";
  shell.innerHTML = `
    <button class="ptit-ui__home ptit-ui__glass" type="button" aria-label="Mở danh sách khu vực" aria-expanded="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 10 8-7 8 7v10h-6v-6h-4v6H4Z"/></svg>
    </button>
    <section class="ptit-ui__location ptit-ui__glass" aria-live="polite">
      <strong data-ui-tour-title>${config.title || "PTIT Virtual Tour"}</strong>
      <span data-ui-scene-title>Đang tải không gian</span>
    </section>
    <div class="ptit-ui__quick">
      <button class="ptit-ui__icon-button ptit-ui__sound ptit-ui__glass" type="button" aria-label="Bật hoặc tắt âm thanh">
        <svg class="ptit-ui__sound-on" viewBox="0 0 24 24"><path d="M5 9v6h4l5 4V5L9 9H5Z"/><path d="M17 9.5a4 4 0 0 1 0 5"/><path d="M19.5 7a7.5 7.5 0 0 1 0 10"/></svg>
        <svg class="ptit-ui__sound-off" viewBox="0 0 24 24" hidden><path d="M5 9v6h4l5 4V5L9 9H5Z"/><path d="m17 10 5 5m0-5-5 5"/></svg>
      </button>
      <button class="ptit-ui__icon-button ptit-ui__restart ptit-ui__glass" type="button" aria-label="Đặt lại góc nhìn">
        <svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.34 5.66"/><path d="M20 4v7h-7"/></svg>
      </button>
    </div>
    <aside class="ptit-ui__menu ptit-ui__glass" aria-label="Chọn khu vực tham quan">
      <div class="ptit-ui__menu-head"><strong>Khám phá PTIT</strong><span>6 nhóm địa điểm chính</span></div>
      <div class="ptit-ui__groups">
        ${navigationGroups.map((group, index) => `
          <section class="ptit-ui__group${index === 0 ? " open" : ""}" data-group="${group.id}">
            <button class="ptit-ui__group-toggle" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
              <span class="ptit-ui__place-mark">${group.mark}</span>
              <span class="ptit-ui__place-copy"><strong>${group.title}</strong><span>${group.subtitle}</span></span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
            </button>
            <div class="ptit-ui__group-places">
              ${group.places.map((place) => `<a class="ptit-ui__place" data-place="${place.id}" href="${place.href}"><span>${place.title}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></a>`).join("")}
            </div>
          </section>`).join("")}
      </div>
    </aside>
    <nav class="ptit-ui__tools ptit-ui__glass" aria-label="Thanh công cụ tham quan">
      <button class="ptit-ui__tool" data-ui-action="left" type="button" aria-label="Xoay trái">←</button>
      <button class="ptit-ui__tool" data-ui-action="right" type="button" aria-label="Xoay phải">→</button>
      <button class="ptit-ui__tool" data-ui-action="up" type="button" aria-label="Nhìn lên">↑</button>
      <button class="ptit-ui__tool" data-ui-action="down" type="button" aria-label="Nhìn xuống">↓</button>
      <span class="ptit-ui__separator"></span>
      <button class="ptit-ui__tool" data-ui-action="zoom-in" type="button" aria-label="Phóng to">+</button>
      <button class="ptit-ui__tool" data-ui-action="zoom-out" type="button" aria-label="Thu nhỏ">−</button>
      <span class="ptit-ui__separator"></span>
      <button class="ptit-ui__tool" data-ui-action="vr" type="button" aria-label="Chế độ VR"><svg viewBox="0 0 24 24"><path d="M3 8.5h18v8H16l-2.2-3h-3.6L8 16.5H3z"/><circle cx="7" cy="12" r="1"/><circle cx="17" cy="12" r="1"/></svg></button>
      <button class="ptit-ui__tool" data-ui-action="fullscreen" type="button" aria-label="Toàn màn hình"><svg viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg></button>
    </nav>
    ${isCampusPage ? "" : '<div class="ptit-ui__count ptit-ui__glass"><strong data-ui-scene-index>1</strong><span>/</span><span data-ui-scene-total>1</span></div>'}
  `;
  document.body.appendChild(shell);

  const home = shell.querySelector(".ptit-ui__home");
  const menu = shell.querySelector(".ptit-ui__menu");
  const sceneTitle = shell.querySelector("[data-ui-scene-title]");
  const soundButton = shell.querySelector(".ptit-ui__sound");
  const sceneOrder = Array.isArray(config.sceneOrder) ? config.sceneOrder : [];
  const sceneNames = config.sceneNames || {};
  let currentScene = "";
  let legacyControlsHidden = false;
  let externalHotspotLabels = [];

  const externalLabelOverlay = document.createElement("div");
  externalLabelOverlay.className = "ptit-ui__external-labels";
  if (!isCampusPage) document.body.appendChild(externalLabelOverlay);

  home.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    home.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", (event) => {
    const toggle = event.target.closest(".ptit-ui__group-toggle");
    if (!toggle) return;
    const group = toggle.closest(".ptit-ui__group");
    const willOpen = !group.classList.contains("open");
    menu.querySelectorAll(".ptit-ui__group").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".ptit-ui__group-toggle")?.setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      group.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!menu.contains(event.target) && !home.contains(event.target)) {
      menu.classList.remove("open");
      home.setAttribute("aria-expanded", "false");
    }
  });

  function viewer() { return window.ptitKrpano || null; }
  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
  function sceneLabel(scene) {
    if (sceneNames[scene]) return sceneNames[scene];
    if (typeof window.formatEdgeSceneTitle === "function") return window.formatEdgeSceneTitle(scene);
    return scene ? scene.replace(/^scene_/i, "").replace(/_/g, " ") : "Đang tải không gian";
  }
  const campusDestinations = {
    scene_1: "campus",
    scene_vswthdn_nhtgtt_1: "japanese-garden",
    scene_gpbk2218_1773131077123: "a1-building",
    scene_gpbk2270_1773201080635: "cts",
    scene_10: "a2-building",
    scene_gpbk0065_1773206564173: "a2-classroom",
    scene_gpbk0066_1773206449967: "a2-hall",
    scene_gpbk2195_1773130397237: "a3-building",
    scene_gpbk2237_1773200161431: "a3-classroom",
    scene_gpbk2202_1773130555661: "library",
    scene_gpbk2282_1773201339253: "canteen",
    scene_gpbk2260_1773200808324: "basketball",
    scene_gpbk2286_1773201396711: "volleyball"
  };
  function activePlace(scene) {
    if (isCampusPage && /^scene_cie_/i.test(scene)) return "cie";
    if (isCampusPage) return campusDestinations[scene] || "campus";
    return config.place || "";
  }
  function syncPlace(scene) {
    const place = activePlace(scene);
    shell.querySelectorAll("[data-place]").forEach((item) => {
      if (item.dataset.place === place) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
    const activeGroup = navigationGroups.find((group) => group.places.some((item) => item.id === place));
    if (activeGroup) {
      menu.querySelectorAll(".ptit-ui__group").forEach((group) => {
        const selected = group.dataset.group === activeGroup.id;
        group.classList.toggle("open", selected);
        group.querySelector(".ptit-ui__group-toggle")?.setAttribute("aria-expanded", String(selected));
      });
    }
    const title = place === "cie" ? "Trung tâm CIE" : (config.title || "PTIT Virtual Tour");
    shell.querySelector("[data-ui-tour-title]").textContent = title;
  }

  function createEdgeNavigation() {
    if (isCampusPage || sceneOrder.length < 2) return null;
    const edge = document.createElement("nav");
    edge.className = "ptit-ui__edge";
    edge.setAttribute("aria-label", "Chuyển điểm tham quan");
    edge.innerHTML = `
      <button class="ptit-ui__edge-button ptit-ui__edge-button--prev" data-ui-edge="prev" type="button"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg><span class="ptit-ui__edge-copy"><small>Điểm trước</small><strong></strong></span></button>
      <button class="ptit-ui__edge-button ptit-ui__edge-button--next" data-ui-edge="next" type="button"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg><span class="ptit-ui__edge-copy"><small>Điểm tiếp theo</small><strong></strong></span></button>`;
    shell.appendChild(edge);
    edge.addEventListener("click", (event) => {
      const button = event.target.closest("[data-target-scene]");
      if (button?.dataset.targetScene && viewer()) viewer().call(`loadscene(${button.dataset.targetScene},null,MERGE,BLEND(0.45));`);
    });
    return edge;
  }
  const edge = createEdgeNavigation();

  function renderExternalHotspotLabels() {
    if (isCampusPage) return;
    const pano = viewer();
    externalLabelOverlay.replaceChildren();
    externalHotspotLabels = [];
    const total = Number(pano?.get("hotspot.count")) || 0;
    for (let index = 0; index < total; index += 1) {
      const hotspotName = pano.get(`hotspot[${index}].name`) || "";
      const label = pano.get(`hotspot[${hotspotName}].ptit_label`) || "";
      const targetUrl = pano.get(`hotspot[${hotspotName}].ptit_url`) || "";
      if (!hotspotName || !label || !targetUrl) continue;
      const button = document.createElement("button");
      button.className = "ptit-ui__external-label";
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => { location.href = targetUrl; });
      externalLabelOverlay.appendChild(button);
      externalHotspotLabels.push({ hotspotName, button });
    }
  }

  function positionExternalHotspotLabels() {
    const pano = viewer();
    if (!pano || !externalHotspotLabels.length) return;
    externalHotspotLabels.forEach((item, index) => {
      const ath = Number(pano.get(`hotspot[${item.hotspotName}].ath`));
      const atv = Number(pano.get(`hotspot[${item.hotspotName}].atv`));
      pano.call(`spheretoscreen(${ath},${atv},ptit_external_x_${index},ptit_external_y_${index});`);
      const x = Number(pano.get(`ptit_external_x_${index}`));
      const y = Number(pano.get(`ptit_external_y_${index}`));
      const visible = Number.isFinite(x) && Number.isFinite(y) && x > -80 && y > -40 && x < innerWidth + 80 && y < innerHeight + 80;
      item.button.hidden = !visible;
      if (visible) {
        item.button.style.left = `${x}px`;
        item.button.style.top = `${y - 34}px`;
      }
    });
  }

  function updateScene() {
    const pano = viewer();
    if (pano && !legacyControlsHidden) {
      ["skin_btn_prev", "skin_btn_next", "skin_btn_prev_fs", "skin_btn_next_fs", "skin_btn_show"].forEach((name) => {
        try { pano.set(`layer[${name}].visible`, false); } catch (_) { /* Optional skin layer. */ }
      });
      legacyControlsHidden = true;
    }
    const scene = pano?.get("xml.scene") || "";
    if (!scene || scene === currentScene) return;
    currentScene = scene;
    sceneTitle.textContent = sceneLabel(scene);
    syncPlace(scene);
    renderExternalHotspotLabels();
    if (!edge) return;
    const index = Math.max(0, sceneOrder.indexOf(scene));
    const previous = index > 0 ? sceneOrder[index - 1] : "";
    const next = index < sceneOrder.length - 1 ? sceneOrder[index + 1] : "";
    const prevButton = edge.querySelector('[data-ui-edge="prev"]');
    const nextButton = edge.querySelector('[data-ui-edge="next"]');
    prevButton.hidden = !previous;
    nextButton.hidden = !next;
    prevButton.dataset.targetScene = previous;
    nextButton.dataset.targetScene = next;
    prevButton.querySelector("strong").textContent = sceneLabel(previous);
    nextButton.querySelector("strong").textContent = sceneLabel(next);
    prevButton.setAttribute("aria-label", previous ? `Điểm trước: ${sceneLabel(previous)}` : "Không có điểm trước");
    nextButton.setAttribute("aria-label", next ? `Điểm tiếp theo: ${sceneLabel(next)}` : "Không có điểm tiếp theo");
    shell.querySelector("[data-ui-scene-index]").textContent = String(index + 1);
    shell.querySelector("[data-ui-scene-total]").textContent = String(sceneOrder.length);
  }

  shell.querySelector(".ptit-ui__tools").addEventListener("click", (event) => {
    const action = event.target.closest("[data-ui-action]")?.dataset.uiAction;
    if (!action) return;
    if (action === "fullscreen") {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
      return;
    }
    const pano = viewer();
    if (!pano) return;
    const h = Number(pano.get("view.hlookat") || 0);
    const v = Number(pano.get("view.vlookat") || 0);
    const fov = Number(pano.get("view.fov") || 100);
    if (action === "left") pano.set("view.hlookat", h - 14);
    if (action === "right") pano.set("view.hlookat", h + 14);
    if (action === "up") pano.set("view.vlookat", clamp(v - 9, -80, 80));
    if (action === "down") pano.set("view.vlookat", clamp(v + 9, -80, 80));
    if (action === "zoom-in") pano.set("view.fov", clamp(fov - 10, 55, 140));
    if (action === "zoom-out") pano.set("view.fov", clamp(fov + 10, 55, 140));
    if (action === "vr") pano.call("webvr.enterVR();");
  });

  soundButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const original = isCampusPage ? document.querySelector("#sound-btn") : document.querySelector(".music-toggle");
    original?.click();
  });
  window.addEventListener("ptit:audiochange", (event) => {
    const enabled = Boolean(event.detail?.enabled);
    shell.querySelector(".ptit-ui__sound-on").hidden = !enabled;
    shell.querySelector(".ptit-ui__sound-off").hidden = enabled;
    soundButton.setAttribute("aria-label", enabled ? "Tắt âm thanh" : "Bật âm thanh");
  });
  shell.querySelector(".ptit-ui__restart").addEventListener("click", () => {
    const pano = viewer();
    const scene = pano?.get("xml.scene");
    if (scene) pano.call(`loadscene(${scene},null,MERGE,BLEND(0.3));`);
  });

  setInterval(updateScene, 250);
  setInterval(positionExternalHotspotLabels, 60);
  updateScene();
})();
