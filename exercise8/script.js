setup = function() {
	paper = Raphael('container', 400, 400)


	drawSnowman();

	$("#hatChange").click(hatButtonClick)
	$("#reset").click(resetSnowman)
}
$(document).ready(setup)


resetSnowman = function() {
	paper.clear();
	drawSnowman();
}

hatButtonClick = function() {
	hatTop.scale(1.0,1.2, 0, 130)
}
drawSnowman = function() {
	bodyStyle = {
		'fill': '#fff',
		'stroke': '#000',
	  	'stroke-width': '2'
	}
	hatStyle = {
		'fill': '000',
		'stroke': '000',
		'stroke-width': '2'
	}
	bodyBottom = paper.circle(200, 320, 80)
	bodyBottom.attr(bodyStyle)
	bodyMiddle = paper.circle(200, 260, 60)
	bodyMiddle.attr(bodyStyle)
	bodyTop = paper.circle(200, 180, 50)
	bodyTop.attr(bodyStyle)

	hatBottom = paper.rect(150,130,100,10)
	hatBottom.attr(hatStyle)
	hatTop = paper.rect(170,90,60,40)
	hatTop.attr(hatStyle)

	hatTopHeight = 40;
}