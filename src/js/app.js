function ativaScrollSuave(selector){

	$(selector).click(function(event){

		event.preventDefault();
		var target = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000)
	});
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');

/*
$("#panel-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#panel-description-js").offset().top
    }, 1000);
});

$("#panel-speakers").click(function() {
    $('html, body').animate({
        scrollTop: $("#panel-speakers-js").offset().top
    }, 1000);
});

$("#sign").click(function() {
    $('html, body').animate({
        scrollTop: $("#sign-js").offset().top
    }, 1000);
});

*/