/* -------------------------------------------------- */
/* MUSIC PLAYER
/* -------------------------------------------------- */

var musicPlayer = (function musicPlayer($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('musicPlayer', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.music-player'),
			$eq = $('.music-player-blobs').find('.blobs'),
			//$audio = document.getElementById('sound-ambience'); 
			$audio = new Audio('https://imariesdatuin.github.io/sampeek/build/assets/sounds/ambience.mp3');


		/* -------------------------------------------------- */
		/* AUDIO
		/* -------------------------------------------------- */

		// SET
		$audio.controls = false;
		$audio.loop = true;
		$audio.preload = 'auto';
		$audio.volume = 0;


		// LOADED
		$audio.addEventListener('loadeddata', function() {

			console.log('Media content is ready to play.');
			playAudio();

		}, false);


		$audio.addEventListener('paused', function() {

			console.log('Media content is paused.');

		}, false);


		$audio.addEventListener('ended', function() {

			console.log('Media content has ended at: ' + $audio.currentTime);

		}, false);


		$audio.addEventListener('timeupdate', function() {

			var buffer = 4.0;

			if(this.currentTime > this.duration - buffer) {

				this.currentTime = 0;
				this.play();

			}

		}, false);


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */
		
		//Tween.set($eq.children(), {display: 'none', autoAlpha: 0, scale: 0.95});


		function createBlobs() {

			var blob3 = blob.create({
				element: document.querySelector('.blob:nth-of-type(1)'),
				numPoints: 20,
				centerX: 500,
				centerY: 500,
				minRadius: 175,
				maxRadius: 200,
				minDuration: 0.25,
				maxDuration: 0.5
			});

			var blob2 = blob.create({
				element: document.querySelector('.blob:nth-of-type(2)'),
				numPoints: 20,
				centerX: 500,
				centerY: 500,
				minRadius: 275,
				maxRadius: 300,
				minDuration: 0.25,
				maxDuration: 0.75
			});

			var blob1 = blob.create({
				element: document.querySelector('.blob:nth-of-type(3)'),
				numPoints: 20,
				centerX: 500,
				centerY: 500,
				minRadius: 375,
				maxRadius: 400,
				minDuration: 0.25,
				maxDuration: 1
			});

		}
		createBlobs();


		function playAudio() {

			$element.removeClass('music-player-is-paused');
			Tween.to($audio, 4, {volume: 0.25, delay: 0});
			$audio.play();

		}


		function pauseAudio() {

			$element.addClass('music-player-is-paused');
			Tween.to($audio, 2, {volume: 0, delay: 0, onComplete: function(){$audio.pause();} });

		}


		function controller() {

			if($audio.paused) {

				Tween.staggerTo($eq.children(), 0.5, {display: 'block', autoAlpha: 1, scale: 1, onStart: playAudio}, 0.05);

			} else {

				Tween.staggerTo($eq.children(), 0.5, {display: 'none', autoAlpha: 0, scale: 0.95, onStart: pauseAudio}, -0.05);

			}

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */


		$element.on('mouseup touchend', function() {
			
			controller();

		});


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


// RUN
/*
swup.on(swupLoadOn, function () {

	musicPlayer.init();

});

docReady(function() {

	musicPlayer.init();
	console.log(musicPlayer.init.publicProperty);
	
	if ( !$isTouch ) {

		Tween.delayedCall($interval.delay, musicPlayer.init);

	}

});
*/
