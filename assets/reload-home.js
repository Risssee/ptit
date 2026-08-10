(() => {
  // Chỉ quay về trang chủ khi người dùng chủ động Reload/F5 một trang tour.
  // Điều hướng bình thường từ trang chủ vào tour không bị ảnh hưởng.
  const navigation = performance.getEntriesByType("navigation")[0];
  const isReload = navigation
    ? navigation.type === "reload"
    : performance.navigation?.type === 1;

  if (!isReload) return;

  // Mỗi trang truyền đường dẫn về trang chủ qua thuộc tính data-home.
  const homeUrl = new URL(document.currentScript?.dataset.home || "/", window.location.href);

  // Giu dung version khi F5: ban den quay ve bia cua ban den, ban trang ve bia ban trang.
  const selectedUI = new URLSearchParams(window.location.search).get("ui");
  if (selectedUI === "dark" || selectedUI === "current") {
    homeUrl.searchParams.set("ui", selectedUI);
  }
  window.location.replace(homeUrl.href);
})();
