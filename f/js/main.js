(function() {

}());

function getGridSize(cols) {
  if(cols == 4) {
    return ($(window).innerWidth() < 768) ? 1 :
        ($(window).innerWidth() < 992) ? 2 :
          ($(window).innerWidth() < 1200) ? 3 : 4;
  }
  return ($(window).innerWidth() < 576) ? 1 :
    ($(window).innerWidth() < 768) ? 2 :
    ($(window).innerWidth() < 992) ? 3 :
      ($(window).innerWidth() < 1200) ? 4 : 5
};
$(document).ready(function() {
  $(".slider-line").each(function(){
    $(this).find('.slider-line__holder').on('init', function(event, slick){
      var stHeight = $(this).find('.slick-track').height();
      $(this).find('.slick-slide').css('height',stHeight + 'px' );
    });
  });
  $(".catalog-btn").click(function(){
    $(".catalog-content").toggleClass("active");
  });
});
