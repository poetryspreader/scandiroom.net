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
        $("#order-btn").on('click', function() {
            $('.order').addClass('__visible');
            $('body').addClass('scroll-hidden');
        });
    }
    orderListButton();

    // * cross toggle order
    function orderListCross() {
        $('.cross').on('click', function() {
            $('.order').removeClass('__visible');
        });
    }
    orderListCross();

    
    // ? FORM - VALIDATION

    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', $("#formImage")[0].files[0]);

        if (error === 0) {
            $(".order")[0].classList.add("_sending");
            // let response = await fetch('sendmail.php', {
            //     method: POST,
            //     body: formData
            // });    
            // if (response.ok) {
            //     let result = await response.json();
            //     alert(result.message);
            //     $('#formPreview')[0].innerHTML = '';
            //     form.reset();
            //     $(".order")[0].classList.remove("_sending");
            // } else {
            //     alert('????????????');
            //     $(".order")[0].classList.remove("_sending");
            // }
        } else {
            alert('?????????????????? ???????????????????????? ????????');
        }
    }

    // * ??????????????????
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);
            // * ?????????????????? ????????????????????????
            if(input.classList.contains('_email')) {
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            // * ?????????????????? ????????????????
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            // * ?????????????????? ???????????? ??????????
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

    // ?????????????? ?????????? email 
    function emailTest(input) {
        return !/@/.test(input.value);
    }

    // ?????????????? ?????????????????? ?? ???????????? file
    $("#formImage")[0].addEventListener('change', () => {
        uploadFile($("#formImage")[0].files[0]);
    });

    function uploadFile(file) {
        // ?????????????????? ?????? ?????????? 
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('?????????????????? ???????????? ??????????????????????');
            $("#formImage")[0].value = '';
            return;
        }
        //?????????????????? ???????????? ?????????? (< 2 Mb)
        if (file.size > 2 * 1024 * 1024) {
            alert('???????? ???????????? ???????? ?????????? 2 ????');
            return;
        }
        // ?????????????????? ???????????? ?? ?????????????????????? ????????????
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#formPreview')[0].innerHTML = `<img src="${e.target.result}" alt="????????">`;
        };
        reader.onerror = function(e){
            alert('????????????');
        };
        reader.readAsDataURL(file);
    }

    // ? LOGIN 
    
    // * login button toggle
    function loginButton() {
        $("#login-btn").on('click', function() {
            $('.login').addClass('__visible');
            $('body').addClass('scroll-hidden');
        });
    }
    loginButton();

    // * cross login toggle 
    function loginCross() {
        $('.cross').on('click', function() {
            $('.login').removeClass('__visible');
        });
    }
    loginCross();

    // ? JQUERY VALIDATE

    $('#form').validate();



















});