(function () {
  "use strict";

  // SOUND GIỚI THIỆU TỰ ĐỘNG CỦA FPT
  // Muốn đổi sound: đặt MP3 trong /labs/fpt/audio/guided/ rồi sửa đường dẫn audio bên dưới.
  const config = {
    showCard: false,
    delay: 700,
    visitedKey: "ptit-fpt-scene-narration-visited",
    scenes: {
      // Scene này chỉ còn dùng khi chạy tour FPT cũ độc lập; Campus dùng scene_viettel_cua1 chung.
      scene_viettel2a_: {
        title: "Chào mừng đến với phòng LAB FPT",
        audio: "/labs/fpt/audio/guided/01-welcome.mp3"
      },
      scene_fpt1: {
        title: "Không gian tổng quan",
        audio: "/labs/fpt/audio/guided/03-overview.mp3"
      },
      scene_fpt2a: {
        title: "Mô hình thiết bị mạng ODN",
        audio: "/labs/fpt/audio/guided/05-odn.mp3"
      },
      scene_fpt3a: {
        title: "Khu vực học tập và thực hành",
        audio: "/labs/fpt/audio/guided/04-practice-area.mp3"
      },
      scene_fpt4a: {
        title: "Kết thúc chuyến tham quan",
        audio: "/labs/fpt/audio/guided/08-closing.mp3"
      }
    }
  };

  window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
  window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
