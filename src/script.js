window.addEventListener('DOMContentLoaded', function(){

  $(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<img src='./src/img/about/arrow.png' class='prev' alt='1'>",
        nextArrow: "<img src='./src/img/about/arrow.png' class='next' alt='2'>",
        responsive: [
          {
            breakpoint: 568,
	        settings: {
	        slidesToShow: 1,
	      }
          }
        ]
    });
  });

})