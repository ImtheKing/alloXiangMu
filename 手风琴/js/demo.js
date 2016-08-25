$(function(){
	$("#nangaTion ul li").mouseover(function() {
		$(this).stop(true).animate({width:"330px"},500).siblings().animate({width:"100px"},500);
	});

});