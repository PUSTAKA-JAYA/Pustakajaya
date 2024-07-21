document.addEventListener('DOMContentLoaded', () => {
    $("#flipbook").turn({
        width: $('#flipbook').width(),
        height: $('#flipbook').height(),
        autoCenter: true,
        display: 'single'  // Menampilkan satu halaman
    });

    // Fungsi untuk menyesuaikan ukuran flipbook saat ukuran jendela berubah
    $(window).resize(function() {
        $("#flipbook").turn("size", $('#flipbook').width(), $('#flipbook').height());
    });
});
