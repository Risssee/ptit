(function (root) {
  "use strict";
  // Chỉnh popup mở đầu, lời dẫn từng scene và infoport 
  const config = {
    id: "cie",
    intro: {
      id: "cie",
      scenePrefixes: [
        "scene_cie_"
      ],
      image: "/labs/cie/assets/Cie.jpg",
      audio: "/labs/cie/audio/guided/popUp.mp3?v=1",
      title: "CIE",
      description: "Trung tâm Đào tạo Quốc tế (CIE) thuộc Học viện Công nghệ Bưu chính Viễn thông là trung tâm đào tạo toàn cầu, cung cấp các chương trình giáo dục chất lượng cao cho sinh viên. CIE cam kết phát triển các chương trình liên kết quốc tế, đào tạo các ngành như công nghệ thông tin, quản trị kinh doanh và giáo dục nghề nghiệp. Đồng thời CIE cũng tổ chức các hoạt động trao đổi sinh viên quốc tế và các lớp học quốc tế, tạo cơ hội cho sinh viên học tập và làm việc ở nước ngoài."
    },
    narration: {
      showCard: false,
      visitedKey: "ptit-cie-scene-narration-visited",
      delay: 700,
      rate: 0.96,
      scenes: {
        scene_cie_sanhchinh1h: {
          title: "Sảnh chính",
          audio: "/labs/cie/audio/scenes/scene_cie_sanhchinh1h.mp3"
        },
        scene_cie_cuasau: {
          title: "Cửa sau Trung tâm CIE",
          audio: "/labs/cie/audio/scenes/scene_cie_cuasau.mp3"
        },       
        scene_cie_hl6_b: {
          audio: "/labs/cie/audio/scenes/scene_cie_hl6_b.mp3"
        },
        scene_cie_p501_b: {
          title: "Phòng 501",
          audio: "/labs/cie/audio/scenes/scene_cie_p501_b.mp3"
        },
        scene_cie_p502_1c: {
          title: "Phòng 502",
          audio: "/labs/cie/audio/scenes/scene_cie_p502_1c.mp3"
        },
        scene_cie_p502_2c: {
          title: "Phòng 502",
          audio: "/labs/cie/audio/scenes/scene_cie_p502_2c.mp3"
        },
        scene_cie_p503_1e: {
          title: "Phòng 503",
          audio: "/labs/cie/audio/scenes/scene_cie_p503_1e.mp3"
        },
        scene_cie_p503_2e: {
          title: "Phòng 503",
          audio: "/labs/cie/audio/scenes/scene_cie_p503_2e.mp3"
        },
        scene_cie_p504_1f: {
          title: "Phòng 504",
          audio: "/labs/cie/audio/scenes/scene_cie_p504_1f.mp3"
        },
        scene_cie_p504_2f: {
          title: "Phòng 504",
          audio: "/labs/cie/audio/scenes/scene_cie_p504_2f.mp3"
        },
        scene_cie_p505_1: {
          title: "Phòng 505",
          audio: "/labs/cie/audio/scenes/scene_cie_p505_1.mp3"
        },
        scene_cie_p505_2: {
          title: "Phòng 505",
          audio: "/labs/cie/audio/scenes/scene_cie_p505_2.mp3"
        },
        scene_cie_p506_1: {
          title: "Phòng 506",
          audio: "/labs/cie/audio/scenes/scene_cie_p506_1.mp3"
        },
        scene_cie_p506_2: {
          title: "Phòng 506",
          audio: "/labs/cie/audio/scenes/scene_cie_p506_2.mp3"
        }
      }
    },
    infoports: {
      scene_cie_sanhchinh1h: [
        {
          id: "sanhchinh1_1",
          ath: -119,
          atv: 12,
          title: "Bộ phận phát triển dự án",
          text: "Bộ phận Phát triển dự án là đầu mối kết nối, xây dựng và mở rộng các chương trình hợp tác giáo dục quốc tế của Trung tâm CIE, chịu trách nhiệm nghiên cứu các dự án liên kết đào tạo, trao đổi sinh viên và phát triển mạng lưới đối tác với các trường đại học, tổ chức uy tín trên toàn thế giới.",
          image: "/labs/cie/assets/infoports/project-development.jpg",
          audio: "/labs/cie/audio/departments/bpptda.mp3",
          tooltip: "Xem thông tin"
        }
      ],
      scene_cie_sanhchinh3f: [
        {
          id: "sanhchinh3_1",
          ath: -8,
          atv: 10,
          title: "Bộ phận quản lý đào tạo",
          text: "Bộ phận quản lý đào tạo chịu trách nhiệm tổ chức, vận hành và quản lý chất lượng các chương trình đào tạo liên kết quốc tế, bao gồm việc xây dựng thời khóa biểu, theo dõi tiến độ học tập, quy đổi tín chỉ và hỗ trợ giải đáp mọi thắc mắc về lộ trình học tập của sinh viên.",
          image: "/labs/cie/assets/infoports/training-management.jpg",
          audio: "/labs/cie/audio/departments/bpqldt.mp3",
          tooltip: "Xem thông tin"
        }
      ],
      scene_cie_sanhchinh4f: [
        {
          id: "sanhchinh4_1",
          ath: 66,
          atv: 10,
          title: "Bộ phận quản lý lưu học sinh",
          text: "Bộ phận quản lý lưu học sinh là đơn vị hỗ trợ toàn diện cho sinh viên quốc tế tại PTIT cũng như sinh viên Việt Nam tham gia các chương trình trao đổi, từ việc giải quyết các thủ tục hành chính, visa, lưu trú cho đến đồng hành trong đời sống và các hoạt động hòa nhập văn hóa.",
          image: "/labs/cie/assets/infoports/international-students.jpg",
          audio: "/labs/cie/audio/departments/bpqllhs.mp3",
          tooltip: "Xem thông tin"
        },
        {
          id: "sanhchinh4_2",
          ath: 146,
          atv: 10,
          title: "Phòng giáo sư thỉnh giảng",
          text: "Phòng giáo sư thỉnh giảng là không gian làm việc, nghiên cứu hiện đại và tiếp đón các giảng viên, chuyên gia quốc tế đến giảng dạy tại CIE, phục vụ công tác trao đổi chuyên môn, thảo luận nghiên cứu chuyên sâu nhằm mang lại nguồn tri thức toàn cầu cho Học viện.",
          image: "/labs/cie/assets/infoports/visiting-professor.jpg",
          audio: "/labs/cie/audio/departments/pgstg.mp3",
          tooltip: "Xem thông tin"
        }
      ],
      scene_cie_sanhchinh5: [
        {
          id: "sanhchinh5_1",
          ath: 57,
          atv: 10,
          title: "Phòng lãnh đạo trung tâm",
          text: "Phòng lãnh đạo trung tâm là cơ quan điều hành cao nhất của CIE, đảm nhiệm vai trò chỉ đạo, quản lý, giám sát toàn bộ hoạt động đào tạo, đối ngoại, đồng thời hoạch định chiến lược phát triển và đại diện Trung tâm trong việc hợp tác quốc tế.",
          image: "/labs/cie/assets/infoports/center-leadership.jpg",
          audio: "/labs/cie/audio/departments/pldtt.mp3",
          tooltip: "Xem thông tin"
        }
      ]
    }
  };

  root.PTIT_LAB_CONFIGS = root.PTIT_LAB_CONFIGS || [];
  root.PTIT_LAB_CONFIGS.push(config);
})(window);
