(() => {
const config = {
  showCard: false,
  visitedKey: "ptit-cie-scene-narration-visited",
  delay: 700,
  rate: 0.96,
  scenes: {
    scene_cie_cuatruoc: { title: "Cửa trước Trung tâm CIE"},
    scene_cie_sanhchinh1h: { title: "Sảnh chính"},
    scene_cie_sanhchinh2f: {},
    scene_cie_sanhchinh3f: {},
    scene_cie_sanhchinh4f: {},
    scene_cie_sanh5: {},
    scene_cie_sanhsau1: { title: "Sảnh sau"},
    scene_cie_cuasau: { title: "Cửa sau Trung tâm CIE"},
    scene_cie_hl1: { title: "Hành lang 1", text: "Bạn đang ở cuối hành lang tầng năm. Từ đây, chúng ta có thể tiếp tục tham quan phòng năm không sáu hoặc di chuyển về khu vực sảnh sau." },
    scene_cie_hl2: { title: "Hành lang 2", text: "Đây là khu vực hành lang dẫn đến phòng năm không một và phòng năm không sáu, hai điểm tiếp theo trong hành trình khám phá C I E." },
    scene_cie_hl3: { title: "Hành lang 3", text: "Chúng ta đang tiến sâu hơn vào khu vực phòng học của trung tâm. Mỗi phòng đều được bố trí phục vụ những hoạt động học tập và trao đổi khác nhau." },
    scene_cie_hl4: { title: "Hành lang 4", text: "Từ vị trí này, bạn có thể tiếp tục đến các không gian học tập ở hai phía hành lang." },
    scene_cie_hl5: { title: "Hành lang 5", text: "Bạn đang ở khu vực trung tâm của hành lang, nơi kết nối nhanh đến các phòng năm không hai, năm không ba, năm không bốn và năm không năm." },
    scene_cie_hl6_b: { },
    scene_cie_hl7: { title: "Hành lang tầng 5", text: "Chào mừng bạn đến hành lang tầng năm. Phía trước là hệ thống phòng học và phòng chức năng của Trung tâm C I E." },
    scene_cie_p501_b: { title: "Phòng 501"},
    scene_cie_p502_1c: { title: "Phòng 502"},
    scene_cie_p502_2c: { title: "Phòng 502"},
    scene_cie_p503_1e: { title: "Phòng 503"},
    scene_cie_p503_2e: { title: "Phòng 503"},
    scene_cie_p504_1f: { title: "Phòng 504"},
    scene_cie_p504_2f: { title: "Phòng 504"},
    scene_cie_p505_1: { title: "Phòng 505"},
    scene_cie_p505_2: { title: "Phòng 505"},
    scene_cie_p506_1: { title: "Phòng 506"},
    scene_cie_p506_2: { title: "Phòng 506" }
  }
};

Object.entries(config.scenes).forEach(([scene, entry]) => {
  entry.audio = `/labs/cie/audio/scenes/${scene}.mp3`;
});

// Mỗi khu vực tự đăng ký config; scene-narration.js sẽ hợp nhất tất cả trước khi chạy.
window.PTIT_SCENE_NARRATION_CONFIGS = window.PTIT_SCENE_NARRATION_CONFIGS || [];
window.PTIT_SCENE_NARRATION_CONFIGS.push(config);
})();
