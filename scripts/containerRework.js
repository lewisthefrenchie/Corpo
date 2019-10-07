(function(d){
	let adaptToResize = function() {
		let headerBg = document.getElementById("headerBg"),
			headerBgH = headerBg ? $(headerBg).height() : 0;
		$("#container").css("margin-top", headerBgH);
	}
	$(d).resize(adaptToResize)
	adaptToResize()
})(document)
