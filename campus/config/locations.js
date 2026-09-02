// CONFIG VI TRI DUNG CHUNG: scene, diem mo dau, goc nhin va nhom sidebar.
// Sidebar, the vi tri, nut quay ve va minimap deu tra cuu tu file nay.
(function (root) {
  'use strict';

  const locations = [
    {
      id: 'cong_chinh',
      group: 'khuon_vien',
      label: 'Cổng chính',
      entryScene: 'scene_ct',
      scenes: ['scene_ct'],
      //scenePrefixes: ['scene_ct_']
    },
    {
      id: 'vuon_nhat',
      group: 'toa_A2',
      label: 'Vườn Nhật',
      primary: 'Tòa A2',
      secondary: 'Vườn Nhật',
      entryScene: 'scene_a2_t3_2',
      scenePrefixes: ['scene_a2_vn_']
    },
    {
      id: 'toa_A1',
      group: 'toa_A1',
      label: 'Tòa A1',
      entryScene: 'scene_st_a1_6',
      scenePrefixes: ['scene_a1_', 'scene_st_a1_']
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
      label: 'CTS Lab',
      primary: 'Trung tâm & phòng lab',
      secondary: 'CTS Lab',
      entryScene: 'scene_st_cts_3',
      scenes: ['scene_st_cts_3'],
      scenePrefixes: ['scene_cts_', 'scene_cts2_'],
      scenePatterns: ['^scene_gpbk227[01]_'],
      labId: 'cts'
    },
    {
      id: 'toa_A2',
      group: 'toa_A2',
      label: 'Tòa A2',
      entryScene: 'scene_a2_t1_0',
      // Loại trừ thư viện, vườn Nhật và hội trường vì các khu này có hồ sơ riêng bên dưới.
      scenePatterns: ['^scene_(?:a2_(?!vn_|ht_)|st_a2_)']
    },
    {
      id: 'phong_hoc_A2',
      group: 'toa_A2',
      label: 'Phòng tự học',
      primary: 'Tòa A2',
      secondary: 'Phòng tự học',
      entryScene: 'scene_a2_t2_3',
      scenes: ['scene_a2_lib_']
    },
    {
      id: 'hoi_truong_A2',
      group: 'toa_A2',
      label: 'Hội trường A2',
      primary: 'Tòa A2',
      secondary: 'Hội trường A2',
      entryScene: 'scene_gpbk0066_1773206449967',
      //scenes: ['scene_a2_ht_1', 'scene_a2_ht_2'],
      //scenePrefixes: ['scene_st_ht_']
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
      entryScene: 'scene_a2_t1_5',
      entryLookAt: { h: -180, v: 5, fov: 120 },
      scenes: ['scene_a2_t1_5'],
      scenePrefixes: ['scene_ss_'],
      labId: 'samsung'
    },
    {
      id: 'toa_A3',
      group: 'toa_A3',
      label: 'Tòa A3',
      entryScene: 'scene_st_a3_2',
      scenePatterns: [
        '^scene_st_a3_',
        '^scene_a3_'
      ]
    },
    {
      id: 'phong_hoc_A3',
      group: 'toa_A3',
      label: 'Phòng học A3',
      entryScene: 'scene_st_a3_3',
      scenes: ['scene_st_a3_3']
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
      scenes: ['scene_gpbk2201_1773130534438'],
      scenePrefixes: ['scene_lib_'],
      labId: 'library'
    },
    {
      id: 'canteen',
      group: 'tien_ich',
      label: 'Canteen',
      entryScene: 'scene_st_bc_5',
      scenePrefixes: ['scene_ct_1','scene_ct_2','scene_ct_3']
    },
    {
      id: 'san_bong_ro',
      group: 'tien_ich',
      label: 'Sân bóng rổ',
      entryScene: 'scene_br_1',
      scenePrefixes: ['scene_br_']
    },
    {
      id: 'san_bong_chuyen',
      group: 'tien_ich',
      label: 'Sân bóng chuyền',
      entryScene: 'scene_bc_1',
      scenePrefixes: ['scene_bc_',]
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
