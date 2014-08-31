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
	var leftCup = document.getElementsByClassName('competitors-scales-right-top-link'),
		rightCup = document.getElementsByClassName('competitors-scales-left-top-link'),
		libra = document.getElementsByClassName('competitors-vertical-hr');

	leftCup[0].addEventListener('click', function(event){
		libra[0].classList.add('rotate_right_hr');
		libra[0].classList.remove('rotate_right_hr');
	});
	rightCup[0].addEventListener('click', function(event){
		libra[0].classList.add('outweighed-right');
		libra[0].classList.remove('outweighed-left');
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