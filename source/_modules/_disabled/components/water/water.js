/* -------------------------------------------------- */
/* WATER
/* -------------------------------------------------- */

var water = (function water($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('water', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('#svg-filter-water feTurbulence');


		/* -------------------------------------------------- */
		/* ANIMATION
		/* -------------------------------------------------- */

		Tween.to($element, 5, { attr: {'baseFrequency': 0.02}, repeat: -1, yoyo: true });

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
