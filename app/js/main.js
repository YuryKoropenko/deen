$(document).ready(function() {
	$('.mob__h-nav button').on('click', function() {
		$(this).parent().parent().children('.h-nav').stop(false, true).slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.h-nav').length) return;
				$('.h-nav').slideUp();
				event.stopPropagation();
			});
		return false;
	});
});