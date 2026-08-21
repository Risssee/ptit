(function () {
  "use strict";
  // CẤU HÌNH FPT LAB: popup và voice
  window.PTIT_LAB_CONFIGS = window.PTIT_LAB_CONFIGS || [];
  window.PTIT_LAB_CONFIGS.push({
    id: "fpt",
    intro: {
      id: "fpt",
      scenePrefixes: ["scene_fpt"],
      image: "/labs/fpt/assets/Fpt.jpg",
      audio: "/labs/fpt/audio/guided/PopUp.mp3",
      title: "FPT TELECOM LAB",
      description: "FPT Lab là trung tâm nghiên cứu, ứng dụng và đào tạo công nghệ cao, được thành lập dựa trên sự hợp tác chiến lược giữa Tập đoàn FPT và Học viện Công nghệ Bưu chính Viễn thông. Được định hướng hoạt động như một môi trường doanh nghiệp thu nhỏ, phòng lab tập trung vào việc nghiên cứu, phát triển phần mềm và ứng dụng các xu hướng công nghệ tiên tiến như Trí tuệ nhân tạo, Điện toán đám mây, Data và Internet vạn vật. Tại đây, sinh viên có cơ hội bước ra khỏi khuôn khổ lý thuyết truyền thống để trực tiếp tham gia vào các dự án công nghệ thực tế, trải nghiệm quy trình làm việc chuẩn quốc tế dưới sự dẫn dắt và cố vấn của các chuyên gia, kỹ sư cấp cao đến từ FPT. FPT Lab PTIT không chỉ là không gian ươm mầm tài năng, giúp sinh viên hoàn thiện năng lực chuyên môn lẫn kỹ năng làm việc thực chiến, mà còn là cầu nối vững chắc đưa nguồn nhân lực chất lượng cao của Học viện tiến gần hơn tới các cơ hội nghề nghiệp rộng mở tại hệ sinh thái công nghệ toàn cầu của FPT. "
    },
    narration: {
      showCard: false,
      delay: 700,
      visitedKey: "ptit-fpt-scene-narration-visited",
      scenes: {
        scene_fpt2a: { title: "Mô hình thiết bị mạng ODN", audio: "/labs/fpt/audio/guided/05-odn.mp3?v=2" },
        scene_fpt4a: { title: "Kết thúc chuyến tham quan", audio: "/labs/fpt/audio/guided/08-closing.mp3?v=2" }
      }
    }
  });
})();
