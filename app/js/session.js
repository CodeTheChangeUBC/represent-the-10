/*
 If this is the first time a user comes to the website, sets the default language based on URL.
 Then displays content for that language while hiding all other languages
 input: NONE
 returns: NONE
 */
$(document).ready(function() {

	if (sessionStorage.lang == null) {
		var url = window.location.hostname;
		//var url = window.location.host;

		var parsedVal = url + "URL_HERE"; //TODO: actually parse url (impossible right now since we're working without a server)
		parsedVal == "representerles10" ? sessionStorage.lang = "fr": sessionStorage.lang = "eng";
	}

	// TODO: potentially add checks for asl and lsq if going to use those as default languages as well.
	if (data == "fr") {
		$('.eng').hide();
		$('.asl').hide();
		$('.lsq').hide();
		$('.fr').show();
	}
	else { // data == "eng"
		$('.fr').hide();
		$('.asl').hide();
		$('.lsq').hide();
		$('.eng').show();
	}
});