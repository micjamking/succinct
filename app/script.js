(function($){
	$(function(){

// 		$('input[type="text"]').focus();

		var text = $('.truncate').html(),

			error = function(string) {
				$('form').after(string);
				$('.error').hide().fadeIn();
				setTimeout(function(){
					$('.error').fadeOut(function(){
						$(this).remove();
					});
				}, 3500);
			},

			truncate = function(value) {
				if (isNaN(value)){
					error('<p class="error">Yo dude, numbers only!</p>');
				} else if (value === '') {
					error('<p class="error">Did you enter something? Try again, with a number this time.</p>');
				} else {
					$('.truncate').succinct({ size:value });
				}
			},

			colorful = function() {
				var hue = Math.floor(Math.random()*359),
					styles = '<style>.color {background-color: hsl(' + hue + ', 36%, 48%);color: hsl(' + hue + ', 36%, 48%);border-color: hsl(' + hue + ', 36%, 48%);}.color-light {border-color: hsla(' + hue + ', 100%, 48%,0.75);}.link:hover > span,.link:focus > span,.link:active > span,.link > span:after {background: hsl(' + hue + ', 36%, 48%);}input[type="submit"]:hover,input[type="submit"]:focus{background-color: hsl(' + hue + ', 36%, 43%);}input[type="text"]:focus{box-shadow: 0 0 5px hsl(' + hue + ', 54%, 50%);}</style>';

				$('head').append($(styles));
			};

		$('form').submit(function(e){
			e.preventDefault();
			$('.truncate').html(text);
			truncate($(this).find('[type=text]').val());
		});

		colorful();
	});
})(jQuery);