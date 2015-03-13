/**
 * Created by dmitry on 12.03.15.
 */
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^(?=.*[0-9])[- +()0-9]+$/;
    return re.test($('.phone').val());
}

$(document).ready(function() {
    $(".name").focusout(function() {
        if ($('.name').val() == "") {
            $(".dialogue-name").addClass("dialogue-alert");
            $(".dialogue-name").text("Введите имя");
        };
        if ($('.name').val() != "") {
            $(".dialogue-name").removeClass("dialogue-alert");
        }
    });
    $(".email").focusout(function() {
        if (($('.email').val() == "") || (!validateEmail($('.email').val()))) {
            $(".dialogue-email").addClass("dialogue-alert");
            $(".dialogue-email").text('Введите e-mail');
        };
        if (($('.email').val() != "") && (validateEmail($('.email').val()))) {
            $(".dialogue-email").removeClass("dialogue-alert");
        }
    });
    $(".phone").focusout(function() {
        if (($('.phone').val() == "") || (!validatePhone($('.phone').val()))) {
            $(".dialogue-phone").addClass("dialogue-alert");
            $(".dialogue-phone").text("Введите номер телефона");
        };
        if (($('.phone').val() != "") && (validatePhone($('.phone').val()))) {
            $(".dialogue-phone").removeClass("dialogue-alert");
        }

    });
})


function send() {
    //var name = $('.name').val();
    //var email = $('.email').val();
    //var phone = $('.phone').val();

    $('titleform').text(validatePhone($('.phone').val()));

    if ($('.name').val() == "") {
        $(".dialogue-name").addClass("dialogue-alert");
        $(".dialogue-name").text("Введите имя");
        var namebool = false;
    }
    else {
        var namebool = true;
        if ($(".dialogue-name").hasClass("dialogue-alert")) {
            $(".dialogue-name").removeClass("dialogue-alert")
        }
    }

    if (($('.email').val() == "")||(!validateEmail($('.email').val()))) {
        $(".dialogue-email").addClass("dialogue-alert");
        $(".dialogue-email").text('Введите e-mail');
        var emailbool = false;
    }
    else {
        var emailbool = true;
        if ($(".dialogue-email").hasClass("dialogue-alert")) {
            $(".dialogue-email").removeClass("dialogue-alert")
        }
    }

    if (($('.phone').val() == "")||(!validatePhone($('.phone').val()))) {
        $(".dialogue-phone").addClass("dialogue-alert");
        $(".dialogue-phone").text("Введите номер телефона");
        var phonebool = false;
    }
    else {
        var phonebool = true;
        if ($(".dialogue-phone").hasClass("dialogue-alert")) {
            $(".dialogue-phone").removeClass("dialogue-alert")
        }
    }

    yaCounter26346798.reachGoal('INTERIOR');

    if ((namebool) && (emailbool) && (phonebool)) {

        $.post(
            "./mail.php",
            {
                name: $('.name').val(),
                phone: $('.phone').val(),
                email: $('.email').val()
            }
        );
        //alert('Имя: ' + name + '\n' + 'Почта: ' + email + '\n' + 'Телефон: ' + phone );
        alert("Ваша заявка получена. Мы скоро свяжемся с вами.")
        $('.name').val('');
        $('.email').val('');
        $('.phone').val('');
        $.magnificPopup.close();
    }
    else {
        console.log("error");
    }

}
