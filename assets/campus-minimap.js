(function () {
  "use strict";

  const outdoorRoute = [
    [39,82],[43,77],[47,72],[51,67],[55,63],
    [57,57],[55,51],[51,47],[48,42],[54,38],
    [61,35],[67,34],[72,37],[76,42],[73,48],
    [68,52],[62,55],[57,59],[52,62],[47,59],
    [43,55],[39,50],[36,45],[40,39],[45,34]
  ];

  const anchors = {
    gate: [39,82], a1: [57,58], a2: [67,37], a3: [57,24],
    library: [42,42], garden: [50,49], canteen: [74,31],
    basketball: [38,59], volleyball: [42,31], cts: [36,60]
  };

  const knownScenes = {
    scene_gpbk2218_1773131077123: anchors.a1,
    scene_gpbk2226_1773131353550: anchors.a1,
    scene_gpbk2224_1773131289876: anchors.a1,
    scene_gpbk0065_1773206564173: anchors.a2,
    scene_gpbk0066_1773206449967: anchors.a2,
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
      <a class="campus-minimap__lab" data-lab="cie" style="left:34.5%;top:56.5%" href="../campus/tour.html?startscene=scene_cie_cuatruoc" aria-label="Trung tâm CIE"><span>C</span></a>
      <a class="campus-minimap__lab" style="left:55%;top:42.5%" href="../labs/fpt/tour.html" aria-label="Phòng lab FPT"><span>F</span></a>
      <a class="campus-minimap__lab" style="left:43%;top:29%" href="../labs/game/tour.html" aria-label="PTIT Game Lab"><span>G</span></a>
    </div>`;
  document.body.appendChild(minimap);

  const dot = minimap.querySelector(".campus-minimap__position");
  const sceneLabel = minimap.querySelector(".campus-minimap__scene");
  const toggle = minimap.querySelector(".campus-minimap__toggle");
  let currentScene = "";

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
    const [x, y] = positionFor(scene);
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    const sceneTitle = instance.get(`scene[${scene}].title`) || scene.replace(/^scene_/, "");
    sceneLabel.textContent = sceneTitle;
  }, 300);
})();
