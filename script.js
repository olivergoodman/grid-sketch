//script for grid-sketch
var width = $(window).width(); //use this to get window width
var height = $(window).height(); //window height

console.log('width is ' + width);
console.log('height is ' + height);

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

	//drawing
	$('li').on('mouseenter', function(){
		$(this).addClass('highlighted');
	});
}

 