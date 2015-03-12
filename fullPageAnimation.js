
$(document).ready(function() {
    $('#fullpage').fullpage({
        /*sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'darksalmon', '#ccddff'],*/
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
                    },
                    close: function() {
                        $.fn.fullpage.setAllowScrolling(true);
                    }
                }
            });
        },
        afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            /*if (index != 1) {
             $('.navigation').css("background", "rgba(0, 0, 0, 1)")
             }*/
            if (index == 3) {
                $('.tt1').addClass('animated fadeInDown appear');
                setTimeout(function(){
                    $('.text').addClass('appear')
                }, 500);
                setTimeout(function(){
                    $('.btn3').addClass('animated fadeInUp bounce appear')
                }, 1000);
                setTimeout(function(){
                    $('.sc3').addClass('animated fadeInUp bounce appear')
                }, 1100);
                /*setTimeout(function(){
                 $('.page3bg').addClass('scaling')
                 }, 1500);*/
                /*$('.text').addClass('appear');*/
                /*$('.title').delay(100).fadeIn(1600);
                 $('.text').delay(1000).fadeIn(1600);
                 $('.btn').delay(1800).fadeIn(3600);*/
            }

            if (index == 4){
                $('.tt2').addClass('animated fadeInDown appear');
                setTimeout(function(){
                    $('.st1').addClass('appear')
                }, 300);
                setTimeout(function(){
                    $('.st2').addClass('appear')
                }, 600);
                setTimeout(function(){
                    $('.st3').addClass('appear')
                }, 900);
                setTimeout(function(){
                    $('.st4').addClass('appear')
                }, 1200);
                setTimeout(function(){
                    $('.st5').addClass('appear')
                }, 1500);
                setTimeout(function(){
                    $('.st6').addClass('appear')
                }, 1800);
                setTimeout(function(){
                    $('.btn4').addClass('animated fadeInUp appear')
                }, 2100);
                setTimeout(function(){
                    $('.sc4').addClass('animated fadeInUp appear')
                }, 2200);
                /*$('.infogr1').delay(100).fadeIn(600);
                 $('.infogr2').delay(350).fadeIn(600);
                 $('.infogr3').delay(470).fadeIn(600);
                 $('.infogr4').delay(535).fadeIn(600);*/
            }

            if (index == 5) {
                $('.title5').addClass('animated fadeInDown appear');
                setTimeout(function(){
                    $('.text5').addClass('appear')
                }, 300);
                setTimeout(function(){
                    $('.btn').addClass('animated fadeInUp appear')
                }, 600);
                setTimeout(function(){
                    $('.sc5').addClass('animated fadeInUp appear')
                }, 700);
                /*$('.text').addClass('appear');*/
                /*$('.title').delay(100).fadeIn(1600);
                 $('.text').delay(1000).fadeIn(1600);
                 $('.btn').delay(1800).fadeIn(3600);*/
            }
            if (index == 6) {
                $('.titleway').addClass('animated fadeInDown appear');
                setTimeout(function(){
                    $('.bw1').addClass('animated fadeInRight appear')
                }, 300);
                setTimeout(function(){
                    $('.bw2').addClass('animated fadeInRight appear')
                }, 600);
                setTimeout(function(){
                    $('.bw3').addClass('animated fadeInRight appear')
                }, 900);
                setTimeout(function(){
                    $('.bw4').addClass('animated fadeInRight appear')
                }, 1200);
                setTimeout(function(){
                    $('.bw5').addClass('animated fadeInRight appear')
                }, 1500);
                setTimeout(function(){
                    $('.bw6').addClass('animated fadeInUp appear')
                }, 1800);
                setTimeout(function(){
                    $('.bw7').addClass('animated fadeInUp appear')
                }, 2100);
                setTimeout(function(){
                    $('.bw8').addClass('animated fadeInLeft appear')
                }, 2400);
                setTimeout(function(){
                    $('.bw9').addClass('animated fadeInLeft appear')
                }, 2700);
                setTimeout(function(){
                    $('.bw10').addClass('animated fadeInLeft appear')
                }, 3000);
                setTimeout(function(){
                    $('.bw11').addClass('animated fadeInLeft appear')
                }, 3300);
                setTimeout(function(){
                    $('.btn6').addClass('animated fadeInUp appear')
                }, 3600);
                setTimeout(function(){
                    $('.sc6').addClass('animated fadeInUp appear')
                }, 3700);
                /*$('.text').addClass('appear');*/
                /*$('.title').delay(100).fadeIn(1600);
                 $('.text').delay(1000).fadeIn(1600);
                 $('.btn').delay(1800).fadeIn(3600);*/
            }

            if (index == 9) {
                $('.navbar').addClass("onmap");
            }
        },
        onLeave: function(index, nextIndex, direction) {
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
    });


    /*$('body').on('click','#test-popup-no', function(){
        alert('Ваш запрос был отправлен! Мы скоро свяжемся с вами.');
        return true;
    });*/

});


    