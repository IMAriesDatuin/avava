/* -------------------------------------------------- */
/* CONFETTI
/* -------------------------------------------------- */

var fireConfetti = (function fireConfetti($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('confetti', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var canvas = document.getElementById('confetti'),
		$btnCelebrate = $('#confetti-celebrate'),
		$btnCannon = $('#confetti-cannon'),
		$btnFireworks = $('#confetti-fireworks'),
		$btnPride = $('#confetti-pride'),
		$btnRandom = $('#confetti-random'),
		$btnSnow = $('#confetti-snow');


	/* -------------------------------------------------- */
	/* VAR
	/* -------------------------------------------------- */

	var colors = ['#ce009b', '#333', '#00bfff', '#ffff00', '#000', '#fff'],
		shapes = ['circle', 'square', 'circle'];


	/* -------------------------------------------------- */
	/* LISTENERS
	/* -------------------------------------------------- */

	$btnCannon.on('click', function(e) {

		e.preventDefault();
		cannon();

	});


	$btnFireworks.on('click', function(e) {

		e.preventDefault();
		fireworks();

	});


	$btnRandom.on('click', function(e) {

		e.preventDefault();
		random();

	});


	$btnSnow.on('click', function(e) {

		e.preventDefault();
		snow();

	});


	$btnPride.on('click', function(e) {

		e.preventDefault();
		pride();

	});


	$btnCelebrate.on('click', function(e) {

		e.preventDefault();
		fireworks();
		pride();

	});


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */



	/* -------------------------------------------------- */
	/* VARIATIONS
	/* -------------------------------------------------- */

	// CANNON
	function cannon() {

		//removeIf(production)
		console.log('Firing cannon confetti!');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			colors: colors,
			shapes: shapes,
			angle: 90,
			decay: 0.9,
			particleCount: 100,
			spread: 75,
			startVelocity: 50,
			ticks: 200,
			zIndex: 100,

			origin: {
				x: 0.5,
				y: 0.5
			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });
		canvas.confetti(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//confetti.reset();

	}


	// FIREWORKS
	function fireworks() {

		//removeIf(production)
		console.log('Firing fireworks confetti!');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function random(min, max) {
			return Math.random() * (max - min) + min;
		}


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

		var end = Date.now() + (15 * 1000);

		var interval = setInterval(function() {

			if (Date.now() > end) {
				return clearInterval(interval);
			}

			var options = {

				colors: colors,
				shapes: shapes,
				angle: random(50, 100),
				decay: 0.9,
				particleCount: random(100, 200),
				spread: random(50, 1000),
				startVelocity: 25,
				ticks: 60,
				zIndex: 100,

				origin: {
					x: Math.random(),
					y: Math.random() - 0.2
				}

			};

			canvas.confetti(options);

		}, 200);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//confetti.reset();

	}


	// RANDOM
	function random() {

		//removeIf(production)
		console.log('Firing random confetti!');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function random(min, max) {
			return Math.random() * (max - min) + min;
		}


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {

			colors: colors,
			shapes: shapes,
			angle: random(25, 360),
			decay: random(0.5, 0.9),
			particleCount: random(50, 100),
			spread: random(50, 100),
			startVelocity: 50,
			ticks: 200,
			zIndex: 100,

			origin: {
				x: 0.5,
				y: 0.5
			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });
		canvas.confetti(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//confetti.reset();

	}


	// SNOW
	function snow() {

		//removeIf(production)
		console.log('Let it snow confetti!');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

		var end = Date.now() + (15 * 1000);

		(function frame() {

			var options = {

				colors: colors,
				shapes: shapes,
				angle: 90,
				decay: 1,
				particleCount: 2,
				spread: 50,
				startVelocity: -1,
				ticks: 300,
				zIndex: 100,

				origin: {
					x: Math.random(),
					y: Math.random() - 0.2
				}

			};

			canvas.confetti(options);


			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}

		}());


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//confetti.reset();

	}


	// SCHOOL PRIDE
	function pride() {

		//removeIf(production)
		console.log('Show some school spirit!');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

		var end = Date.now() + (15 * 1000);

		(function frame() {

			var options1 = {

				colors: colors,
				shapes: shapes,
				angle: 60,
				decay: 0.9,
				particleCount: 3,
				spread: 50,
				startVelocity: 50,
				ticks: 200,
				zIndex: 100,

				origin: {
					x: 0
				}

			},
			options2 = {

				colors: colors,
				shapes: shapes,
				angle: 120,
				decay: 0.9,
				particleCount: 3,
				spread: 50,
				startVelocity: 50,
				ticks: 200,
				zIndex: 100,

				origin: {
					x: 1
				}

			};

			canvas.confetti(options1);
			canvas.confetti(options2);

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}

		}());


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//confetti.reset();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		//cannon: cannon,
		//fireworks: fireworks,
		//pride: pride,
		//random: random,
		//snow: snow

	};


}(jQuery, window, document));
