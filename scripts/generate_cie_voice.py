import asyncio
from pathlib import Path

import edge_tts


OUTPUT = Path(r"B:\Ptit_vr360\labs\cie\audio\scenes")
VOICE = "vi-VN-HoaiMyNeural"

SCRIPTS = {
    "scene_cie_cuatruoc": "Chào mừng bạn đến với Trung tâm C I E. Ngay phía trước là lối vào chính với không gian sáng, hiện đại và hệ thống nhận diện nổi bật. Từ đây, chúng ta sẽ bắt đầu khám phá khu vực sảnh, hành lang và các phòng học của trung tâm.",
    "scene_cie_sanh1": "Bạn đang ở khu vực sảnh chính của C I E. Không gian mở được bố trí với quầy hỗ trợ, khu vực ghế ngồi và địa điểm tổ chức các chương trình như Summer School. Đây là nơi tiếp đón sinh viên, khách tham quan và diễn ra nhiều hoạt động chung của trung tâm.",
    "scene_cie_sanh2": "Điểm nổi bật tại khu vực này là mảng tường trang trí đầy màu sắc, lấy cảm hứng từ kiến trúc đô thị hiện đại. Không gian còn có bàn ghế, cây xanh và khu vực ngồi trao đổi, tạo nên môi trường trẻ trung và gần gũi dành cho sinh viên.",
    "scene_cie_sanh3": "Chúng ta đang đứng trước một khu vực chức năng nằm bên cạnh bức tranh tường đặc trưng của C I E. Thiết kế nhiều màu sắc giúp không gian học tập trở nên sinh động hơn, đồng thời tạo điểm nhận diện riêng cho trung tâm.",
    "scene_cie_sanh4": "Phía trước là hành lang dẫn tới khu vực làm việc của các bộ phận chuyên môn. Hệ thống vách kính giúp không gian thông thoáng, trong khi dãy ghế đỏ bên trái phục vụ sinh viên trong thời gian chờ được tư vấn và hỗ trợ.",
    "scene_cie_sanh5": "Bạn đang ở trước Bộ phận Quản lý lưu học sinh. Đây là nơi tiếp nhận thông tin, tư vấn và hỗ trợ sinh viên quốc tế trong quá trình học tập và sinh hoạt tại Học viện. Khi cần giải đáp thủ tục hoặc các vấn đề liên quan, sinh viên có thể liên hệ trực tiếp tại khu vực này.",
    "scene_cie_hl1": "Chúng ta đang bước vào hành lang của khu vực phòng học. Ngay bên trái là phòng 506; dọc theo hành lang còn có nhiều phòng học được kết nối trong cùng một hệ thống không gian khép kín, sạch sẽ và yên tĩnh.",
    "scene_cie_hl2": "Tiếp tục di chuyển, bạn có thể quan sát hành lang dài với các phòng học được bố trí ở hai bên. Hệ thống chiếu sáng đồng đều và biển số phòng rõ ràng giúp sinh viên dễ dàng xác định lớp học của mình.",
    "scene_cie_hl3": "Bạn đang ở khu vực giữa của hành lang C I E. Các phòng học nằm gần nhau, thuận tiện cho việc tổ chức nhiều lớp học trong cùng thời điểm và giúp sinh viên di chuyển nhanh giữa các tiết học.",
    "scene_cie_hl4": "Từ vị trí này, bạn có thể tiếp tục tới các phòng học nằm ở hai phía của hành lang, trong đó có phòng 502 và phòng 505. Các cửa kính cho phép quan sát không gian bên trong nhưng vẫn bảo đảm sự yên tĩnh cần thiết cho lớp học.",
    "scene_cie_hl5": "Đây là một trong những vị trí kết nối chính của tầng học. Từ đây, bạn có thể lựa chọn tham quan các phòng 501, 502, 503, 504 và 505 hoặc tiếp tục di chuyển về phía cuối hành lang.",
    "scene_cie_hl6": "Phía trước là cửa ngăn giữa hai khu vực hành lang. Hệ thống cửa kính và biển chỉ dẫn lối thoát được bố trí rõ ràng, hỗ trợ phân chia không gian và bảo đảm an toàn khi sử dụng tòa nhà.",
    "scene_cie_hl7": "Chúng ta đã đi qua cửa ngăn và bước vào phần hành lang phía trong. Từ vị trí này, bạn có thể tiếp tục tới phòng 503, phòng 504 hoặc quay lại khu vực hành lang trung tâm.",
    "scene_cie_p501": "Chào mừng bạn đến với phòng 501. Phòng được trang bị bàn ghế linh hoạt, máy chiếu gắn trần và hệ thống chiếu sáng hiện đại. Điểm nhấn của không gian là bức tranh phong cảnh lớn ở cuối phòng, giúp lớp học trở nên gần gũi và bớt khô cứng.",
    "scene_cie_p502_a": "Bạn đang ở vị trí đầu tiên của phòng 502. Không gian có sức chứa lớn, sử dụng bàn trắng và ghế tựa màu đen được sắp xếp thành nhiều hàng. Các mảng ốp gỗ tạo cảm giác chuyên nghiệp và ấm áp cho phòng học.",
    "scene_cie_p502_b": "Từ vị trí phía trong phòng 502, bạn có thể quan sát rõ hơn chiều sâu và cách bố trí bàn ghế của lớp học. Mặt tường phía trước được thiết kế tối giản với đồng hồ trung tâm, giúp sinh viên tập trung vào nội dung giảng dạy.",
    "scene_cie_p503_a": "Chúng ta đang bước vào phòng 503. Phòng sử dụng hệ thống bàn học cá nhân màu trắng, tạo lối đi thông thoáng và phù hợp với các lớp cần sự tập trung. Nhiều màn hình được bố trí quanh phòng để hỗ trợ trình chiếu và theo dõi bài giảng.",
    "scene_cie_p503_b": "Ở phía còn lại của phòng 503 là thông điệp Together We Can Achieve More, nhấn mạnh tinh thần hợp tác và cùng nhau phát triển. Hệ thống màn hình hai bên giúp sinh viên dễ dàng quan sát nội dung từ nhiều vị trí trong lớp.",
    "scene_cie_p504_a": "Bạn đang tham quan phòng 504. Phòng học nổi bật với hệ thống bàn cá nhân màu sáng, các hàng ghế được bố trí ngay ngắn và lối đi rộng. Không gian phù hợp cho những lớp học có số lượng sinh viên lớn.",
    "scene_cie_p504_b": "Từ góc nhìn cuối phòng, bạn có thể quan sát tổng thể không gian phòng 504. Các màn hình được đặt ở nhiều vị trí, giúp hạn chế điểm khuất và hỗ trợ sinh viên theo dõi bài giảng thuận tiện hơn.",
    "scene_cie_p505_a": "Đây là khu vực giảng dạy của phòng 505. Phía trước được trang bị màn chiếu, bảng viết và bục giảng bằng gỗ, đáp ứng nhu cầu thuyết trình, trình chiếu nội dung và trao đổi trực tiếp trong lớp.",
    "scene_cie_p505_b": "Từ phía cuối phòng 505, bạn có thể thấy các dãy bàn gỗ và ghế tựa được bố trí theo cặp. Cách sắp xếp này vừa phù hợp với bài giảng trên lớp, vừa thuận tiện cho sinh viên trao đổi và làm việc theo nhóm nhỏ.",
    "scene_cie_p506_a": "Chào mừng bạn đến với phòng 506. Phòng sử dụng bàn học màu trắng kết hợp ghế tựa màu đen, được sắp xếp thành các hàng rộng rãi. Hai bên phòng có cửa sổ, giúp tận dụng ánh sáng tự nhiên và tạo cảm giác thông thoáng.",
    "scene_cie_p506_b": "Từ vị trí này, bạn có thể quan sát toàn bộ chiều dài của phòng 506. Không gian được thiết kế tối giản, tập trung vào sự thoải mái và khả năng linh hoạt khi tổ chức các hoạt động học tập.",
    "scene_cie_sanhsau": "Bạn đang ở khu vực sảnh sau của C I E. Đây là điểm chuyển tiếp giữa hành lang phòng học và cửa ra phía sau. Khu vực được bố trí các thùng phân loại rác, góp phần hình thành thói quen giữ gìn không gian học tập sạch sẽ.",
    "scene_cie_cuasau": "Chúng ta đã đến cửa sau và hoàn thành hành trình khám phá Trung tâm C I E. Qua chuyến tham quan, bạn đã được quan sát hệ thống sảnh, khu vực hỗ trợ sinh viên, hành lang và các phòng học hiện đại. Cảm ơn bạn đã đồng hành và hẹn gặp lại tại Học viện Công nghệ Bưu chính Viễn thông.",
}


async def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    semaphore = asyncio.Semaphore(4)

    async def render(name, text):
        async with semaphore:
            await edge_tts.Communicate(text, VOICE, rate="-5%").save(OUTPUT / f"{name}.mp3")
            print(name)

    await asyncio.gather(*(render(name, text) for name, text in SCRIPTS.items()))


if __name__ == "__main__":
    asyncio.run(main())
