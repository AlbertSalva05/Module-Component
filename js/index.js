// $(".pickup_col_2_1 .pickup_text").tile();
// $(document).ready(function(){

// 	wResize();

// 	var responsive_viewport = $(window).width();
// 	if (responsive_viewport >= 768) {
// 		$('.pickup_col_2_1 .pickup_text').tile();
// 	}

// 	$(window).resize(function(){
// 		wResize();
// 	});

// 	function wResize() {
// 		if (responsive_viewport <= 767) {
// 			$('.pickup_col_2_1 .pickup_text').css({'height':'auto'});
// 		}
// 	}
// });



$(function() {
	autoheight();
});

$(window).resize(function () {
	autoheight();
});

function autoheight() {
	$('.pickup_col_2_1 .pickup_text').matchHeight();
}