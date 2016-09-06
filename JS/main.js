$(document).ready(function() {
	function newColor() {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);

		return "rgb(" + red +", " + green + ", " + blue + ")";
	}

	$("#Random-color-button").click(function() {
		var color = newColor();
		$("body").css("background-color", color);
		$("#display-color").fadeOut(500, function() {
			$(this).html(color).fadeIn(500);
		});
	});
});