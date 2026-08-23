# PTIT VR360

Website tham quan PTIT dùng một runtime Krpano chung tại `campus/`. Tên scene và hotspot do dữ liệu tour quyết định; không đổi tên khi chỉ tổ chức lại mã nguồn.

## Cấu trúc chính

- `index.html`: trang chủ.
- `assets/`: ảnh, icon, audio và tiện ích dùng chung.
- `campus/tour.html`: trang chạy tour duy nhất.
- `campus/tour.xml`: cấu hình Krpano chung và include các file scene.
- `campus/scenes/`: scene khuôn viên và từng lab.
- `campus/config/`: dữ liệu khu vực, sidebar và tọa độ minimap.
- `campus/modules/`: các chức năng độc lập dùng chung trong tour.
- `campus/themes/`: mã giao diện đen và trắng.
- `campus/styles/`: CSS thành phần của trang tour.
- `labs/<lab>/lab-config.js`: popup, voice, narration và infopost riêng của lab.
- `labs/<lab>/assets`, `audio`, `panos`: tài nguyên riêng của lab.

## Chạy local

Mở thư mục dự án bằng Live Server hoặc chạy:

```powershell
python -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Kiểm tra cấu hình

```powershell
node scripts/validate-config.js
node scripts/validate-scenes.js
node scripts/validate-assets.js
```

Các script kiểm tra cấu hình khu vực, `linkedscene` và đường dẫn tài nguyên trước khi commit.

## Chỉnh sửa thường dùng

- Khu vực, scene mở đầu, góc nhìn: `campus/config/locations.js`.
- Thứ tự danh mục: `campus/config/sidebar-groups.js`.
- Tọa độ chấm đỏ: `campus/config/minimap-positions.js`.
- Popup/voice/infopost lab: `labs/<lab>/lab-config.js`.
- Scene và hotspot: `campus/scenes/*.xml`.
- Giao diện: `campus/themes/` và `campus/styles/`.
