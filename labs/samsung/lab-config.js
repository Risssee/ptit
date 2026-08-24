(function () {
  "use strict";
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
        scene_ss_1: {
          title: "Giới thiệu Samsung Lab",
          audio: "/labs/samsung/audio/guided/01-samsung-welcome.mp3?v=3"
        }
      }
    },
    infoports: {
      scene_ss_1: [
        {
          id: "samsung_computer_system",
          ath: 0,
          atv: 5,
          title: "Hệ thống máy tính thực hành Samsung",
          text: "Phòng lab được trang bị dàn máy tính để bàn đồng bộ Samsung bố trí thành nhiều dãy song song. Mỗi máy trạm được kết nối mạng nội bộ tốc độ cao, phục vụ các buổi thực hành lập trình, xử lý dữ liệu và phát triển ứng dụng di động. Hệ thống máy có cấu hình đủ mạnh để vận hành mượt mà các công cụ phát triển nặng như Android Studio, giúp sinh viên trải nghiệm môi trường phát triển phần mềm chuyên nghiệp ngay tại trường.",
          image: "/labs/samsung/assets/infoports/samsung-computer-lab.jpg",
          audio: "/labs/samsung/audio/infoports/01-computer-system.mp3?v=1",
          tooltip: "Xem hệ thống máy tính"
        }
      ],
      scene_ss_2: [
        {
          id: "samsung_computer_system",
          ath: 39,
          atv: 8,
          title: "Hệ thống máy tính thực hành Samsung",
          text: "Phòng lab được trang bị dàn máy tính để bàn đồng bộ Samsung bố trí thành nhiều dãy song song. Mỗi máy trạm được kết nối mạng nội bộ tốc độ cao, phục vụ các buổi thực hành lập trình, xử lý dữ liệu và phát triển ứng dụng di động. Hệ thống máy có cấu hình đủ mạnh để vận hành mượt mà các công cụ phát triển nặng như Android Studio, giúp sinh viên trải nghiệm môi trường phát triển phần mềm chuyên nghiệp ngay tại trường.",
          image: "/labs/samsung/assets/infoports/samsung-computer-lab.jpg",
          audio: "/labs/samsung/audio/infoports/01-computer-system.mp3?v=1",
          tooltip: "Xem hệ thống máy tính",
        }
      ]
    }
  });
})();
