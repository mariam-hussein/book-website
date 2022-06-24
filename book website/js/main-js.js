/*
$(function () {
    'user strict';
    // Adjust Slider Height
    
    var winH     = $(window).height(),
        navH     = $('.navbar').innerHeight();
    $('header').height(winH);

document.getElementsByClassName('header')[0].style.height="140px";
});
*/
let navbar = $(".navbar");
$(window).scroll(function(){
    let x = $('.create-story').offset().top;
    if($(window).scrollTop() > x){
        navbar.addClass('sticky');
    }
    else{
        navbar.removeClass('sticky');
    }
});

let nCount = function(selector){
    $(selector).each(function(){
        $(this).animate(
            {
            counter: $(this).text()
        },
        {
            duration: 4000,
            easing: 'swing',
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        }
        );
        });
    };
    let a = 0;
    $(window).scroll(function(){
        let x1 = $('.col-s').offset().top ;
        if(a == 0 && $(window).scrollTop() >= x1){
            a++;
            nCount('.rect > h2');
        }
    });

