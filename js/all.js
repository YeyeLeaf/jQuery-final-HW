$(document).ready(function () {
    $('.top a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700)
    });
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      loop: true,
      speed: 1500,
      autoplay: {
           delay: 4000,
        },
      effect: 'flip',
    });
    $('.dropdown').click(function (e) { 
      e.preventDefault();
      $(this).parent().siblings().find('.dropdown').removeClass('active');
      $(this).toggleClass('active');
      $(this).parent().siblings().find('.dropdown-open').slideUp();
      $(this).siblings().slideToggle();
    });

});                                           