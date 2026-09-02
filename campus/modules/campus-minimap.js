(function () {
  "use strict";

  const MAP_COORDINATE_EDITOR = new URLSearchParams(window.location.search).get("mapedit") === "1";
  const savedScenePositions = MAP_COORDINATE_EDITOR
    ? (window.PTITMinimapEditor?.readSavedScenePositions() || {})
    : {};

  const minimapConfig = window.PTIT_MINIMAP_POSITIONS || {};
  const outdoorRoute = minimapConfig.outdoorRoute || [];
  const anchors = minimapConfig.anchors || {};
  const MANUAL_SCENE_POSITIONS = minimapConfig.manualScenePositions || {};

  function findConfiguredLocation(sceneName) {
    return window.PTIT_FIND_LOCATION?.(sceneName) || null;
  }

  function configuredLocationPosition(sceneName) {
    const location = findConfiguredLocation(sceneName);
    if (!location) return null;
    if (Array.isArray(location.minimap) && location.minimap.length === 2) return location.minimap;
    return MANUAL_SCENE_POSITIONS[location.entryScene] || null;
  }

  function positionFor(scene) {
    if (MAP_COORDINATE_EDITOR && savedScenePositions[scene]) return savedScenePositions[scene];

    // TOA A3: hai scene dac biet dung toa do do thu cong; moi scene_a3_* con lai dung chung anchors.a3.
    if (scene === "scene_a3_t3_2e" || scene === "scene_a3_t3_1i") {
      return MANUAL_SCENE_POSITIONS[scene] || anchors.a3;
    }
    if (scene.startsWith("scene_a3_")) return anchors.a3;

    // THU VIEN: tat ca scene_lib_* dung chung anchors.library.
    // Scene cua ngoai scene_gpbk2201_1773130534438 khong nam trong nhom nay nen van giu toa do rieng.
    if (scene.startsWith("scene_lib_")) return anchors.library;

    if (MANUAL_SCENE_POSITIONS[scene]) return MANUAL_SCENE_POSITIONS[scene];
    const configuredPosition = configuredLocationPosition(scene);
    if (configuredPosition) return configuredPosition;
    if (scene.startsWith("scene_cie_")) return anchors.cts;
    if (scene.startsWith("scene_fpt") || scene.startsWith("scene_viettel_") || scene.startsWith("scene_ss_")) return anchors.a2;
    if (scene.startsWith("scene_game_")) return anchors.a3;
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
    <button class="campus-minimap__drag" type="button" aria-label="Kéo để di chuyển bản đồ" title="Kéo để di chuyển bản đồ"></button>
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
  const dragHandle = minimap.querySelector(".campus-minimap__drag");
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
  let currentPosition = anchors.tranPhuRoad;
  let minimapScale = 1;

  // TOA DO CHAM DO: cap nhat truc tiep theo scene, khong chay qua duong mo phong.
  function setDotPosition(target) {
    if (!target) return;
    currentPosition = target;
    dot.style.left = `${target[0]}%`;
    dot.style.top = `${target[1]}%`;
  }

  // DEV ONLY: phần chỉnh tọa độ nằm riêng tại campus/dev/minimap-editor.js.
  if (MAP_COORDINATE_EDITOR) {
    window.PTITMinimapEditor?.attach({
      minimap,
      toggle,
      savedScenePositions,
      getCurrentScene: () => currentScene,
      positionFor,
      setDotPosition
    });
  }

  toggle.addEventListener("click", () => {
    const collapsed = minimap.classList.toggle("is-collapsed");
    toggle.innerHTML = collapsed ? expandIcon : collapseIcon;
    toggle.setAttribute("aria-label", collapsed ? "Mở bản đồ" : "Thu gọn bản đồ");
  });

  // DI CHUYEN MINIMAP: giu va keo tay nam mo o giua mep tren; khong cho khung ra ngoai man hinh.
  dragHandle.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    dragHandle.setPointerCapture(event.pointerId);
    minimap.classList.add("is-dragging");

    const startX = event.clientX;
    const startY = event.clientY;
    const startRect = minimap.getBoundingClientRect();
    const edgeGap = 6;

    const onMove = (moveEvent) => {
      const maxLeft = Math.max(edgeGap, window.innerWidth - startRect.width - edgeGap);
      const maxTop = Math.max(edgeGap, window.innerHeight - startRect.height - edgeGap);
      const nextLeft = Math.min(maxLeft, Math.max(edgeGap, startRect.left + moveEvent.clientX - startX));
      const nextTop = Math.min(maxTop, Math.max(edgeGap, startRect.top + moveEvent.clientY - startY));

      minimap.style.right = `${Math.max(edgeGap, window.innerWidth - nextLeft - startRect.width)}px`;
      minimap.style.bottom = `${Math.max(edgeGap, window.innerHeight - nextTop - startRect.height)}px`;
    };

    const onEnd = () => {
      minimap.classList.remove("is-dragging");
      dragHandle.removeEventListener("pointermove", onMove);
      dragHandle.removeEventListener("pointerup", onEnd);
      dragHandle.removeEventListener("pointercancel", onEnd);
    };

    dragHandle.addEventListener("pointermove", onMove);
    dragHandle.addEventListener("pointerup", onEnd);
    dragHandle.addEventListener("pointercancel", onEnd);
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
