Succinct
========

*A *tiny jQuery plugin for truncating multiple lines of text*

##How does it work?
Succinct shortens your text to a specified size, and then adds an ellipsis to the end.

##Demo
Live Demo: http://micjamking.github.io/Succinct/

##Usage
Specify the elements that you would like to truncate as a selector, and then set the size parameter to the amount you would like to see.
For example, if you would like to truncate all elements with a specific class, ie. `<p class="truncate">` to 120 characters...

```
<script>
    $(function(){
        $('.truncate').succinct({
            size: 120
        });
    });
</script>
```
By default, the plugin truncates text to 240 characters.

##Details
* * Succinct is < 0.5kb minified
* You'll need a copy of [jQuery](http://code.jquery.com/jquery-latest.min.js) to run this plugin
* If you have any suggestions, comments, or creative insults for my code, [add an issue](https://github.com/micjamking/Navigataur/issues/new) or [fork the repo](https://github.com/micjamking/Navigataur/fork_select).

###Copyright
[BSD license](http://opensource.org/licenses/bsd-license.php) Copyright (c) 2013 Mike King ([@micjamking](http://twitter.com/micjamking))