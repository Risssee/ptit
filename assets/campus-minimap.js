(function () {
  "use strict";

  const outdoorRoute = [
    [58.5,88],[58.5,83],[58,78],[56,73],[52,69],
    [49,65],[49,59],[49,53],[49,47],[49,41],
    [49,35],[49,29],[49,23],[49,17],[49,11],
    [53,8],[58,8],[63,8],[66,12],[66,20],
    [66,28],[66,36],[66,44],[66,52],[66,60]
  ];

  const anchors = {
    gate: [58.5,88], a1: [43.5,74], a2: [66,45], a3: [66,12],
    library: [31,18], garden: [49,35], canteen: [49,22],
    basketball: [31,69], volleyball: [31,42], cts: [43.5,74]
  };

  const knownScenes = {
    scene_gpbk2218_1773131077123: anchors.a1,
    scene_gpbk2226_1773131353550: anchors.a1,
    scene_gpbk2224_1773131289876: anchors.a1,
    scene_gpbk0065_1773206564173: anchors.a2,
    scene_gpbk0066_1773206449967: anchors.a2,
    scene_gpbk2388_1773819661170: anchors.a2,
    scene_gpbk2389_1773819679330: anchors.a2,
    scene_gpbk2195_1773130397237: anchors.a3,
    scene_gpbk2237_1773200161431: anchors.a3,
    scene_gpbk2201_1773130534438: anchors.library,
    scene_gpbk2202_1773130555661: anchors.library,
    scene_gpbk2282_1773201339253: anchors.canteen,
    scene_gpbk2260_1773200808324: anchors.basketball,
    scene_gpbk2286_1773201396711: anchors.volleyball,
    scene_gpbk2270_1773201080635: anchors.cts
  };

  function positionFor(scene) {
    if (scene.startsWith("scene_cie_")) return anchors.cts;
    if (scene.startsWith("scene_fpt") || scene.startsWith("scene_viettel_") || scene.startsWith("scene_ss_")) return anchors.a2;
    if (scene.startsWith("scene_game_")) return anchors.a3;
    if (knownScenes[scene]) return knownScenes[scene];
    const numeric = scene.match(/^scene_(\d+)$/);
    if (numeric) return outdoorRoute[Math.max(0, Math.min(24, Number(numeric[1]) - 1))];
    if (/a2|ttgnng2|ttgnng3a2|ttgnng8/i.test(scene)) return anchors.a2;
    if (/a3|ttgnng3_a3|ttgnng6/i.test(scene)) return anchors.a3;
    if (/vswthdn|nhtgtt/i.test(scene)) return anchors.garden;
    if (/gpbk22(0[2-9]|1[0-6])/.test(scene)) return anchors.library;
    if (/gpbk22(17|18|19|20|21|22|24|25|26)/.test(scene)) return anchors.a1;
    if (/gpbk22(34|35|36|37|38|39|4|5)/.test(scene)) return anchors.a3;
    // Scene chua co toa do: giu nguyen cham do, khong tu nhay ve cong.
    return currentPosition;
  }

  const minimap = document.createElement("aside");
  minimap.className = "campus-minimap";
  minimap.setAttribute("aria-label", "Bản đồ thu nhỏ khuôn viên PTIT");
  minimap.innerHTML = `
    <div class="campus-minimap__head">
      <strong>Bản đồ</strong>
      <span class="campus-minimap__scene">Đang xác định vị trí…</span>
      <button class="campus-minimap__toggle" type="button" aria-label="Thu gọn bản đồ">−</button>
    </div>
    <div class="campus-minimap__map">
      <span class="campus-minimap__position" title="Vị trí hiện tại"></span>
    </div>
    <span class="campus-minimap__resize" aria-hidden="true" title="Kéo để đổi kích thước bản đồ"></span>`;
  document.body.appendChild(minimap);

  const dot = minimap.querySelector(".campus-minimap__position");
  const sceneLabel = minimap.querySelector(".campus-minimap__scene");
  const toggle = minimap.querySelector(".campus-minimap__toggle");
  const resizeHandle = minimap.querySelector(".campus-minimap__resize");
  // ICON BAN DO: dang mo thi hien "thu nho", dang dong thi hien "phong to".
  const collapseIcon = `
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5 5.5h3v-3M13.5 5.5h-3v-3M2.5 10.5h3v3M13.5 10.5h-3v3" />
    </svg>`;
  const expandIcon = `
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M6.5 2.5h-4v4M9.5 2.5h4v4M6.5 13.5h-4v-4M9.5 13.5h4v-4" />
    </svg>`;
  toggle.innerHTML = collapseIcon;
  let currentScene = "";
  let currentPosition = anchors.gate;
  let minimapScale = 1;

  // TOA DO CHAM DO: cap nhat truc tiep theo scene, khong chay qua duong mo phong.
  function setDotPosition(target) {
    if (!target) return;
    currentPosition = target;
    dot.style.left = `${target[0]}%`;
    dot.style.top = `${target[1]}%`;
  }

  toggle.addEventListener("click", () => {
    const collapsed = minimap.classList.toggle("is-collapsed");
    toggle.innerHTML = collapsed ? expandIcon : collapseIcon;
    toggle.setAttribute("aria-label", collapsed ? "Mở bản đồ" : "Thu gọn bản đồ");
  });

  // KEO GOC TREN BEN TRAI: SCALE TOAN BO KHUNG, CHIEU DAI/CHIỀU RONG LUON CUNG TY LE.
  resizeHandle.addEventListener("pointerdown", (event) => {
    if (minimap.classList.contains("is-collapsed")) return;
    event.preventDefault();
    resizeHandle.setPointerCapture(event.pointerId);

    const startX = event.clientX;
    const startY = event.clientY;
    const baseWidth = minimap.offsetWidth;
    const baseHeight = minimap.offsetHeight;
    const startVisualWidth = baseWidth * minimapScale;
    const startVisualHeight = baseHeight * minimapScale;

    const onMove = (moveEvent) => {
      const deltaX = startX - moveEvent.clientX;
      const deltaY = startY - moveEvent.clientY;
      const scaleFromWidth = (startVisualWidth + deltaX) / baseWidth;
      const scaleFromHeight = (startVisualHeight + deltaY) / baseHeight;
      const requestedScale = (scaleFromWidth + scaleFromHeight) / 2;
      const viewportScale = Math.min(
        (window.innerWidth - 36) / baseWidth,
        (window.innerHeight - 36) / baseHeight
      );
      minimapScale = Math.min(Math.max(.72, viewportScale), Math.max(.72, requestedScale));
      minimap.style.setProperty("--minimap-scale", minimapScale.toFixed(3));
    };

    const onEnd = () => {
      resizeHandle.removeEventListener("pointermove", onMove);
      resizeHandle.removeEventListener("pointerup", onEnd);
      resizeHandle.removeEventListener("pointercancel", onEnd);
    };

    resizeHandle.addEventListener("pointermove", onMove);
    resizeHandle.addEventListener("pointerup", onEnd);
    resizeHandle.addEventListener("pointercancel", onEnd);
  });

  window.setInterval(() => {
    const instance = window.ptitKrpano;
    if (!instance) return;
    const scene = instance.get("xml.scene") || "";
    if (!scene || scene === currentScene) return;
    currentScene = scene;
    setDotPosition(positionFor(scene));
    const sceneTitle = instance.get(`scene[${scene}].title`) || scene.replace(/^scene_/, "");
    sceneLabel.textContent = sceneTitle;
  }, 300);
})();
