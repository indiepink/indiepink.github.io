// // 새로고침하면 맨 위로 올라가기
// window.addEventListener('beforeunload', function () {
//     // 페이지가 로드될 때 맨 위로 스크롤 이동
//     window.scrollTo(0, 0);
// });

$(function () {
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $('#nav').outerHeight();

    // $(window).scroll(function (event) {
    //     didScroll = true;
    // });

    // setInterval(function () {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 250);

    // function hasScrolled() {
    //     var st = $(this).scrollTop();

    //     if (Math.abs(lastScrollTop - st) <= delta) {
    //         return;
    //     }


    //     if (st > lastScrollTop && st > navbarHeight) {
    //         // Scroll Down
    //         $('#nav').addClass('nav-up').removeClass('nav-down');
    //     } else {
    //         // Scroll Up
    //         $('#nav').removeClass('nav-up').addClass('nav-down');
    //     }

    //     lastScrollTop = st;
    // }
    // ------------------------------------------------------

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


    var interval = 3300;
    var $reivewImgList = $('#review_img');
    var $reivewWriteList = $('#review_write');

    var timerId = window.setInterval(slideImage, interval);
    var isAnimating = false; // 애니메이션 진행 여부를 나타내는 플래그

    var imageIndex = 0;
    var imageLength = $reivewWriteList.children().length;

    function slideImage() {
        imageIndex++;
        imageIndex %= imageLength;

        pointBullet();

        if (!isAnimating) {
            isAnimating = true;

            $reivewImgList.animate({ marginLeft: "-100%" }, 500, function () {
                $reivewImgList.removeAttr('style').children(":first").appendTo($reivewImgList);
            });
            $reivewWriteList.animate({ marginLeft: "-100%" }, 500, function () {
                $reivewWriteList.removeAttr('style').children(":first").appendTo($reivewWriteList);
                isAnimating = false; // 애니메이션 종료 후 플래그를 false로 설정
            });
        }
    }

    function startSlideshow() {
        timerId = setInterval(slideImage, interval);
    }

    function stopSlideshow() {
        clearInterval(timerId);
    }

    $reivewImgList.on({
        mouseenter: function () {
            stopSlideshow();
        },
        mouseleave: function () {
            startSlideshow();
        }
    });

    $reivewWriteList.on({
        mouseenter: function () {
            stopSlideshow();
        },
        mouseleave: function () {
            startSlideshow();
        }
    });

    var $indicator = $('<ol></ol>').attr('id', 'indicator');

    $reivewWriteList.children().each(function (index) {
        $('<li></li>').append('<span>' + (index + 1) + '</span>').appendTo($indicator);
    });

    $indicator.children(':first').addClass('on');

    $indicator.insertAfter($reivewWriteList);

    function pointBullet() {
        $indicator.children().removeClass('on').eq(imageIndex).addClass('on');
    }


    var $indicatorItem = $indicator.children();

    $indicatorItem.on('click', function () {
        if ($(this).is('on')) return;

        clearInterval(timerId);

        var index = $indicatorItem.index(this);

        var step = index - imageIndex;

        if (step < 0) step += imageLength;

        $reivewImgList.stop().animate({ marginLeft: step * -100 + "%" }, 500, function () {
            $reivewImgList.removeAttr('style').children(":lt(" + step + ')').appendTo(this);
        });
        $reivewWriteList.stop().animate({ marginLeft: step * -100 + "%" }, 500, function () {
            $reivewWriteList.removeAttr('style').children(":lt(" + step + ')').appendTo(this);
        });
        imageIndex = index;


        pointBullet();
        timerId = setInterval(slideImage, interval); // 애니메이션 타이머 재시작
    });

});


// ------------------------------------------------------


window.addEventListener('load', function () {
    var $speech1 = document.querySelector('.speech1');
    var $speech2 = document.querySelector('.speech2');
    var $speech3 = document.querySelector('.speech3');
    var $pro_ex1 = document.querySelector('.pro_ex1');
    var $pro_ex2 = document.querySelector('.pro_ex2');
    var $pro_ex3 = document.querySelector('.pro_ex3');
    var $su_list1 = document.querySelector('.su_list1');
    var $su_list2 = document.querySelector('.su_list2');
    var $su_list3 = document.querySelector('.su_list3');
    var $su_list4 = document.querySelector('.su_list4');
    var $su_list5 = document.querySelector('.su_list5');

    document.addEventListener('scroll', function () {
        var containerScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var targetPosition = $speech1.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 170;
        var targetPosition2 = $speech2.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 200;
        var targetPosition3 = $speech3.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 250;
        var targetPosition4 = $speech1.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 4400;
        var targetPosition5 = $speech2.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 4402;
        var targetPosition6 = $speech3.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 4404;
        var targetPosition7 = $su_list1.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 7400;
        var targetPosition8 = $su_list2.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 7450;
        var targetPosition9 = $su_list3.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 7500;
        var targetPosition10 = $su_list4.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 7550;
        var targetPosition11 = $su_list5.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 7600;


        if (containerScrollTop >= targetPosition)
            $speech1.style.opacity = '1';

        if (containerScrollTop >= targetPosition2)
            $speech2.style.opacity = '1';

        if (containerScrollTop >= targetPosition3)
            $speech3.style.opacity = '1';

        if (containerScrollTop >= targetPosition4)
            $pro_ex1.style.opacity = '1';

        if (containerScrollTop >= targetPosition5)
            $pro_ex2.style.opacity = '1';

        if (containerScrollTop >= targetPosition6)
            $pro_ex3.style.opacity = '1';

        if (containerScrollTop >= targetPosition7)
            $su_list1.style.opacity = '1';

        if (containerScrollTop >= targetPosition8)
            $su_list2.style.opacity = '1';

        if (containerScrollTop >= targetPosition9)
            $su_list3.style.opacity = '1';

        if (containerScrollTop >= targetPosition10)
            $su_list4.style.opacity = '1';

        if (containerScrollTop >= targetPosition11)
            $su_list5.style.opacity = '1';

    });

    var $move_bar1 = document.querySelector('#move_bar1');

    document.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var targetPosition7 = $speech3.offsetTop - (window.innerHeight || document.documentElement.clientHeight) + 4800;

        if (scrollTop >= targetPosition7) {
            $move_bar1.style.animation = 'shrinkHeight 1s forwards';
            $move_bar1.style.opacity = '1';
        }
    });

    // const moveBar = document.getElementById("move_bar1");
    // moveBar.style.transform = "translateY(-141%)";
    // moveBar.style.height = "210px";

});


