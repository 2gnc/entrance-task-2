(function (){
	const aside = $( '.schedule__aside' )[ 0 ].clientWidth;
	const roomsbox = $( '.rooms' );
	const rooms = $ ( '.room__name' );
	const floors = $( '.rooms__floor-name' );
	let check = false;
	
	document.addEventListener ( 'scroll', switcher );
	
	function switcher () {
		
		console.log( 'ff' );
		
		if ( window.pageXOffset > aside && !check ) {
			check = true;
			rooms.toggleClass ( 'room__name--swiped' );
			roomsbox.toggleClass( 'rooms--swiped' );
			floors.toggleClass( 'rooms__floor-name--swiped' );
		}
		
		if ( window.pageXOffset <= aside && check ) {
			check = false;
			rooms.toggleClass ( 'room__name--swiped' );
			roomsbox.toggleClass( 'rooms--swiped' );
			floors.toggleClass( 'rooms__floor-name--swiped' );
			roomsbox.removeAttr( 'style' );
		}
		
		if( window.pageXOffset > aside ) {
			roomsbox.css( 'left', pageXOffset );
		}
		
	}
}());
	
