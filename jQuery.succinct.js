/*
 * Copyright (c) 2013 Mike King (@micjamking)
 *
 * jQuery Succinct plugin
 * Version 1.0.1 (July 2013)
 *
 * Licensed under the MIT License
 */

 /*global jQuery*/
(function($){
	'use strict';

	$.fn.succinct = function(options){

		var defaults = {
				size: 240,
				omission: '...',
				ignore: true
			},
			options = $.extend(defaults, options);

		return this.each(function(){

			var textDefault,
				textTruncated,
				elements = $(this),
				regex    = /[!-\/:-@\[-`{-~]$/;

			var truncate = function(){

				elements.each(function(){
					textDefault = $(this).text();

					if (textDefault.length > options.size) {
						textTruncated = $.trim(textDefault).
										substring(0, options.size).
										split(' ').
										slice(0, -1).
										join(' ');

						if (options.ignore) {
							textTruncated = textTruncated.replace( regex , '' );
						}

						$(this).text(textTruncated + options.omission);
					}
				});
			};

			var init = function() {
				truncate();
			};

			init();
		});
	};
})(jQuery);
