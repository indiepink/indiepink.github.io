window.addEventListener("load", function () {
    const $top_btn = document.querySelectorAll(".top_btn");
    // const $firstItems = document.querySelectorAll("#first_filter > li");
    // const $first_filter = document.querySelector("#first_filter");
    const $spectacleLens_btn = document.querySelector(".spectacle_lens");
    const $sunglasses_btn = document.querySelector(".sunglasses");
    const $sunglasses_list = document.querySelector("#sunglasses_list");
    const $sunglasses_list_ch = document.querySelectorAll("#sunglasses_list> li");
    const $img_list = document.querySelector("#img_list");
    const $img_list_ch = document.querySelectorAll("#img_list > li");
    const $second_filter = document.querySelector("#second_filter");
    const $spectacle_lens_list = document.querySelector("#spectacle-lens_list");
    const $spectacle_lens_list_ch = document.querySelectorAll("#spectacle-lens_list > li ");
    const $digital_device_list = document.querySelector("#digital_device_list");
    const $digital_device_list_ch = document.querySelectorAll("#digital_device_list > li ");

    const $multifocal_lens_list = document.querySelector("#multifocal_lens_list");
    const $multifocal_lens_list_ch = document.querySelectorAll("#multifocal_lens_list > li ");
    const $office_list = document.querySelector("#office_list");
    const $office_list_ch = document.querySelectorAll("#office_list > li ");
    const $progressive_focus_list = document.querySelector("#progressive_focus_list");
    const $progressive_focus_list_ch = document.querySelectorAll("#progressive_focus_list > li ");
    const $fatigue_relief_list = document.querySelector("#fatigue_relief_list");
    const $fatigue_relief_list_ch = document.querySelectorAll("#fatigue_relief_list > li ");
    const $blue_light_list = document.querySelector("#blue_light_list");
    const $blue_light_list_ch = document.querySelectorAll("#blue_light_list > li ");
    const $UV_rays_list = document.querySelector("#UV-rays_list");
    const $UV_rays_list_ch = document.querySelectorAll("#UV-rays_list > li ");
    const $stylish_list = document.querySelector("#stylish_list");
    const $stylish_list_ch = document.querySelectorAll("#stylish_list > li ");
    const $light_list = document.querySelector("#light_list");
    const $light_list_ch = document.querySelectorAll("#light_list > li ");
    const $clear_list = document.querySelector("#clear_list");
    const $clear_list_ch = document.querySelectorAll("#clear_list > li ");

    const $discoloration_list = document.querySelector("#discoloration_list");
    const $discoloration_list_ch = document.querySelectorAll("#discoloration_list > li ");

    const $coloring_list = document.querySelector("#coloring_list");
    const $coloring_list_ch = document.querySelectorAll("#coloring_list > li ");

    const $spectacle_lens = document.querySelectorAll(".spectacle-lens");
    const $second_filter_ch = document.querySelectorAll("#second_filter > li > button");
    const $second_sunglass_filter = document.querySelector("#second_sunglass_filter");
    const $second_sunglass_filter_ch = document.querySelectorAll("#second_sunglass_filter > li > button");
    const $third_filter = document.querySelector("#third_filter");
    const $third_filter_ch = document.querySelectorAll("#third_filter > li >button");
    const $repeat_btn = document.querySelector("#repeat_btn");
    const $lensStyle_btn = document.querySelector(".lensStyle");
    const $sun_lens1 = document.querySelector(".sun_lens1");
    const $sun_lens2 = document.querySelector(".sun_lens2");
    const $sun_lens1_list = document.querySelector(".sun_lens1_list");
    const $sun_lens2_list = document.querySelectorAll(".sun_lens2_list");
    const $reset_btn = document.querySelectorAll(".reset_btn");
    const $popularity_btn = document.querySelector("#popularity");
    const $newest_btn = document.querySelector("#newest");
    const $basicImg = document.querySelector(".hide_show_btn");
    let $count = document.querySelector("#count");
    var is_clicked = false;

    // 인기순 순서 직접 지정
    // var popularity_order2 = [4, 2, 9, 3, 10, 7, 1, 5, 6, 8];

    // 최신순 순서 직접 지정
    // var newest_order2 = [8, 6, 1, 3, 4, 10, 7, 5, 2, 9];

    // 렌즈 종류 개수 지정
    $count.innerHTML = $img_list_ch.length;

    // li 요소들을 배열로 반환
    var imgArray = Array.from($img_list_ch);
    var sunArray = Array.from($sunglasses_list_ch);
    var lensArray = Array.from($spectacle_lens_list_ch);
    var digitalArray = Array.from($digital_device_list_ch);
    var mulArray = Array.from($multifocal_lens_list_ch);
    var officeArray = Array.from($office_list_ch);
    var proArray = Array.from($progressive_focus_list_ch);
    var fatigueArray = Array.from($fatigue_relief_list_ch);
    var blueArray = Array.from($blue_light_list_ch);
    var UVArray = Array.from($UV_rays_list_ch);
    var styleArray = Array.from($stylish_list_ch);
    var lightArray = Array.from($light_list_ch);
    var clearArray = Array.from($clear_list_ch);
    var coloringArray = Array.from($coloring_list);

    // 순서를 나타내는 배열을 생성
    var img_popularity_order = [];
    var img_newest_order = [];
    var sun_popularity_order = [];
    var sun_newest_order = [];
    var lens_popularity_order = [];
    var lens_newest_order = [];
    var digital_popularity_order = [];
    var digital_newest_order = [];
    var mul_popularity_order = [];
    var mul_newest_order = [];
    var office_popularity_order = [];
    var office_newest_order = [];
    var pro_popularity_order = [];
    var pro_newest_order = [];
    var fatigue_popularity_order = [];
    var fatigue_newest_order = [];
    var blue_popularity_order = [];
    var blue_newest_order = [];
    var UV_popularity_order = [];
    var UV_newest_order = [];
    var style_popularity_order = [];
    var style_newest_order = [];
    var light_popularity_order = [];
    var light_newest_order = [];
    var clear_popularity_order = [];
    var clear_newest_order = [];
    var coloring_popularity_order = [];
    var coloring_newest_order = [];

    // 순서를 랜덤하게 섞는다.
    function MixSort() {
        return 0.5 - Math.random();
    }

    function randomliArray(arr, $arr_parent, popularity_order, newest_order) {
        // 1 부터 li 요소의 개수까지의 숫자르 랜덤하게 생성하여 배열을 추가한다.
        for (let i = 1; i <= arr.length; i++) {
            popularity_order.push(i);
            newest_order.push(i);
        }

        popularity_order.sort(MixSort);
        newest_order.sort(MixSort);

        // 인기순 버튼을 클릭 시 새로운 배열의 순서대로 li를 배치한다.
        $popularity_btn.addEventListener("click", function () {
            popularity_order.forEach(function (index) {
                $arr_parent.appendChild(arr[index - 1]);
            });
        });

        // 최신순 버튼을 클릭 시 새로운 배열의 순서대로 li를 배치한다.
        $newest_btn.addEventListener("click", function () {
            newest_order.forEach(function (index) {
                $arr_parent.appendChild(arr[index - 1]);
            });
        });
    }

    randomliArray(imgArray, $img_list, img_popularity_order, img_newest_order);
    randomliArray(sunArray, $sunglasses_list, sun_popularity_order, sun_newest_order);
    randomliArray(lensArray, $spectacle_lens_list, lens_popularity_order, lens_newest_order);
    randomliArray(digitalArray, $digital_device_list, digital_popularity_order, digital_newest_order);
    randomliArray(mulArray, $multifocal_lens_list, mul_popularity_order, mul_newest_order);
    randomliArray(officeArray, $office_list, office_popularity_order, office_newest_order);
    randomliArray(proArray, $progressive_focus_list, pro_popularity_order, pro_newest_order);
    randomliArray(fatigueArray, $fatigue_relief_list, fatigue_popularity_order, fatigue_newest_order);
    randomliArray(blueArray, $blue_light_list, blue_popularity_order, blue_newest_order);
    randomliArray(UVArray, $UV_rays_list, UV_popularity_order, UV_newest_order);
    randomliArray(styleArray, $stylish_list, style_popularity_order, style_newest_order);
    randomliArray(lightArray, $light_list, light_popularity_order, light_newest_order);
    randomliArray(clearArray, $clear_list, clear_popularity_order, clear_newest_order);
    randomliArray(coloringArray, $coloring_list, coloring_popularity_order, coloring_newest_order);


    // -----------------------------------------------------------------------------------
    function Reset() {
        // 펼쳐져 있던 버튼을 접을 때 버튼 색 초기화
        for (let j = 0; j < $second_sunglass_filter_ch.length; j++) {
            if ($second_sunglass_filter_ch[j].classList.contains('check_btn'))
                $second_sunglass_filter_ch[j].classList.remove('check_btn');
        }

        for (let j = 0; j < $second_filter_ch.length; j++) {
            if ($second_filter_ch[j].classList.contains('check_btn'))
                $second_filter_ch[j].classList.remove('check_btn');
        }

        for (let j = 0; j < $third_filter_ch.length; j++) {
            if ($third_filter_ch[j].classList.contains('check_btn'))
                $third_filter_ch[j].classList.remove('check_btn');
        }
    }
    // ------------------------------------------------------------------------------

    // 안경렌즈 버튼 클릭 시 두번 째 줄 버튼 나오게 하기
    // 만약 선글라스 버튼이 클릭이 되어있으면 없애기 
    $spectacleLens_btn.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');

        if (!isButtonActive) { // 클릭이 되지 않았을 때
            this.classList.add('check_btn');
            $second_filter.style.display = "flex";

            // $sunglasses_btn 기능 없애기
            $sunglasses_btn.classList.remove('check_btn');
            $second_sunglass_filter.style.display = "none";

            // 안경렌즈 버튼 클릭했을 때 이미지 변경
            $sunglasses_list.style.display = "none";
            $count.innerHTML = $img_list_ch.length;
            $img_list.style.display = "flex";
            Reset();

        } else {
            this.classList.remove('check_btn');
            $second_filter.style.display = "none";
            $third_filter.style.display = "none";

            // 안경렌즈 버튼 클릭했을 때 이미지 변경
            $basicImg.style.display = "none";
            $img_list.style.display = "flex";
            $sunglasses_list.style.display = "none";
            $count.innerHTML = $img_list_ch.length;

            Reset();
        }

    });

    $sunglasses_btn.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');
        // this.classList.remove('check_btn');

        if (!isButtonActive) {
            this.classList.add('check_btn');
            $second_sunglass_filter.style.display = "flex";

            // $spectacleLens_btn 기능 없애기
            $spectacleLens_btn.classList.remove('check_btn');
            $second_filter.style.display = "none";

            // 선글라스 버튼 클릭했을 때 이미지 변경
            $sunglasses_list.style.display = "flex";
            $count.innerHTML = $sunglasses_list_ch.length;
            $img_list.style.display = "none";
            $spectacle_lens_list.style.display = "none";
            $third_filter.style.display = "none";
            Reset();

        } else {
            this.classList.remove('check_btn');

            $second_sunglass_filter.style.display = "none";
            $third_filter.style.display = "none";

            // 선글라스 버튼 클릭했을 때 이미지 변경
            $img_list.style.display = "none";
            $basicImg.style.display = "none";
            $sunglasses_list.style.display = "flex";
            $count.innerHTML = $sunglasses_list_ch.length;

            Reset();
        }

    });

    // 두번 째 third_filter 버튼 클릭되는 것
    for (let i = 0; i < $second_filter_ch.length; i++) {
        $second_filter_ch[i].addEventListener("click", function (e) {
            e.preventDefault();
            const isButtonActive = this.classList.contains('check_btn');

            for (let j = 0; j < $second_filter_ch.length; j++) {
                $second_filter_ch[j].classList.remove('check_btn');
            }

            // 렌즈 종류 버튼이 클릭되어 있지 않으면 $third_filter 화면이 안보이게 한다. 
            if (is_clicked) {
                $third_filter.style.display = "none";
            }

            if (!isButtonActive) {
                this.classList.add('check_btn');
            }
        });
    }

    // 세번 째 third_filter 버튼 클릭되는 것
    for (let i = 0; i < $third_filter_ch.length; i++) {
        $third_filter_ch[i].addEventListener("click", function (e) {
            e.preventDefault();
            const isButtonActive = this.classList.contains('check_btn');

            for (let j = 0; j < $third_filter_ch.length; j++) {
                $third_filter_ch[j].classList.remove('check_btn');
            }

            if (!isButtonActive) {
                this.classList.add('check_btn');
            }
        });
    }

    $sun_lens1.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');

        if (!isButtonActive) {
            this.classList.add('check_btn');

            // sun_lens2 기능 없애기
            $sun_lens2.classList.remove('check_btn');
            // for (let j = 0; j < $sun_lens2_list.length; j++) {
            //     $sun_lens2_list[j].style.display = "none";
            // }
        } else {
            this.classList.remove('check_btn');
            // for (let j = 0; j < $sun_lens2_list.length; j++) {
            //     $sun_lens2_list[j].style.display = "flex";
            // }
            // $sunglasses_list.style.display="flex";
        }
    });

    $sun_lens2.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');
        this.classList.remove('check_btn');

        if (!isButtonActive) {
            this.classList.add('check_btn');
            // $sun_lens1_list.style.display = "none";
            $sun_lens1.classList.remove('check_btn');
        } else {
            this.classList.remove('check_btn');
            // $sun_lens1_list.style.display = "flex";
        }
    });

    $repeat_btn.addEventListener("click", function () {
        $second_filter.style.display = "none";
        $second_sunglass_filter.style.display = "none";
        $third_filter.style.display = "none";
        $sunglasses_list.style.display = "none";
        $spectacle_lens_list.style.display = "none";
        $img_list.style.display = "flex";
        $count.innerHTML = $img_list_ch.length;


        $top_btn.forEach((element) => {
            element.classList.remove("check_btn");
            element.classList.add("no_check_btn");
        });

        Reset();
    });


    $lensStyle_btn.addEventListener("click", function (e) {
        e.preventDefault();
        const isButtonActive = this.classList.contains('check_btn');

        if (!isButtonActive) {
            // this.classList.add('check_btn');
            $third_filter.style.display = "none";
            is_clicked = false;
            $spectacle_lens_list.style.display = "none";
            $img_list.style.display = "flex";
        } else {
            $third_filter.style.display = "flex";
            $spectacle_lens_list.style.display = "flex";
            $img_list.style.display = "none";
            // $count.innerHTML = $spectacle_lens.length;
            is_clicked = true;
        }
        for (let j = 0; j < $third_filter_ch.length; j++) {
            if ($third_filter_ch[j].classList.contains('check_btn'))
                $third_filter_ch[j].classList.remove('check_btn');
        }

    });

    // 메뉴바 내리면 메뉴바가 올라가고, 올리면 메뉴바가 다시 보인다.
    //   var didScroll;
    //   var lastScrollTop = 0;
    //   var delta = 5;
    //   var navbarHeight = $('#nav').outerHeight();

    //   $(window).scroll(function (event) {
    //     didScroll = true;
    //   });

    //   setInterval(function () {
    //     if (didScroll) {
    //       hasScrolled();
    //       didScroll = false;
    //     }
    //   }, 250);

    //   function hasScrolled() {
    //     var st = $(this).scrollTop();

    //     if (Math.abs(lastScrollTop - st) <= delta) {
    //       return;
    //     }

    //     if (st > lastScrollTop && st > navbarHeight) {
    //       // Scroll Down
    //       $('#nav').addClass('nav-up').removeClass('nav-down');
    //     } else {
    //       // Scroll Up
    //       $('#nav').removeClass('nav-up').addClass('nav-down');
    //     }

    //     lastScrollTop = st;
    //   }

    // ------------------------------------------------------------------------------------------
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
});


// ------------------------------------------------------------------------------------------

// 더보기 버튼
$(function () {

    // 다른 버튼을 클릭하면 초기에 보이는 버튼을 숨깁니다.
    $('.hidden_btn').click(function () {
        $('#more_btn').hide();
        // $('#more_btn').css("display", "none");
    });

    $(".basicImg").slice(0, 9).show(); // 초기갯수
    $("#more_btn").click(function (e) { // 클릭시 more
        e.preventDefault();
        $(".basicImg:hidden").slice(0, 6).show(); // 클릭시 more 갯수 지저정
        if ($(".basicImg:hidden").length == 0) { // 컨텐츠 남아있는지 확인
            $("#more_btn").css("display", "none");
        }
    });

    var expandedCount = 0; // 펼쳐진 요소의 개수 추적 변수
    function resetContent() {
        $(".basicImg").css("display", "none");
        $(".basicImg").slice(0, 9).show();

        if (expandedCount > 8) {
            $("#more_btn").css("display", "none");
        } else {
            $("#more_btn").css("display", "block");
        }
    }

    $(".reset_more_btn").click(function (e) {
        e.preventDefault();
        resetContent();
    });


    // $(".spectacle_lens").click(function (e) {
    //     e.preventDefault();
    //     resetContent();
    // });



    // $(".reset_more_btn").click(function (e) {
    //     e.preventDefault();

    //     $(".hide_show_btn").css("display", "none");

    //     if ($(".basicImg:visible").length>10) { // 컨텐츠 남아있는지 확인
    //         $(".basicImg").hide();
    //         $(".basicImg").slice(0, 9).show(); // 초기갯수
    //         $("#more_btn").css("display", "block");
    //     }
    //     $("#more_btn").css("display", "block");
    // });

    // $('#second_btn2').click(function (e) { 
    //     e.preventDefault();
    //     $(".hide_show_btn").css("display", "none");
    //     $('#digital_device_list').css("display", "flex");
    //     var length = $('#digital_device_list > li').length;
    //     $('#count').html(length);
    //     console.log(length);
    // });

    // $('#second_btn1').click(function (e) { 
    //     e.preventDefault();
    //     $(".hide_show_btn").css("display", "none");
    //     $('#spectacle-lens_list').css("display", "flex");
    //     var length = $('#spectacle-lens_list > li').length;
    //     $('#count').html(length);
    // });

    function showList(listId) {
        $(".hide_show_btn").css("display", "none");
        $(listId).css("display", "flex");
        var length = $(listId + " > li").length;
        $('#count').html(length);
    }
    $('.toggle_btn').click(function () {
        $(".hide_show_btn").css("display", "none");
    });

    $('#second_btn2').click(function (e) {
        e.preventDefault();
        showList('#digital_device_list');
    });

    $('#repeat_btn').click(function (e) {
        e.preventDefault();
        showList('#img_list');
    });

    $('#second_btn1').click(function (e) {
        e.preventDefault();
        showList('#spectacle-lens_list');
    });

    $('#second_btn3').click(function (e) {
        e.preventDefault();
        showList('#hobbies_list');
    });

    $('#second_btn4').click(function (e) {
        e.preventDefault();
        showList('#outdoor_activity_list');
    });

    $('#second_btn5').click(function (e) {
        e.preventDefault();
        showList('#game_list');
    });

    $('#second_btn6').click(function (e) {
        e.preventDefault();
        showList('#reading_list');
    });

    $('#third_btn1').click(function (e) {
        e.preventDefault();
        showList('#multifocal_lens_list');
    });
    $('#third_btn2').click(function (e) {
        e.preventDefault();
        showList('#office_list');
    });
    $('#third_btn3').click(function (e) {
        e.preventDefault();
        showList('#progressive_focus_list');
    });
    $('#third_btn4').click(function (e) {
        e.preventDefault();
        showList('#fatigue_relief_list');
    });
    $('#third_btn5').click(function (e) {
        e.preventDefault();
        showList('#blue_light_list');
    });
    $('#third_btn6').click(function (e) {
        e.preventDefault();
        showList('#UV-rays_list');
    });
    $('#third_btn7').click(function (e) {
        e.preventDefault();
        showList('#stylish_list');
    });
    $('#third_btn8').click(function (e) {
        e.preventDefault();
        showList('#light_list');
    });
    $('#third_btn9').click(function (e) {
        e.preventDefault();
        showList('#clear_list');
    });
    $('#sunglass_btn1').click(function (e) {
        e.preventDefault();
        showList('#coloring_list');
    });

    $('#sunglass_btn2').click(function (e) {
        e.preventDefault();
        showList('#discoloration_list');
    });


});