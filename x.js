$(document).ready(function(){

	$("#bot").click(function(){

		$(this).css("background-color", "red");
	});

	 // does smooth page scrolling
        $('#begin').on('click', function() {
            var $nextSection = $(this).closest('.section').next();
            $('html,body').animate({scrollTop: $nextSection.offset().top }, 500);
        });

        /*$('a').on('click', function() {
        	var $nextSection = document.getElementById("portfolio");
        	/*console.log($($nextSection).offset());*/
            /*$('html,body').animate({scrollTop: $($nextSection).offset().top}, 500);*//*
            $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
        });*/

      
        
       $('a.nav_link').click(function(){
         $('html, body').animate({
          		scrollTop: $( $.attr(this, 'href') ).offset().top
           }, 500);
         return false;
       });


	

	console.log($( ".blurb" ).offsetParent());


});