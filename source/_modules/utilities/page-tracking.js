/* -------------------------------------------------- */
/* PAGE TRACKING
/* -------------------------------------------------- */

var pageTracking = (function pageTracking($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('pageTracking', '1.0', 'Aries Datuin');
		//endRemoveIf(production)
	

		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		// GA (Used with SwupGaPlugin)
		window.ga('set', 'title', document.title);
		window.ga('set', 'page', window.location.pathname + window.location.search);
		window.ga('send', 'pageview');


		// GTM (Used with SwupGtmPlugin)
		window.dataLayer.push({
			event: 'VirtualPageview',
			virtualPageURL: window.location.pathname + window.location.search,
			virtualPageTitle: document.title
		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
