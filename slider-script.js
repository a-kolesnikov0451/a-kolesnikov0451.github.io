const value = $(".slider-line").children("img").length;
const sliderLine = document.querySelector(".slider-line");

const width = document.querySelector(".slider").clientWidth;

breakPoint = value * width;
    
let offset = 0;

$(".next").click(function() {
    $(".info").slideUp();
    if (!$(".info").hasClass("hide")) {
        $(".info").addClass("hide");
    };
    offset += width;
    if (offset >= breakPoint) {
        offset = 0;
    };
    sliderLine.style.left = -offset + "px";
});


$(".prev").click(function() {
    $(".info").slideUp();
    if (!$(".info").hasClass("hide")) {
        $(".info").addClass("hide");
    };
    offset -= width;
    if (offset < 0) {
        offset = breakPoint - width;
    };
    sliderLine.style.left = -offset + "px";
});

$(".slider").click(function() {
    if ($(".info").hasClass("hide")){
        let imgs = sliderLine.querySelectorAll("img");

        if (imgs[offset / width].alt === ""){
            $(".info").html("Сайт Bilook©");
        } else {
            $(".info").html(imgs[offset / width].alt);
        };

        $(".info").slideDown();
        $(".info").toggleClass("hide");
    } else {
        $(".info").slideUp();
        $(".info").toggleClass("hide");
    };
});