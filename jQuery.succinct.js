/*
 * Copyright (c) 2013 Mike King (@micjamking)
 *
 * jQuery Succinct plugin
 * Version 1.0 (July 2013)
 *
 * Licensed under the MIT License
 */

 /*global jQuery*/
(function($){
	'use strict';

	$.fn.succinct = function(size){

		var defaults = {
				size: 240,
				omission: '...'
			},
			options = $.extend(defaults, size);

		return this.each(function(){

			var textDefault,
				textTruncated,
				elements = $(this);

			var truncate = function(){

				elements.each(function(){
					textDefault = $(this).text();

					if (textDefault.length > options.size) {
						textTruncated = $.trim(textDefault).
										substring(0, options.size).split(' ').
										slice(0, -1).join(' ') + options.omission;

						$(this).text(textTruncated);
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
