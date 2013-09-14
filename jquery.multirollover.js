/*
 * multiRollover - jQuery Plugin
 * version: 1.0 (Fri, 13 Sep 2013)
 * @requires jQuery v1.7 or later
 *
 * Copyright (c) 2013 KITE
 *
 * Dual licensed under the MIT and GPL Version 2 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

(function ($) {

	$.fn.multirollover = function (options) {
		
		var opts = $.extend({
			suffix		: '-on',
			duration	: 100,
			crossfade	: false
		}, options);
		
		var s = opts.suffix,
			d = opts.duration,
			c = opts.crossfade;
		
		$('img', this).each(function(){
			
			var src	= $(this).attr('src');
				src = src.replace(/^(.*)(\.jpg|\.gif|\.png)$/g, '$1' + s + '$2');
			var z	= $(this).css('z-index');
			if(z = 'auto'){
				z	= 1;
			}else{
				z	= z + 1;
			}
			
			$(this).clone().attr('src',src).addClass('multirollover-image-on').insertBefore($(this)).css({
				position	: 'absolute',
				zIndex		: z,
				opacity		: 0
			});
			
			$(this).addClass('multirollover-image-off');
			var $onImg	= $(this).prev('.multirollover-image-on');
			$onImg.on('error',function(){
				$(this).next('.multirollover-image-off').removeClass('multirollover-image-off');
				$(this).remove();
				return;
			});
			
		});
		
		$(this).on({
			'mouseenter': function(){
				$('.multirollover-image-on', this).stop().animate({
					opacity	: 1
				}, d);
				
				if(c){
					$('.multirollover-image-off', this).stop().animate({
							opacity	: 0
					}, d);
				}
		
			},
			'mouseleave': function(){
				if(c){
					$('.multirollover-image-off', this).stop().animate({
						opacity	: 1
					}, d);
				}

				$('.multirollover-image-on', this).stop().animate({
					opacity	: 0
				}, d);
			}
		});
		
	}

})(jQuery);
