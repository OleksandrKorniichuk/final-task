(function(){
	"use strict";

	var tabs = document.getElementsByClassName("nav-tab-item"),
		pages = document.getElementsByClassName("page"),
		current = 0;

	[].forEach.call(tabs, function(tab, index){
		tab.addEventListener("click", function(event){
			tabs[current].classList.remove("nav-tab-item-active");
			pages[current].classList.remove("slider-active");
			tabs[index].classList.add("nav-tab-item-active");
			pages[index].classList.add("slider-active");
			current = index;					
		});
	});
})();