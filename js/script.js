window.onload = function() {
    document.location.href = "https://github.com/zerobias/telegram-mtproto";
};

const value = $(".slider-line").children("img").length;
const sliderLine = document.querySelector(".slider-line");

const width = document.querySelector(".slider").clientWidth;

breakPoint = value * width;
    
let offset = 0;

$(".next").click(function() {
    $(".info-slider").slideUp();
    if (!$(".info-slider").hasClass("hide")) {
        $(".info-slider").addClass("hide");
    };
    offset += width;
    if (offset >= breakPoint) {
        offset = 0;
    };
    sliderLine.style.left = -offset + "px";
});


$(".prev").click(function() {
    $(".info-slider").slideUp();
    if (!$(".info-slider").hasClass("hide")) {
        $(".info-slider").addClass("hide");
    };
    offset -= width;
    if (offset < 0) {
        offset = breakPoint - width;
    };
    sliderLine.style.left = -offset + "px";
});

$(".slider").click(function() {
    if ($(".info-slider").hasClass("hide")){
        let imgs = sliderLine.querySelectorAll("img");

        if (imgs[offset / width].alt === ""){
            $(".info-slider").html("Сайт Bilook©");
        } else {
            $(".info-slider").html(imgs[offset / width].alt);
        };

        $(".info-slider").slideDown();
        $(".info-slider").toggleClass("hide");
    } else {
        $(".info-slider").slideUp();
        $(".info-slider").toggleClass("hide");
    };
});