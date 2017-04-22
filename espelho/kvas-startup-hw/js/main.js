

$( document ).ready(function() {

    var $svg = $('svg').drawsvg(
    	{
    		stagger: 1000, duration: 5000
    	});

$svg.drawsvg('animate');
});