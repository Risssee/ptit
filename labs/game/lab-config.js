(function () {
  "use strict";

  // CAU HINH GAME LAB: popup mo dau, voice theo scene va infoport.
  // Giu nguyen ten scene goc; du lieu khong dung se duoc don o buoc rieng sau.
  window.PTIT_LAB_CONFIGS = window.PTIT_LAB_CONFIGS || [];
  window.PTIT_LAB_CONFIGS.push({
    id: "game",
    intro: {
      id: "game",
      scenePrefixes: ["scene_game_"],
      image: "/labs/game/assets/gameLab.jpg",
      audio: "/labs/game/audio/guided/PopUp.mp3",
      title: "GAME LAB",
      description: "Phòng thực hành công nghệ game PTIT là phòng lab đào tạo và nghiên cứu phát triển game do Falcon Game Studio phối hợp cùng Học viện Công nghệ Bưu chính Viễn thông thành lập. Với sứ mệnh kiến tạo một môi trường thực chiến chuyên nghiệp ngay trong không gian học thuật, phòng lab mang đến cho sinh viên cơ hội trực tiếp tham gia vào quy trình sản xuất game chuẩn quốc tế, trải dài từ khâu lên ý tưởng, thiết kế đồ họa cho đến lập trình và tối ưu hóa sản phẩm. Dưới sự cố vấn và bảo trợ chuyên môn trực tiếp từ đội ngũ chuyên gia giàu kinh nghiệm của Falcon Game Studio, sinh viên không chỉ được mài giũa kiến thức chuyên ngành mà còn được trang bị những kỹ năng thực tiễn để đáp ứng các tiêu chuẩn khắt khe của thị trường. Qua đó, Falcon Game Lab PTIT tự hào đóng vai trò là một bệ phóng vững chắc, giúp rút ngắn khoảng cách giữa lý thuyết và thực tiễn, đồng thời mở ra những cơ hội nghề nghiệp vượt trội cho các tài năng trẻ đam mê theo đuổi sự nghiệp trong lĩnh vực công nghệ và giải trí số. "
    },
    narration: {
      scenes: {
        scene_game_1l: {
          title: "Lối vào Game Lab",
          audio: "/labs/game/audio/guided/02-game-entrance.mp3?v=2"
        }
      }
    },
    infoports: {
      scene_game_3: [
        {
          id: "game_computer_practice_area",
          ath: 45,
          atv: 25,
          title: "Khu vực máy tính thực hành",
          text: "Khu vực thực hành được thiết kế rộng rãi với các trang thiết bị hiện đại nhằm phục vụ các buổi học, nghiên cứu chuyên sâu về game. Dàn máy tính có cấu hình cao, giúp sinh viên sử dụng mượt mà các công cụ phát triển game nặng (như Unity, Unreal Engine) cũng như thử nghiệm các tựa game đòi hỏi đồ họa cao. Đồng thời đây cũng là nơi kiểm thử và đánh giá các dự án do chính các đội ngũ tại Game Lab phát triển.",
          image: "/labs/game/assets/computer-practice-area.jpg",
          audio: "/labs/game/audio/guided/03-game-practice-area.mp3?v=2",
          tooltip: "Khu vực máy tính thực hành"
        }
      ]
    }
  });
})();
