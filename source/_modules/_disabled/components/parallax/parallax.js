/* -------------------------------------------------- */
/* PARALLAX
/* -------------------------------------------------- */

var parallax = (function parallax($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('parallax', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.parallax'),
			$elementReverse = $('.parallax-reverse'),
			$elementStandalone = $('.parallax-standalone'),
			$elementStandaloneReverse = $('.parallax-standalone-reverse');


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			direction: 'normal', // normal, reverse
			settings_mode: 'scroll', // scroll, mouse, mouse_body
			mode_scroll: 'fromtop', // normal, fromtop
			animation_duration: '25',
			easing: 'easeOutQuad' // easeIn, easeOutQuad, easeInOutSine

		};

		var optionsReverse = {
			direction: 'reverse', // normal, reverse
			settings_mode: 'scroll', // scroll, mouse, mouse_body
			mode_scroll: 'normal', // normal, fromtop
			animation_duration: '25',
			easing: 'easeOutQuad' // easeIn, easeOutQuad, easeInOutSine

		};

		var optionsStandalone = {
			direction: 'normal', // normal, reverse
			settings_mode: 'oneelement', // scroll, mouse, mouse_body
			mode_scroll: 'normal', // normal, fromtop
			animation_duration: '25',
			easing: 'easeOutQuad', // easeIn, easeOutQuad, easeInOutSine
			settings_mode_oneelement_max_offset: '100'

		};

		var optionsStandaloneReverse = {
			direction: 'reverse', // normal, reverse
			settings_mode: 'oneelement', // scroll, mouse, mouse_body
			mode_scroll: 'normal', // normal, fromtop
			animation_duration: '25',
			easing: 'easeOutQuad', // easeIn, easeOutQuad, easeInOutSine
			settings_mode_oneelement_max_offset: '100'

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		//$elementStandalone.addClass('auto-init');
		dzsprx_init('.dzsparallaxer.auto-init', {init_each: true});

		var parallax = new dzsprx_init($element, options),
			parallaxReverse = new dzsprx_init($elementReverse, optionsReverse),
			parallaxStandalone = new dzsprx_init($elementStandalone, optionsStandalone),
			parallaxStandaloneReverse = new dzsprx_init($elementStandaloneReverse, optionsStandaloneReverse);

	}

	
	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
