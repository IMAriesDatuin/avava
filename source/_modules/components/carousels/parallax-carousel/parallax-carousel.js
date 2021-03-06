/* -------------------------------------------------- */
/* PARALLAX CAROUSEL
/* -------------------------------------------------- */

var parallaxCarousel = (function parallaxCarousel($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('parallaxCarousel', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element,
			$carousel = $($element),
			$cell = '.carousel-cell';


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {	
			cellSelector: $cell,
			initialIndex: 0,
			accessibility: false,
			setGallerySize: true,
			resize: true,

			cellAlign: 'left',
			contain: true,
			percentPosition: true,
			rightToLeft: false,

			draggable: '>1',
			freeScroll: false,
			wrapAround: false,
			groupCells: false,
			autoPlay: false,
			pauseAutoPlayOnHover: true,
			fullscreen: false,
			fade: false,
			adaptiveHeight: true,
			watchCSS: false,
			//asNavFor: $carousel,
			hash: null,
			dragThreshold: 10,
			selectedAttraction: 0.05,
			friction: 0.75,
			freeScrollFriction: 0.025,

			prevNextButtons: false,
			pageDots: true,
			//arrowShape: null,

			imagesLoaded: true,
			lazyLoad: 1,
			bgLazyLoad: 1
		};


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */



		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$carousel.each(function() {

			var $self = $(this);

			// READY
			$self.on('ready.flickity', function() {

				console.log('Flickity is ready.');
				//rate( $self.find('.is-selected').find('.rating') );

			});

			$self.flickity(options);


			/* -------------------------------------------------- */
			/* TRANSITIONS
			/* -------------------------------------------------- */

			var docStyle = document.documentElement.style,
				transformProp = typeof docStyle.transform === 'string' ? 'transform' : 'WebkitTransform';
			
			$self.on('scroll.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;
					flkty.slides.forEach(function(slide, i) {

				var image = $self.find($cell).find('.carousel-container')[i],
					x = (slide.target + flkty.x) * - 1 / 2;
					image.style[transformProp] = 'translateX(' + x + 'px)';
				});

			});



			/* -------------------------------------------------- */
			/* TRANSITIONS
			/* -------------------------------------------------- */

			//var docStyle = document.documentElement.style,
				//prop = typeof docStyle.filter === 'string' ? 'filter' : 'WebkitFilter';
			
			/*
			$self.on('scroll.flickity', function(event, progress) {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				flkty.slides.forEach(function(slide, i) {

					var $element = $self.find($cell)[i],
						//x = (slide.target / flkty.x) * 1;

						total = Math.abs(slide.target / flkty.x) * 0.5;

						//Tween.set($element, {webkitFilter: 'blur(' + total + 'px)'﻿});	

						//$element.style[prop] = 'filter:blur(' + x + 'px)';
						//console.log(total);

				});


				var total = Math.round(progress * 100) / 100;

				var tl = new Timeline({paused: true});
					tl.to($self.find('.test').find('li:nth-of-type(1)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(2)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(3)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(4)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(5)'), 1, {autoAlpha: 0, ease: Expo.easeInOut});

				console.log(total);


				tl.progress(total);

				console.log('Progress: '+ tl.progress());



			});
			*/


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			$self.on('settle.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				//$self.find('.is-selected').addClass('is-settled');
				

				if ( flkty.selectedIndex === 0 ) {

					//console.log('First cell.');

				} else if ( flkty.selectedIndex === flkty.cells.length - 1 ) {

					//console.log('Last cell.');

				}

			}).on('change.flickity', function(event, cellIndex) {

				//console.log( 'Sliding to cell ' + (cellIndex + 1) + '.' );
				//$self.find($cell).removeClass('is-active');

				// < = less than, > = greater than
				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				if ( flkty.selectedIndex === 0 ) { 

					console.log('First cell.');
					$self.find('.previous').addClass('is-disabled');

				}

				if ( flkty.selectedIndex > 0 ) { 

					console.log('Free');
					$self.find('.previous').removeClass('is-disabled');
					$self.find('.next').removeClass('is-disabled');

				}

				if ( flkty.selectedIndex === flkty.cells.length - 1 ) {

					console.log('Last cell.');
					$self.find('.next').addClass('is-disabled');

				}

			}).on('dragStart.flickity', function() {


			}).on('dragEnd.flickity', function() {


			});


			/* -------------------------------------------------- */
			/* LAZY LOAD
			/* -------------------------------------------------- */

			$self.on('lazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			});


			/* -------------------------------------------------- */
			/* STATUS
			/* -------------------------------------------------- */

			var updateStatus = function updateStatus() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement,
					cellNumber = flkty.selectedIndex + 1;

				console.log( cellNumber + ' of ' + flkty.slides.length);

				//$carousel.find('.status').html( '<span class='current'>' + cellNumber + '</span>' + '/' + '<span class='total'>' + $element.data('flickity').slides.length + '</span>' );

			};

			updateStatus();
			$self.on('select.flickity', updateStatus);


			/* -------------------------------------------------- */
			/* OBSERVER
			/* -------------------------------------------------- */

			var lazyLoad = new LazyLoad({
				container: document,
				elements_selector: $element,
				threshold: 0,
				//thresholds: '0% 0% 0% 0%', // top, right, bottom, left
				//load_delay: 0,
				auto_unobserve: false,
				use_native: false,

				callback_enter: function(element) {

					//console.log('ENTERING');
					$(element).addClass('in-view');

					if ( $(element).find($cell).find('img').hasClass('is-loaded') ) {

						//$carousel.controller();

					}

				},

				callback_exit: function(element) {

					//console.log('EXITING');
					$(element).removeClass('in-view');
					//$carousel.controller();

				}

			});

		});


		/* -------------------------------------------------- */
		/* CUSTOM CONTROLS
		/* -------------------------------------------------- */

		$('.previous').on('mousedown touchstart', function() {
			
			$carousel.flickity( 'previous', false, false );

		});
		
		$('.next').on('mousedown touchstart', function() {
			
			$carousel.flickity( 'next', false, false );

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
