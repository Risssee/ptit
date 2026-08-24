(function () {
  "use strict";
  window.PTIT_LAB_CONFIGS = window.PTIT_LAB_CONFIGS || [];
  window.PTIT_LAB_CONFIGS.push({
    id: "cts",
    intro: {
      id: "cts",
      scenes: ["scene_cts_c1"],
      scenePrefixes: ["scene_cts_", "scene_cts2_"],
      image: "/labs/cts/assets/cts_lab.jpg",
      audio: "/labs/cts/audio/guided/cts_popup.mp3",
      title: "CTS LAB",
      description: "CTS Lab là phòng thí nghiệm công nghệ sáng tạo và mô phỏng tiên tiến trực thuộc Học viện Công nghệ Bưu chính Viễn thông. CTS Lab tập trung vào nghiên cứu và phát triển ba trụ cột cốt lõi bao gồm công nghệ thực tế ảo XR/ VR/ AR, hệ thống robot thông minh và các giải pháp giáo dục số ứng dụng trí tuệ nhân tạo. Với mục tiêu thu hẹp khoảng cách giữa lý thuyết và thực tiễn, phòng lab không chỉ là nơi kiến tạo các sản phẩm công nghệ có tính ứng dụng cao cho xã hội mà còn là môi trường học thuật năng động, giúp sinh viên làm quen với môi trường nghiên cứu chuyên nghiệp và phát triển tư duy sáng tạo vượt trội. "
    },
    narration: {
      showCard: false,
      delay: 700,
      visitedKey: "ptit-cts-scene-narration-visited",
      scenes: {
        scene_cts_1: {
          title: "Trung tâm vận hành",
          audio: "/labs/cts/audio/guided/cts_scene_1.mp3"
        },
        scene_cts2_1: {
          title: "Phòng tự học và nghiên cứu chung",
          audio: "/labs/cts/audio/guided/cts_scene_2.mp3"
        }
      }
    },
    infoports: {}
  });
})();
