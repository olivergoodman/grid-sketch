//script for grid-sketch

$(document).ready(function(){
	$('body').append('<div class="container"></div>');
	$('body').prepend('<button onclick="makeGrid(); return false">New Grid</button>');
	$('body').prepend('<p>Sketch Pad</p>');
	
});

//makes a square grid; size from user input
function makeGrid(){
	//remove and add the container/button again
	$('.container').remove()
  	$('body').append('<div class="container"></div>')

	var x = prompt("How wide/tall do you want your grid?");
	
	while (x > 0) { 
		  $(".container").append("<div></div>");
		  $(".container div").css({
	      "display": "inline-block",
	      "width": squareSize + "px",
	      "height": squareSize + "px",
	      "background-color": "red",
	      "border-left": "1px solid black",
	      "border-bottom": "1px solid black",
	  });
		  x--;
	}; //fix grid: add div elements instead of ul/li squares. 


	//drawing
	$('li').on('mouseenter', function(){
		$(this).addClass('highlighted');
	});
}


//NOTE: to make each square relative size, divide window width/height by number of squares

 