setup = function() {
	jQuery('#demo').click(animate_demo)
	jQuery('#right').click(animate_right)
	jQuery('#left').click(animate_left)
	jQuery('#toggle').click(animate_toggle)

	jQuery('#hello').click(add_sayHello)
	jQuery('#goodbye').click(add_sayGoodbye)
	jQuery('#remove').click(remove_last)
}
jQuery(document).ready(setup)

animate_demo = function() {
	newstyle = {
	  'font-size': '250%',
	  'letter-spacing': '0.5em'
	}
	jQuery('#animations h2').animate(newstyle, 1000)
}
animate_right = function() {
	newstyle = {
		'height' : '0',
		'left' : '100%'
	}
	jQuery('#animations h2').animate(newstyle, 1000);
}
animate_left = function() {
	newstyle = {
		'height' : '1.5em',
		'left' : '0'
	}
	jQuery('#animations h2').animate(newstyle, 1000);
}
animate_toggle = function() {
	jQuery('#animations h2').slideToggle()
}

add_sayHello = function() {
	jQuery('#newcontent').append('<p>Hello!</p>')
}
add_sayGoodbye = function() {
	jQuery('#newcontent').append('<p>Goodbye.</p>')
}
remove_last = function() {
	jQuery('div#newcontent p').last().remove()
}