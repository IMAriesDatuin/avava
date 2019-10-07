/* -------------------------------------------------- */
/* FILM GRAIN
/* -------------------------------------------------- */

var filmGrain = (function filmGrain($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('filmGrain', '1.0', 'Aries Datuin');
		//endRemoveIf(production)
		

		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			element: 'film-grain',
			patternSize: 100,
			patternScaleX: 1,
			patternScaleY: 1,
			patternRefreshInterval: 1,
			patternAlpha: 10
		};


		/* -------------------------------------------------- */
		/* CORE
		/* -------------------------------------------------- */

		var viewWidth,
			viewHeight,
			canvas = document.getElementById(options.element),
			ctx;


		// Settings
		var patternSize = options.patternSize,
			patternScaleX = options.patternScaleX,
			patternScaleY = options.patternScaleY,
			patternRefreshInterval = options.patternRefreshInterval,
			patternAlpha = options.patternAlpha; // Int between 0 and 255.

		var patternPixelDataLength = patternSize * patternSize * 4,
			patternCanvas,
			patternCtx,
			patternData,
			frame = 0;


		// Create a canvas which will render the grain.
		function initCanvas() {

			viewWidth = canvas.width = canvas.clientWidth;
			viewHeight = canvas.height = canvas.clientHeight;
			ctx = canvas.getContext('2d');
			ctx.scale(patternScaleX, patternScaleY);

		}


		// Create a canvas which will be used as a pattern.
		function initGrain() {

			patternCanvas = document.createElement('canvas');
			patternCanvas.width = patternSize;
			patternCanvas.height = patternSize;
			patternCtx = patternCanvas.getContext('2d');
			patternData = patternCtx.createImageData(patternSize, patternSize);

		}


		// Put a random shade of gray into every pixel of the pattern.
		function update() {

			var value;

			for (var i = 0; i < patternPixelDataLength; i += 4) {
				value = (Math.random() * 255) | 0;
				patternData.data[i    ] = value;
				patternData.data[i + 1] = value;
				patternData.data[i + 2] = value;
				patternData.data[i + 3] = patternAlpha;
			}

			patternCtx.putImageData(patternData, 0, 0);

		}


		// Fill the canvas using the pattern.
		function draw() {

			ctx.clearRect(0, 0, viewWidth, viewHeight);
			ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
			ctx.fillRect(0, 0, viewWidth, viewHeight);

		}


		function loop() {

			if (++frame % patternRefreshInterval === 0) {
			    update();
			    draw();
			}

			requestAnimationFrame(loop);

		}


		// Render
		function render() {

			initCanvas();
			initGrain();
			requestAnimationFrame(loop);

		}


		// Init
		window.onload = function() {

			render();

		};

		$win.on('resize', _.throttle(render, interval.update, { leading: interval.leading, trailing: interval.trailing } ));		

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
