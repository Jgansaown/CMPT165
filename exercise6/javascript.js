say_hello = function() {
	//alert('Hello world!')
}
say_heading = function(){
	alert('I\'m a heading')
}
highlight = function(){
	jQuery('p').attr('class', 'highlighted')
}
unhighlight = function(){
	jQuery('p').attr('class', '')
}
remove_first_item = function(){
	jQuery('li').first().remove()
}
setup = function() {
	jQuery('h1').click(say_heading)
	jQuery('#hoverable').mouseenter(highlight)
	jQuery('#hoverable').mouseleave(unhighlight)
	jQuery('#zap').click(remove_first_item)
}
jQuery(document).ready(setup)