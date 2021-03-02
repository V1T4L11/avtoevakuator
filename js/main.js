$(function(){
	$('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      position = $(window).scrollTop();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
	});
});