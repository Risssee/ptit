(function () {
  "use strict";

  // SOUND GIỚI THIỆU TỰ ĐỘNG CỦA VIETTEL LAB
  // Muốn đổi sound: đặt MP3 trong /labs/Viettel/audio/guided/ rồi sửa đường dẫn audio bên dưới.
  const config = {
    showCard: false,
    delay: 700,
    visitedKey: "ptit-viettel-scene-narration-visited",
    scenes: {
      scene_viettel_cua1: {
        title: "Giới thiệu Viettel Lab",
        audio: "/labs/Viettel/audio/guided/01-welcome.mp3?v=1"
      },
      scene_viettel_2c: {
        title: "Phòng thực hành máy tính và công nghệ",
        audio: "/labs/Viettel/audio/guided/02-computer-practice.mp3?v=1"
      },
      scene_viettel_4c: {
        title: "Phòng hội thảo và làm việc nhóm",
        audio: "/labs/Viettel/audio/guided/03-seminar-room.mp3?v=1"
      },
      scene_viettel_8h: {
        title: "Phòng server và hệ thống mạng viễn thông",
        audio: "/labs/Viettel/audio/guided/04-server-room.mp3?v=1"
      }
    }
  };

  window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
  window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
