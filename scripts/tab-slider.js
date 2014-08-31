/*Меню*/
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

/*Анимация 3 слайда*/
function libra(){
	var RotateLeft = document.getElementsByClassName('competitors-scales-right-top-link'),
		RotateRight = document.getElementsByClassName('competitors-scales-right-bottom-link'),
		ScalesBlock = document.getElementsByClassName('competitors-scales-block');
	RotateLeft[0].addEventListener('click', function(event){
		ScalesBlock[0].classList.add('left-win');
		ScalesBlock[0].classList.remove('right-win');
	});
	RotateRight[0].addEventListener('click', function(event){
		ScalesBlock[0].classList.add('right-win');
		ScalesBlock[0].classList.remove('left-win');
	});

};
libra();

/*function ReservationsViewModel(rotate_right_hr, rotateRightHr){
	var self = this;    
    self.rotate_right_hr = ko.observable(rotate_right_hr);      
    this.rotateRightHr = function() {     	   	
    	this.rotate_right_hr('rotate_right_hr');
    };   
}
ko.applyBindings(new ReservationsViewModel());*/