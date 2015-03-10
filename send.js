function send() {
    //var name = $('.name').val();
    //var email = $('.email').val();
    //var phone = $('.phone').val();

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        var re = /^(?=.*[0-9])[- +()0-9]+$/;
        return re.test($('.phone').val());
    }

    $('titleform').text(validatePhone($('.phone').val()));

    if ($('.name').val() == "") {
        $(".dialogue-name").addClass("dialogue-alert");
        $(".dialogue-name").text("< Введите имя");
        var namebool = false;
    }
    else {var namebool = true}

    if (($('.email').val() == "")||(!validateEmail($('.email').val()))) {
        $(".dialogue-email").addClass("dialogue-alert");
        $(".dialogue-email").text("< Введите e-mail");
        var emailbool = false;
    }
    else {var emailbool = true}

    if (($('.phone').val() == "")||(!validatePhone($('.phone').val()))) {
        $(".dialogue-phone").addClass("dialogue-alert");
        $(".dialogue-phone").text("< Введите номер телефона");
        var phonebool = false;
    }
    else {var phonebool = true}

    if (namebool && phonebool && emailbool) {
        $.post(
            "./mail.php",
            {
                name: $('.name').val(),
                phone: $('.phone').val(),
                email: $('.email').val()
            },
            onAjaxSuccess
        );
        function onAjaxSuccess(data) {
            // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
            //alert(data);
        }

        //alert('Имя: ' + name + '\n' + 'Почта: ' + email + '\n' + 'Телефон: ' + phone );
        //немножко говнокода

        alert("Ваша заявка получена. Мы скоро свяжемся с вами.")
        $('.name').val('');
        $('.email').val('');
        $('.phone').val('');

        /*document.getElementById("form1").reset();
         document.getElementById("form2").reset();
         document.getElementById("form3").reset();
         document.getElementById("form4").reset();
         document.getElementById("form5").reset();
         document.getElementById("form6").reset();
         document.getElementById("form7").reset();
         document.getElementById("form8").reset();
         document.getElementById("form9").reset();
         document.getElementById("form10").reset();*/
        //$.magnificPopup.close();
    }

}
