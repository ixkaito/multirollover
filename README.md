jquery.multirollover
====================

jquery.multirollover is a jQuery plugin that offers a way to rollover multiple images simultaneously.
Requires jQuery v1.7 or later.

Copyright (c) 2013 KITE

Dual licensed under the MIT and GPL licenses: 
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html


How to use
----------

To get started, download the plugin, unzip it and copy files to your website/application directory.
Load files in your HTML document. Make sure you also add the jQuery library.

Example:

	<script type="test/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="jquery.multirollover.js"></script>

Create your HTML like this:

	<a href="http://example.com" class="hover"><img src="sample-image-1.jpg" /></a>

or multiple images in a single element to be hovered:

	<a href="http://example.com" class="hover"><img src="sample-image-1.jpg" /><img src="sample-image-2.jpg" /><img src="sample-image-3.jpg" /></p>

Add the rollover image with the suffix into the same directory as the original image.
The rollover image should ideally be the same size as the original one.
Example:

	sample-image-1-on.jpg
	sample-image-3-on.jpg

If there's no rollover image, in this case: sample-image-2.jpg, the original image will not change.

Initialise the script like this:

	<script>
		$(document).ready(function() {
			$('.hover').multirollover();
		});
	</script>

May also be passed an optional options object which will extend the default values. Example:

	<script>
		$(document).ready(function() {
			$('.hover').multirollover({
				suffix		: '-hover',
				duration	: 500
			});
		});
	</script>

If using transparent PNG, enable the crossfade option.

	<script>
		$(document).ready(function() {
			$('.hover').multirollover({
				crossfade	: true
			});
		});
	</script>

Default values:

	suffix		: '-on',
	duration	: 100,
	crossfade	: false


Bug tracker
-----------

Have a bug? Please create an issue on GitHub at https://github.com/ixkaito/multirollover/issues