(function () {
  "use strict";

  const state = { mode: "campus", lastCampusScene: "scene_1" };
  const switcher = document.createElement("div");
  switcher.className = "campus-lab-switcher";
  switcher.innerHTML = `
    <div><strong>Trung tâm CIE</strong><br><span>Đang tham quan bên trong phòng lab</span></div>
    <button type="button">← Quay lại khuôn viên</button>`;
  document.body.appendChild(switcher);

  const cieInfo = document.createElement("div");
  cieInfo.className = "integrated-cie-info";
  cieInfo.innerHTML = `
    <section class="integrated-cie-info__card" role="dialog" aria-modal="true" aria-labelledby="integratedCieInfoTitle">
      <button class="integrated-cie-info__close" type="button" aria-label="Đóng">×</button>
      <img src="/labs/cie/assets/student-management.jpg" alt="Bộ phận Quản lý lưu học sinh">
      <div class="integrated-cie-info__copy">
        <h2 id="integratedCieInfoTitle">Bộ phận Quản lý lưu học sinh</h2>
        <p>Đầu mối hỗ trợ, quản lý và cung cấp thông tin dành cho lưu học sinh đang học tập tại Học viện.</p>
      </div>
    </section>`;
  document.body.appendChild(cieInfo);
  const cieInfoAudio = new Audio("/labs/cie/audio/student-management.mp3");

  function closeCieInfo() {
    cieInfo.classList.remove("is-open");
    cieInfoAudio.pause();
    cieInfoAudio.currentTime = 0;
  }

  function showCieStudentInfo() {
    cieInfo.classList.add("is-open");
    cieInfoAudio.currentTime = 0;
    cieInfoAudio.play().catch(() => {});
  }

  function getKrpano() {
    return window.ptitKrpano || null;
  }

  function enterCie() {
    const instance = getKrpano();
    if (!instance || state.mode === "cie") return;
    const current = instance.get("xml.scene") || "scene_1";
    if (!current.startsWith("scene_cie_")) state.lastCampusScene = current;
    sessionStorage.setItem("ptit-campus-return-scene", state.lastCampusScene);
    state.mode = "cie";
    document.body.classList.add("ptit-cie-mode");
    instance.call("skin_loadscene(scene_cie_cuatruoc,get(skin_settings.loadscene_blend));");
  }

  function returnToCampus() {
    const instance = getKrpano();
    if (!instance) return;
    const returnScene = sessionStorage.getItem("ptit-campus-return-scene") || state.lastCampusScene || "scene_1";
    state.mode = "campus";
    document.body.classList.remove("ptit-cie-mode");
    instance.call(`skin_loadscene(${returnScene},get(skin_settings.loadscene_blend));`);
  }

  window.ptitEnterCieTour = enterCie;
  window.ptitReturnToCampusTour = returnToCampus;
  window.showCieStudentInfo = showCieStudentInfo;
  switcher.querySelector("button").addEventListener("click", returnToCampus);
  cieInfo.querySelector(".integrated-cie-info__close").addEventListener("click", closeCieInfo);
  cieInfo.addEventListener("click", (event) => { if (event.target === cieInfo) closeCieInfo(); });

  document.addEventListener("click", (event) => {
    const cieLink = event.target.closest(".campus-minimap__lab[data-lab='cie']");
    if (!cieLink) return;
    event.preventDefault();
    enterCie();
  });

  window.setInterval(() => {
    const instance = getKrpano();
    if (!instance) return;
    const scene = instance.get("xml.scene") || "";
    const inCie = scene.startsWith("scene_cie_");
    if (!inCie && scene) state.lastCampusScene = scene;
    state.mode = inCie ? "cie" : state.mode;
    document.body.classList.toggle("ptit-cie-mode", inCie || state.mode === "cie");
  }, 300);
})();
