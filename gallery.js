/**
 * Created by Ole4ka on 26.02.2015.
 */
/**
 * Created by dmitry on 25.02.15.
 */

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
            src: 'img/price/wall-1.jpg'
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
            src: 'img/price/wall-2.jpg'
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
            src: 'img/price/wall-3.jpg'
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
            src: 'img/price/wall-4.jpg'
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
            src: 'img/price/wall-5.jpg'
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
            src: 'img/price/wall-6.jpg'
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
            src: 'img/price/wall-7.jpg'
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
            src: 'img/price/wall-8.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })

    /*$('.gallery7').magnificPopup({
        items: {
            src: './img/wall/full/8wallgal.jpg'
        },
        type: 'image',
        closeOnContentClick: 'true',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            cursor: 'pointer'
        }
    })*/

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
            },
            close: function() {
                $.fn.fullpage.setAllowScrolling(true);
                $(".dialogue-name").removeClass("dialogue-alert");
                $(".dialogue-email").removeClass("dialogue-alert");
                $(".dialogue-phone").removeClass("dialogue-alert");
                $('.name').val('');
                $('.email').val('');
                $('.phone').val('');
            }
        }
    });
});
