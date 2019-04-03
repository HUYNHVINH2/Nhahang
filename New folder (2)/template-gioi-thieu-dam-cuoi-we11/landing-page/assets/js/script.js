jQuery(function ($) {

    'use strict';



    // -------------------------------------------------------------
    //      Parallax
    // -------------------------------------------------------------

        $(window).stellar();



    // -------------------------------------------------------------
    //      Header-Effect
    // -------------------------------------------------------------

        $(document).ready(function(){
            $(window).scroll(function(event){
                var y_cordinate = $(this).scrollTop();

                var simple = $('.top-view').position();

                var simpleht = $('.top-view').height();
                

                if(y_cordinate >= (simple.top - simpleht + 650)){
                    $('.top-view .extra-caption').addClass('effect');
                }else{
                    $('.top-view .extra-caption').removeClass('effect');
                }
            });

            $(window).scroll(function(event){
                var y_cordinate = $(this).scrollTop();

                var simple = $('.extra-caption').position();

                var simpleht = $('.extra-caption').height();
                

                if(y_cordinate >= (simple.top - simpleht - 420)){
                    $('.extra-caption .item').removeClass('animated');
                }else{
                    $('.extra-caption .item').addClass('animated');
                }
            });
        });

$('.carousel').carousel({
    interval: 2000
});

    // -------------------------------------------------------------
    //      Sound-Effect
    // -------------------------------------------------------------

        $(document).ready(function(){
            $(window).scroll(function(event){
                var y_cordinate = $(this).scrollTop();

                var simple = $('.bottom-section').position();

                var simpleht = $('.bottom-section').height();
                

                if(y_cordinate >= (simple.top - simpleht - 500)){
                    $('.bottom-section .horse-car').addClass('moveing');
                    $('.bottom-section .audio-sound').addClass('sound');
                }else{
                    $('.bottom-section .horse-car').removeClass('moveing');
                    $('.bottom-section .audio-sound').removeClass('sound');
                }
            });
        });



    // -------------------------------------------------------------
    //      Sound-Effect
    // -------------------------------------------------------------

        $(document).ready(function(){
            $(window).scroll(function(event){
                $('.sound').easyAudioEffects({
                    mp3 : "./assets/audio/sound.mp3",
                    eventType : "hover"
                });
            });
        });














});   // Jquery-End