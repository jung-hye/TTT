function initMobile() {
  if(matchMedia("screen and (max-width: 768px)").matches) {
    // 헤더 안보이도록
    $(".header").css("display", "none");
    // 헤더 클래스 초기화
    $(".header").removeClass("fixed");
  }
}

function mobileMenuToggle() {
  // 모바일에서만 실행
  // matchMedia("screen and (max-width: 768px)").matches
  if(document.body.clientWidth < 768) {
    initMobile();

    // 모바일 메뉴 버튼 클릭 토글
    $(".button--menu-mobile").on("click", function () {  
      $(".bg-dim").css("display", "block");
      $(".header").toggle();
      $("body").toggleClass("menu_mobile");
    });
    // 모바일 메뉴 닫기 버튼 클릭 토글
    $(".button--close-mobile").on("click", function () {
      $(".bg-dim").css("display", "none");
      $(".header").toggle();
      $("body").toggleClass("menu_mobile");
    });
    // 모바일 메뉴 클릭 시 메뉴 닫고 섹션 이동 
    // - 메인 페이지의 경우
    if($(".main")) {
      $(".header").find('a').on('click', function(e) {
        e.preventDefault();
        $(".header").css("display", "none");
        $(".bg-dim").css("display", "none");
        $("body").toggleClass("menu_mobile");
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 50);
      })
    }
  }
}

mobileMenuToggle();

