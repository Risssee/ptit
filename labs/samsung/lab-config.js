(function () {
  "use strict";
  // CẤU HÌNH SAMSUNG LAB: popup và voice.
  window.PTIT_LAB_CONFIGS = window.PTIT_LAB_CONFIGS || [];
  window.PTIT_LAB_CONFIGS.push({
    id: "samsung",
    intro: {
      id: "samsung",
      scenes: ["scene_gpbk2388_1773819661170"],
      internalScenePrefixes: ["scene_ss_"],
      image: "/labs/samsung/assets/ss.png",
      audio: "/labs/samsung/audio/guided/PopUp.mp3",
      title: "SAMSUNG LAB",
      description: "Samsung Lab PTIT (thuộc mô hình hợp tác giữa Học viện và Trung tâm Nghiên cứu & Phát triển Samsung - SRV) là không gian nghiên cứu, đào tạo hiện đại được xây dựng nhằm nâng cao năng lực thực hành và tư duy công nghệ cho sinh viên Học viện Công nghệ Bưu chính Viễn thông. Được đầu tư trang thiết bị đồng bộ chuẩn quốc tế, phòng lab tập trung vào việc đào tạo chuyên sâu về thuật toán, tối ưu hóa phần mềm, lập trình ứng dụng di động cũng như cập nhật các xu hướng công nghệ mới. Thông qua các khóa học thực chiến, chương trình luyện thi thuật toán và sự đồng hành trực tiếp từ đội ngũ chuyên gia, kỹ sư cấp cao của Samsung, sinh viên được rèn luyện tác phong làm việc chuẩn doanh nghiệp và phát triển tư duy giải quyết vấn đề phức tạp."
    },
    narration: {
      showCard: false,
      delay: 700,
      visitedKey: "ptit-samsung-scene-narration-visited",
      scenes: {
        scene_ss_1: { title: "Giới thiệu Samsung Lab", audio: "/labs/samsung/audio/guided/01-samsung-welcome.mp3?v=3" }
      }
    }
  });
})();
