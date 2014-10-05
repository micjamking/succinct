Succinct
========

*A *tiny jQuery plugin for truncating multiple lines of text*

##How does it work?
Succinct shortens your text to a specified size, and then adds an ellipsis to the end.

##Demo
Live Demo: http://micjamking.github.io/succinct/

##Usage
Specify the elements that you would like to truncate as a selector, and then set the size parameter to the amount you would like to see.
For example, if you would like to truncate all elements with a specific class, ie. `<p class="truncate">` to 120 characters...

```html
<script>
    $(function(){
        $('.truncate').succinct({
            size: 120
        });
    });
</script>
```
By default, the plugin truncates text to 240 characters.

To change the ellipsis to an HTML unicode arrow "&rarr;"...

```html
<script>
    $(function(){
        $('.truncate').succinct({
            omission: '&rarr;'
        });
    });
</script>
```

By default, the plugin also removes the set of 32 ASCII special characters at the end of words, ie. `! " # $` and so on. To disable this behavior...

```html
<script>
    $(function(){
        $('.truncate').succinct({
            ignore: false
        });
    });
</script>
```

##Details
* * Succinct is < 0.6kb minified
* You'll need a copy of [jQuery](http://code.jquery.com/jquery-latest.min.js) to run this plugin
* Suggestions, comments, or creative insults: [add an issue](https://github.com/micjamking/succinct/issues/new) or [fork the repo](https://github.com/micjamking/succinct/fork).

###Copyright
[MIT license](http://opensource.org/licenses/MIT) Copyright (c) 2014 Mike King ([@micjamking](http://twitter.com/micjamking))
