(function () {
  "use strict";

  // Voice dẫn Samsung Lab. Đổi MP3 tại /labs/samsung/audio/guided/.
  const config = {
    showCard: false,
    delay: 700,
    visitedKey: "ptit-samsung-scene-narration-visited",
    scenes: {
      scene_ss_1: {
        title: "Giới thiệu Samsung Lab",
        audio: "/labs/samsung/audio/guided/01-samsung-welcome.mp3?v=1"
      }
    }
  };

  window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
  window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
