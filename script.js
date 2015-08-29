//script for grid-sketch

$(document).ready(function(){
	$('body').append('<div class="container"></div>');
	$('body').prepend('<button onclick="makeGrid(); return false">New Grid</button>');
	$('body').prepend('<p>Sketch Pad</p>');
	
});

//makes a square grid; size from user input 

function makeGrid(){
	$('.container').remove();
  	$('body').append('<div class="container"></div>');

	var x = prompt("How wide/tall do you want your grid?");
	var num_squares = Math.pow(x, 2);
	var square_width = $('.container').width()/x;
	var square_height = $('.container').height()/x;
	console.log('square width is '+ square_width + ' and square height is '+ square_height);
	
	for (var i = 0; i < num_squares; i++) { 
		$(".container").append('<div></div>');
		console.log('square made');
	}
	$('.container div').css({
			'width': + square_width + 'px',
			'height': + square_height + 'px',
			'display': 'inline-block',
			'background-color': 'blue;',
			'margin-bottom': 'none',
			'padding': 'none'
		});

	//drawing
	$('.container div').on('mouseenter', function(){
		$(this).addClass('highlighted');
	});
} 



 