//с троттлером при скролле проверить, не скрылся ли блок schedule__aside полностью с экрана
// если скрылся полностью, то добавиль модификатор --scrolled к .room__name

	//const aside = $('.schedule__aside')[0];
	const schedule = document.getElementsByClassName('schedule')[0];

	console.log(schedule);

	document.onscroll = function() {
		console.log( 'foo ' + window.pageXOffset )
	};
	
