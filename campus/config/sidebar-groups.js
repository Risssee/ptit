
(function (root) {
  'use strict';

  const groups = [
    {
      id: 'khuon_vien',
      label: 'Khuôn viên',
      mark: 'KV',
      order: 10
    },
    {
      id: 'toa_A1',
      label: 'Tòa A1',
      mark: 'A1',
      order: 20
    },
    {
      id: 'phong_lab',
      label: 'Trung tâm & phòng lab',
      mark: 'LAB',
      order: 30
    },
    {
      id: 'toa_A2',
      label: 'Tòa A2',
      mark: 'A2',
      order: 40
    },
    {
      id: 'toa_A3',
      label: 'Tòa A3',
      mark: 'A3',
      order: 50
    },
    {
      id: 'tien_ich',
      label: 'Tiện ích sinh viên',
      mark: 'TI',
      order: 60
    }
  ];

  root.PTIT_SIDEBAR_GROUPS = Object.freeze(
    groups.map(function (group) { return Object.freeze(group); })
  );
})(typeof window !== 'undefined' ? window : globalThis);
