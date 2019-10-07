/* -------------------------------------------------- */
/* TILT
/* -------------------------------------------------- */

var tilt = (function tilt($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('tilt', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.tilt');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var request = null,
			mouse = { x: 0, y: 0 },
			cx = window.innerWidth / 2,
			cy = window.innerHeight / 2;


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		$element.mousemove(function(event) {

			mouse.x = event.pageX;
			mouse.y = event.pageY;
		
			cancelAnimationFrame(request);
			request = requestAnimationFrame(update);

		});

		function update() {

			dx = mouse.x - cx;
			dy = mouse.y - cy;

			tiltx = (dy / cy);
			tilty = - (dx / cx);
			radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
			degree = (radius * 20);
			Tween.to($element, 1, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)', ease: Power2.easeOut});

		}
		
		$(window).resize(function() {
			cx = window.innerWidth / 2;
			cy = window.innerHeight / 2;
		});	


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */


	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
