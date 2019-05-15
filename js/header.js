$(document).ready(function(){
    $('.searchbar').hide();
   $('.iconheadersearch').on('click', function (){
       ToggleSearchbar();
   });
                             
function ToggleSearchbar(){
       $('.searchbar').fadeToggle();
   };
    $(window).on('scroll', function(){
        HeaderScroll();
    });
    function HeaderScroll(){
        if($(window).scrollTop())
            {
                $('header').addClass('headerscroll')
            }
        else
            {
                $('header').removeClass('headerscroll')
            }
    }
});