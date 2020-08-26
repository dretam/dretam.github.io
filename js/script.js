// event pada saat link diklik
$(".page-scroll").on("click", function (e) {
    // ambil isi href
    let tujuan = $(this).attr("href");

    // tangkap elemen ybs
    let elTujuan = $(tujuan);

    // pindahkan scroll
    // $("body").scrollTop($elTujuan.offset().top);
    $("html, body").animate({
        scrollTop: elTujuan.offset().top - 50
    }, 1250, "easeInOutExpo"); // default: "swing "atau "linear"

    e.preventDefault();
});

// parallax
// about
$(window).on("load", function () {
    $(".pKiri").addClass("pMuncul");
    $(".pKanan").addClass("pMuncul");
})

$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    //jumbotron
    $(".jumbotron img").css({
        "transform": "translate(0, " + wScroll / 6 + "%)"
    });

    $(".jumbotron h1").css({
        "transform": "translate(0, " + wScroll / 4 + "%)"
    });

    $(".jumbotron p").css({
        "transform": "translate(0, " + wScroll / 1.5 + "%)"
    });

    // portfolio
    if (wScroll > $(".portfolio").offset().top - 400) {
        $(".portfolio .thumbnail").each(function (i) {
            setTimeout(function () {
                $(".portfolio .thumbnail").eq(i).addClass("muncul");
            }, 500 * (i + 1));
        });

        // $(".portfolio .thumbnail").addClass("muncul");
    }
});