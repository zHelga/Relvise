"use strict"

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', (e) => {
	headerBurger.classList.toggle('header__burger-active');
	headerMenu.classList.toggle('header__menu-active');
	document.querySelector('body').classList.toggle('lock')
})

// Footer Accordeon

let footerItems = document.querySelectorAll('.footer__label');

footerItems.forEach(item => {
	
	item.addEventListener('click', (e) => {
		item.classList.toggle('footer__label-active');

		let content = e.target.nextElementSibling;

		if(!e.target.classList.contains('footer__label-active')) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	})
})