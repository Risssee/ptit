(() => {
  "use strict";
// ===== ÂM THANH GIỚI THIỆU GAME LAB =====
  // Muốn đổi sound, đặt MP3 mới trong /labs/game/audio/guided/ rồi sửa đường dẫn `audio`.
  const config = {
    scenes: {
      scene_game_1l: {
        title: "Lối vào Game Lab",
        // Giữ nguyên sound gốc khi người xem bước vào scene_game_1l.
        audio: "/labs/game/audio/guided/02-game-entrance.mp3?v=2"
      }
    }
  };
  // Thêm scene Game, không ghi đè cấu hình CIE hoặc Campus.
  window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
  window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
