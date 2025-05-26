if(document.querySelector(".header__search .input")) {
    var input = document.querySelector(".header__search .input input");
    document.querySelector("body").addEventListener('click', function() {
        if(input.value === "") {
            input.classList.remove("active");
        } else {
            input.classList.add("active");
        };
    });
};
if(document.querySelector(".header__search")) {
    $(".header__search").click(function() {
        $(this).addClass("active");
    });
    $(".main").click(function() {
        $(".header__search").removeClass("active");
    });
};
if(document.querySelector(".mobile_search")) {
    $(".mobile_search").click(function() {
        $(".header__search__wrap").addClass("active");
        $(".header__search").addClass("active");
    });
    $(".main").click(function() {
        $(".header__search__wrap").removeClass("active");
        $(".header__search").removeClass("active");
    });
};
if(document.querySelector(".catalog_2__aside")) {
    $(".catalog_2__aside .item").click(function() {
        $(this).toggleClass("active");
    });
};
if(document.querySelector(".accordion__title")) {
    $(".accordion__title").click(function() {
        $(this).toggleClass("active");
    });
};
if(document.querySelector(".product_amount")) {
    var plus = $("#plus");
    var minus = $("#minus");
    var number = document.querySelector('#number_input');

    minus.click(function() {
        if(number.value == "1") {
        }else {
            number.value--;
        }
    });
    plus.click(function() {
        number.value++;
    });
};

// Tab
function tabFun(num) {
    if(document.querySelector("#tab-btn-" + num)) {
        $("#tab-btn-" + num).click(function() {
            $(".tab-btn-all").removeClass("active");
            $(".tab-block-all").removeClass("active");
            $(this).addClass("active");
            $("#tab-block-" + num).addClass("active");
        });
    };
};
tabFun("1");
tabFun("2");
tabFun("3");
tabFun("4");
tabFun("5");
tabFun("6");
tabFun("7");
tabFun("8");
tabFun("9");
tabFun("10");
if(document.querySelector(".product_page__images .search")){
    $(".product_page__images .search").click(function() {
        var imgSrc = $(".wrap.slick-slide.slick-current.slick-active img").attr('src');
        $(".product_img_modal .img img").attr('src', imgSrc);
        $(".product_img_modal").addClass("active");
        setTimeout(function() {
            $(".product_img_modal").addClass("opacity");
        }, 01);
    });
    $(".product_img_modal .close-x").click(function() {
        $(".product_img_modal").removeClass("opacity");
        setTimeout(function() {
            $(".product_img_modal").removeClass("active");
        }, 500);
    });
};