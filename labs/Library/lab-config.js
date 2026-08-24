(function () {
  "use strict";
  window.PTIT_LAB_CONFIGS = window.PTIT_LAB_CONFIGS || [];
  window.PTIT_LAB_CONFIGS.push({
    id: "library",
    intro: {
      id: "library",
      scenes: ["scene_gpbk2201_1773130534438"],
      internalScenePrefixes: ["scene_lib_"],
      image: "/labs/Library/assets/Lib.jpg",
      audio: "/labs/Library/audio/guided/PopUp.mp3",
      title: "THƯ VIỆN PTIT",
      description: "Thư viện Học viện Công nghệ Bưu chính Viễn thông đóng vai trò cốt lõi trong việc cung cấp nguồn học liệu và hỗ trợ đắc lực cho hoạt động giảng dạy, học tập cũng như nghiên cứu khoa học. Nơi đây được đầu tư hệ thống cơ sở vật chất khang trang, hiện đại cùng không gian học thuật chuyên nghiệp, truyền cảm hứng, phù hợp cho cả việc tự nghiên cứu độc lập lẫn thảo luận nhóm. Bắt nhịp với xu hướng chuyển đổi số, thư viện sở hữu nguồn tài nguyên phong phú, từ hàng chục nghìn đầu sách giáo trình, tài liệu tham khảo chuyên sâu thuộc các lĩnh vực thế mạnh như Viễn thông, Công nghệ thông tin, Đa phương tiện, Kinh tế đến hệ thống thư viện điện tử tích hợp các cơ sở dữ liệu số trong nước và quốc tế. Không chỉ là nơi lưu trữ và chia sẻ tri thức, Thư viện PTIT còn là môi trường nuôi dưỡng văn hóa đọc, tạo lập thói quen tự học và cung cấp bệ phóng nền tảng vững chắc để sinh viên cũng như giảng viên không ngừng mở rộng tầm nhìn, nâng cao năng lực chuyên môn trong suốt quá trình gắn bó với Học viện. "
    },
    narration: {
      showCard: false,
      delay: 700,
      visitedKey: "ptit-library-scene-narration-visited",
      scenes: {
        scene_lib_1f: {
          title: "Giới thiệu Thư viện PTIT",
          audio: "/labs/Library/audio/guided/02-library-introduction.mp3?v=2"
        },
        scene_lib_3_0e: {
          title: "Khu vực đọc và tự học",
          audio: "/labs/Library/audio/guided/03-reading-area.mp3?v=1"
        }
      }
    },
    infoports: {
      scene_lib_1f: [
        {
          id: "library_lockers",
          ath: 110,
          atv: 5,
          title: "Tủ gửi đồ cá nhân",
          text: "Hệ thống tủ locker thông minh được chia thành nhiều ô nhỏ có đánh số cẩn thận, giúp sinh viên yên tâm lưu trữ cặp sách, đồ dùng cá nhân trước khi vào thư viện.",
          image: "/labs/Library/assets/infoports/tu.jpg",
          audio: "/labs/Library/audio/infoports/01-lockers.mp3?v=1",
          tooltip: "Xem tủ gửi đồ"
        },
        {
          id: "library_automatic_gate",
          ath: 183,
          atv: 35,
          title: "Hệ thống cửa tự động",
          text: "Để đảm bảo an ninh và quản lý lưu lượng người ra vào hiệu quả, thư viện được trang bị cổng kiểm soát tự động dạng tay quay hiện đại. Sinh viên và cán bộ chỉ cần quét khuôn mặt tại màn hình gắn trên trụ inox là cửa quay sẽ mở tự động. Ngay bên cạnh cổng vào là lối ra riêng biệt có biển chỉ dẫn rõ ràng, giúp luồng di chuyển của bạn đọc luôn thông suốt và trật tự.",
          image: "/labs/Library/assets/infoports/cua.jpg",
          audio: "/labs/Library/audio/infoports/02-automatic-gate.mp3?v=1",
          tooltip: "Xem hệ thống cửa"
        }
      ],
      scene_lib_2f: [
        {
          id: "library_information_center",
          ath: 0,
          atv: 5,
          title: "Trung tâm Thông tin Thư viện",
          text: "Đây là khu vực bàn giao dịch được thiết kế tối giản, tinh tế với tone màu gỗ sáng và vách kính giao tiếp trong suốt. Phía trước quầy trang bị dãy ghế cao tạo chỗ ngồi thoải mái cho sinh viên trong lúc chờ làm thủ tục mượn - trả sách hoặc nhờ cán bộ thư viện hỗ trợ tra cứu thông tin. Không gian bên trong quầy được kết nối trực tiếp với kho sách chuyên ngành, đảm bảo quá trình cung cấp tài liệu diễn ra nhanh chóng và chính xác.",
          image: "/labs/Library/assets/infoports/tttv.jpg",
          audio: "/labs/Library/audio/infoports/03-information-center.mp3?v=1",
          tooltip: "Xem trung tâm thông tin"
        }
      ],
      scene_lib_9f: [
        {
          id: "library_open_shelves",
          ath: 30,
          atv: 5,
          title: "Kho sách mở và các dãy kệ tài liệu chuyên ngành",
          text: "Kho sách của thư viện được sắp xếp khoa học theo các dãy kệ cao tầng phân loại chuẩn nghiệp vụ, với lối đi giữa các kệ rộng rãi và đầy đủ ánh sáng. Mọi đầu sách từ giáo trình chuyên ngành Công nghệ thông tin, Bưu chính Viễn thông, Kinh tế cho đến sách tham khảo ngoại văn đều được dán nhãn phân loại rõ ràng trên từng ngăn kệ. Thiết kế kho mở giúp sinh viên tự do di chuyển, chủ động tìm kiếm và đọc thử tài liệu trực tiếp tại chỗ một cách dễ dàng.",
          image: "/labs/Library/assets/infoports/sach.jpg",
          audio: "/labs/Library/audio/infoports/04-open-shelves.mp3?v=1",
          tooltip: "Xem kho sách mở"
        }
      ],
      scene_lib_8_1e: [
        {
          id: "library_individual_desks",
          ath: -60,
          atv: 5,
          title: "Khu vực bàn học cá nhân",
          text: "Dành riêng cho những sinh viên cần sự riêng tư và tập trung tối đa, khu vực này được trang bị các bàn học đơn có vách ngăn cao hai bên. Mỗi vị trí học đều được tích hợp sẵn ổ cắm điện, đèn học và cửa sổ lấy sáng tự nhiên có rèm cuốn điều chỉnh linh hoạt. Thiết kế này giúp loại bỏ tối đa các tác nhân gây xao nhãng xung quanh, mang đến không gian tự học chuẩn mực và hiệu quả nhất.",
          image: "/labs/Library/assets/infoports/tuHoc.jpg",
          audio: "/labs/Library/audio/infoports/05-individual-desks.mp3?v=1",
          tooltip: "Xem khu vực bàn học"
        }
      ],
      scene_lib_6e: [
        {
          id: "library_computer_area",
          ath: 0,
          atv: 5,
          title: "Khu vực máy tính thực hành",
          text: "Nhằm hỗ trợ tối đa việc khai thác tài nguyên số và thực hành lập trình, phòng máy tính thư viện được đầu tư trang thiết bị rất đồng bộ. Các bàn máy tính được chia theo từng dãy ngăn cách bởi vách lửng, trang bị màn hình chất lượng cao, tai nghe chuyên dụng và kết nối Internet tốc độ cao. Đây là không gian lý tưởng để sinh viên tra cứu thư viện số dlib, làm bài tập lớn, luyện tập kỹ năng CNTT hoặc tham gia các buổi học trực tuyến ngay tại thư viện.",
          image: "/labs/Library/assets/infoports/mt.jpg",
          audio: "/labs/Library/audio/infoports/06-computer-area.mp3?v=1",
          tooltip: "Xem khu vực máy tính"
        }
      ]
    }
  });
})();
