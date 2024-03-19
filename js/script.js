/* vanilla js */
const pop = document.querySelector('.popup');
const btn = document.querySelector('.popup>span');
btn.onclick = function () {
	pop.style.display = 'none';
};

/* https://swiperjs.com/demos#autoplay */
//* swiper */
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.section_6_lefe_top_button_1 .next',
		prevEl: '.section_6_lefe_top_button_1 .prev',
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

/* https://swiperjs.com/demos#autoplay */
//* swiper */
const swipers = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.section_6_lefe_top_button_2 .next',
		prevEl: '.section_6_lefe_top_button_2 .prev',
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});
