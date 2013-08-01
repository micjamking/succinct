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

  $.fn.succinct = function(size){

    var defaults = {
        // length to reduce string to.
        size: 240,
        // suffix for the string once reduced.
        omission: '...',
        // regex of chars to remove if they are at end.
        ignore: '\*\,\.\{\[\(\<\¦\¬\~\^'
      },
      options = $.extend(defaults, size);

    return this.each(function(){

      var textDefault,
        textTruncated,
        r,
        elements = $(this);

      var truncate = function(){

        elements.each(function(){
          textDefault = $(this).text();

          if (textDefault.length > options.size) {
            textTruncated = $.trim(textDefault).
                    substring(0, options.size).split(' ').
                    slice(0, -1).join(' ');


            if( options.ignore !== false ) {
            
              // create a regex based on the "ignore" option,
              // these will be removed from end of string as they make
              // succinct produce ugly results
              r = new RegExp("[" + options.ignore + "]+$");
              textTruncated = textTruncated.replace( r , "" );
            
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
