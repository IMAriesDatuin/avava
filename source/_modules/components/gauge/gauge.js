/* -------------------------------------------------- */
/* GAUGE
/* -------------------------------------------------- */

var gauge = (function gauge($, window, document, undefined) {

	'use strict';

	function init($element, value) {

		//removeIf(production)
		get.info('gauge', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $container = '.gauge';


		/* -------------------------------------------------- */
		/* LOGIC
		/* -------------------------------------------------- */

		var gauge = Gauge(

			document.getElementById($element), {

				value: value,
				min: 0,
				max: 100,
				gaugeClass: 'gauge-cluster',
				dialClass: 'gauge-cluster-dial',
				valueClass: 'gauge-cluster-value-text',
				valueDialClass: 'gauge-cluster-value',
				//dialRadius: 40,
				dialStartAngle: -90,
				dialEndAngle: -90.001,
				showValue: true,
				color: function(value) {

					if(value < -25) {

						return "#a07e3d";

					} else if(value < 0) {

						return "#be9f64";

					} else if(value < 25) {

						return "#e1c389";

					} else {

						return "#e1c389";

					}

				},

				label: function(value) {

					return Math.round(value * 1) / 1 + '%';

				}

			}

		);

		/*
		function test() {

			var value = Math.random() * 100;

			// setValueAnimated(value, durationInSecs);
			gauge.setValueAnimated(value, 1);
			//window.setTimeout(loop, 6000);

		}
		*/


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: $container,
			threshold: 0,
			//thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: false,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');
				
				gauge.setValueAnimated(value, 1);

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');

				gauge.setValueAnimated(0, 1);

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//lazyLoad.update();
		//lazyLoad.load(element, force);
		//lazyLoad.loadAll();
		//lazyLoad.destroy();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
