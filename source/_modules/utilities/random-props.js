/* -------------------------------------------------- */
/* RANDOM PROPS
/* -------------------------------------------------- */

var randomProps = (function randomProps($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('randomProps', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var options = {
		positionDataAttrName: 'position',
		min: 0,
		max: 1920

	};


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	function init() {

		// SCALE
		$('[data-random-scale]').each(function() {

			var $self = $(this),
				originalvalue = $self.data('random-scale').trim().split(', '),
				min = originalvalue[0],
				max = originalvalue[1],
				newValue = _.random(min, max);

				//x = _.random( $self.width() * 0.5) + 'px',
				//y = _.random( $self.width() * 0.5) + 'px';

				//console.log('value-min: ' + newValue.toFixed(2));
				//console.log('value-max: ' + newValue.toFixed(2));

			$self.css({'transform' : 'scale(' + newValue.toFixed(2) + ',' + newValue.toFixed(2) + ')'});

		});

	}

	//$win.on('resize', _.throttle(position, 250, { leading: interval.leading, trailing: interval.trailing } ));

	
	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
