document.addEventListener('DOMContentLoaded', () => {
    function resizeFlipbook() {
        var width = $('#flipbook').width();
        var height = Math.round(width / 1.5); // Menjaga rasio aspek 4:3
        $('#flipbook').turn('size', width, height);
    }

    $("#flipbook").turn({
        width: $('#flipbook').width(),
        height: Math.round($('#flipbook').width() / 1.5),
        autoCenter: true,
        display: 'single'  // Menampilkan satu halaman
    });

    $(window).resize(function() {
        resizeFlipbook();
    });

    // Panggil resizeFlipbook saat pertama kali halaman dimuat
    resizeFlipbook();
});
