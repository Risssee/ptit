(function () {
  "use strict";

  const state = { mode: "campus", lastCampusScene: "scene_1" };

  /* CẤU HÌNH POPUP CÁC LAB: sửa ảnh, audio, tiêu đề và nội dung tại đây. */
  const LAB_INTROS = [
    {
      id: "cie",
      scenePrefixes: ["scene_cie_"],
      image: "/labs/cie/assets/student-management.jpg",
      audio: "/labs/cie/audio/guided/01-cie-welcome.mp3",
      title: "CIE LAB",
      description: "CIE là không gian học tập, nghiên cứu và trải nghiệm công nghệ hiện đại dành cho sinh viên."
    },
    {
      id: "cts",
      scenes: ["scene_gpbk2270_1773201080635", "scene_gpbk2271_1773201137016"],
      image: "/campus/panos/GPBK2270_1773201080635.tiles/thumb.jpg",
      audio: "",
      title: "CTS LAB",
      description: "CTS Lab là không gian nghiên cứu Công nghệ Sáng tạo, mô phỏng, đồ họa 3D, VR/AR và AI."
    },
    {
      id: "game",
      scenePrefixes: ["scene_game_"],
      image: "/labs/game/assets/computer-practice-area.jpg",
      audio: "/labs/game/audio/guided/01-game-welcome.mp3",
      title: "GAME LAB",
      description: "Game Lab phục vụ học tập, nghiên cứu và phát triển trò chơi với hệ thống máy tính cấu hình cao."
    },
    {
      id: "viettel",
      scenePrefixes: ["scene_viettel_"],
      image: "/labs/Viettel/assets/infoports/viettel-server-systems.jpg",
      audio: "/labs/Viettel/audio/guided/01-welcome.mp3",
      title: "VIETTEL LAB",
      description: "Viettel Lab là không gian thực hành công nghệ viễn thông, hệ thống mạng và hạ tầng máy chủ."
    },
    {
      id: "fpt",
      scenePrefixes: ["scene_fpt"],
      image: "/labs/fpt/assets/fpt-odn-equipment.jpeg",
      audio: "/labs/fpt/audio/guided/01-welcome.mp3",
      title: "FPT TELECOM LAB",
      description: "FPT Telecom Lab hỗ trợ đào tạo và thực hành mạng viễn thông, thiết bị ODN và phối cáp ngoại vi."
    },
    {
      id: "samsung",
      scenes: ["scene_gpbk2388_1773819661170"],
      image: "/labs/samsung/assets/infoports/samsung-computer-lab.jpg",
      audio: "/labs/samsung/audio/guided/01-samsung-welcome.mp3",
      title: "SAMSUNG LAB",
      description: "Samsung Lab cung cấp môi trường thực hành lập trình và phát triển ứng dụng trên hệ thống máy tính hiện đại."
    }
  ];

  let activeLabId = null;
  let introAudio = null;
  let introAudioIsDucking = false;

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
    labIntro.classList.remove("is-open");
    stopLabIntroAudio();
  }

  function showLabIntro(intro) {
    if (!intro) return;
    stopLabIntroAudio();
    const image = labIntro.querySelector(".integrated-lab-intro__image");
    image.src = intro.image;
    image.alt = `Hình ảnh giới thiệu ${intro.title}`;
    labIntro.querySelector("h2").textContent = intro.title;
    labIntro.querySelector("p").textContent = intro.description;
    labIntro.classList.add("is-open");

    if (intro.audio) {
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
    navigate();
    activeLabId = intro.id;
    showLabIntro(intro);
    return true;
  };

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
    const currentLab = findLabIntro(scene);
    const inCie = scene.startsWith("scene_cie_");

    // Hotspot tu dieu huong; JavaScript chi mo popup khi vua di vao mot lab moi.
    if (currentLab && activeLabId !== currentLab.id) {
      activeLabId = currentLab.id;
      showLabIntro(currentLab);
    }
    if (!currentLab) activeLabId = null;

    if (!inCie && scene) state.lastCampusScene = scene;
    state.mode = inCie ? "cie" : state.mode;
    document.body.classList.toggle("ptit-cie-mode", inCie || state.mode === "cie");
  }, 300);
})();
