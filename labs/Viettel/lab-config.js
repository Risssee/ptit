(function () {
  "use strict";
  // CẤU HÌNH VIETTEL LAB: popup và voice.
  window.PTIT_LAB_CONFIGS = window.PTIT_LAB_CONFIGS || [];
  window.PTIT_LAB_CONFIGS.push({
    id: "viettel",
    intro: {
      id: "viettel",
      scenes: ["scene_viettel_cua1"],
      internalScenePrefixes: ["scene_viettel_"],
      image: "/labs/Viettel/assets/Vt.jpg",
      audio: "/labs/Viettel/audio/guided/PopUp.mp3",
      title: "VIETTEL LAB",
      description: "Viettel Lab PTIT là không gian nghiên cứu và đào tạo công nghệ chuyên sâu, ra đời từ sự hợp tác chiến lược giữa Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) và Học viện Công nghệ Bưu chính Viễn thông. Phòng lab được định hướng trở thành một trung tâm R&D thu nhỏ, trang bị hệ thống cơ sở vật chất hiện đại nhằm phục vụ công tác nghiên cứu, thử nghiệm và phát triển các lĩnh vực công nghệ mũi nhọn như Viễn thông thế hệ mới, An toàn thông tin, Internet vạn vật và Trí tuệ nhân tạo. Tại đây, sinh viên có cơ hội áp dụng trực tiếp các kiến thức học thuật vào môi trường thực tiễn thông qua việc tham gia các dự án công nghệ cốt lõi dưới sự hướng dẫn, cố vấn chuyên môn từ đội ngũ chuyên gia, kỹ sư hàng đầu của Viettel. Viettel Lab PTIT không chỉ là bệ phóng giúp sinh viên nâng cao năng lực chuyên môn, rèn luyện tác phong làm việc chuyên nghiệp, kỷ luật mà còn là cầu nối quan trọng, mang đến cơ hội gia nhập mạng lưới nhân sự chất lượng cao của Viettel ngay sau khi tốt nghiệp. "
    },
    narration: {
      showCard: false,
      delay: 700,
      visitedKey: "ptit-viettel-scene-narration-visited",
      scenes: {
        scene_viettel_2c: { title: "Phòng thực hành máy tính và công nghệ", audio: "/labs/Viettel/audio/guided/02-computer-practice.mp3?v=1" },
        scene_viettel_4c: { title: "Phòng hội thảo và làm việc nhóm", audio: "/labs/Viettel/audio/guided/03-seminar-room.mp3?v=1" },
        scene_viettel_8h: { title: "Phòng server và hệ thống mạng viễn thông", audio: "/labs/Viettel/audio/guided/04-server-room.mp3?v=1" }
      }
    }
  });
})();
