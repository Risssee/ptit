# PTIT Campus 360

Website tham quan thực tế ảo Học viện Công nghệ Bưu chính Viễn thông, xây dựng trên krpano. Dự án gồm tour khuôn viên, các phòng lab, bản đồ định vị, thuyết minh âm thanh và công cụ hỗ trợ chỉnh sửa hotspot/minimap.

## Demo

- Website: https://ptitcampus360.vercel.app
- Tour trực tiếp: https://ptitcampus360.vercel.app/campus/tour.html

## Chức năng chính

- Xem panorama 360° theo nhiều mức phân giải.
- Di chuyển giữa các địa điểm bằng hotspot.
- Hiển thị bản đồ và vị trí hiện tại trong khuôn viên.
- Phát thuyết minh theo khu vực và nội dung giới thiệu tại các phòng lab.
- Hỗ trợ chỉnh hotspot bằng tham số `?hotspotedit=1` khi chạy local.

## Cấu trúc dự án

```text
ptit/
├── index.html                 # Trang giới thiệu
├── assets/                    # Tài nguyên dùng chung
├── campus/
│   ├── tour.html              # Trang chạy tour
│   ├── tour.xml               # Cấu hình krpano và danh sách scene include
│   ├── app.js                 # Logic chính của tour
│   ├── config/                # Khu vực, sidebar và tọa độ minimap
│   ├── dev/                   # Công cụ chỉnh hotspot/minimap khi phát triển
│   ├── modules/               # Các module chức năng
│   ├── panos/                 # Ảnh panorama khuôn viên
│   ├── scenes/                # Khai báo scene và hotspot
│   ├── styles/                # CSS thành phần
│   └── themes/                # Giao diện sáng/tối
├── labs/                      # Cấu hình và tài nguyên riêng của từng lab
└── scripts/                   # Script kiểm tra cấu hình trước khi deploy


## Chỉnh sửa nội dung

- Danh sách khu vực và scene mặc định: campus/config/locations.js.
- Nhóm và thứ tự sidebar: campus/config/sidebar-groups.js.
- Tọa độ trên minimap: campus/config/minimap-positions.js.
- Scene và hotspot: campus/scenes/*.xml.
- Nội dung riêng của lab: labs/<ten-lab>/lab-config.js.
- Giao diện: campus/styles/ và campus/themes/.

Mở trình chỉnh hotspot local bằng URL:

http://localhost:8080/campus/tour.html?startscene=<scene_name>&hotspotedit=1
```
