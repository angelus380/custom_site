$(document).ready(function(){
	console.log( "ready!" ); //check if jQuery is functioning;

	//add a class when scrollin > or = to 100
	$(function(){
		var nav = $(".navbar");
		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 100) {
		        nav.addClass("nav-solid");
		    } else {
		        nav.removeClass("nav-solid");
		    }
		});
	});

	//scroll to top
	$(function(){
		$("a[href='#scrollTop']").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, "slow");
		  return false;
		});
	})

	//scroll to an specific id (hash or #) when clicked on an anchor (.scroll-to)
	$(function(){
		$("a.scrollTo").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if

	  });
	})
	
});