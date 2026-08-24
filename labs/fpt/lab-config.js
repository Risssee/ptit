(function () {
  "use strict";
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
        scene_fpt2a: {
          title: "Mô hình thiết bị mạng ODN",
          audio: "/labs/fpt/audio/guided/05-odn.mp3?v=2"
        },
        scene_fpt4a: {
          title: "Kết thúc chuyến tham quan",
          audio: "/labs/fpt/audio/guided/08-closing.mp3?v=2"
        }
      }
    },
    infoports: {
      scene_fpt2a: [
        {
          id: "fpt_odn_equipment",
          ath: 77,
          atv: 1,
          title: "Mô hình thiết bị mạng ODN",
          text: "Mô hình giới thiệu các phần tử thụ động trên mạng phân phối quang như hộp cáp, bộ chia quang, cáp thuê bao và thiết bị đầu cuối. Sinh viên sử dụng mô hình để nhận diện thiết bị, tìm hiểu cấu trúc ODN và thực hành đấu nối tuyến thuê bao.",
          image: "/labs/fpt/assets/fpt-odn-equipment.jpeg",
          audio: "/labs/fpt/audio/fpt-odn-equipment.mp3?v=2",
          tooltip: "Mô hình thiết bị mạng ODN"
        },
        {
          id: "fpt_external_cabling",
          ath: 112,
          atv: 0,
          title: "Sơ đồ phối cáp ngoại vi",
          text: "Mô hình minh họa cách tổ chức và phân phối tuyến cáp từ mạng chính đến các hộp cáp nhánh và điểm thuê bao. Qua đó, sinh viên thực hành đọc sơ đồ, xác định tuyến cáp và kiểm tra mối liên kết giữa các điểm phối cáp.",
          image: "/labs/fpt/assets/fpt-external-cabling.jpeg",
          audio: "/labs/fpt/audio/fpt-external-cabling.mp3?v=2",
          tooltip: "Sơ đồ phối cáp ngoại vi"
        }
      ]
    }
  });
})();
