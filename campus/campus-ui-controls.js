(function () {
    // DIEU KHIEN DUNG CHUNG CHO CA GIAO DIEN DEN VA TRANG.
    function getRepresentativeScene(sceneName) {
        if (window.PTIT_getDarkActiveSidebarScene) {
            const darkResult = window.PTIT_getDarkActiveSidebarScene(sceneName);
            if (darkResult) return darkResult;
        }
        if (/^scene_cie_/i.test(sceneName)) return 'scene_cie_cuatruoc';
        if (/^scene_game_/i.test(sceneName)) return 'scene_game_0l';
        if (/^scene_fpt/i.test(sceneName)) return 'scene_fpt1';
        if (/^scene_viettel_/i.test(sceneName)) return 'scene_stgjnh_taafg8a2_githva';
        if (/^scene_ss_/i.test(sceneName)) return 'scene_ss_1';
        if (/^scene_lib_/i.test(sceneName)) return 'scene_gpbk2201_1773130534438';
        if (/^scene_vswthdn_nhtgtt_/i.test(sceneName)) return 'scene_vswthdn_nhtgtt_1';
        if (typeof sceneGroups !== 'undefined') {
            const group = sceneGroups.find(function (item) {
                return item && Array.isArray(item.scenes) && item.scenes.includes(sceneName);
            });
            if (group && group.scenes.length) return group.scenes[0];
        }
        return 'scene_1';
    }

    function initSharedCampusControls() {
        const headerActions = document.querySelector('.header-actions');
        if (!headerActions || document.querySelector('.campus-return')) return;

        const returnButton = document.createElement('button');
        returnButton.className = 'campus-return header-btn';
        returnButton.type = 'button';
        returnButton.title = 'Quay về vị trí';
        returnButton.setAttribute('aria-label', 'Quay về vị trí');
        returnButton.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.34 5.66M20 4v7h-7"/></svg>';
        returnButton.addEventListener('click', function () {
            if (typeof krpano === 'undefined' || !krpano) return;
            const representativeScene = getRepresentativeScene(krpano.get('xml.scene') || '');
            const launch = typeof sidebarSceneLaunchOverrides !== 'undefined'
                ? sidebarSceneLaunchOverrides[representativeScene]
                : null;
            if (launch) {
                krpano.call(`loadscene(${launch.targetScene}, null, MERGE, BLEND(1.0)); lookat(${launch.hlookat},${launch.vlookat},${launch.fov});`);
                return;
            }
            krpano.call(`loadscene(${representativeScene}, null, MERGE, BLEND(1.0));`);
        });
        headerActions.appendChild(returnButton);

        const homeButton = document.createElement('button');
        homeButton.className = 'campus-home header-btn';
        homeButton.type = 'button';
        homeButton.title = 'Về trang chủ';
        homeButton.setAttribute('aria-label', 'Về trang chủ');
        homeButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/></svg>';
        homeButton.addEventListener('click', function () {
            const homeUrl = new URL('../index.html', window.location.href);
            const isWhite = new URLSearchParams(window.location.search).get('ui') === 'current';
            homeUrl.searchParams.set('ui', isWhite ? 'current' : 'dark');
            window.location.href = homeUrl.href;
        });
        headerActions.appendChild(homeButton);

        const infoButton = document.createElement('button');
        infoButton.className = 'campus-intro-info header-btn';
        infoButton.type = 'button';
        infoButton.title = 'Xem lại giới thiệu';
        infoButton.setAttribute('aria-label', 'Xem lại giới thiệu');
        infoButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10v7"/><path d="M12 7h.01"/></svg>';
        infoButton.addEventListener('click', function () { window.ptitReopenCurrentLabIntro?.(); });
        document.body.appendChild(infoButton);

        function syncInfoButton(sceneName) {
            const actualScene = sceneName || (typeof krpano !== 'undefined' && krpano ? krpano.get('xml.scene') : '');
            infoButton.hidden = !window.ptitHasLabIntroForScene?.(actualScene);
        }
        window.addEventListener('ptit:scenechange', function (event) {
            syncInfoButton(event.detail && event.detail.sceneName);
        });
        syncInfoButton();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSharedCampusControls, { once: true });
    else initSharedCampusControls();
})();
