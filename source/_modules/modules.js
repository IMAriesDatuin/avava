/* -------------------------------------------------- */
/* APP
/* -------------------------------------------------- */

var modules = (function modules($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('modules', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CORE (RUN ONCE ONLY)
	/* -------------------------------------------------- */

	function core() {

		console.log('Initialize core scripts.');

		$doc.foundation();
		detectBrowser();
		detectDevice();
		detectScreen();
		//musicPlayer.init();
		navPanel.init();
		scroll.lock();
		//scrollProgress.init();


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		//if (!isTouch) {
			//grayscaleDisplacement.init();
		//}

		//if (!isEdge && !isSafari) {
			//filmGrain.init();
		//}

	}


	/* -------------------------------------------------- */
	/* MODULES
	/* -------------------------------------------------- */

	function components() {

		console.log('Initialize components.');

		/* -------------------------------------------------- */ 
		/* UTILITIES
		/* -------------------------------------------------- */

		detectTouch();
		dataAttr.backgroundColor();
		dataAttr.color();
		//dataAttr.image();
		dataAttr.page();
		//distortion.init();
		//glitch.init();
		headroom.init();
		io.init();
		lazyLoad.init();
		//pageTracking.init();
		pageVisibility.init();
		print.init();
		randomProps.init();
		//skewScroll.init();
		//tilt.init();
		//water.init();


		/*
		if ($('.hexagon').length) {
			hexagon.init('hexagon');
		}
		*/


		if ($('.gauge').length) {
			gauge.init('gauge-01', 60);
			gauge.init('gauge-02', 58);
			gauge.init('gauge-03', 50);
		}

		
		if ($('.plane-wave#plane-wave-01').length) {
			planeWave.init('plane-wave-01', 15000, 75, 1500000, '#e1c389', '#0b192b', '0.5');
		}

		if ($('.plane-wave#plane-wave-02').length) {
			planeWave.init('plane-wave-02', 20000, 75, 1500000, '#e1c389', '#0b192b', '0.5');
		}
		


		if ($('.list-separator').length) {
			Tween.delayedCall(interval.delay, listSeparator.init);
		}

		if ($('.stack-order').length) {
			stackOrder.init();
		}

		Tween.delayedCall(interval.delay, laxxx.init);


		/* -------------------------------------------------- */
		/* COMPONENTS
		/* -------------------------------------------------- */

		if ($('.carousel').length) { 
			globalCarousel.init('.carousel');
			parallaxCarousel.init('.parallax-carousel');
		}


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		if (!isTouch) {
			//cursor.init();
			//magnetic.init();
		}


		if (isTouch) {
			touchFeedback.init();
			waves.init();
		}

	}


	/* -------------------------------------------------- */
	/* DESTROY
	/* -------------------------------------------------- */

	function destroy() {

		console.log('Destroying components.');

		$('.headroom').headroom(destroy);
		//lazyLoad.destroy();
		$('.carousel').flickity('destroy');

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		core: core,
		components: components,
		destroy: destroy

	};


}(jQuery, window, document));
