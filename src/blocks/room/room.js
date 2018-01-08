(function (){
	const aside = $ ( '.schedule__aside' )[ 0 ].clientWidth;
	let check = false;
	const rooms = $ ( '.room__name' );
	
	document.addEventListener ( 'scroll', switcher );
	
	function switcher () {
		
		if ( window.pageXOffset > aside && !check ) {
			check = true;
			rooms.toggleClass ( 'room__name--swiped' );
		}
		
		if ( window.pageXOffset <= aside && check ) {
			check = false;
			rooms.toggleClass ( 'room__name--swiped' );
		}
		
	}
}());
	
