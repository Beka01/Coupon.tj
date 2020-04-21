'use strict';


var slider = tns({
    container: '.main-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: true,
    controls: false
  });
//MODAL BLOCK
  //Consultaion block
  $('[data-modal=consultation]').on('click', () => {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('[data-modal=thanks]').on('click', () => {
    $('#consultation').hide();
    $('.overlay, #thanks').fadeIn('slow');
  });
  //Registration block
  $('[data-modal=registration]').on('click', () => {
    $('.overlay, #registration').fadeIn('slow');
  });
  $('[data-modal=code]').on('click', () => {
    $('#registration').hide();
    $('.overlay, #code').fadeIn('slow');
  });
  //Signin block
  $('[data-modal=signin]').on('click', () => {
    $('.overlay, #signin').fadeIn('slow');
  });
  //Coupon block
  // $('[data-modal=coupon]').on('click', () => {
  //   $('.overlay, #coupon').fadeIn('slow');
  // });
  $('[data-modal=coupon]').each(function(i) {
      $(this).on('click', function() {
        $('#coupon .title_coupon').text($('.title_products').eq(i).text());
        $('#coupon .coupon__price').text($('.products__price').eq(i).text());
        $('#coupon .prices__sale').text($('.products__content-save').eq(i).text());
        $('.overlay, #coupon').fadeIn('slow');
      });
  });
  //COUPON LINKS BLOCK
  //Comments
  $('[data-modal=comments]').on('click', () => {
    $('.overlay, #comments').fadeIn('slow');
  });
  //Company
  $('[data-modal=company]').on('click', () => {
    $('.overlay, #company').fadeIn('slow');
  });
  //Privacy
  $('[data-modal=privacy]').on('click', () => {
    $('.overlay, #privacy').fadeIn('slow');
  });
  //Privacy
  $('[data-modal=addressLinks]').on('click', () => {
    $('.overlay, #addressLinks').fadeIn('slow');
  });
  //Close btn block
  $('.modal__close').on('click', () => {
    $('.overlay, #consultation, #registration, #thanks, #code, #signin, #coupon,#comments, #company, #privacy, #addressLinks').fadeOut('slow');
  }); 
  $('.modal__close-links').on('click', () => {
    $('#comments, #company, #privacy, #addressLinks').fadeOut('slow');
  });  

  


   