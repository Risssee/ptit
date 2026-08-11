(function () {
  "use strict";

  const state = { mode: "campus", lastCampusScene: "scene_1" };

  /* CẤU HÌNH POPUP CÁC LAB */
  const LAB_INTROS = [
    {
      id: "cie",
      scenePrefixes: ["scene_cie_"],
      image: "/labs/cie/assets/Cie.jpg",
      audio: "/labs/cie/audio/guided/popUp.mp3?v=1",
      title: "CIE LAB",
      description: "Trung tâm Đào tạo Quốc tế (CIE) thuộc Học viện Công nghệ Bưu chính Viễn thông là trung tâm đào tạo toàn cầu, cung cấp các chương trình giáo dục chất lượng cao cho sinh viên. CIE cam kết phát triển các chương trình liên kết quốc tế, đào tạo các ngành như công nghệ thông tin, quản trị kinh doanh và giáo dục nghề nghiệp. Đồng thời CIE cũng tổ chức các hoạt động trao đổi sinh viên quốc tế và các lớp học quốc tế, tạo cơ hội cho sinh viên học tập và làm việc ở nước ngoài."
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
      image: "/labs/game/assets/gameLab.jpg",
      audio: "/labs/game/audio/guided/PopUp.mp3",
      title: "GAME LAB",
      description: "Phòng thực hành công nghệ game PTIT là phòng lab đào tạo và nghiên cứu phát triển game do Falcon Game Studio phối hợp cùng Học viện Công nghệ Bưu chính Viễn thông thành lập. Với sứ mệnh kiến tạo một môi trường thực chiến chuyên nghiệp ngay trong không gian học thuật, phòng lab mang đến cho sinh viên cơ hội trực tiếp tham gia vào quy trình sản xuất game chuẩn quốc tế, trải dài từ khâu lên ý tưởng, thiết kế đồ họa cho đến lập trình và tối ưu hóa sản phẩm. Dưới sự cố vấn và bảo trợ chuyên môn trực tiếp từ đội ngũ chuyên gia giàu kinh nghiệm của Falcon Game Studio, sinh viên không chỉ được mài giũa kiến thức chuyên ngành mà còn được trang bị những kỹ năng thực tiễn để đáp ứng các tiêu chuẩn khắt khe của thị trường. Qua đó, Falcon Game Lab PTIT tự hào đóng vai trò là một bệ phóng vững chắc, giúp rút ngắn khoảng cách giữa lý thuyết và thực tiễn, đồng thời mở ra những cơ hội nghề nghiệp vượt trội cho các tài năng trẻ đam mê theo đuổi sự nghiệp trong lĩnh vực công nghệ và giải trí số. "
    },
    {
      id: "viettel",
      scenes: ["scene_stgjnh_taafg8a2_githva"],
      scenePrefixes: ["scene_viettel_"],
      image: "/labs/Viettel/assets/Vt.jpg",
      audio: "/labs/Viettel/audio/guided/PopUp.mp3",
      title: "VIETTEL LAB",
      description: "Viettel Lab PTIT là không gian nghiên cứu và đào tạo công nghệ chuyên sâu, ra đời từ sự hợp tác chiến lược giữa Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) và Học viện Công nghệ Bưu chính Viễn thông. Phòng lab được định hướng trở thành một trung tâm R&D thu nhỏ, trang bị hệ thống cơ sở vật chất hiện đại nhằm phục vụ công tác nghiên cứu, thử nghiệm và phát triển các lĩnh vực công nghệ mũi nhọn như Viễn thông thế hệ mới, An toàn thông tin, Internet vạn vật và Trí tuệ nhân tạo. Tại đây, sinh viên có cơ hội áp dụng trực tiếp các kiến thức học thuật vào môi trường thực tiễn thông qua việc tham gia các dự án công nghệ cốt lõi dưới sự hướng dẫn, cố vấn chuyên môn từ đội ngũ chuyên gia, kỹ sư hàng đầu của Viettel. Viettel Lab PTIT không chỉ là bệ phóng giúp sinh viên nâng cao năng lực chuyên môn, rèn luyện tác phong làm việc chuyên nghiệp, kỷ luật mà còn là cầu nối quan trọng, mang đến cơ hội gia nhập mạng lưới nhân sự chất lượng cao của Viettel ngay sau khi tốt nghiệp. "
    },
    {
      id: "fpt",
      scenePrefixes: ["scene_fpt"],
      image: "/labs/fpt/assets/Fpt.jpg",
      audio: "/labs/fpt/audio/guided/PopUp.mp3",
      title: "FPT TELECOM LAB",
      description: "FPT Lab là trung tâm nghiên cứu, ứng dụng và đào tạo công nghệ cao, được thành lập dựa trên sự hợp tác chiến lược giữa Tập đoàn FPT và Học viện Công nghệ Bưu chính Viễn thông. Được định hướng hoạt động như một môi trường doanh nghiệp thu nhỏ, phòng lab tập trung vào việc nghiên cứu, phát triển phần mềm và ứng dụng các xu hướng công nghệ tiên tiến như Trí tuệ nhân tạo, Điện toán đám mây, Data và Internet vạn vật. Tại đây, sinh viên có cơ hội bước ra khỏi khuôn khổ lý thuyết truyền thống để trực tiếp tham gia vào các dự án công nghệ thực tế, trải nghiệm quy trình làm việc chuẩn quốc tế dưới sự dẫn dắt và cố vấn của các chuyên gia, kỹ sư cấp cao đến từ FPT. FPT Lab PTIT không chỉ là không gian ươm mầm tài năng, giúp sinh viên hoàn thiện năng lực chuyên môn lẫn kỹ năng làm việc thực chiến, mà còn là cầu nối vững chắc đưa nguồn nhân lực chất lượng cao của Học viện tiến gần hơn tới các cơ hội nghề nghiệp rộng mở tại hệ sinh thái công nghệ toàn cầu của FPT. "
    },
    {
      id: "samsung",
      scenes: ["scene_gpbk2388_1773819661170"],
      image: "/labs/samsung/assets/ss.png",
      audio: "/labs/samsung/audio/guided/PopUp.mp3",
      title: "SAMSUNG LAB",
      description: "Samsung Lab PTIT (thuộc mô hình hợp tác giữa Học viện và Trung tâm Nghiên cứu & Phát triển Samsung - SRV) là không gian nghiên cứu, đào tạo hiện đại được xây dựng nhằm nâng cao năng lực thực hành và tư duy công nghệ cho sinh viên Học viện Công nghệ Bưu chính Viễn thông. Được đầu tư trang thiết bị đồng bộ chuẩn quốc tế, phòng lab tập trung vào việc đào tạo chuyên sâu về thuật toán, tối ưu hóa phần mềm, lập trình ứng dụng di động cũng như cập nhật các xu hướng công nghệ mới. Thông qua các khóa học thực chiến, chương trình luyện thi thuật toán và sự đồng hành trực tiếp từ đội ngũ chuyên gia, kỹ sư cấp cao của Samsung, sinh viên được rèn luyện tác phong làm việc chuẩn doanh nghiệp và phát triển tư duy giải quyết vấn đề phức tạp."
    },
    {
      id: "library",
      scenes: ["scene_gpbk2201_1773130534438"],
      image: "/labs/Library/assets/Lib.jpg",
      audio: "/labs/Library/audio/guided/PopUp.mp3",
      title: "THƯ VIỆN PTIT",
      description: "Thư viện Học viện Công nghệ Bưu chính Viễn thông đóng vai trò cốt lõi trong việc cung cấp nguồn học liệu và hỗ trợ đắc lực cho hoạt động giảng dạy, học tập cũng như nghiên cứu khoa học. Nơi đây được đầu tư hệ thống cơ sở vật chất khang trang, hiện đại cùng không gian học thuật chuyên nghiệp, truyền cảm hứng, phù hợp cho cả việc tự nghiên cứu độc lập lẫn thảo luận nhóm. Bắt nhịp với xu hướng chuyển đổi số, thư viện sở hữu nguồn tài nguyên phong phú, từ hàng chục nghìn đầu sách giáo trình, tài liệu tham khảo chuyên sâu thuộc các lĩnh vực thế mạnh như Viễn thông, Công nghệ thông tin, Đa phương tiện, Kinh tế đến hệ thống thư viện điện tử tích hợp các cơ sở dữ liệu số trong nước và quốc tế. Không chỉ là nơi lưu trữ và chia sẻ tri thức, Thư viện PTIT còn là môi trường nuôi dưỡng văn hóa đọc, tạo lập thói quen tự học và cung cấp bệ phóng nền tảng vững chắc để sinh viên cũng như giảng viên không ngừng mở rộng tầm nhìn, nâng cao năng lực chuyên môn trong suốt quá trình gắn bó với Học viện. "
    }
  ];

  let activeLabId = null;
  let pendingLabIntroId = null;
  let visibleLabIntro = null;
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
    visibleLabIntro = intro;
    stopLabIntroAudio();
    const image = labIntro.querySelector(".integrated-lab-intro__image");
    image.src = intro.image;
    image.alt = `Hình ảnh giới thiệu ${intro.title}`;
    labIntro.querySelector("h2").textContent = intro.title;
    labIntro.querySelector("p").textContent = intro.description;
    labIntro.classList.add("is-open");

    if (intro.audio && (!window.ptitAudioAllowed || window.ptitAudioAllowed())) {
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

  // Popup chỉ mở khi ảnh scene đích đã tải và render xong.
  window.addEventListener("ptit:sceneready", (event) => {
    const sceneName = event.detail?.sceneName || "";
    const intro = findLabIntro(sceneName);
    if (!intro) {
      activeLabId = null;
      pendingLabIntroId = null;
      return;
    }
    if (activeLabId === intro.id && pendingLabIntroId !== intro.id) return;
    activeLabId = intro.id;
    pendingLabIntroId = null;
    showLabIntro(intro);
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

  function closeCieInfo() {
    cieInfo.classList.remove("is-open");
    cieInfoAudio.pause();
    cieInfoAudio.currentTime = 0;
  }

  function showCieStudentInfo() {
    cieInfo.classList.add("is-open");
    if (window.ptitAudioAllowed && !window.ptitAudioAllowed()) return;
    cieInfoAudio.currentTime = 0;
    cieInfoAudio.play().catch(() => {});
  }

  // Đồng bộ popup lab và audio phụ với nút loa toàn cục.
  window.addEventListener("ptit:audiochange", (event) => {
    const enabled = Boolean(event.detail?.enabled);
    if (!enabled) {
      stopLabIntroAudio();
      cieInfoAudio.pause();
      return;
    }
    if (labIntro.classList.contains("is-open") && visibleLabIntro?.audio) {
      showLabIntro(visibleLabIntro);
    }
    if (cieInfo.classList.contains("is-open")) {
      cieInfoAudio.play().catch(() => {});
    }
  });

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
    const inCie = scene.startsWith("scene_cie_");

    if (!inCie && scene) state.lastCampusScene = scene;
    state.mode = inCie ? "cie" : state.mode;
    document.body.classList.toggle("ptit-cie-mode", inCie || state.mode === "cie");
  }, 300);
})();
