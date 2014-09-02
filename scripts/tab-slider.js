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
var ScalesBlock = function (){
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
ScalesBlock();

/*function ReservationsViewModel(competitors-scales-block, rotateRightHr){
	var self = this;    
    self.competitors-scales-block = ko.observable(competitors-scales-block);      
    this.rotateRightHr = function() {     	   	
    	this.competitors-scales-block('competitors-scales-block');
    };   
}
ko.applyBindings(new ReservationsViewModel());*/