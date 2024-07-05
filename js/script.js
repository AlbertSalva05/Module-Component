$(document).ready(function(){
	// open accordion simultaneously
	// var faq_Header = document.querySelectorAll(".faq_heading_title");
	// var i;
	// for (i = 0; i < faq_Header.length; i++) {
	// 	faq_Header[i].onclick = function () {
	// 		this.classList.toggle("open");
	// 		console.log("clicked");
	// 	};
	// }

	// open accordion one at a time
	$('.faq_heading_title').click(function(e) {
		e.preventDefault();
		var currentIsActive = $(this).hasClass('open');
		$(this).parent('.faq_list').find('> *').removeClass('open');
		if(currentIsActive != 1) {
			$(this).next('.faq_panel').addClass('open');
		}
	});


});
