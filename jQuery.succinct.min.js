/*
 * Copyright (c) 2013 Mike King (@micjamking)
 *
 * jQuery Succinct plugin
 * Version 1.0.1 (July 2013)
 *
 * Licensed under the MIT License
 */

(function(a){a.fn.succinct=function(b){var c={size:240,omission:"...",ignore:true},b=a.extend(c,b);return this.each(function(){var e,d,h=a(this),g=/[!-\/:-@\[-`{-~]$/;var f=function(){h.each(function(){e=a(this).text();if(e.length>b.size){d=a.trim(e).substring(0,b.size).split(" ").slice(0,-1).join(" ");if(b.ignore){d=d.replace(g,"")}a(this).text(d+b.omission)}})};var i=function(){f()};i()})}})(jQuery);
