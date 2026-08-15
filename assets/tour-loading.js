(() => {
  const root = document.querySelector("#loading");
  if (!root) return;

  const bar = root.querySelector(".loading-bar");
  const percent = root.querySelector(".loading-percent");
  const title = root.querySelector(".loading-title");
  const factText = root.querySelector(".campus-loading__fact p");

  // FACT PTIT TRÊN LOADING SCREEN: chỉnh nội dung hoặc thêm/bớt fact tại mảng này.
  const ptitFacts = [
    "Học viện Công nghệ Bưu chính Viễn thông là trường đại học trực thuộc Bộ Thông tin và Truyền thông, đóng vai trò chủ chốt trong việc cung cấp nguồn nhân lực chất lượng cao cho ngành ICT của nước nhà.",
    "Học viện Công nghệ Bưu chính Viễn thông được chính thức thành lập vào năm 1997 trên cơ sở hợp nhất 4 đơn vị cốt lõi: Viện Khoa học Kỹ thuật Bưu điện, Viện Kinh tế Bưu điện, Trung tâm Đào tạo Bưu điện I và Trung tâm Đào tạo Bưu điện II.",
    "PTIT là một trong những trường đại học tiên phong tại Việt Nam áp dụng thành công mô hình gắn kết chặt chẽ giữa ba lĩnh vực: Đào tạo - Nghiên cứu khoa học - Sản xuất kinh doanh.",
    "Để đáp ứng công cuộc chuyển đổi số quốc gia, Học viện đã đi đầu trong việc mở các ngành học đón đầu xu hướng toàn cầu như: Trí tuệ nhân tạo, Công nghệ Tài chính, Khoa học Dữ liệu và Báo chí số.",
    "Học viện Công nghệ Bưu chính Viễn thông sở hữu mạng lưới đối tác quốc tế rộng lớn, cung cấp nhiều chương trình liên kết đào tạo quốc tế với các trường đại học uy tín tại Mỹ, Anh, Nhật Bản, New Zealand.",
    "Học viện Công nghệ Bưu chính Viễn thông liên tục duy trì vị thế nằm trong top đầu các trường đại học tại Việt Nam có điểm chuẩn đầu vào khối ngành Công nghệ thông tin, An toàn thông tin và Viễn thông cao nhất cả nước.",
    "Học viện Công nghệ Bưu chính Viễn thông là một trong 8 cơ sở giáo dục đại học được Chính phủ phê duyệt làm cơ sở đào tạo trọng điểm quốc gia về An toàn thông tin, đảm nhận vai trò cốt lõi trong việc cung cấp nhân lực bảo mật cho đất nước.",
    "Cấu trúc chương trình đào tạo kỹ thuật của Học viện Công nghệ Bưu chính Viễn thông được xây dựng và chuẩn hóa theo chuẩn quốc tế CDIO, nhấn mạnh vào năng lực nghiên cứu, thiết kế và vận hành hệ thống.",
    "Viện Công nghệ Thông tin và Truyền thông - CDIT trực thuộc Học viện Công nghệ Bưu chính Viễn thông là một đơn vị nghiên cứu mũi nhọn, trực tiếp tham gia nghiên cứu, phát triển và chuyển giao các sản phẩm công nghệ made in Vietnam.",
    "Học viện Công nghệ Bưu chính Viễn thông sở hữu hệ thống các phòng thí nghiệm chuyên đề tiên tiến phục vụ nghiên cứu học thuật, điển hình như các lab về vi mạch bán dẫn, trí tuệ nhân tạo, IoT và công nghệ vô tuyến 5G/6G."
  ];
  if (factText && ptitFacts.length) {
    factText.textContent = ptitFacts[Math.floor(Math.random() * ptitFacts.length)];
  }
  const defaultTitle = title?.textContent || "Đang tải không gian 360";
  const waitForRealLoad = root.dataset.waitForLoad === "true";
  const initialOnly = root.dataset.initialOnly === "true";
  const minimumDuration = Math.max(0, Number(root.dataset.minimumDuration) || 0);
  const initialStartedAt = performance.now();
  let value = 0;
  let hasCompletedOnce = false;
  let initialFinished = false;
  let completionScheduled = false;
  let completionTimer = 0;
  let previewTimer = 0;
  let progressTimer = 0;
  let krpanoInstance = null;
  let manifest = null;

  function render(nextValue) {
    value = Math.max(value, Math.min(100, Math.round(nextValue)));
    if (bar) bar.style.width = `${value}%`;
    if (percent) percent.textContent = `${value}%`;
    root.setAttribute("aria-valuenow", String(value));
  }

  function resetProgress() {
    value = 0;
    render(4);
  }

  function sceneStart() {
    if (initialOnly && initialFinished) return;
    clearTimeout(completionTimer);
    clearTimeout(previewTimer);
    clearInterval(progressTimer);
    root.classList.remove("done");
    if (!initialOnly) root.classList.toggle("compact", hasCompletedOnce);
    root.classList.remove("preview-ready");
    if (title) title.textContent = !initialOnly && hasCompletedOnce ? "Đang tải scene tiếp theo" : defaultTitle;
    resetProgress();
    progressTimer = setInterval(() => {
      const progress = Number(krpanoInstance?.get("progress.progress"));
      if (Number.isFinite(progress)) render(5 + progress * 94);
    }, 100);
    previewTimer = setTimeout(previewReady, 1200);
    // Campus yêu cầu giữ màn hình tải đến đúng sự kiện onloadcomplete của krpano.
    // Các tour cũ vẫn có timeout dự phòng nếu không bật data-wait-for-load.
    if (!waitForRealLoad) completionTimer = setTimeout(sceneLoaded, 8000);
  }

  function previewReady() {
    clearTimeout(previewTimer);
    root.classList.add("preview-ready");
    render(30);
  }

  function sceneLoaded() {
    if (initialOnly && (initialFinished || completionScheduled)) return;
    if (initialOnly) completionScheduled = true;
    clearTimeout(completionTimer);
    clearTimeout(previewTimer);
    clearInterval(progressTimer);
    root.classList.add("preview-ready");
    render(100);
    const remainingMinimumTime = Math.max(0, minimumDuration - (performance.now() - initialStartedAt));
    setTimeout(() => {
      root.classList.add("done");
      hasCompletedOnce = true;
      initialFinished = true;
      if (initialOnly && krpanoInstance) {
        krpanoInstance.set("events[ptit_loader].onnewscene", "");
        krpanoInstance.set("events[ptit_loader].onpreviewcomplete", "");
        krpanoInstance.set("events[ptit_loader].onloadcomplete", "");
      }
      if ("requestIdleCallback" in window) requestIdleCallback(preloadNextScene, { timeout: 1500 });
      else setTimeout(preloadNextScene, 500);
    }, Math.max(280, remainingMinimumTime));
  }

  function resolveTemplate(template, face, level, vertical, horizontal) {
    return template
      .replaceAll("%s", face)
      .replaceAll("%l", String(level))
      .replaceAll("%v", String(vertical))
      .replaceAll("%h", String(horizontal));
  }

  function faceFromHeading(heading) {
    const angle = ((Number(heading) % 360) + 360) % 360;
    if (angle < 45 || angle >= 315) return "f";
    if (angle < 135) return "r";
    if (angle < 225) return "b";
    return "l";
  }

  function prefetchImage(url) {
    if (!url) return;
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  }

  function preloadNextScene() {
    const krpano = window.ptitKrpano;
    const currentName = krpano?.get("xml.scene");
    if (!manifest || !currentName) return;
    const current = manifest.find((item) => item.name === currentName);
    if (!current) return;

    const currentIndex = manifest.indexOf(current);
    const linkedCandidates = current.links
      .map((name) => ({ name, index: manifest.findIndex((item) => item.name === name) }))
      .filter((item) => item.index >= 0);
    const linked = linkedCandidates
      .filter((item) => item.index > currentIndex)
      .sort((a, b) => a.index - b.index)[0]?.name || linkedCandidates[0]?.name;
    const next = manifest.find((item) => item.name === linked) || manifest[(currentIndex + 1) % manifest.length];
    if (!next || next.name === currentName) return;

    prefetchImage(next.preview);
    const heading = current.lookats.get(next.name) || 0;
    const face = faceFromHeading(heading);
    for (let vertical = 1; vertical <= 2; vertical += 1) {
      for (let horizontal = 1; horizontal <= 2; horizontal += 1) {
        prefetchImage(resolveTemplate(next.cube, face, 1, vertical, horizontal));
      }
    }
  }

  async function loadManifest() {
    try {
      const response = await fetch("tour.xml", { cache: "force-cache" });
      const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
      manifest = [...xml.querySelectorAll("scene")].map((scene) => {
        const links = [...scene.querySelectorAll("hotspot[linkedscene]")];
        return {
          name: scene.getAttribute("name"),
          preview: scene.querySelector("preview")?.getAttribute("url") || "",
          cube: scene.querySelector("cube")?.getAttribute("url") || "",
          links: links.map((hotspot) => hotspot.getAttribute("linkedscene")),
          lookats: new Map(links.map((hotspot) => [hotspot.getAttribute("linkedscene"), Number((hotspot.getAttribute("linkedscene_lookat") || "0").split(",")[0])]))
        };
      });
      render(18);
    } catch (_) {
      manifest = [];
    }
  }

  window.ptitTourSceneStart = sceneStart;
  window.ptitTourPreviewReady = previewReady;
  window.ptitTourSceneLoaded = sceneLoaded;
  window.ptitAttachTourLoader = (krpano) => {
    krpanoInstance = krpano;
    window.ptitKrpano = krpano;
    krpano.set("events[ptit_loader].keep", true);
    if (!initialOnly) krpano.set("events[ptit_loader].onnewscene", "js(ptitTourSceneStart());");
    krpano.set("events[ptit_loader].onpreviewcomplete", "js(ptitTourPreviewReady());");
    krpano.set("events[ptit_loader].onloadcomplete", "js(ptitTourSceneLoaded());");
    sceneStart();
  };

  resetProgress();
  loadManifest();
})();
