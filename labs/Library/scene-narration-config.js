(function () {
  "use strict";

  // Voice dẫn tự động của Thư viện. Đổi MP3 tại /labs/Library/audio/guided/.
  const config = {
    showCard: false,
    delay: 700,
    visitedKey: "ptit-library-scene-narration-visited",
    scenes: {
      scene_gpbk2201_1773130534438: {
        title: "Lối vào Thư viện PTIT",
        audio: "/labs/Library/audio/guided/01-library-entrance.mp3?v=1"
      },
      scene_lib_1f: {
        title: "Giới thiệu Thư viện PTIT",
        audio: "/labs/Library/audio/guided/02-library-introduction.mp3?v=1"
      },
      scene_lib_3_0e: {
        title: "Khu vực đọc và tự học",
        audio: "/labs/Library/audio/guided/03-reading-area.mp3?v=1"
      }
    }
  };

  window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
  window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
