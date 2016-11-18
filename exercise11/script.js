var size_square = 10
var padding = 20

setup = function() {
	$('#enter').click(get_grid_size)

}
$(document).ready(setup)


get_grid_size = function() {
	var size = $('#grid_size').val()
	if (size > 0 && size <= 15){
		var width = size * (size_square+padding) + padding
		var height = width
		var paper = Raphael('container', width, height)

		for (var x = 0; x < size; x++){
			for (var y = 0; y < size; y++){
				var xDis = x * (size_square+padding) + padding
				var yDis = y * (size_square+padding) + padding
				var square = paper.rect(xDis, yDis, size_square, size_square)
				if (x+y+2 > size){
					square_style = {
						'fill': '#66f',
						'stroke': '#ff6'
					}
				}else{
					square_style = {
						'fill': '#f66',
						'stroke': '#ff6'
					}
				}
				square.attr(square_style)
			}
		}
	}else{
		alert("Grid size must be a number from 1 to 15.")
	}
	
}