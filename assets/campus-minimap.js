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
    return anchors.gate;
  }

  // Đường mô phỏng từ cổng đến từng tòa; chấm đỏ đi lần lượt qua các điểm này.
  function pathFromGate(target) {
    if (target === anchors.a1 || target === anchors.cts) {
      return [[58.5,83], [58,77], [52,69], target];
    }
    if (target === anchors.a2) {
      return [[58.5,83], [62,76], [66,69], [66,57], target];
    }
    if (target === anchors.a3) {
      return [[58.5,83], [58,69], [49,59], [49,35], [49,17], [57,12], target];
    }
    return [target];
  }

  function routeFor(target) {
    const anchorValues = Object.values(anchors);
    const startsAtBuilding = anchorValues.includes(currentPosition) && currentPosition !== anchors.gate;
    const reverseCurrentPath = startsAtBuilding ? pathFromGate(currentPosition).slice().reverse() : [];

    if (target === anchors.gate) return [...reverseCurrentPath, anchors.gate];
    if (startsAtBuilding && target !== currentPosition) {
      return [...reverseCurrentPath, anchors.gate, ...pathFromGate(target)];
    }
    return pathFromGate(target);
  }

  const minimap = document.createElement("aside");
  minimap.className = "campus-minimap";
  minimap.setAttribute("aria-label", "Bản đồ thu nhỏ khuôn viên PTIT");
  minimap.innerHTML = `
    <div class="campus-minimap__head">
      <strong>Bản đồ PTIT</strong>
      <span class="campus-minimap__scene">Đang xác định vị trí…</span>
      <button class="campus-minimap__toggle" type="button" aria-label="Thu gọn bản đồ">−</button>
    </div>
    <div class="campus-minimap__map">
      <span class="campus-minimap__position" title="Vị trí hiện tại"></span>
    </div>`;
  document.body.appendChild(minimap);

  const dot = minimap.querySelector(".campus-minimap__position");
  const sceneLabel = minimap.querySelector(".campus-minimap__scene");
  const toggle = minimap.querySelector(".campus-minimap__toggle");
  let currentScene = "";
  let currentPosition = anchors.gate;
  let movementToken = 0;

  function moveDot(target) {
    if (target === currentPosition) return;
    const token = ++movementToken;
    const points = routeFor(target);
    points.forEach(([x, y], index) => {
      window.setTimeout(() => {
        if (token !== movementToken) return;
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        if (index === points.length - 1) currentPosition = target;
      }, index * 620);
    });
  }

  toggle.addEventListener("click", () => {
    const collapsed = minimap.classList.toggle("is-collapsed");
    toggle.textContent = collapsed ? "+" : "−";
    toggle.setAttribute("aria-label", collapsed ? "Mở bản đồ" : "Thu gọn bản đồ");
  });

  window.setInterval(() => {
    const instance = window.ptitKrpano;
    if (!instance) return;
    const scene = instance.get("xml.scene") || "";
    if (!scene || scene === currentScene) return;
    currentScene = scene;
    moveDot(positionFor(scene));
    const sceneTitle = instance.get(`scene[${scene}].title`) || scene.replace(/^scene_/, "");
    sceneLabel.textContent = sceneTitle;
  }, 300);
})();
