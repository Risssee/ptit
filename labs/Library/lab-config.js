(function () {
  "use strict";
  // CẤU HÌNH THƯ VIỆN: popup và voice.
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
        scene_lib_1f: { title: "Giới thiệu Thư viện PTIT", audio: "/labs/Library/audio/guided/02-library-introduction.mp3?v=2" },
        scene_lib_3_0e: { title: "Khu vực đọc và tự học", audio: "/labs/Library/audio/guided/03-reading-area.mp3?v=1" }
      }
    }
  });
})();
