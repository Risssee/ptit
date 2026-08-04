(function () {
  "use strict";

  // SOUND GIỚI THIỆU TỰ ĐỘNG CỦA FPT
  // Muốn đổi sound: đặt MP3 trong /labs/fpt/audio/guided/ rồi sửa đường dẫn audio bên dưới.
  const config = {
    showCard: false,
    delay: 700,
    visitedKey: "ptit-fpt-scene-narration-visited",
    scenes: {
      scene_fpt1: {
        title: "Không gian tổng quan",
        audio: "/labs/fpt/audio/guided/03-overview.mp3?v=2"
      },
      scene_fpt2a: {
        title: "Mô hình thiết bị mạng ODN",
        audio: "/labs/fpt/audio/guided/05-odn.mp3?v=2"
      },
      scene_fpt4a: {
        title: "Kết thúc chuyến tham quan",
        audio: "/labs/fpt/audio/guided/08-closing.mp3?v=2"
      }
    }
  };

  window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
  window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
