'use strict';

var slider = tns({
    container: '.main-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: true,
    controls: false
  });

  // MODAL
  $('[data-modal=consultation]').on('click', () => {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', () => {
    $('.overlay, #consultation, #thanks, #coupon, #comments').fadeOut('slow');
  });
  $('[data-modal=coupon]').on('click', () => {
    $('.overlay, #coupon').fadeIn('slow');
  });
  $('[data-modal=comments]').on('click', () => {
    $('.overlay, #comments').fadeIn('slow');
  });
  $('.modal__close-comment').on('click', () => {
    $('.comments, #comments').fadeOut('slow');
  });
