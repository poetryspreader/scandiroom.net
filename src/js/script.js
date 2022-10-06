window.addEventListener("DOMContentLoaded", function() {

    // * NAV TOGGLER
    function promoToggler(item, i) {
        $(item).on("click", function(e) {
            $(this).siblings().removeClass('header__nav-item-active');
            $(".header__nav-link").removeClass('header__nav-link-active');
            $('.promo').children().removeClass("promo__modal-active");
            $('.header__nav').children().eq(i).addClass('header__nav-item-active');
            $('.header__nav-item').children().eq(i).addClass('header__nav-link-active');
            $('.promo').children().eq(i).addClass('promo__modal-active');
        });
    }
    promoToggler('[data-modal=promo__new]', 0);
    promoToggler('[data-modal=promo__options]', 1);
    promoToggler('[data-modal=promo__contacts]', 2);
    // promoToggler('[data-modal=promo__forms]', 3);

    // * ORDER LIST
    function orderListButton() {
        $(".button__order").on('click', function() {
            $('.order__wrapper').toggleClass('order__hidden');
        });
    }
    orderListButton();

    function orderListCross() {
        $('.order__close').on('click', function() {
            console.log('ssss');
            $('.order__wrapper').toggleClass('order__hidden');
        });
    }
    orderListCross();






















});