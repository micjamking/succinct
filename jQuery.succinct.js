/*
 * Copyright (c) 2013 Mike King (@micjamking)
 * 
 * jQuery Succinct plugin
 * Version 1.0 (July 2013)
 *
 * Licensed under the MIT License
 */
 
 (function(){
 	$.fn.succinct = function(length){
 		
 		var defaults = 240,
			length = $.extend(defaults, length);
 		
 		return this.each(function(){
 			
 			var textDefault, 
 				textTruncated,
 				elements = $(this);
 			
 			var truncate = function(){
	 			elements.each(function(){
					textDefault = $(this).text();
	
					if (textDefault.length > length) {
						textTruncated = text.trim().substring(0, length).split(' ').slice(0, -1).join(' ') + '...';
						$(this).text(textTruncated);
					}
				});
 			}
			
			var init = function() {
				truncate();
			}
			
			init();
 		});
 	};
 })(jQuery);
