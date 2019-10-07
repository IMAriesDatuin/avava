/* -------------------------------------------------- */
/* DISTORTION
/* -------------------------------------------------- */

var distortion = (function distortionHover($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('distortion', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = '.distortion';


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var privateProperty = 'Hello World.',
			publicProperty = 'I am a public property.';


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */



		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		Array.from(document.querySelectorAll($element)).forEach((el) => {

			const imgs = Array.from(el.querySelectorAll('img'));

				new hoverEffect({

				parent: el,

				angle: el.dataset.angle || undefined,
				angle1: el.dataset.angle1 || undefined,
				angle2: el.dataset.angle2 || undefined,

				intensity: el.dataset.intensity || undefined,
				intensity1: el.dataset.intensity1 || undefined,
				intensity2: el.dataset.intensity2 || undefined,

				speedIn: el.dataset.speedin || undefined,
				speedOut: el.dataset.speedout || undefined,

				easing: el.dataset.easing || undefined,
				hover: el.dataset.hover || undefined,

				displacementImage: el.dataset.displacement,

				image1: imgs[0].getAttribute('src'),
				image2: imgs[1].getAttribute('src'),

			});

		});


		/*
		var myAnimation = new hoverEffect({
			parent: document.querySelector('.text-block'),
			intensity: 0.3,
			image1: 'images/myImage1.jpg',
			image2: 'images/myImage2.jpg',
			displacementImage: '../assets/displacement/map.jpg'
		});
		*/

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
