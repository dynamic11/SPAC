jQuery(function($) {

        $(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

    	//smooth scroll
	$('.a-internal').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top  -70
		}, 500);
	});

	$('.navbar-collapse a').click(function(){
   		$(".navbar-collapse").collapse('hide');
	});


});

