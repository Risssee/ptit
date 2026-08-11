(function () {
  "use strict";

  // ================================================================
  // CHINH THU CONG CHAM DO TAI DAY
  // Moi scene co dang: scene_name: [X_PHAN_TRAM, Y_PHAN_TRAM].
  // X tang tu trai sang phai, Y tang tu tren xuong duoi.
  // Mo URL voi &mapedit=1, vao scene can sua va click len ban do;
  // Console se in san mot dong toa do de copy vao MANUAL_SCENE_POSITIONS.
  // ================================================================
  const MAP_COORDINATE_EDITOR = new URLSearchParams(window.location.search).get("mapedit") === "1";
  const MAP_COORDINATE_STORAGE_KEY = "ptit:minimap:scene-positions:v1";

  function readSavedScenePositions() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(MAP_COORDINATE_STORAGE_KEY) || "{}");
      return saved && typeof saved === "object" ? saved : {};
    } catch (_) {
      return {};
    }
  }

  const savedScenePositions = readSavedScenePositions();

  const outdoorRoute = [
    [58.5,88],[58.5,83],[58,78],[56,73],[52,69],
    [49,65],[49,59],[49,53],[49,47],[49,41],
    [49,35],[49,29],[49,23],[49,17],[49,11],
    [53,8],[58,8],[63,8],[66,12],[66,20],
    [66,28],[66,36],[66,44],[66,52],[66,60]
  ];

  const anchors = {
    tranPhuRoad: [58.5,94], gate: [58.5,92], a1: [43.5,74], a2: [66,45], a3: [66,12],
    library: [31,18], garden: [49,35], canteen: [49,22],
    basketball: [31,69], volleyball: [31,42], cts: [43.5,74]
  };

  const MANUAL_SCENE_POSITIONS = {
    // TOA DO DA CAN THU CONG TREN MAP - du lieu nay duoc deploy, khong phu thuoc localStorage.
    scene_1: [59.29, 94.65],
    scene_2: [59.42, 90.46],
    scene_4: [59.31, 88.62],
    scene_5: [59.35, 86.72],
    scene_gpbk2217_1773131018070: [52.16, 86.62],
    scene_gpbk2218_1773131077123: [43.15, 87.72],
    scene_gpbk2219_1773131109033: [43.46, 84.44],
    scene_gpbk2220_1773131152191: [43.45, 78.63],
    scene_gpbk2221_1773131188097: [47.33, 78.72],
    scene_gpbk2222_1773131201563: [52.62, 78.72],
    scene_7: [56.84, 78.72],
    scene_8: [55.79, 71.82],
    scene_9: [58.96, 69.31],
    scene_10: [66.78, 69.58],
    scene_11: [81.5, 66.17],
    scene_12: [87.13, 56.13],
    scene_17: [86.43, 51.74],
    scene_18: [83.1, 31.68],
    scene_19: [83.61, 26.65],
    scene_20: [74.1, 26.65],
    scene_21: [75.86, 28.53],
    scene_22: [76.92, 30.41],
    scene_23: [68.62, 27.47],
    scene_24: [65.01, 28],
    scene_25: [57.03, 28.53],
    scene_13: [86.64, 70.63],
    scene_14: [85.17, 84.84],
    scene_15: [79.85, 83.26],
    scene_gpbk2201_1773130534438: [72.69, 24.77],
    scene_gpbk2200_1773130524459: [70.58, 24.77],
    scene_gpbk2199_1773130499270: [68.82, 24.14],
    scene_gpbk2195_1773130397237: [64.59, 24.14],
    scene_gpbk2196_1773130435030: [65.65, 16.61],
    scene_gpbk2208_1773130810995: [64.94, 40.45],
    scene_gpbk2209_1773130847752: [59.31, 53],
    scene_gpbk2243_1773200339308: [67.08, 63.26],
    scene_gpbk2242_1773200327351: [66.78, 59.05],
    scene_gpbk2388_1773819661170: [78.01, 58.53],
    scene_gpbk2389_1773819679330: [77.72, 48.53],
    scene_gpbk2384_1773819444399: [78.9, 38],
    scene_gpbk2241_1773200304639: [72.99, 39.05],
    scene_gpbk2239_1773200249760: [72.4, 44.32],
    scene_gpbk2240_1773200283917: [69.74, 50.63],
    scene_gpbk2386_1773819489144: [60.58, 58],
    scene_gpbk2387_1773819536686: [61.17, 46.95],
    scene_gpbk2244_1773200362117: [59.1, 53.26],
    scene_gpbk2245_1773200385434: [54.96, 47.47],
    scene_gpbk2246_1773200419767: [60.58, 48.53],
    scene_gpbk2248_1773200462872: [58.51, 58],
    scene_gpbk2249_1773200480632: [58.51, 61.68],
    scene_gpbk2250_1773200504692: [53.25, 71.68],
    scene_gpbk2251_1773200519286: [51.42, 70.11],
    scene_gpbk2252_1773200546003: [46.39, 71.16],
    scene_gpbk2253_1773200582544: [41.96, 71.68],
    scene_gpbk2254_1773200608225: [37.23, 71.68],
    scene_gpbk2255_1773200617042: [38.42, 69.58],
    scene_gpbk2256_1773200625993: [50.53, 65.37],
    scene_gpbk2257_1773200668780: [50.53, 60.63],
    scene_gpbk2258_1773200722125: [47.28, 54.84],
    scene_gpbk2259_1773200765441: [43.5, 49.58],
    scene_gpbk2264_1773200877546: [41.96, 33.79],
    scene_gpbk2265_1773200896352: [42.26, 23.79],
    scene_gpbk2272_1773201146632: [41.37, 17.47],
    scene_gpbk2273_1773201153843: [41.08, 14.84],
    scene_gpbk2274_1773201178058: [41.37, 12.21],
    scene_gpbk2267_1773200954805: [32.51, 36.95],
    scene_gpbk2266_1773200947561: [22.75, 38],
    scene_gpbk2268_1773200989212: [39.6, 22.74],
    scene_gpbk2269_1773201067744: [31.03, 23.26],
    scene_gpbk2281_1773201322312: [47.87, 34.32],
    scene_gpbk2282_1773201339253: [49.05, 27.47],
    scene_gpbk2283_1773201346417: [48.46, 20.63],
    scene_gpbk2284_1773201364343: [48.76, 20.11],
    scene_gpbk2285_1773201384046: [52.01, 20.63],
    scene_gpbk2280_1773201309839: [51.42, 33.79],
    scene_gpbk2287_1773201421340: [54.73, 35.37],
    scene_gpbk2260_1773200808324: [37.88, 52.74],
    scene_gpbk2261_1773200833764: [31.09, 52.74],
    scene_gpbk2263_1773200851067: [26.95, 47.47],
    scene_gpbk2286_1773201396711: [48.82, 42.21],
    scene_lib_1f: [75.12, 18],
    scene_gpbk2235_1773200094715: [65.37, 16.42],
    scene_ttgnng3_a3_nthri_qua_a2jpg: [64.18, 14.84],
    scene_gpbk0065_1773206564173: [81.62, 39.05],

    // Cac scene chua do tay van dung moc dai dien cua khu vuc.
    scene_gpbk2226_1773131353550: anchors.a1,
    scene_gpbk2224_1773131289876: anchors.a1,
    scene_gpbk0066_1773206449967: anchors.a2,
    scene_gpbk2237_1773200161431: anchors.a3,
    scene_gpbk2202_1773130555661: anchors.library,
    scene_gpbk2270_1773201080635: anchors.cts
  };

  function positionFor(scene) {
    // Diem can bang cong cu developer duoc uu tien hon cau hinh trong code.
    if (savedScenePositions[scene]) return savedScenePositions[scene];
    // Toa do khai bao thu cong luon duoc uu tien cao nhat.
    if (MANUAL_SCENE_POSITIONS[scene]) return MANUAL_SCENE_POSITIONS[scene];
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
  let currentPosition = anchors.tranPhuRoad;
  let minimapScale = 1;

  // TOA DO CHAM DO: cap nhat truc tiep theo scene, khong chay qua duong mo phong.
  function setDotPosition(target) {
    if (!target) return;
    currentPosition = target;
    dot.style.left = `${target[0]}%`;
    dot.style.top = `${target[1]}%`;
  }

  // CONG CU CAN MAP THU CONG: chi hoat dong khi MAP_COORDINATE_EDITOR = true.
  if (MAP_COORDINATE_EDITOR) {
    minimap.classList.add("is-coordinate-editing");
    const editHistory = [];
    const editorActions = document.createElement("div");
    editorActions.className = "campus-minimap__editor-actions";
    editorActions.innerHTML = `
      <button type="button" data-map-action="undo" title="Hoàn tác lần đặt điểm gần nhất">Hoàn tác</button>
      <button type="button" data-map-action="delete" title="Xóa tọa độ đã lưu của scene hiện tại">Xóa điểm</button>`;
    minimap.querySelector(".campus-minimap__head").insertBefore(editorActions, toggle);

    const savePositions = () => {
      window.localStorage.setItem(MAP_COORDINATE_STORAGE_KEY, JSON.stringify(savedScenePositions));
    };

    const restoreHistoryEntry = (entry) => {
      if (!entry) return;
      if (entry.previous) savedScenePositions[entry.scene] = entry.previous;
      else delete savedScenePositions[entry.scene];
      savePositions();
      if (entry.scene === currentScene) setDotPosition(positionFor(currentScene));
      console.log(`[MINIMAP] Đã hoàn tác ${entry.scene}`);
    };

    minimap.querySelector(".campus-minimap__map").addEventListener("click", (event) => {
      const mapRect = event.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((event.clientX - mapRect.left) / mapRect.width) * 100));
      const y = Math.max(0, Math.min(100, ((event.clientY - mapRect.top) / mapRect.height) * 100));
      const sceneName = (window.ptitKrpano && window.ptitKrpano.get("xml.scene")) || currentScene;
      const target = [Number(x.toFixed(2)), Number(y.toFixed(2))];
      const previous = savedScenePositions[sceneName] ? [...savedScenePositions[sceneName]] : null;
      editHistory.push({ scene: sceneName, previous });
      savedScenePositions[sceneName] = target;
      savePositions();
      setDotPosition(target);
      console.log(`[MINIMAP] ${sceneName}: [${target[0]}, ${target[1]}],`);
    });

    editorActions.addEventListener("click", (event) => {
      const action = event.target.closest("button")?.dataset.mapAction;
      if (action === "undo") {
        restoreHistoryEntry(editHistory.pop());
        return;
      }
      if (action === "delete") {
        const sceneName = (window.ptitKrpano && window.ptitKrpano.get("xml.scene")) || currentScene;
        const previous = savedScenePositions[sceneName] ? [...savedScenePositions[sceneName]] : null;
        if (!previous) return;
        editHistory.push({ scene: sceneName, previous });
        delete savedScenePositions[sceneName];
        savePositions();
        setDotPosition(positionFor(sceneName));
        console.log(`[MINIMAP] Đã xóa tọa độ đã lưu của ${sceneName}`);
      }
    });

    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        restoreHistoryEntry(editHistory.pop());
      }
    });
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
