(() => {
  // Chỉ quay về trang chủ khi người dùng reload/F5.
  const navigation = performance.getEntriesByType("navigation")[0];
  const isReload = navigation
    ? navigation.type === "reload"
    : performance.navigation?.type === 1;

  if (!isReload) return;

  // Mỗi trang truyền đường dẫn về trang chủ qua thuộc tính data-home.
  const homeUrl = new URL(document.currentScript?.dataset.home || "/", window.location.href);

  // Giu dung version khi F5.
  const selectedUI = new URLSearchParams(window.location.search).get("ui");
  if (selectedUI === "dark" || selectedUI === "current") {
    homeUrl.searchParams.set("ui", selectedUI);
  }
  window.location.replace(homeUrl.href);
})();
