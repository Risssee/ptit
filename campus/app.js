// Data for the popup information
const sceneData = {
    'scene_1': { 
        title: 'Cổng trường', 
        description: 'Cổng chính Học viện Công nghệ Bưu chính Viễn thông. Nơi đây là bộ mặt của Học viện, mang vẻ đẹp hiện đại và uy nghiêm.', 
        roomType: 'Khu vực ngoài trời',
        purpose: 'Lối vào chính và đón tiếp khách tham quan, sinh viên.',
        lessons: ['Giới thiệu lịch sử Học viện', 'Hướng dẫn tham quan'],
        thumb: 'panos/1.tiles/thumb.jpg' 
    },
    'scene_gpbk2270_1773201080635': { 
        title: 'Phòng Lab CTS', 
        description: 'Phòng nghiên cứu và thực hành chuyên sâu của Lab CTS (Creative Technology Space). Nơi đây tập trung các dự án nghiên cứu về VR/AR/AI.', 
        roomType: 'Phòng thực hành (Lab)',
        purpose: 'Nghiên cứu khoa học, thực hành các công nghệ mới và phát triển các ứng dụng sáng tạo.',
        lessons: ['Thực tế ảo và Thực tế tăng cường (VR/AR)', 'Lập trình ứng dụng 3D'],
        thumb: 'panos/GPBK2270_1773201080635.tiles/thumb.jpg' 
    },
    'scene_gpbk2202_1773130555661': { 
        title: 'Thư viện PTIT', 
        description: 'Không gian học tập và nghiên cứu hiện đại với kho tài liệu phong phú, hệ thống tra cứu thông minh và các khu vực tự học tiện nghi.', 
        roomType: 'Thư viện',
        purpose: 'Tra cứu tài liệu, mượn trả sách, học tập tập trung và hội thảo khoa học.',
        lessons: ['Kỹ năng tra cứu thông tin', 'Quản trị tri thức số'],
        thumb: 'panos/GPBK2202_1773130555661.tiles/thumb.jpg' 
    },
    'scene_gpbk2218_1773131077123': { 
        title: 'Tòa A1', 
        description: 'Tòa nhà điều hành và hành chính trung tâm của Học viện.', 
        roomType: 'Hành chính',
        purpose: 'Nơi làm việc của Ban Giám hiệu và các phòng ban chức năng.',
        thumb: 'panos/GPBK2218_1773131077123.tiles/thumb.jpg'
    },
    'scene_10': { 
        title: 'Tòa A2', 
        description: 'Tòa nhà giảng đường chính với quy mô lớn, nơi diễn ra các buổi học quan trọng.', 
        roomType: 'Giảng đường',
        purpose: 'Giảng dạy và học tập các môn lý thuyết.',
        thumb: 'panos/10.tiles/thumb.jpg'
    },
};

// KHU VUC VA DIEM MO DA CHUYEN SANG campus/config/*.js.
const sceneInfoOverridesInCode = {
  "scene_1": {
    "purpose": "Lối vào chính và đón tiếp khách tham quan",
    "description": "Cổng chính Học viện Công nghệ Bưu chính Viễn thông"
  },
  "scene_gpbk2218_1773131077123": {
    "purpose": "Tòa nhà điều hành và hành chính",
    "description": "Nơi làm việc của Ban Giám hiệu, các phòng ban chức năng, phòng học, phòng nghiên cứu"
  },
  "scene_10": {
    "purpose": "Tòa nhà giảng đường và văn phòng khoa",
    "description": "Nơi tập trung các phòng học lớn và văn phòng các Khoa trọng điểm như Công nghệ thông tin, Viễn thông, ..."
  },
  "scene_gpbk0065_1773206564173": {
    "purpose": "Phòng học",
    "description": "Các phòng học được trang bị đầy đủ thiết bị trình chiếu, phục vụ các tiết học chuyên sâu"
  },
  "scene_gpbk0066_1773206449967": {
    "purpose": "Tổ chức sự kiện và hội nghị",
    "description": "Không gian rộng lớn chuyên tổ chức các buổi lễ khai giảng, bế giảng và các hoạt động văn nghệ quy mô lớn của sinh viên"
  },
  "scene_vswthdn_nhtgtt_1": {
    "purpose": "Khu vực thư giãn và cảnh quan",
    "description": "Không gian xanh với phong cách kiến trúc Nhật Bản, là địa điểm nghỉ ngơi và chụp ảnh yêu thích của sinh viên sau giờ học"
  },
  "scene_gpbk2195_1773130397237": {
    "purpose": "Tòa nhà đa năng và giảng đường",
    "description": "Tòa nhà mới với cơ sở vật chất hiện đại phục vụ học tập và nghiên cứu, nằm phía sau khu vực tòa A2"
  },
  "scene_gpbk2237_1773200161431": {
    "purpose": "Phòng học",
    "description": "Các phòng học được trang bị đầy đủ thiết bị trình chiếu, phục vụ các tiết học chuyên sâu"
  },
  "scene_gpbk2202_1773130555661": {
    "purpose": "Học tập và nghiên cứu tài liệu",
    "description": "Không gian yên tĩnh với kho tài liệu phong phú về viễn thông và CNTT, có khu tự học máy lạnh cho sinh viên"
  },
  "scene_gpbk2260_1773200808324": {
    "purpose": "Hoạt động thể thao và thể chất",
    "description": "Khu vực rèn luyện sức khỏe và tổ chức các giải đấu thể thao phong trào giữa các khoa và câu lạc bộ"
  },
  "scene_gpbk2286_1773201396711": {
    "purpose": "Hoạt động thể thao và thể chất",
    "description": "Khu vực rèn luyện sức khỏe và tổ chức các giải đấu thể thao phong trào giữa các khoa và câu lạc bộ"
  },
  "scene_gpbk2270_1773201080635": {
    "purpose": "Phòng nghiên cứu",
    "description": "Nơi thực hành và nghiên cứu chuyên sâu"
  }
};


let krpano = null;
let currentHotspotAudio = null;
let currentHotspotDucksMusic = false;
// - BACKGROUND_MUSIC_VOLUME: am luong BGM khi phat binh thuong.
// - BACKGROUND_MUSIC_DUCKED_VOLUME: am luong BGM khi narration hoac infopost dang phat.
const BACKGROUND_MUSIC_VOLUME = 0.5;
const BACKGROUND_MUSIC_DUCKED_VOLUME = 0.2;
let activeDynamicHotspots = [];
let currentSceneName = '';
let activeInfoAnchor = null;
let hotspotInfoFollowRaf = null;
let runtimePlacedHotspots = {};
const CAMPUS_INFO_HOTSPOTS_ENABLED = false;
let sceneInfoOverrides = { ...sceneInfoOverridesInCode };
let panoTitleObserver = null;
let popupSpeakBtn = null;
let popupSpeechUtterance = null;
let popupSpeechActive = false;
let popupTtsAudio = null;
let popupSpeechDucksMusic = false;

const bookshelfHotspot = {
    id: 'library_books',
    ath: 0.0,
    atv: 0.0,
    title: 'Khu vực sách và Tạp chí chuyên ngành',
    text: 'Với hàng vạn đầu sách chuyên ngành về Công nghệ, Viễn thông, Điện tử & Kinh tế. Ngọn nguồn tri thức và cảm hứng của sinh viên PTIT.\n(Ảnh được AI Generate để tăng tính trực quan)',
    tooltip: 'Khám phá tri thức',
    image: '/labs/Library/assets/infoports/sach.jpg'
};

const computerHotspot = {
    id: 'library_computers',
    ath: 0.0,
    atv: 0.0,
    title: 'Khu vực Máy tính tự học',
    text: 'Hệ thống máy tính cấu hình cao kết nối Internet và kho tài liệu số OPAC.\nPhục vụ sinh viên nghiên cứu, làm bài tập và tra cứu độc lập.\n(Ảnh được AI Generate để tăng sự sinh động)',
    tooltip: 'Khu tự học',
    image: '/labs/Library/assets/infoports/mt.jpg'
};
const hotspotData = {
    scene_1: [],
    // ========================================================================
    // INFOPORT Thu vien
    // ========================================================================
    scene_gpbk2203_1773130660359: [bookshelfHotspot],
    scene_gpbk2204_1773130697446: [bookshelfHotspot],
    scene_gpbk2205_1773130740283: [computerHotspot],
    scene_gpbk2206_1773130766175: [computerHotspot],
    scene_gpbk2207_1773130803595: [computerHotspot],
    scene_gpbk2201_1773130534438: [],
    scene_gpbk2202_1773130555661: [
        {
            id: 'library_intro',
            ath: 20.0,
            atv: 0.0,
            title: 'Chào mừng đến Thư viện PTIT',
            text: 'Thư viện Học viện Công nghệ Bưu chính Viễn thông là không gian tự học tĩnh lặng, nơi sinh viên miệt mài với sách vở và laptop.\nKhông gian sang trọng, hiện đại với nguồn sáng ấm áp.',
            tooltip: 'Khu vực tự đọc',
            image: '/labs/Library/assets/infoports/tuHoc.jpg'
        },
        {
            id: 'library_lookup',
            ath: -10.0,
            atv: 10.0,
            title: 'Hệ thống tra cứu thông minh',
            text: 'Sinh viên có thể sử dụng các máy tính tại đây để tra cứu vị trí sách và tài liệu số thông qua hệ thống OPAC.',
            tooltip: 'Khu vực tra cứu'
        }
    ],
    scene_gpbk2270_1773201080635: [
        {
            id: 'labcts_intro',
            ath: 0.0,
            atv: -20.0,
            title: 'Trung tâm nghiên cứu không gian CTS',
            text: 'Lab CTS (Creative Technologies & Simulations) tập trung vào mảng Công nghệ Sáng tạo, Đồ họa 3D, Thực tế Ảo (VR/AR) và AI. Là nơi ươm mầm các dự án xuất sắc của Học viện Công nghệ Bưu chính Viễn thông.',
            tooltip: 'Tổng quan Lab CTS',
            image: '9adbca54-6cdd-4fe0-b2b3-8eaaa1130de8.jpg'
        },
        {
            id: 'labcts_ws1',
            ath: 60.0,
            atv: 10.0,
            title: 'Siêu Máy Trạm (Workstation) AI',
            text: 'Cấu hình siêu khủng phục vụ Render và Huấn luyện AI:\n- CPU: Intel Core i9 Gen 13/14\n- RAM: 128GB DDR5 Corsair\n- GPU: Dual NVIDIA RTX 4090 24GB\n- SSD: 4TB NVMe PCIe 4.0\nĐảm bảo sức mạnh tính toán vượt trội cho mọi mô hình 3D phức tạp nhất.',
            tooltip: 'Click xem cấu hình PC khủng',
            image: '664088873_1466695988458551_1776922468228806704_n.png'
        },
        {
            id: 'labcts_vr',
            ath: 20.0,
            atv: 12.0,
            title: 'Khu vực thử nghiệm Thực tế Ảo (VR/AR)',
            text: 'Được trang bị loạt thiết bị tối tân nhất thị trường hiện nay:\n- Kính Meta Quest 3, Quest Pro\n- Hệ thống HTC Vive Pro 2, Valve Index\n- Kính AR HoloLens 2\nCho phép sinh viên phát triển trải nghiệm Metaverse, Game 3D tương tác đa giác quan.',
            tooltip: 'Trang thiết bị VR/AR',
            image: '646935640_949460840788736_8238024209070971558_n.png'
        },
        {
            id: 'labcts_project_area',
            ath: 90.0,
            atv: 5.0,
            title: 'Không gian triển khai Dự án',
            text: 'Bàn làm việc nhóm chuyên dụng cho các Team Startup & Research. Khu vực này liên tục diễn ra các buổi Brainstorm, hội chẩn giải pháp công nghệ, và là cái nôi của nhiều dự án đạt giải thưởng quốc gia về Chuyển đổi số.',
            tooltip: 'Khu vực dự án',
            image: 'ea326538-cf53-40e8-8951-ea5b3af0f9e9.jpg'
        },
        {
            id: 'labcts_activity',
            ath: -70.0,
            atv: 15.0,
            title: 'Nghiên cứu sinh & Chuyên gia',
            text: 'Đội ngũ sinh viên tài năng và giảng viên tâm huyết luôn miệt mài nghiên cứu, tối ưu code và xây dựng mô hình giả lập. Một môi trường mở tinh hoa, khuyến khích sáng tạo không giới hạn.',
            tooltip: 'Hoạt động nghiên cứu',
            image: '663697763_1510807277081819_4693986563420308155_n.png'
        }
    ],
    scene_7: [
        {
            id: 'a1_scene7_intro',
            ath: 82.781,
            atv: 12.184,
            title: 'Tòa A1',
            text: 'Khu vực trước cửa Tòa A1 (scene 7).',
            audio: '',
            tooltip: 'Thông tin Tòa A1'
        }
    ],
    scene_gpbk2222_1773131201563: [
        {
            id: 'a1_floor1_intro',
            ath: null,
            atv: null,
            title: 'Tầng 1 Tòa A1',
            text: 'Khu vực sảnh và lối vào Tòa A1, nơi đón tiếp và kết nối các không gian học tập.',
            audio: '',
            tooltip: 'Thông tin Tòa A1'
        }
    ],
    scene_gpbk2287_1773201421340: [
        {
            id: 'a1_floor1_intro_alt',
            ath: null,
            atv: null,
            title: 'Tầng 1 Tòa A1',
            text: 'Khu vực phía trước Tòa A1, gần lối vào chính của tòa.',
            audio: '',
            tooltip: 'Thông tin Tòa A1'
        }
    ]
};

function stopHotspotAudio() {
    if (currentHotspotAudio) {
        currentHotspotAudio.pause();
        currentHotspotAudio.currentTime = 0;
        currentHotspotAudio = null;
    }
    if (currentHotspotDucksMusic) {
        setInfopostMusicDucked(false);
        currentHotspotDucksMusic = false;
    }
}

// Moi nguon loi thuyet minh chiem quyen phat se dung audio infoport dang chay.
window.addEventListener('ptit:stop-infopost-narration', stopHotspotAudio);
window.addEventListener('ptit:audiofocus', (event) => {
    if (event.detail?.source !== 'infopost') stopHotspotAudio();
});

function setInfopostMusicDucked(ducked) {
    if (!krpano || !audioStarted || audioMuted) return;
    try {
        const volume = ducked ? BACKGROUND_MUSIC_DUCKED_VOLUME : BACKGROUND_MUSIC_VOLUME;
        krpano.call(`tween(sound[bgm].volume, ${volume}, 0.25);`);
    } catch (error) {
        console.log('Skip changing background volume for infopost:', error);
    }
}

function stopHotspotInfoFollow() {
    if (hotspotInfoFollowRaf) {
        cancelAnimationFrame(hotspotInfoFollowRaf);
        hotspotInfoFollowRaf = null;
    }
}

function getRuntimeSceneHotspots(sceneName) {
    return runtimePlacedHotspots[sceneName] || [];
}

// Infoport của từng lab được khai báo trong labs/<lab>/lab-config.js.
// Đọc config lúc render vì các lab-config được tải sau app.js.
function getConfiguredSceneHotspots(sceneName) {
    const labConfigs = window.PTIT_LAB_CONFIGS || [];
    for (const labConfig of labConfigs) {
        const sceneHotspots = labConfig?.infoports?.[sceneName];
        if (Array.isArray(sceneHotspots)) return sceneHotspots;
    }
    return hotspotData[sceneName] || [];
}

function upsertRuntimeHotspot(sceneName, hotspot) {
    if (!runtimePlacedHotspots[sceneName]) {
        runtimePlacedHotspots[sceneName] = [];
    }
    const idx = runtimePlacedHotspots[sceneName].findIndex(item => item.id === hotspot.id);
    if (idx >= 0) {
        runtimePlacedHotspots[sceneName][idx] = hotspot;
    } else {
        runtimePlacedHotspots[sceneName].push(hotspot);
    }
}

// INFOport dùng chung: mọi lab .
const INFO_PORT_BASE_SCALE = 0.4;
const INFO_PORT_PULSE_SCALE = 0.45;

function buildAndRenderSingleInfoHotspot(sceneName, item) {
    if (!krpano) return;
    const hotspotName = `info_${sceneName}_${item.id}`.replace(/[^a-zA-Z0-9_]/g, '_');
    const safeTooltip = (item.tooltip || '').replace(/'/g, "\\'");
    const resolvedAth = Number.isFinite(item.ath) ? item.ath : (Number(krpano.get('view.hlookat')) || 0);
    const resolvedAtv = Number.isFinite(item.atv) ? item.atv : (Number(krpano.get('view.vlookat')) || 0);
    const hotspotScale = INFO_PORT_BASE_SCALE;
    try {
        if (krpano.get(`hotspot[${hotspotName}]`)) {
            krpano.call(`removehotspot(${hotspotName});`);
        }
    } catch (e) {
        /* ignore */
    }
    if (!activeDynamicHotspots.includes(hotspotName)) {
        activeDynamicHotspots.push(hotspotName);
    }
    krpano.call(`addhotspot(${hotspotName});`);
    const hotspotStyle = sceneName.startsWith('scene_cie_') || sceneName.startsWith('scene_game_') || sceneName.startsWith('scene_fpt') || sceneName.startsWith('scene_viettel_') || sceneName.startsWith('scene_lib_') || sceneName.startsWith('scene_ss_')
        ? 'skin_infopoststyle'
        : 'skin_info_hotspot';
    krpano.call(`hotspot[${hotspotName}].loadstyle(${hotspotStyle});`);
    krpano.call(`set(hotspot[${hotspotName}].visible, true);`);
    krpano.call(`set(hotspot[${hotspotName}].enabled, true);`);
    krpano.call(`set(hotspot[${hotspotName}].scale, ${hotspotScale});`);
    krpano.call(`set(hotspot[${hotspotName}].edge, center);`);
    krpano.call(`set(hotspot[${hotspotName}].distorted, false);`);
    krpano.call(`set(hotspot[${hotspotName}].zorder, 999);`);
    krpano.call(`set(hotspot[${hotspotName}].handcursor, true);`);
    krpano.call(`set(hotspot[${hotspotName}].onloaded, null);`);
    krpano.call(`set(hotspot[${hotspotName}].onover, tween(alpha,1.0,0.18));`);
    krpano.call(`set(hotspot[${hotspotName}].onout, tween(alpha,0.94,0.22));`);
    krpano.call(`set(hotspot[${hotspotName}].ath, ${resolvedAth});`);
    krpano.call(`set(hotspot[${hotspotName}].atv, ${resolvedAtv});`);
    if (safeTooltip) {
        krpano.call(`set(hotspot[${hotspotName}].tooltip, '${safeTooltip}');`);
    }
    const safeId = String(item.id).replace(/'/g, "\\'");
    krpano.call(`set(hotspot[${hotspotName}].onclick, js(window.openHotspotInfo('${sceneName}','${safeId}','${hotspotName}')));`);
    krpano.call(`infoport_pulse(${hotspotName},${INFO_PORT_BASE_SCALE},${INFO_PORT_PULSE_SCALE});`);
}

// DEV BRIDGE: hotspot-editor.js chỉ dùng cầu nối này khi bật ?hotspotedit=1.
window.PTITHotspotEditorAPI = {
    getKrpano: () => krpano || window.ptitKrpano,
    createHotspot(sceneName, item) {
        upsertRuntimeHotspot(sceneName, item);
        buildAndRenderSingleInfoHotspot(sceneName, item);
    }
};

function renderRuntimeHotspots(sceneName) {
    const runtimeList = getRuntimeSceneHotspots(sceneName);
    runtimeList.forEach(item => buildAndRenderSingleInfoHotspot(sceneName, item));
}

function positionHotspotInfoPanel() {
    const panel = document.getElementById('hotspot-info');
    if (!panel || !panel.classList.contains('active') || !krpano || !activeInfoAnchor) {
        return;
    }

    const panelParent = panel.parentElement;
    if (!panelParent) return;

    let ath = Number(activeInfoAnchor.ath);
    let atv = Number(activeInfoAnchor.atv);
    const hotspotName = activeInfoAnchor.hotspotName || '';

    if (hotspotName && krpano.get(`hotspot[${hotspotName}]`)) {
        ath = Number(krpano.get(`hotspot[${hotspotName}].ath`));
        atv = Number(krpano.get(`hotspot[${hotspotName}].atv`));
    }

    if (!Number.isFinite(ath) || !Number.isFinite(atv)) {
        ath = Number(krpano.get('view.hlookat')) || 0;
        atv = Number(krpano.get('view.vlookat')) || 0;
    }

    krpano.call(`spheretoscreen(${ath},${atv},hotspot_screen_x,hotspot_screen_y);`);
    const anchorX = Number(krpano.get('hotspot_screen_x'));
    const anchorY = Number(krpano.get('hotspot_screen_y'));
    const parentRect = panelParent.getBoundingClientRect();
    const panelWidth = panel.offsetWidth || 320;
    const panelHeight = panel.offsetHeight || 160;
    const margin = 10;
    let left = anchorX - (panelWidth / 2);
    let top = anchorY - panelHeight - 16;

    left = Math.max(margin, Math.min(left, parentRect.width - panelWidth - margin));
    top = Math.max(margin, Math.min(top, parentRect.height - panelHeight - margin));

    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
}

function startHotspotInfoFollow() {
    stopHotspotInfoFollow();
    const tick = () => {
        const panel = document.getElementById('hotspot-info');
        if (!panel || !panel.classList.contains('active') || !activeInfoAnchor) {
            hotspotInfoFollowRaf = null;
            return;
        }
        positionHotspotInfoPanel();
        hotspotInfoFollowRaf = requestAnimationFrame(tick);
    };
    hotspotInfoFollowRaf = requestAnimationFrame(tick);
}

function openHotspotInfo(sceneName, hotspotId, hotspotName = '') {
    const staticList = getConfiguredSceneHotspots(sceneName);
    const runtimeList = getRuntimeSceneHotspots(sceneName);
    let hotspot = staticList.find(item => item.id === hotspotId)
        || runtimeList.find(item => item.id === hotspotId);
    
    // Fallback if hotspot data is not explicitly found but we want to show generic scene info
    if (!hotspot && hotspotId && hotspotId.startsWith('info_')) {
        let genericTitle = getGroupTitleForScene(sceneName) || 'Khu vực PTIT';
        let defaultGenericText = 'Không gian học tập và nghiên cứu hiện đại, được trang bị để đáp ứng nhu cầu giao lưu, tự học và tham quan của sinh viên Học viện.';
        let dynamicImage = '';

        // Inject Computer Self-Study specific data for the remaining library aisles
        if (sceneName === 'scene_gpbk2205_1773130740283' || sceneName === 'scene_gpbk2206_1773130766175' || sceneName === 'scene_gpbk2207_1773130803595') {
            genericTitle = 'Khu vực Máy tính tự học';
            defaultGenericText = 'Hệ thống máy tính cấu hình cao kết nối Internet và kho tài liệu số OPAC.\nPhục vụ sinh viên nghiên cứu, làm bài tập và tra cứu độc lập.\n(Ảnh được AI Generate để tăng sự sinh động)';
            dynamicImage = '/labs/Library/assets/infoports/mt.jpg';
        }

        hotspot = {
            id: hotspotId,
            title: genericTitle,
            text: defaultGenericText,
            image: dynamicImage,
            tooltip: 'Xem thông tin'
        };
    }

    if (!hotspot && !sceneName) return;

    // Infoport có MP3 thu sẵn sẽ tự phát 
    const hasRecordedHotspotAudio = Boolean(hotspot?.audio);
    if (hasRecordedHotspotAudio) stopPopupSpeech();
    if (popupSpeakBtn) popupSpeakBtn.hidden = hasRecordedHotspotAudio;
    if (sceneName) {
        currentSceneName = sceneName;
        const data = getMergedSceneInfo(sceneName);
    
        document.getElementById('popup-title').innerText = (hotspot && hotspot.title) ? hotspot.title : data.title;
        document.getElementById('popup-desc').innerText = (hotspot && hotspot.text) ? hotspot.text : data.description;
        
        const purposeEl = document.getElementById('popup-purpose');
        if (purposeEl) purposeEl.innerText = data.purpose || 'Tham quan Học viện';

        const imgEl = document.getElementById('popup-img');
        if (imgEl) {
            if (hotspot && hotspot.image) {
                imgEl.src = hotspot.image;
            } else {
                let formattedSceneName = sceneName.replace('scene_', '');
                if (formattedSceneName.startsWith('gpbk')) {
                    formattedSceneName = formattedSceneName.replace('gpbk', 'GPBK');
                }
                imgEl.src = data.thumb || `panos/${formattedSceneName}.tiles/thumb.jpg`;
            }
        }

        openInfo();
    }

    stopHotspotAudio();
    if (hotspot && hotspot.audio && window.ptitAudioAllowed?.()) {
        window.dispatchEvent(new CustomEvent('ptit:audiofocus', { detail: { source: 'infopost' } }));
        const infopostAudio = new Audio(hotspot.audio);
        infopostAudio.volume = 1;        
        currentHotspotAudio = infopostAudio;
        currentHotspotDucksMusic = true;
        setInfopostMusicDucked(true);
        infopostAudio.addEventListener('ended', () => {
            if (currentHotspotAudio !== infopostAudio) return;
            currentHotspotAudio = null;
            if (currentHotspotDucksMusic) setInfopostMusicDucked(false);
            currentHotspotDucksMusic = false;
        }, { once: true });
        infopostAudio.play().catch(() => {
            console.log('Audio autoplay is blocked until user interacts.');
            if (currentHotspotAudio === infopostAudio) stopHotspotAudio();
        });
    }
}

function closeHotspotInfo() {
    const panel = document.getElementById('hotspot-info');
    if (panel) panel.classList.remove('active');
    activeInfoAnchor = null;
    stopHotspotInfoFollow();
    stopHotspotAudio();
}

function clearSceneHotspots() {
    if (!krpano) return;
    activeDynamicHotspots.forEach((name) => {
        try {
            if (krpano.get(`hotspot[${name}]`)) {
                krpano.call(`removehotspot(${name});`);
            }
        } catch (error) {
            console.log('Skip removing hotspot:', name, error);
        }
    });
    activeDynamicHotspots = [];
}

function removeLegacyInfoSpot() {
    if (!krpano) return;
    try {
        if (krpano.get('hotspot[info_spot]')) {
            krpano.call('removehotspot(info_spot);');
        }
    } catch (error) {
        console.log('Skip removing legacy info_spot:', error);
    }
}

function removeAllInfoHotspotsInScene() {
    if (!krpano) return;
    const total = Number(krpano.get('hotspot.count')) || 0;
    for (let i = total - 1; i >= 0; i -= 1) {
        try {
            const name = krpano.get(`hotspot[${i}].name`);
            const style = krpano.get(`hotspot[${i}].style`) || '';
            if (!name) continue;
            if (name === 'info_spot' || name.startsWith('info_') || style === 'skin_info_hotspot') {
                krpano.call(`removehotspot(${name});`);
            }
        } catch (error) {
            console.log('Skip removing info hotspot:', error);
        }
    }
}

function renderSceneHotspots(sceneName) {
    if (!krpano) return;
    clearSceneHotspots();
    removeAllInfoHotspotsInScene();
    // Lab nào có infoport cho scene hiện tại sẽ tự được nhận diện, không cần hard-code tên lab.
    const isManagedLabScene = (window.PTIT_LAB_CONFIGS || []).some(
        labConfig => Array.isArray(labConfig?.infoports?.[sceneName])
    );
    if (!CAMPUS_INFO_HOTSPOTS_ENABLED && !isManagedLabScene) return;
    const sceneHotspots = getConfiguredSceneHotspots(sceneName);
    console.log(`[Hotspot Diagnostic] scene=${sceneName}, dataCount=${sceneHotspots.length}, isGarden=${sceneName.includes('2201')}`);
    sceneHotspots.forEach((item) => {
        buildAndRenderSingleInfoHotspot(sceneName, item);
    });
    renderRuntimeHotspots(sceneName);
}

function disableNativeTitleTooltips() {
    const panoEl = document.getElementById('pano');
    if (!panoEl) return;

    const stripTitleAttrs = () => {
        panoEl.querySelectorAll('[title]').forEach((el) => el.removeAttribute('title'));
    };

    stripTitleAttrs();

    if (panoTitleObserver) {
        panoTitleObserver.disconnect();
    }
    panoTitleObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'title') {
                mutation.target.removeAttribute('title');
            }
        });
        stripTitleAttrs();
    });
    panoTitleObserver.observe(panoEl, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['title']
    });
}


function onready(krpano_interface) {
    krpano = krpano_interface;
    window.ptitKrpano = krpano_interface;
    console.log("KRpano Integrated Successfully");
    enforceStableNavigationHotspotTextures();
    disableNativeTitleTooltips();
    initSidebar();
    initEdgeSceneNavigation();
    const initialScene = krpano.get('xml.scene');
    if (initialScene) {
        handleSceneChange(initialScene);
    }
}

function getAllSceneNamesFromTour() {
    if (!krpano) return Object.keys(sceneData);
    const names = [];
    const count = Number(krpano.get('scene.count')) || 0;
    for (let i = 0; i < count; i += 1) {
        const name = krpano.get(`scene[${i}].name`);
        if (name) names.push(name);
    }
    return names.length > 0 ? names : Object.keys(sceneData);
}

function getSceneMeta(sceneName) {
    const meta = sceneData[sceneName] ? { ...sceneData[sceneName] } : {};
    if (krpano) {
        const thumb = krpano.get(`scene[${sceneName}].thumburl`);
        if (thumb) meta.thumb = thumb;
    }
    if (!meta.title && krpano) {
        meta.title = krpano.get(`scene[${sceneName}].title`) || sceneName;
    }
    if (!meta.description) {
        meta.description = 'Thông tin chi tiết đang được cập nhật...';
    }
    if (!meta.thumb) {
        let formattedSceneName = sceneName.replace('scene_', '');
        if (formattedSceneName.startsWith('gpbk')) {
            formattedSceneName = formattedSceneName.replace('gpbk', 'GPBK');
        }
        meta.thumb = `panos/${formattedSceneName}.tiles/thumb.jpg`;
    }
    return meta;
}

// DANH MUC DIA DIEM: du lieu duy nhat tu config tap trung.
function getConfiguredSidebarGroups() {
    const configuredGroups = window.PTIT_SIDEBAR_GROUPS;
    const configuredLocations = window.PTIT_LOCATIONS;
    if (!Array.isArray(configuredGroups) || !Array.isArray(configuredLocations)) return null;

    const groups = {};
    configuredGroups
        .slice()
        .sort((left, right) => (left.order || 0) - (right.order || 0))
        .forEach((group) => {
            groups[group.label] = configuredLocations
                .filter((location) => location.group === group.id)
                .map((location) => ({
                    ...getSceneMeta(location.entryScene),
                    sceneName: location.entryScene,
                    title: location.label,
                    location
                }));
        });

    return groups;
}

function getSidebarGroups() {
    const configuredGroups = getConfiguredSidebarGroups();
    if (configuredGroups) return configuredGroups;

    const groups = {};
    Object.keys(sceneData).forEach((sceneName) => {
        const data = getSceneMeta(sceneName);
        if (!groups[data.title]) {
            groups[data.title] = [];
        }
        groups[data.title].push({ sceneName, ...data });
    });
    return groups;
}

function getGroupTitleForScene(sceneName) {
    const configuredLocation = window.PTIT_FIND_LOCATION?.(sceneName);
    if (configuredLocation) return configuredLocation.label;

    const fallbackMeta = getSceneMeta(sceneName);
    return fallbackMeta.title || sceneName;
}

function isSceneInConfiguredGroups(sceneName) {
    return true;
}

function setInfoButtonEnabled(enabled) {
    const infoBtn = document.getElementById('info-btn');
    if (!infoBtn) return;
    infoBtn.classList.toggle('disabled', !enabled);
    infoBtn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
    infoBtn.tabIndex = enabled ? 0 : -1;
}

function initSidebar() {
    const list = document.getElementById('scene-list');
    list.innerHTML = ''; 

    const groups = getSidebarGroups();

    Object.keys(groups).forEach(title => {
        const groupScenes = groups[title];
        
        const groupContainer = document.createElement('div');
        groupContainer.className = 'accordion-group';
        groupContainer.dataset.group = title;
        
        const header = document.createElement('button');
        header.className = 'accordion-header';
        header.type = 'button';
        header.setAttribute('aria-expanded', 'false');
        
        header.innerHTML = `
            <span>${title}<small>${groupScenes.length} địa điểm</small></span>
            <span class="accordion-icon">▼</span>
        `;
        
        const body = document.createElement('div');
        body.className = 'accordion-body';
        
        header.onclick = () => {
             const expanded = groupContainer.classList.toggle('expanded');
             header.setAttribute('aria-expanded', String(expanded));
        };
        const grid = document.createElement('div');
        grid.className = 'scene-grid';

        groupScenes.forEach((scene, index) => {
             const item = document.createElement('button');
             item.className = 'scene-item';
             item.type = 'button';
             item.id = `nav-${scene.sceneName}`;
             
             const label = scene.location?.label || scene.title || `Điểm ${index + 1}`;
             item.setAttribute('aria-label', `Chuyển đến ${label}`);
             
             item.innerHTML = `
                 <div class="thumb-wrapper">
                     <img src="${scene.thumb}" alt="${scene.title}">
                     <span class="scene-label">${label}</span>
                 </div>
             `;
             
             item.onclick = () => {
                 const navigateToScene = () => {
                     const configuredLookAt = scene.location?.entryLookAt;
                     if (scene.location) {
                         const targetScene = scene.location.entryScene;
                         const lookAtCommand = configuredLookAt
                             ? `; lookat(${configuredLookAt.h},${configuredLookAt.v},${configuredLookAt.fov})`
                             : '';
                         krpano.call(`loadscene(${targetScene}, null, MERGE, BLEND(1.0))${lookAtCommand}`);
                         return;
                     }

                     krpano.call(`loadscene(${scene.sceneName}, null, MERGE, BLEND(1.0))`);
                 };

                 // Popup gioi thieu lab co the chan dieu huong va chay tiep sau khi dong.
                 if (window.ptitOpenLabIntroForScene?.(scene.sceneName, navigateToScene)) return;
                 navigateToScene();
             };
             
             grid.appendChild(item);
        });

        body.appendChild(grid);
        groupContainer.appendChild(header);
        groupContainer.appendChild(body);
        list.appendChild(groupContainer);
    });
}

function getMergedSceneInfo(sceneName) {
    const base = sceneData[sceneName] || {
        title: krpano.get(`scene[${sceneName}].title`) || sceneName,
        description: 'Thông tin chi tiết đang được cập nhật...'
    };
    const override = sceneInfoOverrides[sceneName] || {};
    const { title: _ignoredTitle, ...overrideWithoutTitle } = override;
    return { ...base, ...overrideWithoutTitle };
}

function updatePopupSpeakButtonUI() {
    if (!popupSpeakBtn) return;
    popupSpeakBtn.innerText = popupSpeechActive ? '■ Dừng' : '🔊 Đọc';
    popupSpeakBtn.title = popupSpeechActive ? 'Dừng đọc nội dung' : 'Đọc nội dung thông tin';
}

function stopPopupSpeech() {
    if (popupTtsAudio) {
        try {
            popupTtsAudio.pause();
            popupTtsAudio.src = '';
        } catch (error) {
            console.log('Skip stopping translate TTS audio:', error);
        }
        popupTtsAudio = null;
    }
    if (popupSpeechUtterance && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    } else if ('speechSynthesis' in window && popupSpeechActive) {
        window.speechSynthesis.cancel();
    }
    popupSpeechUtterance = null;
    popupSpeechActive = false;
    if (popupSpeechDucksMusic) {
        popupSpeechDucksMusic = false;
        window.dispatchEvent(new CustomEvent('ptit:narrationend'));
    }
    updatePopupSpeakButtonUI();
}

function getPopupSpeechText() {
    const title = document.getElementById('popup-title')?.innerText?.trim() || '';
    const purpose = document.getElementById('popup-purpose')?.innerText?.trim() || '';
    const description = document.getElementById('popup-desc')?.innerText?.trim() || '';

    const chunks = [];
    if (title) chunks.push(`Địa điểm ${title}.`);
    if (purpose) chunks.push(`Mục đích sử dụng: ${purpose}.`);
    if (description) chunks.push(`Mô tả thêm: ${description}.`);
    return chunks.join(' ');
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

function getPreferredSpeechVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const viVoice = voices.find((voice) => String(voice.lang || '').toLowerCase() === 'vi-vn')
        || voices.find((voice) => String(voice.lang || '').toLowerCase().startsWith('vi'));
        
    if (viVoice) return viVoice;
    const googleVi = voices.find(v => v.name.includes('Google') && v.lang.includes('vi'));
    if (googleVi) return googleVi;
    return voices.find((voice) => String(voice.lang || '').toLowerCase() === 'en-us')
        || voices.find((voice) => String(voice.lang || '').toLowerCase().startsWith('en'))
        || voices[0] || null;
}

async function speakPopupInfo() {
    const text = getPopupSpeechText();
    if (!text || !window.ptitAudioAllowed?.()) return;

    if (!('speechSynthesis' in window)) {
        window.alert('Trinh duyet khong ho tro doc van ban.');
        return;
    }

    const selectedVoice = getPreferredSpeechVoice();
    if (!selectedVoice) {
        popupSpeechActive = false;
        updatePopupSpeakButtonUI();
        console.log('Khong tim thay voice doc tren trinh duyet.');
        return;
    }

    stopPopupSpeech();
    window.dispatchEvent(new CustomEvent('ptit:audiofocus', { detail: { source: 'popup-tts' } }));
    popupSpeechActive = true;
    popupSpeechDucksMusic = true;
    window.dispatchEvent(new CustomEvent('ptit:narrationstart'));
    updatePopupSpeakButtonUI();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedVoice.lang || 'en-US';
    utterance.voice = selectedVoice;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onend = () => {
        popupSpeechUtterance = null;
        popupSpeechActive = false;
        if (popupSpeechDucksMusic) {
            popupSpeechDucksMusic = false;
            window.dispatchEvent(new CustomEvent('ptit:narrationend'));
        }
        updatePopupSpeakButtonUI();
    };
    utterance.onerror = () => {
        popupSpeechUtterance = null;
        popupSpeechActive = false;
        if (popupSpeechDucksMusic) {
            popupSpeechDucksMusic = false;
            window.dispatchEvent(new CustomEvent('ptit:narrationend'));
        }
        updatePopupSpeakButtonUI();
    };

    popupSpeechUtterance = utterance;
    popupSpeechActive = true;
    updatePopupSpeakButtonUI();
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

// Doc popup, infoport, popup lab va loi dan scene khong duoc phat chong nhau.
window.addEventListener('ptit:audiofocus', (event) => {
    if (event.detail?.source !== 'popup-tts') stopPopupSpeech();
});

function togglePopupSpeech() {
    if (popupSpeechActive) {
        stopPopupSpeech();
        return;
    }
    speakPopupInfo().catch(() => {
        popupSpeechActive = false;
        updatePopupSpeakButtonUI();
    });
}

function enforceStableNavigationHotspotTextures() {
    if (!krpano) return;
    const stableTexture = 'skin/hotspot-nav-ptit.png?v=1';
    try {
        krpano.set('style[skin_hotspotstyle].url', stableTexture);
        const total = Number(krpano.get('hotspot.count')) || 0;
        for (let i = 0; i < total; i += 1) {
            const style = krpano.get(`hotspot[${i}].style`) || '';
            if (style.split('|').includes('skin_hotspotstyle')) {
                krpano.set(`hotspot[${i}].url`, stableTexture);
            }
        }
    } catch (error) {
        console.log('Skip hotspot texture repair:', error);
    }
}

function formatEdgeSceneTitle(sceneName) {
    if (!sceneName) return '';
    const fptLabels = {
        scene_fpt1: 'FPT - Không gian tổng quan',
        scene_fpt2a: 'FPT - Thiết bị mạng ODN',
        scene_fpt3a: 'FPT - Khu vực thực hành',
        scene_fpt4a: 'FPT - Khu vực cuối phòng'
    };
    if (fptLabels[sceneName]) return fptLabels[sceneName];
    const cieLabels = {
        scene_cie_cuatruoc: 'CIE - Cửa trước',
        scene_cie_cuasau: 'CIE - Cửa sau',
        scene_cie_sanhchinh1h: 'CIE - Sảnh chính 1',
        scene_cie_sanhchinh2f: 'CIE - Sảnh chính 2',
        scene_cie_sanhchinh3f: 'CIE - Sảnh chính 3',
        scene_cie_sanhchinh4f: 'CIE - Sảnh chính 4',
        scene_cie_sanhchinh5: 'CIE - Sảnh chính 5',
        scene_cie_sanhsau: 'CIE - Sảnh sau'
    };
    if (cieLabels[sceneName]) return cieLabels[sceneName];
    const hallway = sceneName.match(/^scene_cie_hl(\d+)(?:_[a-z0-9]+)?$/);
    if (hallway) return `CIE - Hành lang ${hallway[1]}`;
    const room = sceneName.match(/^scene_cie_p(\d+)(?:_([a-z0-9]+))?$/);
    if (room) return `CIE - Phòng ${room[1]}${room[2] ? ` (${room[2].toUpperCase()})` : ''}`;

    const groupTitle = getGroupTitleForScene(sceneName);
    if (groupTitle && /^\d+$/.test(groupTitle)) return `Điểm tham quan ${groupTitle}`;
    if (groupTitle && groupTitle !== sceneName && !/^GPBK/i.test(groupTitle)) return groupTitle;
    const xmlTitle = krpano ? (krpano.get(`scene[${sceneName}].title`) || '') : '';
    if (/^\d+$/.test(xmlTitle)) return `Điểm tham quan ${xmlTitle}`;
    return xmlTitle || sceneName.replace(/^scene_/, '').replace(/_/g, ' ');
}

let persistentHotspotLabels = [];
let persistentHotspotLabelTimer = 0;
let sceneVisualReady = false;
let sceneVisualReadyTimer = 0;
let hotspotLabelsReadyAt = Number.POSITIVE_INFINITY;

// Them chu phia tren hotspot
const hotspotLabelMap = {
    'spot1955789621': 'Lối vào cổng chính',
    'spot1955790331': 'Lối ra cổng chính',
    'spot1958162037': 'Lối vào tòa A1',
    'spot1955816296': 'Lối ra',
    'spot1955816383': 'Hướng vào Cie',
    'spot1955817620': 'Hướng vào Naver',
    'spot1955790715': 'Hướng ra tòa A2',
    'spot1955818317': 'Lối vào tòa A1',
    'spot1955795935': 'Hướng ra kí túc xá',
    'spot1955791467': 'Hướng ra tòa A2',
    'spot1955814281': 'Lối vào tòa A2',
    'spot1955791907': 'Hướng ra thư viện',
    'spot2064647047': 'Lối vào khu vực phòng học',
    'spot2064668574': 'Phòng 503',
    'spot2064727680': 'Phòng 504',
    'spot2064662582': 'Phòng 505',
    'spot2064670297': 'Phòng 503',
    'spot2064729964': 'Phòng 504',
    'spot2064730512': 'Phòng 502',
    'spot2064657073': 'Phòng 506',
    'spot2064653483': 'Phòng 506',
    'spot2064654222': 'Phòng 501',
    'spot2064652296': 'Lối ra cửa sau',
    'spot2064652725': 'Lối vào khu vực phòng học',
    'spot2064644334': 'Lối vào sảnh chính Cie',
    'spot1955821036': 'Lối vào thư viện',
    'spot1955821476': 'Hướng ra tòa A3',
    'spot1955809495': 'Lối vào tòa A3',
    'spot1955821904': 'Hướng ra sân bóng chuyền',
    'spot1955821867': 'Hướng ra thư viện',
    'spot1958162455': 'Lối vào hội trường A2',
    'spot1955797526': 'Khu vực để xe',
    'spot1955820214': 'Sân bóng chuyền',
    'spot1955818535': 'Lối vào nhà ăn',
    'spot1955807182': 'Hướng ra kí túc xá',
    'spot2067815808': 'Lối vào Game lab',
    'spot1955798112': 'Sân bóng rổ',
    'spot1955799014': 'Hướng ra kí túc xá',
    'spot2076860853': 'Phòng thực hành Viettel',
    'spot2076877253': 'Hướng sang phòng hội thảo',
    'spot2076877604': 'Hướng sang phòng thực hành',
    'spot2076877693': 'Phòng hội thảo Viettel',
    'spot2076873136': 'Hướng sang phòng thực hành',
    'spot2076872754': 'Hướng sang phòng hội thảo',
    'spot2076874981': 'Hướng sang phòng Server',
    'spot1955819184': 'Lối vào nhà ăn',
    'spot1955799511': 'Hướng ra CTS lab',
    'spot1955799238': 'Hướng ra nhà ăn',
    'spot_samsung_entrance': 'Lối vào Samsung lab',
    'spot1958163031': 'Lối vào hội trường A2',
    'spot2092315972'  : 'Lối vào CTS lab',
    'spot2092320057'  : 'Hướng sang phòng thực hành',
    'spot2092322586'  : 'Lối vào phòng thực hành',
    'spot1958161240': 'Hướng ra tòa A1'
};

function getNavigationHotspotLabel(hotspotName) {
    if (!hotspotName) return '';
    return hotspotLabelMap[hotspotName] || '';
}

function disableLegacyNavigationTooltip() {
    if (!krpano) return;
    try {
        krpano.set('skin_settings.tooltips_hotspots', false);
        krpano.set('layer[skin_tooltip].visible', false);
        krpano.set('layer[skin_tooltip].alpha', 0);
    } catch (error) {
        console.log('Skip legacy hotspot tooltip cleanup:', error);
    }
}

function positionPersistentHotspotLabels() {
    if (!krpano || !persistentHotspotLabels.length) return;
    // krpano co the bao hotspot "loaded" som hon vai frame so voi luc texture
    // duoc ve that su. Giu toan bo nhan an den sau moc an toan de chu khong chay truoc icon.
    if (!sceneVisualReady || performance.now() < hotspotLabelsReadyAt) {
        persistentHotspotLabels.forEach((item) => { item.element.hidden = true; });
        return;
    }
    disableLegacyNavigationTooltip();
    const pano = document.getElementById('pano');
    const width = pano ? pano.clientWidth : 0;
    const height = pano ? pano.clientHeight : 0;

    persistentHotspotLabels.forEach((item, index) => {
        // Luôn tra cứu theo TÊN hotspot (không dùng index mảng)
        const stillExists = krpano.get(`hotspot[${item.hotspotName}].name`);
        if (!stillExists) {
            item.element.hidden = true;
            return;
        }

        // Chi hien chu khi CHINH ANH HOTSPOT da tai va dang hien.
        // Nho vay chu va bieu tuong xuat hien cung luc, khong con chu "chay truoc".
        const hotspotLoaded = krpano.get(`hotspot[${item.hotspotName}].loaded`);
        const hotspotVisible = krpano.get(`hotspot[${item.hotspotName}].visible`);
        const hotspotAlpha = Number(krpano.get(`hotspot[${item.hotspotName}].alpha`));
        const hotspotReady = (hotspotLoaded === true || hotspotLoaded === 'true' || hotspotLoaded === 1)
            && hotspotVisible !== false
            && hotspotVisible !== 'false'
            && (!Number.isFinite(hotspotAlpha) || hotspotAlpha > 0.01);
        if (!hotspotReady) {
            item.element.hidden = true;
            return;
        }

        const ath = Number(krpano.get(`hotspot[${item.hotspotName}].ath`));
        const atv = Number(krpano.get(`hotspot[${item.hotspotName}].atv`));
        if (!Number.isFinite(ath) || !Number.isFinite(atv)) {
            item.element.hidden = true;
            return;
        }

        // Điểm gốc
        krpano.call(`spheretoscreen(${ath},${atv},ptit_hs_label_x_${index},ptit_hs_label_y_${index});`);
        const x = Number(krpano.get(`ptit_hs_label_x_${index}`));
        const y = Number(krpano.get(`ptit_hs_label_y_${index}`));
        const athRight = ath + 5;
        krpano.call(`spheretoscreen(${athRight},${atv},ptit_hs_label_rx_${index},ptit_hs_label_ry_${index});`);
        const rx = Number(krpano.get(`ptit_hs_label_rx_${index}`));
        const ry = Number(krpano.get(`ptit_hs_label_ry_${index}`));

        const visible = Number.isFinite(x) && Number.isFinite(y) && x > -100 && y > -60 && x < width + 100 && y < height + 80;
        item.element.hidden = !visible;
        if (!visible) return;

        // Dong bo ca do mo khi hotspot dang pulse/fade.
        item.element.style.opacity = Number.isFinite(hotspotAlpha)
            ? String(Math.max(0, Math.min(1, hotspotAlpha)))
            : '1';

        let angleDeg = 0;
        if (Number.isFinite(rx) && Number.isFinite(ry)) {
            const dx = rx - x;
            const dy = ry - y;
            angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
        }

        const offsetY = item.labelOffsetY || 36;
        item.element.style.transform =
            `translate3d(${x}px, ${y - offsetY}px, 0) translateX(-50%) rotate(${angleDeg}deg)`;
    });
}

function hotspotLabelLoop() {
    positionPersistentHotspotLabels();
    persistentHotspotLabelTimer = window.requestAnimationFrame(hotspotLabelLoop);
}

function renderPersistentHotspotLabels() {
    const pano = document.getElementById('pano');
    if (!pano || !krpano) return;
    let overlay = document.getElementById('persistent-hotspot-labels');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'persistent-hotspot-labels';
        overlay.className = 'persistent-hotspot-labels';
        pano.appendChild(overlay);
    }
    overlay.replaceChildren();
    persistentHotspotLabels = [];
    disableLegacyNavigationTooltip();

    const total = Number(krpano.get('hotspot.count')) || 0;
    for (let i = 0; i < total; i += 1) {
        const hotspotName = krpano.get(`hotspot[${i}].name`) || '';
        if (!hotspotName) continue;
        const style = krpano.get(`hotspot[${hotspotName}].style`) || '';
        const linkedScene = krpano.get(`hotspot[${hotspotName}].linkedscene`) || '';
        const externalLabel = krpano.get(`hotspot[${hotspotName}].ptit_label`) || '';
        const externalUrl = krpano.get(`hotspot[${hotspotName}].ptit_url`) || '';
        if ((!linkedScene && !externalLabel) || !style.split('|').includes('skin_hotspotstyle')) continue;
        const label = externalLabel || getNavigationHotspotLabel(hotspotName);
        if (!label) continue;
        const element = document.createElement('span');
        element.className = 'persistent-hotspot-label';
        element.textContent = label;
        if (externalUrl) {
            element.classList.add('persistent-hotspot-label--external');
            element.setAttribute('role', 'button');
            element.tabIndex = 0;
            const openExternalTour = () => { window.location.href = externalUrl; };
            element.addEventListener('click', openExternalTour);
            element.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openExternalTour();
                }
            });
        }
        overlay.appendChild(element);
        const cs = getComputedStyle(element);
        const lineHeightPx = parseFloat(cs.lineHeight) || 16;
        const contentHeight = element.offsetHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        const lineCount = Math.max(1, Math.round(contentHeight / lineHeightPx));
        const labelOffsetY = lineCount >= 2 ? 50 : 36;

        persistentHotspotLabels.push({ hotspotName, element, labelOffsetY });
    }
    positionPersistentHotspotLabels();
    window.cancelAnimationFrame(persistentHotspotLabelTimer);
    persistentHotspotLabelTimer = window.requestAnimationFrame(hotspotLabelLoop);
}

function updateEdgeSceneNavigation(sceneName) {
    if (!krpano) return;
    const nav = document.getElementById('edge-scene-navigation');
    if (!nav) return;
    nav.hidden = true;   
    return;  
    const isCieScene = sceneName.startsWith('scene_cie_');
    const names = getAllSceneNamesFromTour().filter((name) =>
        name.startsWith('scene_cie_') === isCieScene
    );
    if (names.length < 2) {
        nav.hidden = true;
        return;
    }
    nav.hidden = false;
    const index = Math.max(0, names.indexOf(sceneName));
    const previousName = index > 0 ? names[index - 1] : '';
    const nextName = index < names.length - 1 ? names[index + 1] : '';
    const previousButton = nav.querySelector('[data-edge-direction="previous"]');
    const nextButton = nav.querySelector('[data-edge-direction="next"]');
    const previousTitle = previousName ? formatEdgeSceneTitle(previousName) : '';
    const nextTitle = nextName ? formatEdgeSceneTitle(nextName) : '';
    previousButton.hidden = !previousName;
    nextButton.hidden = !nextName;
    previousButton.dataset.targetScene = previousName;
    nextButton.dataset.targetScene = nextName;
    previousButton.querySelector('.edge-scene-nav__label').textContent = previousTitle;
    nextButton.querySelector('.edge-scene-nav__label').textContent = nextTitle;
    previousButton.setAttribute('aria-label', `Scene trước: ${previousTitle}`);
    nextButton.setAttribute('aria-label', `Scene tiếp theo: ${nextTitle}`);
}

function initEdgeSceneNavigation() {
    if (document.getElementById('edge-scene-navigation')) return;
    const main = document.querySelector('.app-main');
    if (!main) return;
    const nav = document.createElement('nav');
    nav.id = 'edge-scene-navigation';
    nav.className = 'edge-scene-nav';
    nav.setAttribute('aria-label', 'Chuyển scene');
    nav.innerHTML = `
        <button class="edge-scene-nav__button edge-scene-nav__button--previous" data-edge-direction="previous" type="button">
            <span class="edge-scene-nav__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg></span>
            <span class="edge-scene-nav__copy"><small>Về scene trước</small><strong class="edge-scene-nav__label"></strong></span>
        </button>
        <button class="edge-scene-nav__button edge-scene-nav__button--next" data-edge-direction="next" type="button">
            <span class="edge-scene-nav__copy"><small>Đến scene tiếp theo</small><strong class="edge-scene-nav__label"></strong></span>
            <span class="edge-scene-nav__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></span>
        </button>`;
    nav.addEventListener('click', (event) => {
        const button = event.target.closest('.edge-scene-nav__button');
        if (!button || !krpano) return;
        const targetScene = button.dataset.targetScene;
        if (!targetScene) return;
        krpano.call(`skin_loadscene(${targetScene},get(skin_settings.loadscene_blend));`);
    });
    main.appendChild(nav);
}

function handleSceneChange(sceneName) {
    console.log("Active Scene:", sceneName);
    currentSceneName = sceneName;
    sceneVisualReady = false;
    hotspotLabelsReadyAt = Number.POSITIVE_INFINITY;
    window.clearTimeout(sceneVisualReadyTimer);
    // DARK CAMPUS UI: phat su kien de lop giao dien doc dung scene dang chay.
    // Khong thay doi logic tour; xoa dong nay neu xoa campus-dark-ui.js.
    window.dispatchEvent(new CustomEvent('ptit:scenechange', { detail: { sceneName } }));
    const oldOverlay = document.getElementById('persistent-hotspot-labels');
    if (oldOverlay) oldOverlay.replaceChildren();
    persistentHotspotLabels = [];
    updateEdgeSceneNavigation(sceneName);
    closeHotspotInfo();
    closeInfo();
    removeLegacyInfoSpot();
    renderSceneHotspots(sceneName);
    enforceStableNavigationHotspotTextures();
    document.querySelectorAll('.scene-item').forEach(el => el.classList.remove('active'));
    
    const activeItem = document.getElementById(`nav-${sceneName}`);
    if (activeItem) {
        activeItem.classList.add('active');
        const activeThumbFromKrpano = krpano ? krpano.get(`scene[${sceneName}].thumburl`) : '';
        const activeThumbFallback = (sceneData[sceneName] && sceneData[sceneName].thumb) ? sceneData[sceneName].thumb : '';
        const activeThumb = activeThumbFromKrpano || activeThumbFallback;
        const activeImg = activeItem.querySelector('img');
        if (activeImg && activeThumb) {
            activeImg.src = activeThumb;
        }
        const groupContainer = activeItem.closest('.accordion-group');
        if (groupContainer && !groupContainer.classList.contains('expanded')) {
            groupContainer.classList.add('expanded');
            groupContainer.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'true');
        }
        groupContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const data = getMergedSceneInfo(sceneName);

    const popup = document.getElementById('info-popup');
    if (popup) {
        document.getElementById('popup-title').innerText = getGroupTitleForScene(sceneName);
        document.getElementById('popup-desc').innerText = data.description || 'Thông tin chi tiết đang được cập nhật...';
        
        const purposeEl = document.getElementById('popup-purpose');
        
        if (purposeEl) purposeEl.innerText = data.purpose || 'Tham quan khuôn viên Học viện';
        
        const imgEl = document.getElementById('popup-img');
        if (imgEl) imgEl.src = data.thumb || `panos/${sceneName.replace('scene_', '')}.tiles/thumb.jpg`;
    }
    if (popupSpeechActive) stopPopupSpeech();

    const infoAllowed = isSceneInConfiguredGroups(sceneName);
    setInfoButtonEnabled(infoAllowed);
    if (!infoAllowed) closeInfo();
}

// Chỉ báo giao diện scene đã sẵn sàng: dùng chung cho chữ hotspot và popup lab.
function handleSceneLoadComplete(sceneName) {
    const loadedScene = sceneName || (krpano && krpano.get('xml.scene')) || '';
    window.clearTimeout(sceneVisualReadyTimer);
    sceneVisualReadyTimer = window.setTimeout(() => {
        if (!krpano || loadedScene !== krpano.get('xml.scene')) return;
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                if (!krpano || loadedScene !== krpano.get('xml.scene')) return;
                sceneVisualReady = true;
                // Cho engine mot khoang ngan de ve texture hotspot len WebGL truoc khi hien chu.
                hotspotLabelsReadyAt = performance.now() + 450;
                renderPersistentHotspotLabels();
                window.dispatchEvent(new CustomEvent('ptit:sceneready', {
                    detail: { sceneName: loadedScene }
                }));
            });
        });
    }, 80);
}

function openInfo() {
    if (!isSceneInConfiguredGroups(currentSceneName)) return;
    document.getElementById('info-popup').classList.add('active');
    document.getElementById('popup-overlay').classList.add('active');
}

function closeInfo() {
    document.getElementById('info-popup').classList.remove('active');
    document.getElementById('popup-overlay').classList.remove('active');
    stopHotspotAudio();
    stopPopupSpeech();
    if (popupSpeakBtn) popupSpeakBtn.hidden = false;
}

function toggleInfo() {
    if (!isSceneInConfiguredGroups(currentSceneName)) return;
    const popup = document.getElementById('info-popup');
    if (popup.classList.contains('active')) {
        closeInfo();
    } else {
        openInfo();
    }
}

/**
 * UI Controls
 */
let audioStarted = false;
let audioMuted = true; 
window.ptitAudioAllowed = () => audioStarted && !audioMuted;
const SvgSoundOn = '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
const SvgSoundOff = '<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';

function toggleSound() {
    const btn = document.getElementById('sound-btn');
    if (!audioStarted) {
        krpano.call(`playsound(bgm, '/assets/audio/background.mp3', true, ${BACKGROUND_MUSIC_VOLUME});`);
        audioStarted = true;
        audioMuted = false;
        setInfopostMusicDucked(currentHotspotDucksMusic);
        if(btn) {
            btn.innerHTML = SvgSoundOn;
            btn.classList.add('playing');
        }
        window.dispatchEvent(new CustomEvent('ptit:audiochange', { detail: { enabled: true } }));
        return;
    }
    
    audioMuted = !audioMuted;
    if (audioMuted) {
        krpano.call("pausesound(bgm);");
        if(btn) {
            btn.innerHTML = SvgSoundOff;
            btn.classList.remove('playing');
        }
    } else {
        krpano.call("resumesound(bgm);");
        setInfopostMusicDucked(currentHotspotDucksMusic);
        if(btn) {
            btn.innerHTML = SvgSoundOn;
            btn.classList.add('playing');
        }
    }
    window.dispatchEvent(new CustomEvent('ptit:audiochange', { detail: { enabled: !audioMuted } }));
}

// Nút loa là trạng thái âm thanh toàn cục, gồm infoport và giọng đọc popup.
window.addEventListener('ptit:audiochange', (event) => {
    if (event.detail?.enabled) return;
    stopHotspotAudio();
    stopPopupSpeech();
    window.speechSynthesis?.cancel();
});
window.addEventListener('ptit:narrationstart', () => {
    if (audioStarted && !audioMuted && krpano) {
        krpano.call(`tween(sound[bgm].volume, ${BACKGROUND_MUSIC_DUCKED_VOLUME}, 0.25);`);
    }
});

window.addEventListener('ptit:narrationend', () => {
    if (audioStarted && !audioMuted && krpano) {
        krpano.call(`tween(sound[bgm].volume, ${BACKGROUND_MUSIC_VOLUME}, 0.25);`);
    }
});
document.addEventListener('click', (event) => {
    if (event.target.closest?.('#sound-btn')) return;
    if (!audioStarted && krpano) {
        toggleSound(); 
    }
}, { once: true });

function toggleFullscreen() {
    krpano.call("switch(fullscreen)");
}

function toggleSidebar() {
    const container = document.querySelector('.app-container');
    container.classList.toggle('sidebar-collapsed');
}

document.addEventListener('DOMContentLoaded', () => {
    disableNativeTitleTooltips();
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.getElementById('popup-overlay');
    if (closeBtn) closeBtn.addEventListener('click', closeInfo);
    if (overlay) overlay.addEventListener('click', closeInfo);

    const soundBtn = document.getElementById('sound-btn');
    const fsBtn = document.getElementById('fs-btn');
    const infoBtn = document.getElementById('info-btn');
    
    if (soundBtn) soundBtn.addEventListener('click', toggleSound);
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);
    if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
            if (infoBtn.classList.contains('disabled')) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            toggleInfo();
        });
    }
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
    const hotspotCloseBtn = document.getElementById('hotspot-info-close');
    if (hotspotCloseBtn) hotspotCloseBtn.addEventListener('click', closeHotspotInfo);
    const hotspotMoreBtn = document.getElementById('hotspot-info-more');
    if (hotspotMoreBtn) {
        hotspotMoreBtn.addEventListener('click', () => {
            if (!currentSceneName && krpano) {
                currentSceneName = krpano.get('xml.scene');
            }
            if (currentSceneName) {
                handleSceneChange(currentSceneName);
            }
            openInfo();
        });
    }

    const popupActions = document.querySelector('.popup-actions');

    if (popupActions && !document.getElementById('popup-speak-btn')) {
        const speakBtn = document.createElement('button');
        speakBtn.id = 'popup-speak-btn';
        speakBtn.type = 'button';
        popupActions.appendChild(speakBtn);
    }
    popupSpeakBtn = document.getElementById('popup-speak-btn');
    if (popupSpeakBtn) {
        popupSpeakBtn.addEventListener('click', togglePopupSpeech);
        updatePopupSpeakButtonUI();
    }

    setInfoButtonEnabled(isSceneInConfiguredGroups(currentSceneName));
});

window.handleSceneChange = handleSceneChange;
window.handleSceneLoadComplete = handleSceneLoadComplete;
window.onready = onready;
window.openHotspotInfo = openHotspotInfo;
