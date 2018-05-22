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
  $('[data-toggle="tooltip"]').tooltip();
  $(".slider-line").each(function(){
    $(this).find('.slider-line__holder').on('init', function(event, slick){
      var stHeight = $(this).find('.slick-track').height();
      $(this).find('.slick-slide').css('height',stHeight + 'px' );
    });
  });
  $(".catalog-btn").click(function(){
    $(".catalog-content").toggleClass("active");
  });
  $('.spinner button:first-of-type').on('click', function() {
    $(this).closest('.spinner').find('.input').val( parseInt($(this).closest('.spinner').find('input').val(), 10) + 1);
    return false;
  });
  $('.spinner button:last-of-type').on('click', function() {
    if(parseInt($(this).closest('.spinner').find('.input').val()) >= 2) {
      $(this).closest('.spinner').find('.input').val( parseInt($(this).closest('.spinner').find('input').val(), 10) - 1);
      return false;
    }
    return false;
  });
  $(".rating_action li").mouseenter(function(){
    $(this).closest(".rating_action").find("li").removeClass("hover");
    $(this).addClass("hover");
  });
  $(".rating_action").mouseleave(function(){
    $(this).closest(".rating_action").find("li").removeClass("hover");
  });
  $(".rating_action li").click(function(){
    $(this).closest(".rating_action").find("li").removeClass("hover").removeClass("active");
    $(this).addClass("active");
  });
});
$(function() {
  $(".modal-inline").fancybox({
    type: 'inline',
    fixed: false,
    fitToView: false,
    width: '100%',
    height: "auto",
    maxWidth: 700,
    autoSize: false,
    helpers: {
      overlay: {
        css: {
          'background': 'rgba(0, 0, 0, 0.4)'
        }
      }
    }
  });
});