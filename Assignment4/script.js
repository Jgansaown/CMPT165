
var chosen_shape = "circle"
var score = 0
var paper

setup = function() {
	gameWidth = $(window).width()*0.6
	gameHeight = $(window).height()*0.8
	$('.game_container').height(gameHeight).width(gameWidth)
	paper = Raphael('game_area', gameWidth, gameHeight)

	$('#difficulty_Textbox').val(1)

	$('#value').html($('#color').val())
	$('#color').change(showVal)

	//create_shape()
	start_game()

	$('#test').click(asdasd)
}
$(document).ready(setup)

showVal = function() {
	$('#value').html($('#color').val())
	//oninput="showVal(this.value)"
}


start_game = function(difficulty) {
	interval_id = setInterval(create_shape, 500)
}


clicked = true
asdasd = function() {
	if (clicked){
		clearInterval(interval_id)
	}else{
		interval_id = setInterval(create_shape, 500)
	}
	clicked = !clicked
}


create_shape = function() {

	//create_rectangle(x,y,h,l,a,xf,yf,af)
	//create_circle(x,y,r,xf,yf)
	//create_square(x,y,l,a,xf,yf,af)
	//create_triangle(x,y,h,l,a,xf,yf,af)

	var random_number = Math.random()*4
	 x = Math.random()*500
	 y = Math.random()*500
	 h = Math.random()*100+10
	 l = Math.random()*100+10
	 r = Math.random()*50+10
	 a = Math.random()*180
	 xf = Math.random()*500
	 yf = Math.random()*500
	 af = Math.random()*180
	r = 60
	h = 50
	l = 100
	a = 0
	af = 0
	speed = 1000
	if (random_number < 1){
		create_rectangle().click(zap)
	}else if (random_number < 2){
		create_circle().click(zap)
	}else if (random_number < 3){
		create_square().click(zap)
	}else {
		create_triangle().click(zap)
	}

}

create_rectangle = function() {
	var rect = paper.rect(x,y,l,h)
	var initial = {
		'fill': $('#color').val(),
		'stroke': '#000',
		'stroke-width': '2'
	}
	var final = {
		'transform': 't'+(xf-x)+','+(yf-y)+
						'r'+af
	}
	rect.attr(initial).data("shape", "rectangle")
	rect.animate(final, speed, missed)
	return rect
}
create_circle = function() {
	var cir = paper.circle(x,y,r)
	var initial = {
		'fill':'#fff',
		'stroke': '#000',
		'stroke-width': '2'
	}
	var final = {
		'transform': 't'+(xf-x)+','+(yf-y)
	}
	cir.attr(initial).data("shape", "circle")
	cir.animate(final, speed, missed)
	return cir
}

create_square = function() {
	var square = paper.rect(x,y,l,l)
	var initial = {
		'fill':'#fff',
		'stroke': '#000',
		'stroke-width': '2',
		'transform': 'r'+a
	}
	var final = {
		'transform': 't'+(xf-x)+','+(yf-y)+
						'r'+af
	}

	square.attr(initial).data("shape", "square")
	square.animate(final, speed, missed)
	return square
}
create_triangle = function() {
	var triangle_path = 'M'+x+','+y+
					' L'+(x+l)+','+y+
					' L'+(x+l)+','+(y+h)+
					' Z'
	var triangle = paper.path(triangle_path)
	var initial = {
		'fill':'#fff',
		'stroke': '#000',
		'stroke-width': '2',
		'transform': 'r'+a
	}
	var final = {
		'transform': 't'+(xf-x)+','+(yf-y)+
						'r'+af
	}
	triangle.attr(initial).data("shape", "triangle")

	triAnimation = Raphael.animation(final, speed, missed)
	triangle.animate(triAnimation.delay(500))
	return triangle
}

zap = function() {
	if (this.data("shape") == chosen_shape){
		//$('#value').html(this.data("shape")+"")
		score++
		$('#score').html(score)
		this.remove()
	}
}
missed = function() {
	if (this.data("shape") == chosen_shape){
		//$('#value').html(this.data("shape")+"")
		score--
		$('#score').html(score)
	}
	this.remove()
}
disappear = function(id) {
	paper.getById(id).remove()
}
