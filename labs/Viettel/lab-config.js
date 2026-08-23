(function () {
  "use strict";

  // CAU HINH VIETTEL LAB: popup mo dau, voice theo scene va infoport.
  // Giu nguyen ten scene goc; du lieu khong dung se duoc don o buoc rieng sau.
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
    },
    infoports: {
      scene_viettel_9h: [
        {
          id: "viettel_core_4g",
          ath: -35,
          atv: 4,
          title: "Hệ thống Core 4G (EPC - IMS - HSS)",
          text: "Đây là mạng lõi chịu trách nhiệm xác thực, quản lý kết nối và điều hướng toàn bộ lưu lượng dữ liệu/thoại của người dùng.\n\nEPC (Evolved Packet Core): Mạng lõi gói của 4G, gồm các thành phần như MME (quản lý di động), SGW/PGW (điều hướng và định tuyến dữ liệu Internet), giúp thiết bị di động kết nối mượt mà vào mạng IP.\n\nHSS (Home Subscriber Server): Cơ sở dữ liệu trung tâm chứa toàn bộ thông tin thuê bao như số điện thoại, gói cước, quyền truy cập và vị trí hiện tại.\n\nIMS (IP Multimedia Subsystem): Nền tảng cung cấp dịch vụ đa phương tiện trên nền IP, cốt lõi để triển khai dịch vụ thoại chất lượng cao VoLTE trên mạng 4G.",
          image: "/labs/Viettel/assets/infoports/viettel-server-systems.jpg",
          audio: "/labs/Viettel/audio/infoports/01-core-4g.mp3?v=1",
          tooltip: "Xem hệ thống Core 4G"
        },
        {
          id: "viettel_ocs_4g",
          ath: 0,
          atv: 4,
          title: "Hệ thống OCS 4G ",
          text: "Hệ thống OCS được coi là bộ não kinh doanh của nhà mạng di động.\n\nChức năng chính: Tính cước và kiểm soát tài khoản theo thời gian thực (Real-time charging) cho cả thuê bao trả trước lẫn trả sau.\n\nCơ chế hoạt động: Khi bạn gọi điện, nhắn tin hay truy cập Data 4G, OCS sẽ kiểm tra số dư/gói cước ngay lập tức, trừ tiền/dung lượng theo từng giây/MB và ngắt kết nối tự động ngay khi tài khoản hết hạn hoặc hết tiền.",
          image: "/labs/Viettel/assets/infoports/viettel-server-systems.jpg",
          audio: "/labs/Viettel/audio/infoports/02-ocs-4g.mp3?v=1",
          tooltip: "Xem hệ thống OCS 4G"
        },
        {
          id: "viettel_dc_power",
          ath: 35,
          atv: 4,
          title: "Tủ nguồn DC ",
          text: "Đây là hạ tầng cung cấp năng lượng chuyên dụng cho toàn bộ thiết bị viễn thông trong phòng lab.\n\nCác thiết bị viễn thông và máy chủ chuyên dụng hoạt động chủ yếu bằng nguồn điện một chiều DC (thường là -48V DC) để đảm bảo độ ổn định cao, chống nhiễu và dễ kết nối với hệ thống ắc quy dự phòng (UPS).\n\nThiết bị có vai trò chuyển đổi điện lưới AC thành điện DC ổn định, duy trì hoạt động liên tục 24/7 cho hệ thống Core và OCS mà không bị gián đoạn khi có sự cố điện.",
          image: "/labs/Viettel/assets/infoports/viettel-server-systems.jpg",
          audio: "/labs/Viettel/audio/infoports/03-dc-power.mp3?v=1",
          tooltip: "Xem tủ nguồn DC"
        }
      ]
    }
  });
})();
