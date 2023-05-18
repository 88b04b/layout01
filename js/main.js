$(function () {
    $('.main_slide').slick({
        arrows: false,
        // fade: true,
        // vertical: true,
        // verticalSwiping: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        // 클릭한 요소의 번호를 반환
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});