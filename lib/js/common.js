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
  if(matchMedia("screen and (max-width: 768px)").matches) {

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
    
  }
}

mobileMenuToggle();

