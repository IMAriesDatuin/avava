/* -------------------------------------------------- */
/* PAGE MANAGER
/* -------------------------------------------------- */

var index = (function index($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('index', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $container = 'main',
		$pageTransition = $('.page-transition');


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var rootLink = '/';


	/* -------------------------------------------------- *	/
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function checkLink() {

		/*
		console.log(url.href);		// https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
		console.log(url.protocol);	// https:
		console.log(url.host);		// developer.mozilla.org:8080
		console.log(url.hostname);	// developer.mozilla.org
		console.log(url.port);		// 8080
		console.log(url.pathname);	// /en-US/search
		console.log(url.search);	// ?q=URL
		console.log(url.hash);		// #search-results-close-container
		console.log(url.origin);	// https://developer.mozilla.org:8080
		*/

		var currentOrigin = location.origin,
			//currentPath = location.pathname,
			currentPath = location.pathname.split('/').pop(),
			currentFullPath = location.href;


		console.log('Currently viewing: ' + currentPath);


		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').removeClass('is-active');
		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').parent().removeClass('is-active');


		if(location.pathname === '' + rootLink + '') { // Check if url is at root location.

			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		} else {

			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		}

	}


	function isLoading() {

		console.log('Content is loading...');
		$pageTransition.removeClass('is-loaded');
		//scroll.lock();

	}


	function isLoaded() {

		console.log('Content is loaded successfully.');
		$pageTransition.addClass('is-loaded');
		scroll.unlock();
		checkLink();

	}


	function intro() {
		
		var tl = new Timeline({paused: false});
			tl.to($pageTransition, 0.5, {autoAlpha: 0, delay: 2, ease: Expo.easeOut})
			  .addCallback(isLoaded);
	
	}


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	// TRANSITION
	var transitionOptions = [

		{

			from: '(.*)',
			to: '(.*)',

			in: function(next) {

				// TRANSITION IN (PULL BACK THE CURTAINS)
				var tl = new Timeline({paused: false, delay: 0.75});
					tl.to($pageTransition, 0.5, {autoAlpha: 0, ease: Expo.easeOut})
					  .addCallback(next)
					  .addCallback(isLoaded);

			},

			out: function(next) {

				// TRANSITION OUT (BRIEF INTERMISSION)
				var tl = new Timeline({paused: false});
					tl.addCallback(isLoading)
					  .to($pageTransition, 0.5, {autoAlpha: 1, ease: Expo.easeOut})
					  .addCallback(next);

			}

		}

	];


	// SWUP CORE
	var swupOptions = {
		animateHistoryBrowsing: true,
		animationSelector: '[class*="swup-transition-"]',
		containers: [$container],
		cache: false,
		linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
		requestHeaders: {
			'X-Requested-With': 'swup', // So we can tell request comes from swup.
			'Accept': 'text/html, application/xhtml+xml' // To explicitly define what response we are expecting.
		},
		plugins: [
			new SwupScrollPlugin({
				doScrollingRightAway: false,
				animateScroll: true,
				scrollFriction: 0.4,
				scrollAcceleration: 0.06,
			}),
			//new SwupBodyClassPlugin(),
			new SwupDebugPlugin(),
			new SwupFormsPlugin(),
			new SwupGaPlugin(),
			new SwupGtmPlugin(),
			//new SwupHeadPlugin(),
			new SwupJsPlugin(transitionOptions),
			new SwupPreloadPlugin()
			/*
			new SwupScriptsPlugin({
				head: true,
				body: true
			})
			*/
		],

		skipPopStateHandling: function(event) {

			if (event.state && event.state.source === 'swup') {

				return false;

			}

			return true;

		},

	};


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	var swup = new Swup(swupOptions);

	swup.on('willReplaceContent', modules.destroy);
	swup.on('contentReplaced', modules.components);


	/* -------------------------------------------------- */
	/* READY
	/* -------------------------------------------------- */

	docReady(function() {

		intro();
		modules.core();
		modules.components();

		if(isExplorer) {
			$html.addClass('visible');
		}

	});

}(jQuery, window, document));
