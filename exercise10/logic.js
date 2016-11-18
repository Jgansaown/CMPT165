setup = function(){
	paper1 = Raphael('svg1', 200, 200)
	paper2 = Raphael('svg2', 200, 200)

	$('#more').click(addSquares)
	$('#another').click(addAnother)
}
$(document).ready(setup)

addSquares = function() { 
	numOfSquares = $('#howmany').val()
	if (numOfSquares > 100){
		numOfSquares = 100
	}
	for (var i = 0; i < numOfSquares; i++){
		x = Math.random() * 180
		y = Math.random() * 180
		r = paper1.rect(x,y,20,20)
		rotation = Math.random() * 1440 - 720
		filled = {
			'fill': '#ddf'
		}
		transformation = {
			'transform':'r' + rotation
		}
		r.attr(filled)
		r.click(disappear)
		r.animate(transformation, 2000)
	}
}
disappear = function() {
	this.remove()
}

count = 0
addAnother = function() {
	count++
	cir = paper2.circle(100,100,10*count)
	circle_style = {
		'stroke': '#000',
		'stroke-width': '2'
	}
	cir.attr(circle_style)
}