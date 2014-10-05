/*
 * Copyright (c) 2014 Mike King (@micjamking)
 *
 * jQuery Succinct plugin
 * Version 1.1.0 (October 2014)
 *
 * Licensed under the MIT License
 */

 /*global jQuery*/
(function($) {
	'use strict';

	$.fn.succinct = function(options) {

		var defaults = {
				size: 240,
				omission: '...',
				ignore: true
			},
			options = $.extend(defaults, options);

		return this.each(function() {

			var textDefault,
				textTruncated,
				elements = $(this),
				regex    = /[!-\/:-@\[-`{-~]$/,
				init     = function() {
					elements.each(function() {
						textDefault = $(this).html();

						if (textDefault.length > options.size) {
							textTruncated = $.trim(textDefault).substring(0, options.size).split(' ').slice(0, -1).join(' ');

							if (options.ignore) {
								textTruncated = textTruncated.replace(regex, '');
							}

							$(this).html(textTruncated + options.omission);
						}
					});
				};
			init();
		});
	};
})(jQuery);
