(() => {
  const falcon = "https://www.falcongames.com";
  // Ảnh lưu cục bộ
  const showcaseAssets = "../labs/game/assets/falcon-showcase";
  const studioVisual = "../labs/game/assets/gameLab.jpg";
  const fallbackVisual = studioVisual;
  const localImageByTitle = {
    "Falcon in Numbers": `${showcaseAssets}/slide-01.jpeg`,
    "1945 Air Force": `${showcaseAssets}/1945-air-force.jpg`,
    "Galaxiga": `${showcaseAssets}/galaxiga.jpg`,
    "Falcon Squad": `${showcaseAssets}/falcon-squad.jpg`,
    "Goods Sorting: Match 3 Puzzle": `${showcaseAssets}/goods-sorting.jpg`,
    "Hexa Stack: Sorting Puzzle": `${showcaseAssets}/hexa-stack.jpg`,
    "Color Water Sort Wooden Puzzle": `${showcaseAssets}/water-sort.jpg`,
    "Publishing at Scale": `${showcaseAssets}/slide-08.jpg`,
    "Where Amazing Games Are Born and Raised": `${showcaseAssets}/slide-09.jpg`
  };
  const slides = [
    { kind:"achievement", title:"Falcon in Numbers", eyebrow:"Thành tựu nổi bật", image:studioVisual, description:"Life is a game, we choose to create together.", stats:[["10+","Game titles"],["500+","Games launched"],["3B+","Downloads"],["150+","Staff"]], action:"Khám phá studio", href:`${falcon}/about/` },
    { kind:"game", title:"1945 Air Force", eyebrow:"Arcade air combat", image:`${falcon}/wp-content/uploads/2022/06/110522_Screenshot_1945_2048x1000.jpg`, action:"Xem game chính thức", href:`${falcon}/game/` },
    { kind:"game", title:"Galaxiga", eyebrow:"Classic space shooter", image:`${falcon}/wp-content/uploads/2022/06/Screenshot_Galaxiga_2048x1000-A2.jpg`, action:"Xem game chính thức", href:`${falcon}/game/` },
    { kind:"game", title:"Falcon Squad", eyebrow:"Galaxy shooter", image:`${falcon}/wp-content/uploads/2022/08/Feature_Falcon_1024x500.jpg`, action:"Xem game chính thức", href:`${falcon}/game/` },
    { kind:"game", title:"Goods Sorting: Match 3 Puzzle", eyebrow:"Match 3 puzzle", image:`${falcon}/wp-content/uploads/2024/06/240705_Goodssort_AND_NHATVC_05a24_EN_1024x500_A1.jpg`, action:"Xem game chính thức", href:`${falcon}/game/` },
    { kind:"game", title:"Hexa Stack: Sorting Puzzle", eyebrow:"Sorting puzzle", image:`${falcon}/wp-content/uploads/2024/06/240422_Hexasort_AND_NHATVC_04a24_EN_1024x500.jpg`, action:"Xem game chính thức", href:`${falcon}/game/` },
    { kind:"game", title:"Color Water Sort Wooden Puzzle", eyebrow:"Color sorting puzzle", image:`${falcon}/wp-content/uploads/2024/06/Color-Water-Sort-Woody-Puzzle_1024x500-A2.jpg`, action:"Xem game chính thức", href:`${falcon}/game/` },
    { kind:"publishing", title:"Publishing at Scale", eyebrow:"Năng lực phát hành", image:studioVisual, description:"Falcon công bố hệ sinh thái phát hành, phân tích dữ liệu và tối ưu hiệu quả sản phẩm cho nhà phát triển.", stats:[["500+","Games launched"],["3B+","Downloads"]], action:"Xem Publishing", href:`${falcon}/publishing/` },
    { kind:"career", title:"Where Amazing Games Are Born and Raised", eyebrow:"Đội ngũ & nghề nghiệp", image:studioVisual, description:"Khám phá môi trường studio và các cơ hội nghề nghiệp đang được Falcon công bố.", stats:[["150+","Staff"]], action:"Xem Career", href:`${falcon}/career/` },
    { kind:"career", title:"Submit Your Game", eyebrow:"Kết nối nhà phát triển", image:studioVisual, description:"Gửi sản phẩm tới hệ sinh thái publishing của Falcon qua biểu mẫu chính thức.", action:"Submit Game", href:`${falcon}/formpublishing/` }
  ];
  // ===== VỊ TRÍ BẢNG FALCON SHOWCASE =====
  // Sửa tọa độ bảng Falcon tại /campus/scenes/game.xml.
  const SHOWCASE_SCENE = "scene_game_1l";
  const SHOWCASE_HOTSPOT = "game_showcase_wall";

  const panel = document.createElement("aside");
  panel.className = "game-flex";
  panel.hidden = true;
  panel.setAttribute("aria-label", "Thành tựu và sản phẩm nổi bật của Falcon Game Studio");
  panel.innerHTML = `
    <img class="game-flex__media" alt="" />
    <div class="game-flex__shade"></div>
    <div class="game-flex__top"><span class="game-flex__brand">Falcon Showcase</span><span class="game-flex__source">Dữ liệu từ falcongames.com</span></div>
    <div class="game-flex__content">
      <p class="game-flex__eyebrow"></p><h2 class="game-flex__title"></h2><p class="game-flex__description"></p>
      <div class="game-flex__stats"></div>
      <div class="game-flex__meta"><a class="game-flex__link" target="_blank" rel="noopener noreferrer"></a><span class="game-flex__counter"></span></div>
      <div class="game-flex__dots"></div>
    </div>
    <div class="game-flex__nav"><button type="button" data-game-prev aria-label="Nội dung trước">‹</button><button type="button" data-game-next aria-label="Nội dung tiếp theo">›</button></div>`;
  document.body.appendChild(panel);

  const image = panel.querySelector(".game-flex__media");
  const title = panel.querySelector(".game-flex__title");
  const eyebrow = panel.querySelector(".game-flex__eyebrow");
  const description = panel.querySelector(".game-flex__description");
  const stats = panel.querySelector(".game-flex__stats");
  const link = panel.querySelector(".game-flex__link");
  const counter = panel.querySelector(".game-flex__counter");
  const dots = panel.querySelector(".game-flex__dots");
  let currentScene = "";
  let slideIndex = 0;

  function renderSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    const slide = slides[slideIndex];
    panel.dataset.kind = slide.kind;
    image.style.opacity = "0";
    image.onerror = () => {
      image.onerror = null;
      image.onload = () => { image.style.opacity = "1"; };
      image.src = fallbackVisual;
    };
    image.alt = `Hình ảnh ${slide.title} từ Falcon Game Studio`;
    image.onload = () => { image.style.opacity = "1"; };
    image.src = localImageByTitle[slide.title] || slide.image;
    if (image.complete && image.naturalWidth > 0) image.style.opacity = "1";
    eyebrow.textContent = slide.eyebrow;
    title.textContent = slide.title;
    description.textContent = slide.description || "";
    description.hidden = !slide.description;
    stats.innerHTML = (slide.stats || []).map(([value,label]) => `<div class="game-flex__stat"><strong>${value}</strong><span>${label}</span></div>`).join("");
    stats.hidden = !slide.stats?.length;
    link.textContent = slide.action;
    link.href = slide.href;
    counter.textContent = `${slideIndex + 1} / ${slides.length}`;
    dots.innerHTML = slides.map((_,i) => `<span class="game-flex__dot${i === slideIndex ? " active" : ""}"></span>`).join("");
  }

  panel.querySelector("[data-game-prev]").addEventListener("click", () => renderSlide(slideIndex - 1));
  panel.querySelector("[data-game-next]").addEventListener("click", () => renderSlide(slideIndex + 1));

  function parkPanel() {
    panel.hidden = true;
    panel.classList.remove("game-flex--wall");
    // Hotspot bị krpano hủy khi đổi scene; giữ panel trong body để có thể gắn lại an toàn.
    if (panel.parentElement !== document.body) document.body.appendChild(panel);
  }

  function mountPanelOnWall() {
    const hotspot = window.ptitKrpano?.get(`hotspot[${SHOWCASE_HOTSPOT}]`);
    const hotspotElement = hotspot?.sprite;
    if (!(hotspotElement instanceof HTMLElement)) return false;

    if (panel.parentElement !== hotspotElement) hotspotElement.appendChild(panel);
    panel.classList.add("game-flex--wall");
    panel.hidden = false;
    return true;
  }

  window.setInterval(() => {
    const scene = window.ptitKrpano?.get("xml.scene") || "";
    if (!scene) return;

    if (scene !== SHOWCASE_SCENE) {
      if (!panel.hidden || panel.parentElement !== document.body) parkPanel();
      currentScene = scene;
      return;
    }

    if (scene !== currentScene) {
      currentScene = scene;
      renderSlide(0);
    }
    // Poll tiếp vì sprite của hotspot được tạo sau khi scene đã bắt đầu tải.
    mountPanelOnWall();
  }, 250);
})();
