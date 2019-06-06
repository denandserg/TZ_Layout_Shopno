$(document).ready(function(){
  $('.slider-about-us').slick(
    {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay: true
    }
  );
});