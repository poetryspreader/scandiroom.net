window.addEventListener("DOMContentLoaded", function() {

    // ? NAV TOGGLER
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

    
    // ? CAROUSEL PROMO
    $('.carousel').carousel({
        interval: 10000,
        hover: this.stop,
      });


    // ? ORDER LIST
    
    // * button toggle
    function orderListButton() {
        $(".button__order").on('click', function() {
            $('.order').toggleClass('order__visible');
            $('body').toggleClass('scroll-hidden');
        });
    }
    orderListButton();

    // * cross toggle
    function orderListCross() {
        $('.order__close').on('click', function() {
            console.log('ssss');
            $('.order').toggleClass('order__visible');
        });
    }
    orderListCross();

    
    // ? FORM - VALIDATION

    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            
        } else {
            alert('заполните обязательные поля');
        }
    }

    // * валидация
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);
            // * валидация электропочты
            if(input.classList.contains('_email')) {
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            // * валидация чекбокса
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            // * валидация пустых полей
            } else {
                if (input.value === ""){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }

    // функция теста email 
    function emailTest(input) {
        return !/@/.test(input.value);
    }

    
    // слушаем изменения в инпуте file
    $('.file__input').on('change', () => {
        console.log($(this));
        // uploadFile(this.files[0]);
    });

    function uploadFile(file) {
        // проверяем тип файла 
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения');
            $('#formImage').value = '';
            return;
        }
        //проверяем размер файла (< 2 Mb)
        if (file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть менее 2 Мб');
            return;
        }
    }
























});