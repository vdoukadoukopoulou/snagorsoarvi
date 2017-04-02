$(window).on('beforeunload', function() {
	$(window).scrollTop(0);
});

$(document).ready(function() {

	var numOfPanels = $('.panel').length;
	var currentPanel = 0;
	var panelHeight = 0;

	//set height of page same as height of all panels combined
	$('.panel').each(function() {
		panelHeight = panelHeight + $(this).height();
	});
	if (panelHeight > 25878) {
		$('body').height(panelHeight);
	} else {
		$('body').height(25878);
	}

	//set first panel to absolute
	$('.panel').eq(currentPanel).css({position: 'absolute'});
	// on scroll check if the current active panel is visible if not make next panel active
	$(window).scroll(function() {
		if (checkVisible($('.panel').eq(currentPanel)) != true) {
			$('.panel').eq(currentPanel).next().css({position: 'absolute', top: $(window).scrollTop()});
			currentPanel++;
		}
	});

	//check visible function from internets
	function checkVisible(elm, eval) {
		eval = eval || "visible";
		var vpH = $(window).height(), // Viewport Height
			st = $(window).scrollTop(), // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();

		if (eval == "visible")
			return ((y < (vpH + st)) && (y > (st - elementHeight)));
		if (eval == "above")
			return ((y < (vpH + st)));
		};

	//this part does the randomizing panels
	var random = $('.random');

	for (var i = 0; i < random.length; i++) {
		console.log(random[i]);
	};

	//click to make panel to foreground

	$('.footnote').click(function() {
		$('.references').addClass('front');
	});

	$('.close').click(function() {
		$('.references').removeClass('front');
	});
});
