'use strict';
$(document).ready(function(){
  
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
  // $('[data-modal=thanks]').on('click', () => {
  //   $('#consultation').hide();
  //   $('.overlay, #thanks').fadeIn('slow');
  // });
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
  //GETTING DATA FROM PRODUCTS
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
    $('.overlay, #consultation, #registration, #thanks, #code, #signin, #coupon,#comments, #company, #privacy, #addressLinks').fadeOut('fast');
    $(this).find('.dialog-form').trigger('reset');
    $(this).find('label.error').hide();
    $(".error").removeClass("error");
  }); 
  $('.modal__close-links').on('click', () => {
    $('#comments, #company, #privacy, #addressLinks').fadeOut('slow');
  });  
// FORMS VALIDATION
function validateForms(form){
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 19,
        maxlength: 19
      },
      password: {
        required: true,
        minlength: 6
      },
      repassword: {
        required: true,
        equalTo: "#password"
      },
      
      checkbox: "required",
      email:{
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Укажите свое имя",
        minlength: "Слишком короткое имя"
      },
      phone: {
        required: "Укажите свой номер телефона",
        minlength: "Телефон должен состоять из 12 цифр",
        maxlength: "Телефон должен состоять из 12 цифр"
      },
      password: {
        required: "Введите пароль",
        minlength:"Пароль должен быть не менее 6 символов"
      },
      repassword: {
        required: "Повторите введенный пароль",
        equalTo: "Пароли не совпадают"
      },
      email: {
        required: "Укажите свою электронную почту",
        email: "Неправильно введен адрес почты"
      }
    }
  });
  }
  validateForms('#registration form');
  validateForms('#signin form');
  validateForms('#consultation form');

  $.mask.definitions['9'] = '';
  $.mask.definitions.d = '[0-9]';
  $('input[name=phone]').mask("+992 (dd) ddd-dd-dd");

  $('#consultation').submit(function(e) {
    e.preventDefault();
    $.ajax ({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('#consultation').trigger('reset');
    });
    return false; 
  });

  //SMOOTH SCROLL AND PAGEUP 
  $(window).scroll(function() {
      if ($(this).scrollTop() > 1500) {
        $('.pageup').fadeIn('slow');
      } else {
        $('.pageup').fadeOut('slow');
      }
  });

  $("a[href^='#up']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});