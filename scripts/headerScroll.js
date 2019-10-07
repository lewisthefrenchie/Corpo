(function(){
	const scrollFunc = function(e){
		let top = e ? e.currentTarget.scrollingElement.scrollTop : 0,
			ele = $("#header"),
			custom = document.getElementById("headerScrollCustom"),
			limit = custom ? parseInt($(custom).val())||60 : 60;
		if(top>limit && !ele.hasClass("fill")) ele.addClass("fill")
		else if(top<limit && ele.hasClass("fill")) ele.removeClass("fill")
			
		let headBg = document.getElementById("headerBgShadow");
		if(headBg) {
			let opcty = (top*2/1000)
			console.log(opcty)
			$(headBg).css("backgroundColor", "rgba(0,0,0,"+opcty+")")
		}
	}
	$(document).scroll(scrollFunc);
	scrollFunc();
})()