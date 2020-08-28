if (document.body.clientWidth > 1023) {
    var desktopScrollAnimation = function() {
        // skrollr init
        var s = skrollr.init({
            smoothScrolling: true,
            smoothScrollingDuration: 200,
            // mobileCheck: function() {
            //     return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
            // }
        });
        console.log('Now is desktop');
        // console.log(s);

        // 헤더 fixed 클래스 부여
        $('html, body').bind('DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll', function () {
            var scrollValue = $(window).scrollTop();
            
            if(scrollValue >= 450) {
                // 헤더 뷰포트 최상단 위치 시 fixed 클래스 부여
                var headerOffset = $('.header')[0].getBoundingClientRect().top;
                if(headerOffset <= 0) {
                    $(".header").addClass('fixed');
                    if(scrollValue < 1120) {
                        $(".header").removeClass('fixed');
                    }
                }
            }
        });
        }


        // 윈도우 리사이즈 시 모바일 용으로 메뉴 초기화
        $(window).on("resize", desktopScrollAnimation);

    desktopScrollAnimation();
}


