function initMobile() {
  if (matchMedia("screen and (max-width: 991px)").matches) {
    // 헤더 안보이도록
    $(".header").css("display", "none");
    // 헤더 클래스 초기화
    // $(".header").removeClass("fixed");
  }
}

// 모바일 및 태블릿 메뉴 토글(실행 안함)
function mobileMenuToggle() {
  alert("1");
  // 모바일에서만 실행
  // matchMedia("screen and (max-width: 991px)").matches
  // console.log(document.body.clientWidth);

  if (document.body.clientWidth < 991) {
    alert("2");
    // initMobile();
    // alert("3");
    // console.log(1)

    // 모바일 메뉴 버튼 클릭 토글
    $(".button--menu-mobile").on("click", function () {
      // alert("header menu click");
      $(".bg-dim").css("display", "block");
      $(".header").css("display", "block");
      $("body").addClass("menu_mobile");
    });
    // 모바일 메뉴 닫기 버튼 클릭 토글
    $(".button--close-mobile").on("click", function () {
      $(".bg-dim").css("display", "none");
      $(".header").css("display", "none");
      $("body").removeClass("menu_mobile");
    });
    // 모바일 메뉴 클릭 시 메뉴 닫고 섹션 이동 
    // - 메인 페이지의 경우
    if ($(".main")) {
      $(".header").find('a').on('click', function (e) {
        // e.preventDefault();
        $(".header").css("display", "none");
        $(".bg-dim").css("display", "none");
        $("body").toggleClass("menu_mobile");
        // $('html,body').animate({scrollTop:$(this.hash).offset().top}, 50);
      })
    }
  }
}
// 모바일 메뉴 버튼 클릭 토글
$(".button--menu-mobile").on("click", function () {
  // alert("header menu click");
  $(".bg-dim").css("display", "block");
  $(".header").css("display", "block");
  $("body").addClass("menu_mobile");
});
// 모바일 메뉴 닫기 버튼 클릭 토글
$(".button--close-mobile").on("click", function () {
  $(".bg-dim").css("display", "none");
  $(".header").css("display", "none");
  $("body").removeClass("menu_mobile");
});
// - 메인 페이지의 경우
if ($(".main")) {
  $(".header").find('a').on('click', function (e) {
    // e.preventDefault();
    $(".header").css("display", "none");
    $(".bg-dim").css("display", "none");
    $("body").removeClass("menu_mobile");
    // $('html,body').animate({scrollTop:$(this.hash).offset().top}, 50);
  })
}

function subModalWork() {
  var modal = $(".modal");
  var bgdim = $(".bg-dim");
  var wrapper = $(".wrapper");
  var currentScrollTop;

  function removeImages() {
    // 이미지 한개만 남기고 전부 삭제 후 이미지 하나만 추가
    $('.modal__img-wrapper').empty();
    $('.modal__img-wrapper').append("<img src='' alt=''>");
  }

  function closeModal() {
    modal.css("display", "none")
    // removeImages();
    wrapper.outerHeight('auto');
  }
  $(".section-sub__txt-wrapper").find("a").on("click", function (e) {
    e.preventDefault();
    currentScrollTop = $(document).scrollTop();
    $("html").scrollTop(currentScrollTop);
    bgdim.toggle();
    modal.css('top', currentScrollTop + 50);
    modal.toggle();
    wrapper.outerHeight(6000);
  })
  bgdim.on("click", function () {
    bgdim.css("display", "none");
    $("html").scrollTop(currentScrollTop);
    // 모달 닫기
    if (modal.css("display") === "block") {
      closeModal();
    }
    // 모바일의 경우 메뉴 열림 아래의 bg-dim 터치 시 메뉴 닫기
    if (matchMedia("screen and (max-width: 767px)").matches) {
      if ($(".header").css("display") === "block") {
        $(".header").css("display", "none");
        $("body").toggleClass("menu_mobile");
      }
    }
  })
  $(".modal__button--close").on("click", function () {
    bgdim.css("display", "none");
    closeModal();
  })
}

// 사용하지 않는 모달 데이터
function modalData() {
  // modalData.js의 데이터(변수명 dataList)를 불러와 사용합니다.

  var modal = document.querySelector('.modal');
  var pageName = document.querySelector('.wrapper').classList[2].split('_')[1];
  var itemName;

  document.querySelector('.sub-container').addEventListener('click', function (e) {
    // 클릭한 제품 이름 가져오기
    if (e.target.tagName === 'A') {
      itemName = e.target.innerHTML;
    }

    // 페이지별 1차 제품 데이터 분류
    var currentData = dataList[pageName][itemName];

    // 모달 팝업에 제품 데이터값 1:1 대응
    modal.querySelector('.modal__tit').innerHTML = currentData.title;
    modal.querySelector('.modal__tit-sub').innerHTML = currentData.titleSub;

    // 제품 설명 문단 줄바꿈 처리
    modal.querySelector('.modal__desc').innerHTML = currentData.desc.replace(/\n/g, '<br/>');

    // 제품 이미지 여러개일 경우 처리
    if (currentData.imgSrc[0] == '') {
      modal.querySelector('img').src = '#';
    } else {
      modal.querySelector('img').src = `lib/images/${pageName}/img_${currentData.imgSrc[0]}`;

      if (currentData.imgSrc.length === 2) {
        var newImgElem = document.createElement('img');
        newImgElem.src = `lib/images/${pageName}/img_${currentData.imgSrc[1]}`;
        modal.querySelector('.modal__img-wrapper').appendChild(newImgElem);

        if (currentData.imgSrc.length === 3) {
          var newImgElem2 = document.createElement('img');
          newImgElem2.src = `lib/images/${pageName}/img_${currentData.imgSrc[2]}`;
          modal.querySelector('.modal__img-wrapper').appendChild(newImgElem2);
        }
      }
    }


  })
}

// 어바웃 페이지 슬라이더
function sliderWork() {
  var btnContainer = document.querySelector('.btn-container');
  var btnLeft = btnContainer.querySelector('.btn-left');
  var btnRight = btnContainer.querySelector('.btn-right');
  var sliderWrapper = document.querySelector('.slider-wrapper');
  var slider = sliderWrapper.querySelector('.slider');
  var sliderWrapperWidth = sliderWrapper.getBoundingClientRect().width;
  var sliderWidth = slider.getBoundingClientRect().width;
  console.log(sliderWidth)
  var leftVal;
  var value = 0;

  function getWidthValue() {
    // 변수 값 업데이트
    sliderWrapper = document.querySelector('.slider-wrapper');
    slider = sliderWrapper.querySelector('.slider');
    sliderWrapperWidth = sliderWrapper.getBoundingClientRect().width;
    sliderWidth = slider.getBoundingClientRect().width;
    leftVal = sliderWidth - sliderWrapperWidth;
  }

  function desktopOrMobile() {
    // 모바일, 데스크탑 슬라이더 분기

    if (document.body.clientWidth < 768) {
      // 모바일일 경우
      function btnRightClickHandlerMobile(e) {
        if (value === -2000) {
          return
        }
        value -= 250;
        slider.style.left = value + 'px';
      }

      function btnLeftClickHandlerMobile(e) {
        if (value === 0) {
          return
        }
        value += 250;
        slider.style.left = value + 'px';
      }
      btnRight.removeEventListener('click', btnRightClickHandler);
      btnRight.addEventListener('click', btnRightClickHandlerMobile);
      btnLeft.removeEventListener('click', btnLeftClickHandler);
      btnLeft.addEventListener('click', btnLeftClickHandlerMobile);
    } else {
      // 데스크탑의 경우
      function btnRightClickHandler(e) {
        if (value === -leftVal) {
          return
        }
        value -= leftVal;
        console.log(value);
        slider.style.left = value + 'px';
      }

      function btnLeftClickHandler(e) {
        if (value === 0) {
          return
        }
        value += leftVal;

        console.log(value);
        slider.style.left = value + 'px';
      }

      btnRight.addEventListener('click', btnRightClickHandler);
      btnLeft.addEventListener('click', btnLeftClickHandler);

      function slideAnimate() {
        var pos = 0;
        var id = setInterval(keyframes, 100);

        function kyeframes() {
          if (pos === 3000) {
            clearInterval(id);
          } else {
            pos++;
            slider.style.transform = 'translateX(0px)';
          }
        }
      }
      // slider.animate([
      //   // keyframes
      //   { transform: 'translateX(0px)' }, 
      //   { transform: 'translateX(' + -leftVal +'px)' }
      //   // { left: -leftVal + 'px'}
      // ], { 
      //   // timing options
      //   duration: 10000,
      //   easing: 'linear',
      //   direction: 'alternate',
      //   iterations: Infinity
      // });
    }
  }

  getWidthValue();
  desktopOrMobile();

  window.addEventListener('resize', getWidthValue);
  window.addEventListener('resize', desktopOrMobile);
}


// mobileMenuToggle();
// window.addEventListener('resize', mobileMenuToggle);