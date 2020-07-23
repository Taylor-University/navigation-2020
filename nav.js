function mainMenuHover(event) {

	let el = $('#' + event.target.id);
	let link = $('.mega-menu').find("[data-toggle='" + event.target.id + "']");

	if(el.hasClass('is-open')) {
		link.addClass('visible-link');
	} else {
		link.removeClass('visible-link');
	}

}

function toggleNav(self) {

	let el = $("#myNav");
	let height = el.css("height");
	self.classList.toggle("change");

	if(height == "0px") {
		el.css("height", "100%");
	} else {
		el.css("height", "0%");
	}

}

function showCtaOptions() {

	let specificHeight = 250
	let delayInMilliseconds = 300;
	let scroll = $(window).scrollTop();

	if(scroll >= specificHeight) {
		setTimeout(function () {

			$('.addmissions-side-menu').removeClass('top');

		}, delayInMilliseconds);
	} else {
		setTimeout(function () {

			$('.addmissions-side-menu').addClass('top');

		}, delayInMilliseconds);
	}

}