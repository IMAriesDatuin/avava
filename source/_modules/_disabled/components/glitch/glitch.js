/* -------------------------------------------------- */
/* GLITCH
/* -------------------------------------------------- */

var glitch = (function glitch($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('glitch', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.glitch'),
			$filter = document.querySelector('#svg-filter-glitch feTurbulence'),
			$sound = $('#sound-glitch')[0];


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var turbVal = {val: 0.000001},
			turbValX = {val: 0.000001};


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {


		};


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function updateFrequency() {

			$filter.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);

		}


		function playSound() {

			$sound.play();

		}


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		var glitch = function() {

			var tl = new Timeline({paused: true, repeat: 1, repeatDelay: _.random(0, 2), onUpdate: updateFrequency});

				tl.to(turbValX, 0.1, { val: 0.5 })
				  .to(turbVal, 0.1, { val: 0.02 })
				  //.addCallback(playSound)

				  .set(turbValX, { val: 0.000001})
				  .set(turbVal, { val: 0.000001 })

				  .to(turbValX, 0.2, { val: 0.4 }, 0.4)
				  .to(turbVal, 0.2, { val: 0.002 }, 0.4)

				  .set(turbValX, { val: 0.000001 })
				  .set(turbVal, { val: 0.000001 });


			//console.log("duration is: " + tl.duration());


			return {

				start: function() {

					tl.play(0);

				},
				stop: function() {

					tl.pause();

				}

			};

		};

		var glitchBitch = new glitch();


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$element.on('mouseenter touchstart', function() {

			var $self = $(this);

			$self.addClass('glitch-active');
			glitchBitch.start();

		}).on('mouseleave touchend', function() {

			var $self = $(this);

			if ( $self.hasClass('glitch-active') ) {

				$self.removeClass('glitch-active');
				glitchBitch.stop();

			}

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
