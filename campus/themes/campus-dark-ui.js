(function () {
    const params = new URLSearchParams(window.location.search);
   if (params.get('ui') === 'current') return;
    // DiEu CHINH THU CONG TEN KHU VUC DAC THU  
    const DARK_CAMPUS_AREA_LABELS = {
        scene_1: 'Cổng chính',
        scene_2: 'Cổng chính',
        scene_vswthdn_nhtgtt_1: 'Vườn Nhật',
        scene_gpbk2217_1773131018070: 'Sân trường',
        scene_gpbk2218_1773131077123: 'Sân trường',
        scene_gpbk2252_1773200546003: 'Sân trường',
        scene_gpbk2256_1773200625993: 'Sân trường',
        scene_gpbk2257_1773200668780: 'Sân trường',
        scene_gpbk2258_1773200722125:'Sân trường',
        scene_gpbk2259_1773200765441:'Sân trường',
        scene_gpbk2195_1773130397237:'Sân trường',
        scene_gpbk2201_1773130534438:'Sân trường',
        scene_gpbk2251_1773200519286:'Sân trường',
        scene_gpbk2250_1773200504692:'Sân trường',
        scene_gpbk2270_1773201080635: 'CTS Lab',
        scene_gpbk2271_1773201137016: 'CTS Lab',
        scene_10: 'Sân trường',
        scene_gpbk0065_1773206564173: 'Tòa A2',
        scene_gpbk0066_1773206449967: 'Tòa A2',
        scene_gpbk0064_1773206538579: 'Tòa A2',
        scene_gpbk2208_1773130810995: 'Tòa A2',
        scene_gpbk2209_1773130847752: 'Tòa A2',
        scene_gpbk2237_1773200161431: 'Tòa A3',
        scene_ttgnng_3_qri_lpqn_ttgnng_6: 'Tòa A3',
        scene_hpgnh_lang_ttgnng3_a3: 'Tòa A3',
        scene_ttgnng3_a3_nthri_qua_a2jpg: 'Tòa A3',
        scene_ctgnu_thang_bpqn_a3: 'Tòa A3',
        scene_ctgnu_thang_bpqn_a2: 'Tòa A3',
        scene_cau_thang_len_tang3_a3: 'Tòa A3',
        scene_gpbk2235_1773200094715: 'Tòa A3',
        scene_gpbk2236_1773200102767: 'Tòa A3',
        scene_gpbk2238_1773200190315: 'Tòa A3',
        scene_gpbk2196_1773130435030: 'Tòa A3',
        scene_gpbk2198_1773130484114: 'Tòa A3',
        scene_gpbk2197_1773130463160: 'Tòa A3',
        scene_stgjnh_ttgnng3_a3_phtgji: 'Tòa A3',
        scene_phpyng_hthnc_ttgnng3a3_1: 'Tòa A3',
        scene_phpyng_hthnc_ttgnng3a3_2: 'Tòa A3',
        scene_gpbk2202_1773130555661: 'Thư viện',
        scene_gpbk2282_1773201339253: 'Canteen',
        scene_gpbk2283_1773201346417: 'Canteen',
        scene_gpbk2284_1773201364343: 'Canteen',
        scene_gpbk2255_1773200617042: 'Khu vực để xe',
        scene_gpbk2285_1773201384046: 'Phòng ăn cán bộ giảng viên',
        scene_gpbk2260_1773200808324: 'Sân bóng rổ',
        scene_gpbk2261_1773200833764: 'Sân bóng rổ',
        scene_gpbk2286_1773201396711: 'Sân bóng chuyền',
        scene_gpbk2253_1773200582544: 'Không gian xanh',
        scene_gpbk2254_1773200608225: 'Không gian xanh',
        scene_gpbk0066_1773206449967: 'Hội trường A2',
        scene_gpbk2263_1773200851067: 'Kí túc xá'
    };

    // Ten scene dac thu van giu trong DARK_CAMPUS_AREA_LABELS o tren.

    document.body.classList.add('campus-ui-dark');

    function initDarkCampusUI() {
        const container = document.querySelector('.app-container');
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const headerActions = document.querySelector('.header-actions');
        if (!container || !sidebar || !sidebarToggle || !headerActions) return;

        // Ban den mo dau voi panorama toan man hinh; bam menu moi hien danh muc.
        container.classList.add('sidebar-collapsed');
        document.body.classList.remove('dark-menu-open');

        // Ky hieu o vuong do theo dung component danh muc trong Figma.
        const groupMarks = ['KV', 'A1', 'LAB', 'A2', 'A3', 'TI'];
        function assignDarkGroupMarks() {
            document.querySelectorAll('.accordion-group').forEach(function (group, index) {
                const mark = groupMarks[index] || 'PT';
                group.dataset.darkMark = mark;
                const header = group.querySelector('.accordion-header');
                if (header) header.dataset.darkMark = mark;
            });
        }
        assignDarkGroupMarks();

        sidebarToggle.setAttribute('aria-label', 'Mở danh mục địa điểm');
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarToggle.addEventListener('click', function () {
            window.setTimeout(function () {
                const isOpen = !container.classList.contains('sidebar-collapsed') || sidebar.classList.contains('open');
                document.body.classList.toggle('dark-menu-open', isOpen);
                sidebarToggle.setAttribute('aria-expanded', String(isOpen));
                sidebarToggle.setAttribute('aria-label', isOpen ? 'Đóng danh mục địa điểm' : 'Mở danh mục địa điểm');
            }, 0);
        });

        function closeDarkLocationMenu() {
            container.classList.add('sidebar-collapsed');
            sidebar.classList.remove('open');
            document.body.classList.remove('dark-menu-open');
            sidebarToggle.setAttribute('aria-expanded', 'false');
            sidebarToggle.setAttribute('aria-label', 'Mở danh mục địa điểm');
        }

        sidebar.addEventListener('click', function (event) {
            if (event.target.closest('.scene-item')) closeDarkLocationMenu();
        });

        let outsidePointer = null;
        let outsidePointerWasDragged = false;
        const outsideClickDragThreshold = 8;

        document.addEventListener('pointerdown', function (event) {
            outsidePointer = {
                id: event.pointerId,
                x: event.clientX,
                y: event.clientY
            };
            outsidePointerWasDragged = false;
        }, true);

        document.addEventListener('pointermove', function (event) {
            if (!outsidePointer || outsidePointer.id !== event.pointerId) return;
            const movedX = event.clientX - outsidePointer.x;
            const movedY = event.clientY - outsidePointer.y;
            if (Math.hypot(movedX, movedY) > outsideClickDragThreshold) {
                outsidePointerWasDragged = true;
            }
        }, true);

        document.addEventListener('pointerup', function (event) {
            if (!outsidePointer || outsidePointer.id !== event.pointerId) return;
            // Su kien click (neu co) chay ngay sau pointerup, nen reset o tick tiep theo.
            window.setTimeout(function () {
                outsidePointer = null;
                outsidePointerWasDragged = false;
            }, 0);
        }, true);

        document.addEventListener('pointercancel', function () {
            outsidePointer = null;
            outsidePointerWasDragged = false;
        }, true);

        document.addEventListener('click', function (event) {
            if (container.classList.contains('sidebar-collapsed')) return;
            if (outsidePointerWasDragged) return;
            if (event.target.closest('#sidebar') || event.target.closest('#sidebar-toggle')) return;
            closeDarkLocationMenu();
        });

        // Bang ten dia diem o giua phia tren, tach rieng khoi header trang.
        const locationCard = document.createElement('section');
        locationCard.className = 'dark-campus-location';
        locationCard.setAttribute('aria-live', 'polite');
        locationCard.innerHTML = '<strong>Cổng chính</strong><span class="dark-campus-location__detail"><i></i><span class="dark-campus-location__detail-text"></span></span>';
        document.body.appendChild(locationCard);

        function getDarkAreaTitle(sceneName) {
            // Ten o duoi la KHU VUC LON, khong doi theo tung scene/phong ben trong.
            if (DARK_CAMPUS_AREA_LABELS[sceneName]) return DARK_CAMPUS_AREA_LABELS[sceneName];
            // Scene ngoai troi/khong co ten rieng.
            return 'Sân trường';
        }

        // O VI TRI PHIA TREN: du lieu tap trung trong config/locations.js.
        // Scene dac thu chua khai bao dung bang ten chinh xac o dau file nay.
        function findConfiguredLocation(sceneName) {
            return window.PTIT_FIND_LOCATION?.(sceneName) || null;
        }

        function syncLocationCard(sceneName) {
            const actualScene = sceneName || (typeof krpano !== 'undefined' && krpano ? krpano.get('xml.scene') : 'scene_1');
            const configuredLocation = findConfiguredLocation(actualScene);
            const primary = configuredLocation
                ? (configuredLocation.primary || configuredLocation.label)
                : getDarkAreaTitle(actualScene);
            const secondary = configuredLocation
                ? (configuredLocation.secondary || '')
                : '';
            locationCard.querySelector('strong').textContent = primary;
            locationCard.querySelector('.dark-campus-location__detail-text').textContent = secondary;
            locationCard.classList.toggle('dark-campus-location--single-line', !secondary);
            syncDarkActivePlace(actualScene);
        }

        // DIA DIEM DANG DUNG: moi scene con cung tro ve mot dong dai dien trong menu.
        function getDarkActiveSidebarScene(sceneName) {
            const configuredLocation = findConfiguredLocation(sceneName);
            if (configuredLocation?.entryScene) return configuredLocation.entryScene;
            return '';
        }

        // Bo dieu khien chung goi lai dung mapping
        window.PTIT_getDarkActiveSidebarScene = getDarkActiveSidebarScene;

        function syncDarkActivePlace(sceneName) {
            const activeId = getDarkActiveSidebarScene(sceneName);
            document.querySelectorAll('#scene-list .scene-item.active').forEach(function (item) {
                if (item.id !== `nav-${activeId}`) item.classList.remove('active');
            });
            if (!activeId) return;
            const activeItem = document.getElementById(`nav-${activeId}`);
            if (activeItem && !activeItem.classList.contains('active')) activeItem.classList.add('active');
        }

        const sceneList = document.getElementById('scene-list');
        if (sceneList) {
            new MutationObserver(function () {
                assignDarkGroupMarks();
                syncLocationCard();
            }).observe(sceneList, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: ['class']
            });
        }
        window.addEventListener('ptit:scenechange', function (event) {
            const sceneName = event.detail && event.detail.sceneName;
            syncLocationCard(sceneName);
        });
        // Icon loa net mong giong bo icon Figma; su kien am thanh van do app.js xu ly.
        const soundButton = document.getElementById('sound-btn');
        const soundOnIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4Z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>';
        const soundOffIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4Z"/><path d="m16 10 5 5m0-5-5 5"/></svg>';
        function syncDarkSoundIcon(event) {
            if (!soundButton) return;
            const enabled = event && event.detail ? Boolean(event.detail.enabled) : soundButton.classList.contains('playing');
            soundButton.innerHTML = enabled ? soundOnIcon : soundOffIcon;
        }
        window.addEventListener('ptit:audiochange', syncDarkSoundIcon);
        syncDarkSoundIcon();
        syncLocationCard();

    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDarkCampusUI, { once: true });
    } else {
        initDarkCampusUI();
    }
})();
