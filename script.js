/**
 * Created by dmitry on 19.03.15.
 */

/*fullPageAnimation.js*/
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['main', 'what-we-do', 'choose-your-style', 'why-us', 'giftcard', 'how-we-work', 'gallery', 'prices', 'contacts','social'],
        menu: '',
        scrollingSpeed: 500,
        afterRender: function(){
            $('.popup-ajax').magnificPopup({
                type: 'ajax',
                //mainClass: 'mfp-fade',
                alignTop: true,
                overflowY: 'scroll',
                callbacks: {
                    open: function() {
                        $.fn.fullpage.setAllowScrolling(false);
                        $.fn.fullpage.setKeyboardScrolling(false);
                    },
                    close: function() {
                        $.fn.fullpage.setAllowScrolling(true);
                        $.fn.fullpage.setKeyboardScrolling(true);
                    }
                }
            });
            $('.popup-with-form').magnificPopup({
                closeOnContentClick: false,
                type: 'inline',
                preloader: false,
                focus: '#name',
                mainClass: 'mfp-fade',

                // When elemened is focused, some mobile browsers in some cases zoom in
                // It looks not nice, so we disable it:
                callbacks: {
                    beforeOpen: function() {
                        if($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '#name';
                        }
                    },
                    open: function() {
                        $.fn.fullpage.setAllowScrolling(false);
                        $.fn.fullpage.setKeyboardScrolling(false);
                    },
                    close: function() {
                        $.fn.fullpage.setAllowScrolling(true);
                        $.fn.fullpage.setKeyboardScrolling(true);
                        $(".dialogue-name").removeClass("dialogue-alert");
                        $(".dialogue-email").removeClass("dialogue-alert");
                        $(".dialogue-phone").removeClass("dialogue-alert");
                        $(".name").removeClass("input-alert");
                        $(".email").removeClass("input-alert");
                        $(".phone").removeClass("input-alert");
                        $('.name').val('');
                        $('.email').val('');
                        $('.phone').val('');
                    }
                }
            });
            $('.fotorama').on(
                'fotorama:fullscreenenter', function(){
                    $.fn.fullpage.setAllowScrolling(false);
                    $.fn.fullpage.setKeyboardScrolling(false);
                }
            );
            $('.fotorama').on(
                'fotorama:fullscreenexit', function(){
                    $.fn.fullpage.setAllowScrolling(true);
                    $.fn.fullpage.setKeyboardScrolling(true);
                }
            );
            // 1. Initialize fotorama manually.
            var $customFotorama = $('.fotorama').fotorama({
                click: false,
                width: '90%',
                height: '60%',
                nav: 'thumbs',
                allowfullscreen: true
            });
            // 2. Get the API object.
            var fotorama = $customFotorama.data('fotorama');
            $('.fotorama__stage__shaft').click(function(){
                fotorama.requestFullScreen();
            });
        },
        afterLoad: function(anchorLink, index) {
            if ($(window).width() > 1000) {
                var loadedSection = $(this);
                /*if (index != 1) {
                 $('.navigation').css("background", "rgba(0, 0, 0, 1)")
                 }*/
                if (index == 3) {
                    $('.tt1').addClass('animated fadeInDown appear');
                    setTimeout(function () {
                        $('.text').addClass('appear')
                    }, 500);
                    setTimeout(function () {
                        $('.btn3').addClass('animated fadeInUp bounce appear')
                    }, 1000);
                    setTimeout(function () {
                        $('.sc3').addClass('animated fadeInUp bounce appear')
                    }, 1100);
                }

                if (index == 4) {
                    $('.tt2').addClass('animated fadeInDown appear');
                    setTimeout(function () {
                        $('.st1').addClass('appear')
                    }, 300);
                    setTimeout(function () {
                        $('.st2').addClass('appear')
                    }, 600);
                    setTimeout(function () {
                        $('.st3').addClass('appear')
                    }, 900);
                    setTimeout(function () {
                        $('.st4').addClass('appear')
                    }, 1200);
                    setTimeout(function () {
                        $('.st5').addClass('appear')
                    }, 1500);
                    setTimeout(function () {
                        $('.st6').addClass('appear')
                    }, 1800);
                    setTimeout(function () {
                        $('.btn4').addClass('animated fadeInUp appear')
                    }, 2100);
                    setTimeout(function () {
                        $('.sc4').addClass('animated fadeInUp appear')
                    }, 2200);
                }

                if (index == 5) {
                    $('.title5').addClass('animated fadeInDown appear');
                    setTimeout(function () {
                        $('.text5').addClass('appear')
                    }, 300);
                    setTimeout(function () {
                        $('.btn').addClass('animated fadeInUp appear')
                    }, 600);
                    setTimeout(function () {
                        $('.sc5').addClass('animated fadeInUp appear')
                    }, 700);
                }
                if (index == 6) {
                    $('.titleway').addClass('animated fadeInDown appear');
                    setTimeout(function () {
                        $('.bw1').addClass('animated fadeInRight appear')
                    }, 300);
                    setTimeout(function () {
                        $('.bw2').addClass('animated fadeInRight appear')
                    }, 600);
                    setTimeout(function () {
                        $('.bw3').addClass('animated fadeInRight appear')
                    }, 900);
                    setTimeout(function () {
                        $('.bw4').addClass('animated fadeInRight appear')
                    }, 1200);
                    setTimeout(function () {
                        $('.bw5').addClass('animated fadeInRight appear')
                    }, 1500);
                    setTimeout(function () {
                        $('.bw6').addClass('animated fadeInUp appear')
                    }, 1800);
                    setTimeout(function () {
                        $('.bw7').addClass('animated fadeInUp appear')
                    }, 2100);
                    setTimeout(function () {
                        $('.bw8').addClass('animated fadeInLeft appear')
                    }, 2400);
                    setTimeout(function () {
                        $('.bw9').addClass('animated fadeInLeft appear')
                    }, 2700);
                    setTimeout(function () {
                        $('.bw10').addClass('animated fadeInLeft appear')
                    }, 3000);
                    setTimeout(function () {
                        $('.bw11').addClass('animated fadeInLeft appear')
                    }, 3300);
                    setTimeout(function () {
                        $('.btn6').addClass('animated fadeInUp appear')
                    }, 3600);
                    setTimeout(function () {
                        $('.sc6').addClass('animated fadeInUp appear')
                    }, 3700);
                }

                if (index == 9) {
                    $('.navbar').addClass("onmap");
                }
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if ($(window).width() > 1000) {
                    if (index == 3) {
                        $('.tt1').removeClass('animated fadeInDown appear');
                        $('.text').removeClass('appear');
                        $('.btn3').removeClass('animated fadeInUp appear');
                        $('.sc3').removeClass('animated fadeInUp appear');
                        $('.page3bg').removeClass('scaling');
                    }

                    if (index == 4) {
                        $('.tt2').removeClass('animated fadeInDown appear');
                        $('.st1').removeClass('appear');
                        $('.st2').removeClass('appear');
                        $('.st3').removeClass('appear');
                        $('.st4').removeClass('appear');
                        $('.st5').removeClass('appear');
                        $('.st6').removeClass('appear');
                        $('.btn4').removeClass('animated fadeInUp appear');
                        $('.sc4').removeClass('animated fadeInUp appear');
                    }

                    if (index == 5) {
                        $('.title5').removeClass('animated fadeInDown appear');
                        $('.text5').removeClass('appear');
                        $('.btn').removeClass('animated fadeInUp appear');
                        $('.sc5').removeClass('animated fadeInUp appear');
                    }
                    if (index == 6) {
                        $('.titleway').removeClass('animated fadeInDown appear');
                        $('.bw1').removeClass('animated fadeInRight appear');
                        $('.bw2').removeClass('animated fadeInRight appear');
                        $('.bw3').removeClass('animated fadeInRight appear');
                        $('.bw4').removeClass('animated fadeInRight appear');
                        $('.bw5').removeClass('animated fadeInRight appear');
                        $('.bw6').removeClass('animated fadeInUp appear');
                        $('.bw7').removeClass('animated fadeInUp appear');
                        $('.bw8').removeClass('animated fadeInLeft appear');
                        $('.bw9').removeClass('animated fadeInLeft appear');
                        $('.bw10').removeClass('animated fadeInLeft appear');
                        $('.bw11').removeClass('animated fadeInLeft appear');
                        $('.btn6').removeClass('animated fadeInUp appear');
                        $('.sc6').removeClass('animated fadeInUp appear');
                    }
                    if (index == 9) {
                        $('.navbar').removeClass("onmap");
                    }
            }
        }
    });

});

/* send.js */
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
            $(".name").addClass("input-alert");
            $(".dialogue-name").text("Введите имя");
        };
        if ($('.name').val() != "") {
            $(".dialogue-name").removeClass("dialogue-alert");
            $(".name").removeClass("input-alert");
        }
    });
    $(".email").focusout(function() {
        if (($('.email').val() == "") || (!validateEmail($('.email').val()))) {
            $(".dialogue-email").addClass("dialogue-alert");
            $(".email").addClass("input-alert");
            $(".dialogue-email").text('Введите e-mail');
        };
        if (($('.email').val() != "") && (validateEmail($('.email').val()))) {
            $(".dialogue-email").removeClass("dialogue-alert");
            $(".email").removeClass("input-alert");
        }
    });
    $(".phone").focusout(function() {
        if (($('.phone').val() == "") || (!validatePhone($('.phone').val()))) {
            $(".dialogue-phone").addClass("dialogue-alert");
            $(".phone").addClass("input-alert");
            $(".dialogue-phone").text("Введите номер телефона");
        };
        if (($('.phone').val() != "") && (validatePhone($('.phone').val()))) {
            $(".dialogue-phone").removeClass("dialogue-alert");
            $(".phone").removeClass("input-alert");
        }
    });
})
function send() {
    $('titleform').text(validatePhone($('.phone').val()));

    if ($('.name').val() == "") {
        $(".dialogue-name").addClass("dialogue-alert");
        $(".name").addClass("input-alert");
        $(".dialogue-name").text("Введите имя");
        var namebool = false;
    }
    else {
        var namebool = true;
        if ($(".dialogue-name").hasClass("dialogue-alert")) {
            $(".dialogue-name").removeClass("dialogue-alert");
            $(".name").removeClass("input-alert");
        }
    }

    if (($('.email').val() == "")||(!validateEmail($('.email').val()))) {
        $(".dialogue-email").addClass("dialogue-alert");
        $(".email").addClass("input-alert");
        $(".dialogue-email").text('Введите e-mail');
        var emailbool = false;
    }
    else {
        var emailbool = true;
        if ($(".dialogue-email").hasClass("dialogue-alert")) {
            $(".dialogue-email").removeClass("dialogue-alert");
            $(".email").removeClass("input-alert");
        }
    }

    if (($('.phone').val() == "")||(!validatePhone($('.phone').val()))) {
        $(".dialogue-phone").addClass("dialogue-alert");
        $(".phone").addClass("input-alert");
        $(".dialogue-phone").text("Введите номер телефона");
        var phonebool = false;
    }
    else {
        var phonebool = true;
        if ($(".dialogue-phone").hasClass("dialogue-alert")) {
            $(".dialogue-phone").removeClass("dialogue-alert");
            $(".phone").removeClass("input-alert");
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

/*gallery.js*/
$(document).ready(function() {
    $('#some-button').magnificPopup({
        items: {
            src: '../img/daisy.jpg'
        },
        type: 'image' // this is default type
    });

    $('#another-button').magnificPopup({
        items: {
            src: '../img/fantasy_space-wide.jpg'
        },
        type: 'image', // this is default type
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    });

    $('.gallery1').magnificPopup({
        items: {
            src: './img/wall/full/1wallgal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.gallery2').magnificPopup({
        items: {
            src: './img/wall/full/2wallgal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery3').magnificPopup({
        items: {
            src: './img/wall/full/3wallgal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery4').magnificPopup({
        items: {
            src: './img/wall/full/4wallgal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery5').magnificPopup({
        items: {
            src: './img/wall/full/5wallgal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })


    $('.gallery6').magnificPopup({
        items: {
            src: './img/wall/full/6wallgal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price1').magnificPopup({
        items: {
            src: 'img/price/full/wall-1.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price2').magnificPopup({
        items: {
            src: 'img/price/full/wall-2.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price3').magnificPopup({
        items: {
            src: 'img/price/full/wall-3.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price4').magnificPopup({
        items: {
            src: 'img/price/full/wall-4.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price5').magnificPopup({
        items: {
            src: 'img/price/full/wall-5.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price6').magnificPopup({
        items: {
            src: 'img/price/full/wall-6.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price7').magnificPopup({
        items: {
            src: 'img/price/full/wall-7.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    $('.price8').magnificPopup({
        items: {
            src: 'img/price/full/wall-8.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })
});

/* map.js */
var myMap;
ymaps.ready(init);
function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 11,
        //controls: ['zoomControl']
        controls: []
    });

    //myMap.behaviors.disable('scrollZoom');
    //myMap.behaviors.disable('dblclick');
    //myMap.behaviors.disable('drag');

    myMap.geoObjects
        .add(new ymaps.Placemark([55.663518, 37.482994], {
            balloonContentHeader: "Мастерская &laquoЮго-Западная&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin5small.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.807706, 37.650138], {
            balloonContentHeader: "Мастерская &laquoАлексеевская&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin5small.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.800485, 37.714099], {
            balloonContentHeader: "Мастерская &laquoСокольники&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin5small.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.805094, 37.585304], {
            balloonContentHeader: "Наш офис",
            balloonContentBody: "Телефон: +7 499 638-30-73<br>e-mail: info@bright-fish.ru"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin6small.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.723993, 37.696231], {
            balloonContentHeader: "Мастерская &laquoВолгоградский Проспект&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin5small.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }));
}

