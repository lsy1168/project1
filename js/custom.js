/* const slides = $('.main_banner>div[class*="slide"]');
let idx = 0;
function slide() {
  console.log(slides);
  slides.each(function (a, b) {
    $(b).removeClass("on");
  });
  slides.eq(idx).addClass("on");
  idx++;
  if (idx >= slides.length) {
    idx = 0;
  }
}
setInterval(function () {
  slide();
}, 2800);
 */
/* 공지사항 */
$('.section3_top_left_box_1 a').on('click', function () {
	/* 제목 색상 다르게 */
	/* //색상다르게하기 */
	$('.box1').show();
	$('.red1').show();
	$('.box2').hide();
	$('.red2').hide();
	$('.red3').hide();
	$('.box3').hide();
	return false;
});
$('.section3_top_left_box_2 a').on('click', function () {
	/* 제목 색상 다르게 */
	/* //색상다르게하기 */
	$('.box1').hide();
	$('.red1').hide();
	$('.red3').hide();
	$('.box3').hide();
	$('.box2').show();
	$('.red2').show();
	return false;
});
$('.section3_top_left_box_3 a').on('click', function () {
	/* 제목 색상 다르게 */
	/* //색상다르게하기 */
	$('.box3').show();
	$('.red3').show();
	$('.box2').hide();
	$('.red2').hide();
	$('.red1').hide();
	$('.box1').hide();
	return false;
});
$('.box1').show();
$('.red1').show();
$('.box2').hide();
$('.red2').hide();
$('.red3').hide();
$('.box3').hide();

/* 팝업 */
$('.popup>span').on('click', function () {
	$('.popup').hide(1500, function () {});
});

$(() => {
	/* 슬라이드  */
	(() => {
		const visual = $('.slidebox>div');
		const next = $('.main_banner_btn>img[alt=right]'); /* 슬라이드버튼 */
		const prev = $('.main_banner_btn>img[alt=left]'); /* 슬라이드버튼 */
		const pager = $('.main_banner_pager li');
		let current = 0;
		let setIntervalID;
		//간격마다 실행함수
		//clearInterval(setIntervalID)
		function timer() {
			setIntervalID = setInterval(() => {
				//실행문
				slideFn();
			}, 4000);
		}
		//슬라이드 인덱스번호 계산함수
		function slideFn() {
			let prev = visual.eq(current);
			let pagePrev = pager.eq(current);
			pagePrev.removeClass('on');
			move(prev, '0%', '-100%');
			current++;
			if (current == visual.length) {
				//0,1,2
				current = 0;
			}
			let next = visual.eq(current); //1
			move(next, '100%', '0%');
			let pageNext = pager.eq(current);
			pageNext.addClass('on');
		}

		//움직이는 함수
		function move(tg, start, end) {
			tg.css('left', start).stop().animate({ left: end }, 1000, 'easeOutCubic');
		}

		//정지,실행하기
		$('.slidebox').on({
			mouseenter: function () {
				clearInterval(setIntervalID);
			},
			mouseleave: function () {
				timer();
			},
		});

		//컨트롤 함수
		//next
		next.on('click', function () {
			let prev = visual.eq(current);
			let prevPage = pager.eq(current);
			move(prev, '0%', '-100%');
			prevPage.removeClass('on');
			current++;
			if (current == visual.length) {
				current = 0;
			}
			let next = visual.eq(current); //1
			let nextPage = pager.eq(current);
			move(next, '100%', '0%');
			nextPage.addClass('on');
		});
		prev.on('click', function () {
			let prev = visual.eq(current);
			let prevPage = pager.eq(current); /* 연동 보이게 */
			move(prev, '0%', '100%');

			current--;
			if (current == -visual.length) {
				current = 0;
			}
			let next = visual.eq(current);
			let nextPage = pager.eq(current); /* 연동 보이게 */
			move(next, '-100%', '0%');
		});

		/* 페이저버튼 */
		pager.on('click', function () {
			const i = $(this).index();
			pager.removeClass('on');
			$(this).addClass('on');
			pagerMove(i);
		});
		function pagerMove(i) {
			let currentEl = visual.eq(current); // 0
			let nextEl = visual.eq(i); // 클릭한 pager index
			if (current < i) {
				currentEl.css({ left: 0 }).stop().animate({ left: '-100%' }, 500);
				nextEl.css({ left: '100%' }).stop().animate({ left: '0%' }, 500);
			} else if (current > i) {
				currentEl.css({ left: 0 }).stop().animate({ left: '100%' }, 500);
				nextEl.css({ left: '-100%' }).stop().animate({ left: '0%' }, 500);
			}
			current = i;
		}
	})();
	/* 탭 section_2  */
	(() => {
		const btns = $('.btns>.btn');
		const panels = $('.panels>.panel');
		$('.btns>.btn').on('click', function (e) {
			e.preventDefault();
			let tg = $(this);
			let href = tg.find('a').attr('href');
			console.log(tg, href);
			btns.removeClass('on');
			tg.addClass('on');
			panels.removeClass('on');
			$(href).addClass('on');
		});
	})();
}); //jQuery

/* var i = 0;
const spon=$(".s5_top_boxs ul");
const box=spon.find('li');
const width=box.width();
console.log(box.length);//갯수
spon.css('width',width*box.length)
function slide01(){
	if(i >= box.length){
		i=0
	}else{
		i++;
	}

i++;
$(".s5_top_boxs ul").animate({left:i * width * (-1) }, 500);
}

setInterval(slide01, 3000) */

/* ==========
.s5_top_boxs .sliders
========== */

let s5swiper = new Swiper('.s5_top_boxs', {
	slidesPerView: 5,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.s5_h3_imgs img.next',
		prevEl: '.s5_h3_imgs img.prev',
	},
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
});
const stopS5 = document.querySelector('.section_5 .s5_h3_imgs .control');
stopS5.addEventListener('click', function (e) {
	e.preventDefault();
	if (this.classList.contains('pause')) {
		s5swiper.autoplay.stop();
		this.classList.remove('pause');
		this.classList.add('play');
	} else if (this.classList.contains('play')) {
		s5swiper.autoplay.start();
		this.classList.remove('play');
		this.classList.add('pause');
	}
});



/* ==========
.section_6 .sliders
========== */



let s6swiper = new Swiper('.section_6_right_bottom', {
	slidesPerView: 6,
	spaceBetween: 0,
	direction: 'vertical',
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.section_6_lefe_top_button_1 img.next',
		prevEl: '.section_6_lefe_top_button_1 img.next',
	},
});
const stopS6 = document.querySelector('.section_6_right_top .control');
stopS6.addEventListener('click', function (e) {
	e.preventDefault();

	if (this.classList.contains('pause')) {
		s6swiper.autoplay.stop();
		this.classList.remove('pause');
		this.classList.add('play');
	} else if (this.classList.contains('play')) {
		s6swiper.autoplay.start();
		this.classList.remove('play');
		this.classList.add('pause');
	}
});
