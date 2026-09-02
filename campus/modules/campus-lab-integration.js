(function () {
  "use strict";

  const state = { mode: "campus", lastCampusScene: "scene_ct" };

  /* Popup đọc dữ liệu do từng labs/<lab>/lab-config.js đăng ký. */
  const LAB_INTROS = (window.PTIT_LAB_CONFIGS || [])
    .map((lab) => lab && lab.intro)
    .filter(Boolean);

  let activeLabId = null;
  let pendingLabIntroId = null;
  let visibleLabIntro = null;
  let lastReadyScene = "";
  let introAudio = null;
  let introAudioIsDucking = false;
  let cieInfoAudioIsDucking = false;
  let labIntroDelayTimer = null;

  const labIntro = document.createElement("div");
  labIntro.className = "integrated-lab-intro";
  labIntro.innerHTML = `
    <section class="integrated-lab-intro__card" role="dialog" aria-modal="true" aria-labelledby="integratedLabIntroTitle">
      <img class="integrated-lab-intro__image" src="" alt="">
      <div class="integrated-lab-intro__copy">
        <button class="integrated-lab-intro__close" type="button" aria-label="Đóng">×</button>
        <h2 id="integratedLabIntroTitle"></h2>
        <p></p>
      </div>
    </section>`;
  document.body.appendChild(labIntro);

  function findLabIntro(sceneName) {
    const name = String(sceneName || "");
    return LAB_INTROS.find((intro) =>
      intro.scenes?.includes(name) || intro.scenePrefixes?.some((prefix) => name.startsWith(prefix))
    ) || null;
  }

  function findLabContextIntro(sceneName) {
    const name = String(sceneName || "");
    return findLabIntro(name) || LAB_INTROS.find((intro) =>
      intro.internalScenePrefixes?.some((prefix) => name.startsWith(prefix))
    ) || null;
  }

  function stopLabIntroAudio() {
    if (introAudio) {
      introAudio.pause();
      introAudio.currentTime = 0;
      introAudio = null;
    }
    if (introAudioIsDucking) {
      introAudioIsDucking = false;
      window.dispatchEvent(new CustomEvent("ptit:narrationend"));
    }
  }

  function closeLabIntro() {
    clearTimeout(labIntroDelayTimer);
    labIntroDelayTimer = null;
    labIntro.classList.remove("is-open");
    stopLabIntroAudio();
  }

  function showLabIntro(intro) {
    if (!intro) return;
    visibleLabIntro = intro;
    stopLabIntroAudio();
    const image = labIntro.querySelector(".integrated-lab-intro__image");
    image.src = intro.image;
    image.alt = `Hình ảnh giới thiệu ${intro.title}`;
    labIntro.querySelector("h2").textContent = intro.title;
    labIntro.querySelector("p").textContent = intro.description;
    labIntro.classList.add("is-open");

    if (intro.audio && (!window.ptitAudioAllowed || window.ptitAudioAllowed())) {
      window.dispatchEvent(new CustomEvent("ptit:audiofocus", { detail: { source: "lab-intro" } }));
      const audio = new Audio(intro.audio);
      introAudio = audio;
      audio.addEventListener("ended", stopLabIntroAudio, { once: true });
      audio.play().then(() => {
        if (introAudio !== audio) return;
        introAudioIsDucking = true;
        window.dispatchEvent(new CustomEvent("ptit:narrationstart"));
      }).catch(() => { if (introAudio === audio) introAudio = null; });
    }
  }

  labIntro.querySelector(".integrated-lab-intro__close").addEventListener("click", closeLabIntro);
  labIntro.addEventListener("click", (event) => {
    if (event.target === labIntro) closeLabIntro();
  });

  window.ptitOpenLabIntroForScene = (sceneName, navigate) => {
    const intro = findLabIntro(sceneName);
    if (!intro) return false;
    pendingLabIntroId = intro.id;
    navigate();
    return true;
  };

  // MO LAI POPUP LAB: dung chung anh, noi dung va audio dang cau hinh trong LAB_INTROS.
  window.ptitHasLabIntroForScene = (sceneName) => Boolean(findLabContextIntro(sceneName));
  window.ptitReopenCurrentLabIntro = () => {
    const sceneName = getKrpano()?.get("xml.scene") || "";
    const intro = findLabContextIntro(sceneName);
    if (!intro) return false;
    activeLabId = intro.id;
    showLabIntro(intro);
    return true;
  };

  // Popup chỉ mở khi ảnh scene đích đã tải và render xong.
  window.addEventListener("ptit:sceneready", (event) => {
    const sceneName = event.detail?.sceneName || "";
    clearTimeout(labIntroDelayTimer);
    labIntroDelayTimer = null;
    const previousScene = lastReadyScene;
    lastReadyScene = sceneName;
    const intro = findLabIntro(sceneName);
    if (!intro) {
      activeLabId = null;
      pendingLabIntroId = null;
      return;
    }

    // Di tu ben trong lab ra scene cua: khong tu dong mo lai popup gioi thieu.
    const isLeavingThisLab = intro.internalScenePrefixes?.some((prefix) => previousScene.startsWith(prefix));
    if (isLeavingThisLab && pendingLabIntroId !== intro.id) {
      activeLabId = intro.id;
      pendingLabIntroId = null;
      return;
    }
    if (activeLabId === intro.id && pendingLabIntroId !== intro.id) return;
    activeLabId = intro.id;
    pendingLabIntroId = null;
    // Scene da hien xong; doi them 1 giay de nguoi dung thay ro khong gian lab.
    labIntroDelayTimer = window.setTimeout(() => {
      labIntroDelayTimer = null;
      if (getKrpano()?.get("xml.scene") !== sceneName) return;
      showLabIntro(intro);
    }, 1000);
  });

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

  function stopCieInfoAudio() {
    cieInfoAudio.pause();
    cieInfoAudio.currentTime = 0;
    if (cieInfoAudioIsDucking) {
      cieInfoAudioIsDucking = false;
      window.dispatchEvent(new CustomEvent("ptit:narrationend"));
    }
  }

  function closeCieInfo() {
    cieInfo.classList.remove("is-open");
    stopCieInfoAudio();
  }

  function showCieStudentInfo() {
    cieInfo.classList.add("is-open");
    if (window.ptitAudioAllowed && !window.ptitAudioAllowed()) return;
    window.dispatchEvent(new CustomEvent("ptit:audiofocus", { detail: { source: "cie-info" } }));
    cieInfoAudio.currentTime = 0;
    cieInfoAudio.play().then(() => {
      cieInfoAudioIsDucking = true;
      window.dispatchEvent(new CustomEvent("ptit:narrationstart"));
    }).catch(() => {});
  }

  cieInfoAudio.addEventListener("ended", stopCieInfoAudio);

  // Popup lab va audio phu tu dong nhuong quyen cho nguon thuyet minh moi.
  window.addEventListener("ptit:audiofocus", (event) => {
    if (event.detail?.source !== "lab-intro") stopLabIntroAudio();
    if (event.detail?.source !== "cie-info") stopCieInfoAudio();
  });

  // Đồng bộ popup lab và audio phụ với nút loa toàn cục.
  window.addEventListener("ptit:audiochange", (event) => {
    const enabled = Boolean(event.detail?.enabled);
    if (!enabled) {
      stopLabIntroAudio();
      stopCieInfoAudio();
      return;
    }
    if (labIntro.classList.contains("is-open") && visibleLabIntro?.audio) {
      showLabIntro(visibleLabIntro);
    }
    if (cieInfo.classList.contains("is-open")) {
      showCieStudentInfo();
    }
  });

  function getKrpano() {
    return window.ptitKrpano || null;
  }

  function enterCie() {
    const instance = getKrpano();
    if (!instance || state.mode === "cie") return;
    const current = instance.get("xml.scene") || "scene_ct";
    if (!current.startsWith("scene_cie_")) state.lastCampusScene = current;
    sessionStorage.setItem("ptit-campus-return-scene", state.lastCampusScene);
    state.mode = "cie";
    document.body.classList.add("ptit-cie-mode");
    instance.call("skin_loadscene(scene_cie_cuatruoc,get(skin_settings.loadscene_blend));");
  }

  function returnToCampus() {
    const instance = getKrpano();
    if (!instance) return;
    const returnScene = sessionStorage.getItem("ptit-campus-return-scene") || state.lastCampusScene || "scene_ct";
    state.mode = "campus";
    document.body.classList.remove("ptit-cie-mode");
    instance.call(`skin_loadscene(${returnScene},get(skin_settings.loadscene_blend));`);
  }

  window.ptitEnterCieTour = enterCie;
  window.ptitReturnToCampusTour = returnToCampus;
  window.showCieStudentInfo = showCieStudentInfo;
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
