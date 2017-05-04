$(document).ready(function(){

    $('.scroll-down').click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top - $('header').outerHeight()
        }, 1000);
    });


    $('.over').addClass('fade');

});

$(window).scroll(function(){
   console.log( $(window).scrollTop());
   if($(window).scrollTop() > 0){
       $('body').addClass('scrolling');
   }else{
       $('body').removeClass('scrolling');
   }

});
