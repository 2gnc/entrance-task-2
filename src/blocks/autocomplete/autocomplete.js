$(function() {
	$( '.autocomplete' ).niceScroll(
		"div.autocomplete__wrapper",
		{
			cursorwidth: "10px",
			cursorcolor:"#d5dfe9",
			cursorborderradius: "100px",
			emulatetouch: true,
			autohidemode: false,
			railpadding: {
				top: 0,
				right: 3,
				left: 0	,
				bottom: 0
			},
			cursorfixedheight: 40
		}
	);
});