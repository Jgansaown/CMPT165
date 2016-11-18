setup = function() {
  paperSF = Raphael('smileyface', 400, 400)//contains the smiley face
  paperP = Raphael('pyramid', 400, 400)//contains the pyramid
  drawSmileyFace()

  $('#bigeyes').click(growEyes)
  $('#frown').click(flipMouth)
  $('#reset').click(resetSmileyFace)

  drawPyramid()
}
$(document).ready(setup)

resetSmileyFace = function() {
	paperSF.clear()
	drawSmileyFace()
}
growEyes = function() {
	bigEye_transform = {
		'transform': 's3'
	}
	leftEye.animate(bigEye_transform, 500)
	rightEye.animate(bigEye_transform, 500)
}
flipMouth = function() {
	mouth_rotation += 180
	mouth_rotate = {
		'transform': 'r' + mouth_rotation
	}
	mouth.animate(mouth_rotate, 500)
}
drawSmileyFace = function() {
	eye_style = {
		'fill': '#000',
	}
	face_style = {
		'fill': '#ff0',
		'stroke': '#000',
		'stroke-width': '4'
	}
	mouth_style = {
		'stroke': '#000',
		'stroke-width': '4'
	}

	face = paperSF.circle(200,200,100)
	leftEye = paperSF.circle(160,170,10)
	rightEye = paperSF.circle(240,170,10)
	mouth = paperSF.path('M120,220 Q200,300 280,220')

	face.attr(face_style)
	leftEye.attr(eye_style)
	rightEye.attr(eye_style)
	mouth.attr(mouth_style)

	mouth_rotation = 0
}

drawPyramid = function() {
	y = 40
	for (i = 0; i < 8; i++) {
		width = 20 + i*i*7
		height = 10 + i*8
		x = 200 - width/2
		floor = paperP.rect(x,y,width,height)
		y += height

		red = 100 - i*12.5 + '%'
		green = 0 + '%'
		blue = i*12.5 + '%'
		floor_style = {
			'fill': 'rgb('+red+','+green+','+blue+')',
			'stroke': 'rgb(0%, '+(10-i)*10+'%, 0%)',
			'stroke-width': i+1,
			'opacity': '1'
		}
		floor.attr(floor_style)
	}
	text = paperP.text(200,370,'My Tower')
	text.attr({'font-size': '20em'})
}