(function () {
    if (new URLSearchParams(window.location.search).get('ui') !== 'current') return;
    // GIAO DIEN TRANG: chi chua phan rieng; cac nut chung o campus-ui-controls.js.
    document.body.classList.add('campus-ui-white');
    const fullscreenButton = document.getElementById('fs-btn');
    if (fullscreenButton) fullscreenButton.style.display = 'none';
})();
