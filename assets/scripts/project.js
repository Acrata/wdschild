'use strict';

/**
 * File js-enabled.js
 *
 * If Javascript is enabled, replace the <body> class "no-js".
 */
window.onload = function () {
  document.body.className = document.body.className.replace('no-js', 'js');
};
'use strict';

/**
 * File js-te
 *
 * TTE
 */
window.teMenu = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();
		app.te();
		//if ( app.meetsRequirements() ) {
		//app.bindEvents();
		//}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	app.te = function () {
		console.log("offman");
		$("#trigger p").click(function () {
			$(".wrapper-vv").toggleClass("is-open");
		});
	};

	// Do we meet the requirements?
	//app.meetsRequirements = function () {
	//return $( '.search-field' ).length;
	//};

	// Combine all events.
	//app.bindEvents = function () {
	// Remove placeholder text from search field on focus.
	//app.$c.body.on( 'focus', '.search-field', app.removePlaceholderText );

	// Add placeholder text back to search field on blur.
	//app.$c.body.on( 'blur', '.search-field', app.addPlaceholderText );
	//};

	// Remove placeholder text from search field.
	//app.removePlaceholderText = function () {
	//var $search_field = $( this );

	//$search_field.data( 'placeholder', $search_field.attr( 'placeholder' ) ).attr( 'placeholder', '' );
	//};

	// Replace placeholder text from search field.
	//app.addPlaceholderText = function () {
	//var $search_field = $( this );

	//$search_field.attr( 'placeholder', $search_field.data( 'placeholder' ) ).data( 'placeholder', '' );
	//};

	// Engage!
	$(app.init);
})(window, jQuery, window.teMenu);
'use strict';

/**
 * File modal.js
 *
 * Deal with multiple modals and their media.
 */
window.wdsModal = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();

		if (app.meetsRequirements()) {
			app.bindEvents();
		}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	// Do we meet the requirements?
	app.meetsRequirements = function () {
		return $('.modal-trigger').length;
	};

	// Combine all events.
	app.bindEvents = function () {
		// Trigger a modal to open.
		app.$c.body.on('click touchstart', '.modal-trigger', app.openModal);

		// Trigger the close button to close the modal.
		app.$c.body.on('click touchstart', '.close', app.closeModal);

		// Allow the user to close the modal by hitting the esc key.
		app.$c.body.on('keydown', app.escKeyClose);

		// Allow the user to close the modal by clicking outside of the modal.
		app.$c.body.on('click touchstart', 'div.modal-open', app.closeModalByClick);
	};

	// Open the modal.
	app.openModal = function () {
		// Figure out which modal we're opening and store the object.
		var $modal = $($(this).data('target'));

		// Display the modal.
		$modal.addClass('modal-open');

		// Add body class.
		app.$c.body.addClass('modal-open');
	};

	// Close the modal.
	app.closeModal = function () {
		// Figure the opened modal we're closing and store the object.
		var $modal = $($('div.modal-open .close').data('target'));

		// Find the iframe in the $modal object.
		var $iframe = $modal.find('iframe');

		// Get the iframe src URL.
		var url = $iframe.attr('src');

		// Remove the source URL, then add it back, so the video can be played again later.
		$iframe.attr('src', '').attr('src', url);

		// Finally, hide the modal.
		$modal.removeClass('modal-open');

		// Remove the body class.
		app.$c.body.removeClass('modal-open');
	};

	// Close if "esc" key is pressed.
	app.escKeyClose = function (event) {
		if (27 === event.keyCode) {
			app.closeModal();
		}
	};

	// Close if the user clicks outside of the modal
	app.closeModalByClick = function (event) {
		// If the parent container is NOT the modal dialog container, close the modal
		if (!$(event.target).parents('div').hasClass('modal-dialog')) {
			app.closeModal();
		}
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsModal);
'use strict';

/**
 * File search.js
 *
 * Deal with the search form.
 */
window.wdsSearch = {};

(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();

		if (app.meetsRequirements()) {
			app.bindEvents();
		}
	};

	// Cache all the things.
	app.cache = function () {
		app.$c = {
			'body': $('body')
		};
	};

	// Do we meet the requirements?
	app.meetsRequirements = function () {
		return $('.search-field').length;
	};

	// Combine all events.
	app.bindEvents = function () {
		// Remove placeholder text from search field on focus.
		app.$c.body.on('focus', '.search-field', app.removePlaceholderText);

		// Add placeholder text back to search field on blur.
		app.$c.body.on('blur', '.search-field', app.addPlaceholderText);
	};

	// Remove placeholder text from search field.
	app.removePlaceholderText = function () {
		var $search_field = $(this);

		$search_field.data('placeholder', $search_field.attr('placeholder')).attr('placeholder', '');
	};

	// Replace placeholder text from search field.
	app.addPlaceholderText = function () {
		var $search_field = $(this);

		$search_field.attr('placeholder', $search_field.data('placeholder')).data('placeholder', '');
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsSearch);
'use strict';

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
	    isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
	    isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

	if ((isWebkit || isOpera || isIe) && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
			    element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();
'use strict';

/**
 * File window-ready.js
 *
 * Add a "ready" class to <body> when window is ready.
 */
window.wdsWindowReady = {};
(function (window, $, app) {
	// Constructor.
	app.init = function () {
		app.cache();
		app.bindEvents();
	};

	// Cache document elements.
	app.cache = function () {
		app.$c = {
			'window': $(window),
			'body': $(document.body)
		};
	};

	// Combine all events.
	app.bindEvents = function () {
		app.$c.window.load(app.addBodyClass);
	};

	// Add a class to <body>.
	app.addBodyClass = function () {
		app.$c.body.addClass('ready');
	};

	// Engage!
	$(app.init);
})(window, jQuery, window.wdsWindowReady);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLWVuYWJsZWQuanMiLCJtZW51LXZvaWwuanMiLCJtb2RhbC5qcyIsInNlYXJjaC5qcyIsInNraXAtbGluay1mb2N1cy1maXguanMiLCJ3aW5kb3ctcmVhZHkuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsInRlTWVudSIsIiQiLCJhcHAiLCJpbml0IiwiY2FjaGUiLCJ0ZSIsIiRjIiwiY29uc29sZSIsImxvZyIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJqUXVlcnkiLCJ3ZHNNb2RhbCIsIm1lZXRzUmVxdWlyZW1lbnRzIiwiYmluZEV2ZW50cyIsImxlbmd0aCIsIm9uIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImVzY0tleUNsb3NlIiwiY2xvc2VNb2RhbEJ5Q2xpY2siLCIkbW9kYWwiLCJkYXRhIiwiYWRkQ2xhc3MiLCIkaWZyYW1lIiwiZmluZCIsInVybCIsImF0dHIiLCJyZW1vdmVDbGFzcyIsImV2ZW50Iiwia2V5Q29kZSIsInRhcmdldCIsInBhcmVudHMiLCJoYXNDbGFzcyIsIndkc1NlYXJjaCIsInJlbW92ZVBsYWNlaG9sZGVyVGV4dCIsImFkZFBsYWNlaG9sZGVyVGV4dCIsIiRzZWFyY2hfZmllbGQiLCJpc1dlYmtpdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImlzT3BlcmEiLCJpc0llIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJlbGVtZW50IiwidGVzdCIsInRhZ05hbWUiLCJ0YWJJbmRleCIsImZvY3VzIiwid2RzV2luZG93UmVhZHkiLCJsb2FkIiwiYWRkQm9keUNsYXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztBQUtDQSxPQUFPQyxNQUFQLEdBQWdCLFlBQVc7QUFDM0JDLFdBQVNDLElBQVQsQ0FBY0MsU0FB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QzdCO0FBQ0FBLEtBQUlDLElBQUosR0FBVyxZQUFZO0FBQ3RCRCxNQUFJRSxLQUFKO0FBQ0FGLE1BQUlZLFVBQUo7QUFDQSxFQUhEOztBQUtBO0FBQ0FaLEtBQUlFLEtBQUosR0FBWSxZQUFZO0FBQ3ZCRixNQUFJSSxFQUFKLEdBQVM7QUFDUixhQUFVTCxFQUFHUCxNQUFILENBREY7QUFFUixXQUFRTyxFQUFHTCxTQUFTQyxJQUFaO0FBRkEsR0FBVDtBQUlBLEVBTEQ7O0FBT0E7QUFDQUssS0FBSVksVUFBSixHQUFpQixZQUFZO0FBQzVCWixNQUFJSSxFQUFKLENBQU9aLE1BQVAsQ0FBYytELElBQWQsQ0FBb0J2RCxJQUFJd0QsWUFBeEI7QUFDQSxFQUZEOztBQUlBO0FBQ0F4RCxLQUFJd0QsWUFBSixHQUFtQixZQUFZO0FBQzlCeEQsTUFBSUksRUFBSixDQUFPVCxJQUFQLENBQVkwQixRQUFaLENBQXNCLE9BQXRCO0FBQ0EsRUFGRDs7QUFJQTtBQUNBdEIsR0FBR0MsSUFBSUMsSUFBUDtBQUNBLENBM0JELEVBMkJLVCxNQTNCTCxFQTJCYWlCLE1BM0JiLEVBMkJxQmpCLE9BQU84RCxjQTNCNUIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBqcy1lbmFibGVkLmpzXG4gKlxuICogSWYgSmF2YXNjcmlwdCBpcyBlbmFibGVkLCByZXBsYWNlIHRoZSA8Ym9keT4gY2xhc3MgXCJuby1qc1wiLlxuICovXG4gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSggJ25vLWpzJywgJ2pzJyApO1xuIH1cbiIsIi8qKlxuICogRmlsZSBqcy10ZVxuICpcbiAqIFRURVxuICovXG53aW5kb3cudGVNZW51ID0ge307XG5cbiggZnVuY3Rpb24gKCB3aW5kb3csICQsIGFwcCApIHtcblx0Ly8gQ29uc3RydWN0b3IuXG5cdGFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC5jYWNoZSgpO1xuICAgICAgICBhcHAudGUoKTtcblx0XHQvL2lmICggYXBwLm1lZXRzUmVxdWlyZW1lbnRzKCkgKSB7XG5cdFx0XHQvL2FwcC5iaW5kRXZlbnRzKCk7XG5cdFx0Ly99XG5cdH07XG5cblx0Ly8gQ2FjaGUgYWxsIHRoZSB0aGluZ3MuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuJGMgPSB7XG5cdFx0XHQnYm9keSc6ICQoICdib2R5JyApXG5cdFx0fTtcblx0fTtcblxuICAgIGFwcC50ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvZmZtYW5cIik7XG4kKCBcIiN0cmlnZ2VyIHBcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAkKFwiLndyYXBwZXItdnZcIikudG9nZ2xlQ2xhc3MoXCJpcy1vcGVuXCIpO1xufSk7XG4gICAgfVxuXG5cdC8vIERvIHdlIG1lZXQgdGhlIHJlcXVpcmVtZW50cz9cblx0Ly9hcHAubWVldHNSZXF1aXJlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly9yZXR1cm4gJCggJy5zZWFyY2gtZmllbGQnICkubGVuZ3RoO1xuXHQvL307XG5cblx0Ly8gQ29tYmluZSBhbGwgZXZlbnRzLlxuXHQvL2FwcC5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIFJlbW92ZSBwbGFjZWhvbGRlciB0ZXh0IGZyb20gc2VhcmNoIGZpZWxkIG9uIGZvY3VzLlxuXHRcdC8vYXBwLiRjLmJvZHkub24oICdmb2N1cycsICcuc2VhcmNoLWZpZWxkJywgYXBwLnJlbW92ZVBsYWNlaG9sZGVyVGV4dCApO1xuXG5cdFx0Ly8gQWRkIHBsYWNlaG9sZGVyIHRleHQgYmFjayB0byBzZWFyY2ggZmllbGQgb24gYmx1ci5cblx0XHQvL2FwcC4kYy5ib2R5Lm9uKCAnYmx1cicsICcuc2VhcmNoLWZpZWxkJywgYXBwLmFkZFBsYWNlaG9sZGVyVGV4dCApO1xuXHQvL307XG5cblx0Ly8gUmVtb3ZlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQuXG5cdC8vYXBwLnJlbW92ZVBsYWNlaG9sZGVyVGV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHQvL3ZhciAkc2VhcmNoX2ZpZWxkID0gJCggdGhpcyApO1xuXG5cdFx0Ly8kc2VhcmNoX2ZpZWxkLmRhdGEoICdwbGFjZWhvbGRlcicsICRzZWFyY2hfZmllbGQuYXR0ciggJ3BsYWNlaG9sZGVyJyApICkuYXR0ciggJ3BsYWNlaG9sZGVyJywgJycgKTtcblx0Ly99O1xuXG5cdC8vIFJlcGxhY2UgcGxhY2Vob2xkZXIgdGV4dCBmcm9tIHNlYXJjaCBmaWVsZC5cblx0Ly9hcHAuYWRkUGxhY2Vob2xkZXJUZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vdmFyICRzZWFyY2hfZmllbGQgPSAkKCB0aGlzICk7XG5cblx0XHQvLyRzZWFyY2hfZmllbGQuYXR0ciggJ3BsYWNlaG9sZGVyJywgJHNlYXJjaF9maWVsZC5kYXRhKCAncGxhY2Vob2xkZXInICkgKS5kYXRhKCAncGxhY2Vob2xkZXInLCAnJyApO1xuXHQvL307XG5cblx0Ly8gRW5nYWdlIVxuXHQkKCBhcHAuaW5pdCApO1xufSApKCB3aW5kb3csIGpRdWVyeSwgd2luZG93LnRlTWVudSApO1xuIiwiLyoqXG4gKiBGaWxlIG1vZGFsLmpzXG4gKlxuICogRGVhbCB3aXRoIG11bHRpcGxlIG1vZGFscyBhbmQgdGhlaXIgbWVkaWEuXG4gKi9cbndpbmRvdy53ZHNNb2RhbCA9IHt9O1xuXG4oIGZ1bmN0aW9uICggd2luZG93LCAkLCBhcHAgKSB7XG5cdC8vIENvbnN0cnVjdG9yLlxuXHRhcHAuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuY2FjaGUoKTtcblxuXHRcdGlmICggYXBwLm1lZXRzUmVxdWlyZW1lbnRzKCkgKSB7XG5cdFx0XHRhcHAuYmluZEV2ZW50cygpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDYWNoZSBhbGwgdGhlIHRoaW5ncy5cblx0YXBwLmNhY2hlID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC4kYyA9IHtcblx0XHRcdCdib2R5JzogJCggJ2JvZHknIClcblx0XHR9O1xuXHR9O1xuXG5cdC8vIERvIHdlIG1lZXQgdGhlIHJlcXVpcmVtZW50cz9cblx0YXBwLm1lZXRzUmVxdWlyZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAkKCAnLm1vZGFsLXRyaWdnZXInICkubGVuZ3RoO1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0YXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gVHJpZ2dlciBhIG1vZGFsIHRvIG9wZW4uXG5cdFx0YXBwLiRjLmJvZHkub24oICdjbGljayB0b3VjaHN0YXJ0JywgJy5tb2RhbC10cmlnZ2VyJywgYXBwLm9wZW5Nb2RhbCApO1xuXG5cdFx0Ly8gVHJpZ2dlciB0aGUgY2xvc2UgYnV0dG9uIHRvIGNsb3NlIHRoZSBtb2RhbC5cblx0XHRhcHAuJGMuYm9keS5vbiggJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmNsb3NlJywgYXBwLmNsb3NlTW9kYWwgKTtcblxuXHRcdC8vIEFsbG93IHRoZSB1c2VyIHRvIGNsb3NlIHRoZSBtb2RhbCBieSBoaXR0aW5nIHRoZSBlc2Mga2V5LlxuXHRcdGFwcC4kYy5ib2R5Lm9uKCAna2V5ZG93bicsIGFwcC5lc2NLZXlDbG9zZSApO1xuXG5cdFx0Ly8gQWxsb3cgdGhlIHVzZXIgdG8gY2xvc2UgdGhlIG1vZGFsIGJ5IGNsaWNraW5nIG91dHNpZGUgb2YgdGhlIG1vZGFsLlxuXHRcdGFwcC4kYy5ib2R5Lm9uKCAnY2xpY2sgdG91Y2hzdGFydCcsICdkaXYubW9kYWwtb3BlbicsIGFwcC5jbG9zZU1vZGFsQnlDbGljayApO1xuXHR9O1xuXG5cdC8vIE9wZW4gdGhlIG1vZGFsLlxuXHRhcHAub3Blbk1vZGFsID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIEZpZ3VyZSBvdXQgd2hpY2ggbW9kYWwgd2UncmUgb3BlbmluZyBhbmQgc3RvcmUgdGhlIG9iamVjdC5cblx0XHR2YXIgJG1vZGFsID0gJCggJCggdGhpcyApLmRhdGEoICd0YXJnZXQnICkgKTtcblxuXHRcdC8vIERpc3BsYXkgdGhlIG1vZGFsLlxuXHRcdCRtb2RhbC5hZGRDbGFzcyggJ21vZGFsLW9wZW4nICk7XG5cblx0XHQvLyBBZGQgYm9keSBjbGFzcy5cblx0XHRhcHAuJGMuYm9keS5hZGRDbGFzcyggJ21vZGFsLW9wZW4nICk7XG5cdH07XG5cblx0Ly8gQ2xvc2UgdGhlIG1vZGFsLlxuXHRhcHAuY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBGaWd1cmUgdGhlIG9wZW5lZCBtb2RhbCB3ZSdyZSBjbG9zaW5nIGFuZCBzdG9yZSB0aGUgb2JqZWN0LlxuXHRcdHZhciAkbW9kYWwgPSAkKCAkKCAnZGl2Lm1vZGFsLW9wZW4gLmNsb3NlJyApLmRhdGEoICd0YXJnZXQnICkgKTtcblxuXHRcdC8vIEZpbmQgdGhlIGlmcmFtZSBpbiB0aGUgJG1vZGFsIG9iamVjdC5cblx0XHR2YXIgJGlmcmFtZSA9ICRtb2RhbC5maW5kKCAnaWZyYW1lJyApO1xuXG5cdFx0Ly8gR2V0IHRoZSBpZnJhbWUgc3JjIFVSTC5cblx0XHR2YXIgdXJsID0gJGlmcmFtZS5hdHRyKCAnc3JjJyApO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBzb3VyY2UgVVJMLCB0aGVuIGFkZCBpdCBiYWNrLCBzbyB0aGUgdmlkZW8gY2FuIGJlIHBsYXllZCBhZ2FpbiBsYXRlci5cblx0XHQkaWZyYW1lLmF0dHIoICdzcmMnLCAnJyApLmF0dHIoICdzcmMnLCB1cmwgKTtcblxuXHRcdC8vIEZpbmFsbHksIGhpZGUgdGhlIG1vZGFsLlxuXHRcdCRtb2RhbC5yZW1vdmVDbGFzcyggJ21vZGFsLW9wZW4nICk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIGJvZHkgY2xhc3MuXG5cdFx0YXBwLiRjLmJvZHkucmVtb3ZlQ2xhc3MoICdtb2RhbC1vcGVuJyApO1xuXHR9O1xuXG5cdC8vIENsb3NlIGlmIFwiZXNjXCIga2V5IGlzIHByZXNzZWQuXG5cdGFwcC5lc2NLZXlDbG9zZSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdFx0aWYgKCAyNyA9PT0gZXZlbnQua2V5Q29kZSApIHtcblx0XHRcdGFwcC5jbG9zZU1vZGFsKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENsb3NlIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBtb2RhbFxuXHRhcHAuY2xvc2VNb2RhbEJ5Q2xpY2sgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdC8vIElmIHRoZSBwYXJlbnQgY29udGFpbmVyIGlzIE5PVCB0aGUgbW9kYWwgZGlhbG9nIGNvbnRhaW5lciwgY2xvc2UgdGhlIG1vZGFsXG5cdFx0aWYgKCAhJCggZXZlbnQudGFyZ2V0ICkucGFyZW50cyggJ2RpdicgKS5oYXNDbGFzcyggJ21vZGFsLWRpYWxvZycgKSApIHtcblx0XHRcdGFwcC5jbG9zZU1vZGFsKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEVuZ2FnZSFcblx0JCggYXBwLmluaXQgKTtcbn0gKSggd2luZG93LCBqUXVlcnksIHdpbmRvdy53ZHNNb2RhbCApO1xuIiwiLyoqXG4gKiBGaWxlIHNlYXJjaC5qc1xuICpcbiAqIERlYWwgd2l0aCB0aGUgc2VhcmNoIGZvcm0uXG4gKi9cbndpbmRvdy53ZHNTZWFyY2ggPSB7fTtcblxuKCBmdW5jdGlvbiAoIHdpbmRvdywgJCwgYXBwICkge1xuXHQvLyBDb25zdHJ1Y3Rvci5cblx0YXBwLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLmNhY2hlKCk7XG5cblx0XHRpZiAoIGFwcC5tZWV0c1JlcXVpcmVtZW50cygpICkge1xuXHRcdFx0YXBwLmJpbmRFdmVudHMoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ2FjaGUgYWxsIHRoZSB0aGluZ3MuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuJGMgPSB7XG5cdFx0XHQnYm9keSc6ICQoICdib2R5JyApXG5cdFx0fTtcblx0fTtcblxuXHQvLyBEbyB3ZSBtZWV0IHRoZSByZXF1aXJlbWVudHM/XG5cdGFwcC5tZWV0c1JlcXVpcmVtZW50cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJCggJy5zZWFyY2gtZmllbGQnICkubGVuZ3RoO1xuXHR9O1xuXG5cdC8vIENvbWJpbmUgYWxsIGV2ZW50cy5cblx0YXBwLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gUmVtb3ZlIHBsYWNlaG9sZGVyIHRleHQgZnJvbSBzZWFyY2ggZmllbGQgb24gZm9jdXMuXG5cdFx0YXBwLiRjLmJvZHkub24oICdmb2N1cycsICcuc2VhcmNoLWZpZWxkJywgYXBwLnJlbW92ZVBsYWNlaG9sZGVyVGV4dCApO1xuXG5cdFx0Ly8gQWRkIHBsYWNlaG9sZGVyIHRleHQgYmFjayB0byBzZWFyY2ggZmllbGQgb24gYmx1ci5cblx0XHRhcHAuJGMuYm9keS5vbiggJ2JsdXInLCAnLnNlYXJjaC1maWVsZCcsIGFwcC5hZGRQbGFjZWhvbGRlclRleHQgKTtcblx0fTtcblxuXHQvLyBSZW1vdmUgcGxhY2Vob2xkZXIgdGV4dCBmcm9tIHNlYXJjaCBmaWVsZC5cblx0YXBwLnJlbW92ZVBsYWNlaG9sZGVyVGV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgJHNlYXJjaF9maWVsZCA9ICQoIHRoaXMgKTtcblxuXHRcdCRzZWFyY2hfZmllbGQuZGF0YSggJ3BsYWNlaG9sZGVyJywgJHNlYXJjaF9maWVsZC5hdHRyKCAncGxhY2Vob2xkZXInICkgKS5hdHRyKCAncGxhY2Vob2xkZXInLCAnJyApO1xuXHR9O1xuXG5cdC8vIFJlcGxhY2UgcGxhY2Vob2xkZXIgdGV4dCBmcm9tIHNlYXJjaCBmaWVsZC5cblx0YXBwLmFkZFBsYWNlaG9sZGVyVGV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgJHNlYXJjaF9maWVsZCA9ICQoIHRoaXMgKTtcblxuXHRcdCRzZWFyY2hfZmllbGQuYXR0ciggJ3BsYWNlaG9sZGVyJywgJHNlYXJjaF9maWVsZC5kYXRhKCAncGxhY2Vob2xkZXInICkgKS5kYXRhKCAncGxhY2Vob2xkZXInLCAnJyApO1xuXHR9O1xuXG5cdC8vIEVuZ2FnZSFcblx0JCggYXBwLmluaXQgKTtcbn0gKSggd2luZG93LCBqUXVlcnksIHdpbmRvdy53ZHNTZWFyY2ggKTtcbiIsIi8qKlxuICogRmlsZSBza2lwLWxpbmstZm9jdXMtZml4LmpzLlxuICpcbiAqIEhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBmb3Iga2V5Ym9hcmQgb25seSB1c2Vycy5cbiAqXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxuICovXG4oIGZ1bmN0aW9uICgpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0XHRpc09wZXJhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdvcGVyYScgKSA+IC0xLFxuXHRcdGlzSWUgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ21zaWUnICkgPiAtMTtcblxuXHRpZiAoICggaXNXZWJraXQgfHwgaXNPcGVyYSB8fCBpc0llICkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoIDEgKSxcblx0XHRcdFx0ZWxlbWVudDtcblxuXHRcdFx0aWYgKCAhKCAvXltBLXowLTlfLV0rJC8gKS50ZXN0KCBpZCApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0aWYgKCBlbGVtZW50ICkge1xuXHRcdFx0XHRpZiAoICEoIC9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaSApLnRlc3QoIGVsZW1lbnQudGFnTmFtZSApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSApO1xuXHR9XG59ICkoKTtcbiIsIi8qKlxuICogRmlsZSB3aW5kb3ctcmVhZHkuanNcbiAqXG4gKiBBZGQgYSBcInJlYWR5XCIgY2xhc3MgdG8gPGJvZHk+IHdoZW4gd2luZG93IGlzIHJlYWR5LlxuICovXG53aW5kb3cud2RzV2luZG93UmVhZHkgPSB7fTtcbiggZnVuY3Rpb24gKCB3aW5kb3csICQsIGFwcCApIHtcblx0Ly8gQ29uc3RydWN0b3IuXG5cdGFwcC5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGFwcC5jYWNoZSgpO1xuXHRcdGFwcC5iaW5kRXZlbnRzKCk7XG5cdH07XG5cblx0Ly8gQ2FjaGUgZG9jdW1lbnQgZWxlbWVudHMuXG5cdGFwcC5jYWNoZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuJGMgPSB7XG5cdFx0XHQnd2luZG93JzogJCggd2luZG93ICksXG5cdFx0XHQnYm9keSc6ICQoIGRvY3VtZW50LmJvZHkgKVxuXHRcdH07XG5cdH07XG5cblx0Ly8gQ29tYmluZSBhbGwgZXZlbnRzLlxuXHRhcHAuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcblx0XHRhcHAuJGMud2luZG93LmxvYWQoIGFwcC5hZGRCb2R5Q2xhc3MgKTtcblx0fTtcblxuXHQvLyBBZGQgYSBjbGFzcyB0byA8Ym9keT4uXG5cdGFwcC5hZGRCb2R5Q2xhc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YXBwLiRjLmJvZHkuYWRkQ2xhc3MoICdyZWFkeScgKTtcblx0fTtcblxuXHQvLyBFbmdhZ2UhXG5cdCQoIGFwcC5pbml0ICk7XG59ICkoIHdpbmRvdywgalF1ZXJ5LCB3aW5kb3cud2RzV2luZG93UmVhZHkgKTtcbiJdfQ==
