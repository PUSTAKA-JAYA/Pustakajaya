document.addEventListener('DOMContentLoaded', () => {
    function resizeFlipbook() {
        var width = $('#flipbook').width();
        var height;

        // Menentukan tinggi berdasarkan orientasi
        if (window.matchMedia("(orientation: portrait)").matches) {
            height = Math.round(width * 1.5); // Potret
        } else {
            height = Math.round(width / 1.5); // Lanskap
        }

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

    // Fungsi navigasi
    $('#prev-page').click(function() {
        $('#flipbook').turn('previous');
    });

    $('#next-page').click(function() {
        $('#flipbook').turn('next');
    });
});
