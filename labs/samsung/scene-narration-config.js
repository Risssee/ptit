(function () {
  "use strict";

  // Voice dẫn Samsung Lab. Đổi MP3 tại /labs/samsung/audio/guided/.
  const config = {
    showCard: false,
    delay: 700,
    visitedKey: "ptit-samsung-scene-narration-visited",
    scenes: {
      // Popup nằm ngoài cửa; khi vào phòng Samsung thì phát lời dẫn riêng của scene.
      scene_ss_1: {
        title: "Giới thiệu Samsung Lab",
        audio: "/labs/samsung/audio/guided/01-samsung-welcome.mp3?v=3"
      }
    }
  };

  window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
  window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
