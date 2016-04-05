$(document).ready(function(){

	$("#bot").click(function(){

		$(this).css("background-color", "red");
	});

	 // does smooth page scrolling
        $('#begin').on('click', function() {
            var $nextSection = $(this).closest('.section').next();
            $('html,body').animate({scrollTop: $nextSection.offset().top }, 600);
        });

	$('#myb').bind('click',function(event){
		var $anchor = $(this);
		/*
		if you want to use one of the easing effects:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		 */
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);
		event.preventDefault();
	});

	$(function(){
      $("#contact_me_for").typed({
        strings: ["to collaborate.", "to experiment." ,"to make something fresh."],
        typeSpeed: 0
      });
  });


	console.log($( ".blurb" ).offsetParent());


});