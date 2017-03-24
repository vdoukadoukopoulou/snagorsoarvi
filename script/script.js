$(document).ready(function() {
	console.log('hi');
	window.location.hash = '#open';
	var visible;

	// We need to duplicate the whole body of the website so if you scroll down you can see both the bottom and the top at the same time. Before we do this we need to know the original height of the website.
	var origDocHeight = document.body.offsetHeight;

	// now we know the height we can duplicate the body
	$("body").contents().clone().appendTo("body");

	$(document).scroll(function() { // detect scrolling
		// scroll();
	});

	function scroll() {
		var scrollWindowPos = $(document).scrollTop(); // store how far we have scrolled

		if (scrollWindowPos >= origDocHeight) { // if we scrolled further then the original doc height
			$(document).scrollTop(0); // then scroll to the top
		}
	};

	function visible() {
		if ($('.epitaph').isVisible()) {
			$('.epitaph').addClass("epitaph-small");
			console.log('red');
		} else {
			$('.epitaph').removeClass("epitaph-small");
		};
	};

	$.fn.isVisible = function() {
		// Am I visible?
		// Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
		// essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
		// That is why either width or height have to be > 0.
		var rect = this[0].getBoundingClientRect();
		return ((rect.height > 0 || rect.width > 0) && rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
	};

});
