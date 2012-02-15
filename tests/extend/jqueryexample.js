
extend('jquery', function() {
	return function($) {
		$.fn.myplugin = function () {/*...*/}
		return $;
	}
});

define("fooView", ["jquery"], function ($) {
	return {
		init: function () {
			$("#view").myplugin({/*..*/});
		},
		destory: function () {
			$("#view").empty();
		}
	}
});
