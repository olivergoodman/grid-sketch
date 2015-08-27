//script for grid-sketch

$(document).ready(function(){
	$('body').append('<div class="container"></div>');
	$('.container').prepend('<button onclick="makeGrid(); return false">New Grid</button>');
	
});

//makes a square grid; size from user input
function makeGrid(){
	//remove and add the container/button again
	$('.container').remove()
  	$('body').append('<div class="container"></div>')
  	$('.container').prepend('<button onclick="makeGrid(); return false">New Grid</button>');

	var x = prompt("How wide/tall do you want your grid?");
	for(var i = 0; i < x; i++){
		$('.container').append('<ul></ul>');
	}
	for (var j = 0; j < x; j++){
		$('ul').append('<li></li>');

	}

	var width = $(window).width(); //use this to get window width
	var height = $(window).height(); //window height
	console.log('window width is ' + width);
	console.log('window height is ' + height);
	var new_dimension = width/x;
	console.log('new dimension of squares is ' + new_dimension);

	$('ul').css({'width': new_dimension});

	//drawing
	$('li').on('mouseenter', function(){
		$(this).addClass('highlighted');
	});
}


//NOTE: to make each square relative size, divide window width/height by number of squares

 