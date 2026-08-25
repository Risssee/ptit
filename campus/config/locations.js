// CONFIG VI TRI DUNG CHUNG: scene, diem mo dau, goc nhin va nhom sidebar.
// Sidebar, the vi tri, nut quay ve va minimap deu tra cuu tu file nay.
(function (root) {
  'use strict';

  const locations = [
    {
      id: 'cong_chinh',
      group: 'khuon_vien',
      label: 'Cổng chính',
      entryScene: 'scene_1',
      scenes: ['scene_1', 'scene_2'],
      scenePatterns: ['^scene_\\d+$']
    },
    {
      id: 'vuon_nhat',
      group: 'khuon_vien',
      label: 'Vườn Nhật',
      entryScene: 'scene_vswthdn_nhtgtt_1',
      scenePrefixes: ['scene_vswthdn_nhtgtt_']
    },
    {
      id: 'toa_A1',
      group: 'toa_A1',
      label: 'Tòa A1',
      entryScene: 'scene_gpbk2218_1773131077123',
      scenePatterns: ['^scene_gpbk22(?:17|18|19|20|21|22|24|25|26)_']
    },
    {
      id: 'cie',
      group: 'toa_A1',
      label: 'Trung tâm CIE',
      primary: 'Tòa A1',
      secondary: 'CIE',
      entryScene: 'scene_cie_cuatruoc',
      entryLookAt: { h: 0, v: 0, fov: 120 },
      scenePrefixes: ['scene_cie_'],
      labId: 'cie'
    },
    {
      id: 'cts',
      group: 'phong_lab',
      label: 'Lab CTS',
      primary: 'Trung tâm & phòng lab',
      secondary: 'CTS Lab',
      entryScene: 'scene_cts_c1',
      scenePrefixes: ['scene_cts_', 'scene_cts2_'],
      scenePatterns: ['^scene_gpbk227[01]_'],
      labId: 'cts'
    },
    {
      id: 'toa_A2',
      group: 'toa_A2',
      label: 'Tòa A2',
      entryScene: 'scene_10',
      scenes: ['scene_10'],
      scenePatterns: ['^scene_(?:gpbk22(?:39|4\\d|5\\d)|gpbk238[4-9]|.*a2|ttgnng2|ttgnng3a2|ttgnng8)']
    },
    {
      id: 'phong_hoc_A2',
      group: 'toa_A2',
      label: 'Phòng học A2',
      entryScene: 'scene_gpbk0065_1773206564173',
      scenes: ['scene_gpbk0065_1773206564173']
    },
    {
      id: 'hoi_truong_A2',
      group: 'toa_A2',
      label: 'Hội trường A2',
      primary: 'Tòa A2',
      secondary: 'Hội trường A2',
      entryScene: 'scene_gpbk2244_1773200362117',
      scenes: ['scene_gpbk2244_1773200362117', 'scene_gpbk0066_1773206449967']
    },
    {
      id: 'viettel',
      group: 'toa_A2',
      label: 'Viettel Lab',
      primary: 'Tòa A2',
      secondary: 'Viettel Lab',
      entryScene: 'scene_viettel_cua1',
      entryLookAt: { h: 0, v: 0, fov: 120 },
      scenePrefixes: ['scene_viettel_'],
      labId: 'viettel'
    },
    {
      id: 'fpt',
      group: 'toa_A2',
      label: 'FPT Telecom Lab',
      primary: 'Tòa A2',
      secondary: 'FPT Lab',
      entryScene: 'scene_fpt1',
      entryLookAt: { h: 0, v: 0, fov: 120 },
      scenePrefixes: ['scene_fpt'],
      labId: 'fpt'
    },
    {
      id: 'samsung',
      group: 'toa_A2',
      label: 'Samsung Lab',
      primary: 'Tòa A2',
      secondary: 'Samsung Lab',
      entryScene: 'scene_gpbk2388_1773819661170',
      entryLookAt: { h: 120, v: 5, fov: 120 },
      scenes: ['scene_gpbk2388_1773819661170'],
      scenePrefixes: ['scene_ss_'],
      labId: 'samsung'
    },
    {
      id: 'toa_A3',
      group: 'toa_A3',
      label: 'Tòa A3',
      entryScene: 'scene_gpbk2195_1773130397237',
      scenePatterns: [
        '^scene_gpbk22(?:34|35|36|37|38)_',
        '^scene_gpbk219[5-8]_',
        '^scene_a3_',
        '^scene_(?:ttgnng_3|hpgnh_lang_ttgnng3|ttgnng3_a3|ctgnu_thang_bpqn_a[23]|cau_thang_len_tang3_a3|stgjnh_ttgnng3_a3|phpyng_hthnc_ttgnng3a3)'
      ]
    },
    {
      id: 'phong_hoc_A3',
      group: 'toa_A3',
      label: 'Phòng học A3',
      entryScene: 'scene_gpbk2237_1773200161431',
      scenes: ['scene_gpbk2237_1773200161431']
    },
    {
      id: 'game',
      group: 'toa_A3',
      label: 'Game Lab',
      primary: 'Tòa A3',
      secondary: 'Game Lab',
      entryScene: 'scene_game_0l',
      scenePrefixes: ['scene_game_'],
      labId: 'game'
    },
    {
      id: 'thu_vien',
      group: 'tien_ich',
      label: 'Thư viện',
      entryScene: 'scene_gpbk2201_1773130534438',
      entryLookAt: { h: 180, v: 0, fov: 120 },
      scenes: ['scene_gpbk2201_1773130534438', 'scene_gpbk2202_1773130555661'],
      scenePrefixes: ['scene_lib_'],
      scenePatterns: ['^scene_gpbk22(?:0[2-9]|1[0-6])_'],
      labId: 'library'
    },
    {
      id: 'canteen',
      group: 'tien_ich',
      label: 'Canteen',
      entryScene: 'scene_gpbk2282_1773201339253',
      scenePatterns: ['^scene_gpbk228[2-5]_']
    },
    {
      id: 'san_bong_ro',
      group: 'tien_ich',
      label: 'Sân bóng rổ',
      entryScene: 'scene_gpbk2260_1773200808324',
      scenePatterns: ['^scene_gpbk226[01]_']
    },
    {
      id: 'san_bong_chuyen',
      group: 'tien_ich',
      label: 'Sân bóng chuyền',
      entryScene: 'scene_gpbk2286_1773201396711',
      scenes: ['scene_gpbk2286_1773201396711']
    }
  ];

  function validateLocationConfig(groups, items) {
    const errors = [];
    const warnings = [];
    const groupIds = new Set((groups || []).map(function (group) { return group.id; }));
    const locationIds = new Set();
    const exactSceneOwners = new Map();

    items.forEach(function (location) {
      if (!location.id || locationIds.has(location.id)) errors.push('Location id trùng/thiếu: ' + location.id);
      locationIds.add(location.id);
      if (!groupIds.has(location.group)) errors.push(location.id + ': group không tồn tại: ' + location.group);
      if (!location.entryScene) errors.push(location.id + ': thiếu entryScene');

      (location.scenes || []).forEach(function (scene) {
        if (exactSceneOwners.has(scene)) {
          warnings.push(scene + ' đang thuộc cả ' + exactSceneOwners.get(scene) + ' và ' + location.id);
        } else {
          exactSceneOwners.set(scene, location.id);
        }
      });

      (location.scenePatterns || []).forEach(function (pattern) {
        try { new RegExp(pattern, 'i'); } catch (error) { errors.push(location.id + ': regex sai: ' + pattern); }
      });
    });

    return { valid: errors.length === 0, errors: errors, warnings: warnings };
  }

  root.PTIT_LOCATIONS = Object.freeze(locations.map(function (location) {
    return Object.freeze(location);
  }));
  // Tra cuu dung thu tu uu tien: scene chinh xac -> prefix -> regex.
  root.PTIT_FIND_LOCATION = function (sceneName) {
    if (!sceneName) return null;

    const exact = root.PTIT_LOCATIONS.find(function (location) {
      return Array.isArray(location.scenes) && location.scenes.includes(sceneName);
    });
    if (exact) return exact;

    const prefixed = root.PTIT_LOCATIONS.find(function (location) {
      return Array.isArray(location.scenePrefixes) && location.scenePrefixes.some(function (prefix) {
        return sceneName.startsWith(prefix);
      });
    });
    if (prefixed) return prefixed;

    return root.PTIT_LOCATIONS.find(function (location) {
      return Array.isArray(location.scenePatterns) && location.scenePatterns.some(function (pattern) {
        try { return new RegExp(pattern, 'i').test(sceneName); } catch (_) { return false; }
      });
    }) || null;
  };
  root.PTIT_VALIDATE_LOCATION_CONFIG = function () {
    return validateLocationConfig(root.PTIT_SIDEBAR_GROUPS || [], root.PTIT_LOCATIONS);
  };
})(typeof window !== 'undefined' ? window : globalThis);
