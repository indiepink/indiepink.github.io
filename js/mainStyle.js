// 새로고침하면 맨 위로 올라가기
window.addEventListener('beforeunload', function () {
  // 페이지가 로드될 때 맨 위로 스크롤 이동
  window.scrollTo(0, 0);
});

window.addEventListener("load", function () {
  const $first_btn = document.querySelectorAll(".first_btn");
  const $back_btn = document.querySelector("#back_btn");
  const $lens_filter2 = document.querySelector("#lens_filter2");
  const $lens_filter1 = document.querySelector("#lens_filter1");

  const $videoElem = document.querySelector('#nikonVideo');
  const $video = document.querySelector('#vdieo');
  const $content = document.querySelector('.content-container');
  const letters = document.querySelectorAll('.letter');

  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.2}s`;
    letter.classList.add('moveUpAndDown');
  });

  // -------------------------------------------------------------------------------------------
  $first_btn.forEach(element => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      $lens_filter1.style.display = "none";
      $lens_filter2.style.display = "flex";

      element.classList.add("check_btn");
    });
  });

  // $back_btn.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   $lens_filter1.style.display = "flex";
  //   $lens_filter2.style.display = "none";

  //   $first_btn.forEach((element) => {
  //     element.classList.remove("check_btn");
  //   });
  // });

  function toogleButton(buttonId) {
    var button = document.querySelector(buttonId);
    button.classList.toggle('check_btn');

    // 다른 HTML 페이지로 현재 버튼의 상태를 전달합니다.
    localStorage.setItem(buttonId, button.classList.contains('check_btn'));
  }

  // --------------------------------------------------------------------
  // 메인 배너 이미지 슬라이드
  var interval = 3800;
  var $imageList = $('.imageSlide > ul');

  var imageIndex = 0;
  var imageLength = $imageList.children().length;

  var timerId = window.setInterval(slideImage, interval);
  var isAnimating2 = false; // 애니메이션 진행 여부를 나타내는 플래그


  function startSlideshow2() {
    timerId = setInterval(slideImage, interval);
  }

  function stopSlideshow2() {
    clearInterval(timerId);
  }

  $imageList.on({
    mouseenter: function () {
      stopSlideshow2();
    },
    mouseleave: function () {
      startSlideshow2();
    }
  });

  var $indicator = $('<ol></ol>').attr('id', 'indicator');

  $imageList.children().each(function (index) {
    $('<li></li>').append('<span>' + (index + 1) + '</span>').appendTo($indicator);
  });

  $indicator.children(':first').addClass('on');

  $indicator.insertAfter($imageList);

  var $indicatorItem = $indicator.children();

  $indicatorItem.on('click', function () {
    if ($(this).is('on')) return;

    clearInterval(timerId);

    var index = $indicatorItem.index(this);

    var step = index - imageIndex;

    if (step < 0) step += imageLength;

    $imageList.stop().animate({ marginLeft: step * -100 + "%" }, 500, function () {
      $imageList.removeAttr('style').children(":lt(" + step + ')').appendTo(this);
    });
    imageIndex = index;
    pointBullet();


    timerId = setInterval(slideImage, interval);
  })

  function slideImage() {

    imageIndex++;
    imageIndex %= imageLength;

    pointBullet();

    if (!isAnimating2) {
      isAnimating2 = true;

      $imageList.animate({ marginLeft: "-100%" }, 500, function () {
        $imageList.removeAttr('style').children(":first").appendTo($imageList);
        isAnimating2 = false;
      });
    }
  }

  function pointBullet() {
    $indicator.children().removeClass('on').eq(imageIndex).addClass('on');
  }

  //------------------------------------------------------------------
  // 안경 이미지 슬라이드
  var $useProduct_list = $('#use_the_product');
  var $glasses_product = $('#glasses_product');
  // var $glasses_product_bx = $('#glasses_product_bx');
  var glassestimerId = window.setInterval(slideImage2, interval);

  var interval2 = 3300; // 애니메이션 간격 설정 (밀리초 단위)
  var isAnimating = false; // 애니메이션 진행 여부를 나타내는 플래그

  var productIndex = 0;
  var productLength = $glasses_product.children().length;

  function slideImage2() {

    productIndex++;
    productIndex %= productLength;

    pointBullet2();
    if (!isAnimating) {
      isAnimating = true;

      $useProduct_list.animate({ marginLeft: "-100%" }, 500, function () {
        $useProduct_list.removeAttr('style').children(":first").appendTo($useProduct_list);
      });
      $glasses_product.animate({ marginLeft: "-100%" }, 500, function () {
        $glasses_product.removeAttr('style').children(":first").appendTo($glasses_product);
        isAnimating = false; // 애니메이션 종료 후 플래그를 false로 설정
      });
    }
  }

  function startSlideshow() {
    glassestimerId = setInterval(slideImage2, interval2);
  }

  function stopSlideshow() {
    clearInterval(glassestimerId);
  }

  $useProduct_list.on({
    mouseenter: function () {
      stopSlideshow();
    },
    mouseleave: function () {
      startSlideshow();
    }
  });

  $glasses_product.on({
    mouseenter: function () {
      stopSlideshow();
    },
    mouseleave: function () {
      startSlideshow();
    }
  });

  var $indicator2 = $('<ol></ol>').attr('id', 'indicator2');

  $glasses_product.children().each(function (index) {
    $('<li></li>').append('<span>' + (index + 1) + '</span>').appendTo($indicator2);
  });

  $indicator2.children(':first').addClass('on2');

  $indicator2.insertAfter($glasses_product);

  function pointBullet2() {
    $indicator2.children().removeClass('on2').eq(productIndex).addClass('on2');
  }


  var $indicator2Item = $indicator2.children();

  $indicator2Item.on('click', function () {
    if ($(this).is('on2')) return;

    clearInterval(glassestimerId);

    var index2 = $indicator2Item.index(this);

    var step2 = index2 - productIndex;

    if (step2 < 0) step2 += productLength;

    $glasses_product.stop().animate({ marginLeft: step2 * -100 + "%" }, 500, function () {
      $glasses_product.removeAttr('style').children(":lt(" + step2 + ')').appendTo(this);
    });
    $useProduct_list.stop().animate({ marginLeft: step2 * -100 + "%" }, 500, function () {
      $useProduct_list.removeAttr('style').children(":lt(" + step2 + ')').appendTo(this);
    });
    productIndex = index2;

    // $indicator2On.removeClass('on2'); // 변경된 부분: 이전의 on2 클래스를 가진 요소의 클래스를 제거합니다.
    // $(this).addClass('on2');

    pointBullet2();
    glassestimerId = setInterval(slideImage2, interval2); // 애니메이션 타이머 재시작
  });
  // ---------------------------------------------------------------------
  // 메뉴바 내리면 메뉴바가 올라가고, 올리면 메뉴바가 다시 보인다.
  // var didScroll;
  // var lastScrollTop = 0;
  // var delta = 5;
  // var navbarHeight = $('#nav').outerHeight();

  // $(window).scroll(function (event) {
  //   didScroll = true;
  // });

  // setInterval(function () {
  //   if (didScroll) {
  //     hasScrolled();
  //     didScroll = false;
  //   }
  // }, 250);

  // function hasScrolled() {
  //   var st = $(this).scrollTop();

  //   if (Math.abs(lastScrollTop - st) <= delta) {
  //     return;
  //   }

  //   if (st > lastScrollTop && st > navbarHeight) {
  //     // Scroll Down
  //     $('#nav').addClass('nav-up').removeClass('nav-down');
  //   } else {
  //     // Scroll Up
  //     $('#nav').removeClass('nav-up').addClass('nav-down');
  //   }

  //   lastScrollTop = st;
  // }

  // -------------------------------------------------------------------
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('#nav').outerHeight();
  var headerHeight = 200;

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    if (st > headerHeight) {
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#nav').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('#nav').removeClass('nav-up').addClass('nav-down');
        }
      }
    } else {
      $('#nav').removeClass('nav-up');
    }

    lastScrollTop = st;
  }
  // -------------------------------------------------------------------
  var $introWrite = document.querySelector('#introWrite');
  var $sunglasses_hand = document.querySelector('#sunglasses1');
  var $rest_img1 = document.querySelector('#rest_img1');
  var $rest_img5 = document.querySelector('#rest_img5');


  document.addEventListener('scroll', function () {
    var containerScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var targetPosition = $introWrite.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 1200;
    var targetPosition2 = $introWrite.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 2800;
    var targetPosition3 = $introWrite.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 5000;
    var targetPosition4 = $introWrite.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 5400;

    if (containerScrollTop >= targetPosition)
      $introWrite.style.opacity = '1';

    if (containerScrollTop >= targetPosition2) {
      $sunglasses_hand.style.opacity = '1';
      $sunglasses_hand.style.animation = 'slideInFromLeft 0.8s ease-in-out'; // 애니메이션 효과 적용
    }

    if (containerScrollTop >= targetPosition3)
      $rest_img1.style.opacity = '1';

    if (containerScrollTop >= targetPosition4)
      $rest_img5.style.opacity = '1';
  });

});
