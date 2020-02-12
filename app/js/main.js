$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.products-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots: true
  });

  var mixer = mixitup('.products__inner-box');

});