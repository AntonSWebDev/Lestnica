jQuery(document).ready(function($){

	$('.modal-btn').click(function(e) {
		e.preventDefault();
		var destinationPopup = $(this).attr("href");
		$(destinationPopup).addClass('show');
	});



});