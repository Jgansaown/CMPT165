setup = function() {
	firstPage()
}
$(document).ready(setup)


firstPage = function() {
	initialSpaceship = {
		'left': '320px',
		'top': '340px'
	}
	$('#page1 .spaceship').css(initialSpaceship)

	moveSpaceship = {
		'left': '600px',
		'top': '200px'
	}
	$('#page1 .spaceship').animate(moveSpaceship, 1000, 
		function(){
			$('#page1 .spaceship').css('display', 'none')
		})

	$('#next').off()
	$('#next').click(secondPage)
}


secondPage = function() {
	movePage1 = {
		'right': '600px'
	}
	$('#page1').animate(movePage1, 1000)

	movePage2 = {
		'left': '0px'
	}
	$('#page2').animate(movePage2, 1000)

	$('#last').css('display', 'inline')

	

	$('#page2p2').css({'opacity': '0'})
	$('#page2p2').animate({'opacity': '1'}, 1000)

	$('#page2p3').css({'opacity': '0'})
	$('#page2p3').delay(1000)
	$('#page2p3').animate({'opacity': '1'}, 1000)

	fading = true;
	fadeSignal();

	$('#next').off()
	$('#next').click(thirdPage)
}
fadeSignal = function() {
	if (fading){
		$('#signal1').animate({'opacity': '0'}, 500)
		$('#signal2').animate({'opacity': '0'}, 500)
		$('#signal3').animate({'opacity': '0'}, 500)
		setTimeout(fadeSignal1, 500)
	}
}
fadeSignal1 = function() {
	$('#signal1').animate({'opacity': '1'}, 500)
	setTimeout(fadeSignal2, 500)
}
fadeSignal2 = function() {
	$('#signal2').animate({'opacity': '1'}, 500)
	setTimeout(fadeSignal3, 500)
}
fadeSignal3 = function() {
	$('#signal3').animate({'opacity': '1'}, 500)
	setTimeout(fadeSignal,500)
}


thirdPage = function() {
	$('.signal').remove()
	fading = false;
	$('#page2 p').remove()

	$('#page2').append("<p>You can not tell whether the UFO come in peace or not.<br>"+
			"If the UFO is hostile you have no chance of winning, <br>"+
			"your scanner shows they have more advanced weaponry.<br>"+
			"You have the choice to decide to engage them right away <br>"+
			"or see what they want first.</p>")

	$('.buttons').append("<button id=\"attack\">Attack!</button>"+
		"<button id=\"contact\">Establish Contact</button>")

	$('#next').css('display','none')
	$('#attack').click(attackEvent)
	$('#contact').click(contactEvent)
}	


attackEvent = function() {
	$('#page2 p').remove()
	$('.buttons').css('display','none')
	$('#page2').append("<p id='p_attack'>After the UFO was destoryed you decided to send a probe to investigate.<br>"+
		"You found the UFO was fill with rare metals and what appears to be gifts.<br>"+
		"You just destoryed a friendly ship that came to congradulate the humans for becoming a multiplanetary species!</p>"+
		"<img id=\"lazer\" src=\"lazer.png\">")

	$('#p_attack').css('display','none')

	lazerPos = {
	'position': 'absolute',
	'top': '340px',
	'left': '170px'
	}
	$('#lazer').css(lazerPos)
	lazerPos = {
	'top': '200px',
	'left': '480px'
	}
	$('#lazer').animate(lazerPos, 1000, destoryUFOandLazer)

}
destoryUFOandLazer = function() {
	$('#lazer').css('display','none')
	$('.ufo').css('display','none')
	$('#p_attack').css('display','block')
}


contactEvent = function() {
	$('#page2 p').remove()
	$('.buttons').css('display','none')
	$('#page2').append("<p>After connecting with the UFO they explained they came to congradulate the humans for becoming a multiplanetary species!<br>"+
		"You also became the first human to become friends with an alien species!<br>"+
		"You decided to travel to their home world and to learn their culture...</p>"+
		"<p>To be continued....</p>")

	moveSpaceship = {
		'left': '200px',
		'top': '300px'
	}
	$('#page2 .spaceship').animate(moveSpaceship, 1000)
	moveUFO = {
		'left': '300px',
		'top': '300px'
	}
	$('#page2 .ufo').animate(moveUFO, 1000)
}