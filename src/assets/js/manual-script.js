  $(".banner-slider").slick({
  infinite: false,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows:false,
  dots: true,
});

  $(".slider").slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots: true,

  // the magic
  responsive: [{
  breakpoint: 1500,
  settings: {
  slidesToShow: 4,
  infinite: true
}

}, {

  breakpoint: 1201,
  settings: {
  slidesToShow: 3,
  dots: true
}

}, {

  breakpoint: 991,
  settings: {
  slidesToShow: 2,
  dots: true
}

}, {

  breakpoint: 600,
  settings: {
  slidesToShow: 1,
  dots: true
}

}, {

  breakpoint: 300,
  settings: {
  slidesToShow: 1,
  dots: true
},
}]
});


  $(".partner-slider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows:true,

  // the magic
  responsive: [{

  breakpoint: 1500,
  settings: {
  slidesToShow: 4,
  infinite: true
}

}, {

  breakpoint: 1201,
  settings: {
  slidesToShow: 3,
  dots: true
}

}, {

  breakpoint: 991,
  settings: {
  slidesToShow: 2,
  dots: true,
  arrows:false,
}

}, {
  breakpoint: 600,
  settings: {
  slidesToShow: 2,
  dots: true,
  arrows:false
}

}]
});



  $(".product-slider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows:true,

  // the magic
  responsive: [{

  breakpoint: 1024,
  settings: {
  slidesToShow: 3,
  infinite: true
}

}, {

  breakpoint: 600,
  settings: {
  slidesToShow: 2,
  dots: true
}

}, {

  breakpoint: 300,
  settings: "unslick" // destroys slick

}]
});

  //for testimonial
  $('.testimonial-img').slick({
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.testimonial-text',
  centerMode: true,
  centerPadding: 0,
  responsive: [
{
  breakpoint: 1200,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
}
},
{
  breakpoint: 768,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
}
},
{
  breakpoint: 575,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
}
}
  ]
});



  $('.testimonial-text').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows:true,
  centerPadding: 0,
  dots: false,
  speed: 1000,
  asNavFor: '.testimonial-img',
  prevArrow: '<i class="icofont-double-right"></i>',
  nextArrow: '<i class="icofont-double-left"></i>',

  responsive: [
{
  breakpoint: 991,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
}
},
{
  breakpoint: 767,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
}
}
  ]
});
