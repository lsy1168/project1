/* 검색 */
$("#sForm1").submit(function() {
	if ($("#_top_search1").val().length < 2) {
	  alert('검색어를 두 글자 이상 입력해주세요.');
	  $("#_top_search1").focus();
	  return false;
	}
  });
/* //검색 */

/* 팝업 */
const pop = document.querySelector('.popup');
const btn = document.querySelector('.popup>span');
btn.onclick = function () {
pop.style.display = 'none';
};
/* ///팝업 */


/* 알림판 */
//* swiper */
const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.section_4_right .section_6_lefe_top_button_1 .next',
        prevEl: '.section_4_right .section_6_lefe_top_button_1 .prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	on: {
        slideChange: function () {
            // 현재 슬라이드 인덱스 (0부터 시작하므로 +1 해줌)
            const currentSlideIndex = this.realIndex + 1;
            // 전체 슬라이드 수
            const totalSlides = this.slides.length;
            // 카운팅을 표시하는 요소에 현재 슬라이드 번호와 전체 슬라이드 수 표시
            const slideCountElement = document.querySelector('.slide-count');
            slideCountElement.innerHTML = `<span style="color: black;">${currentSlideIndex}</span> / <span style="color: #777;">${totalSlides}</span>`;
        }
    }
});
/* ./////알림판 */

/* https://swiperjs.com/demos#autoplay */
//* swiper */
const swipers = new Swiper('.swiper2', {
// Optional parameters
direction: 'horizontal',
loop: true,
// If we need pagination
pagination: {
el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
nextEl: '.section_6_lefe_top .section_6_lefe_top_button_2 .next',
prevEl: '.section_6_lefe_top .section_6_lefe_top_button_2 .prev',
},
autoplay: {
delay: 3000,
disableOnInteraction: false,
},
});

const swiperss = new Swiper('.swiper3', {
// Optional parameters
direction: 'horizontal',
loop: true,
// If we need pagination
pagination: {
el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
nextEl: '.section_6_lefe_top .section_6_lefe_top_button_3 .next',
prevEl: '.section_6_lefe_top .section_6_lefe_top_button_3 .prev',
},
autoplay: {
delay: 3500,
disableOnInteraction: false,
},
});

let s6swiper = new Swiper('.section_6_right_bottom', {
    slidesPerView: 6,
    spaceBetween: 0,
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 1600,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.section_6_lefe_top_button_4 img.next',
        prevEl: '.section_6_lefe_top_button_4 img.next',
    },
    on: {
        slideChange: function () {
            // 현재 슬라이드 인덱스 (0부터 시작하므로 +1 해줌)
            const currentSlideIndex = this.realIndex + 1;
            // 전체 슬라이드 수
            const totalSlides = this.slides.length;
            // 카운팅을 표시하는 요소에 현재 슬라이드 번호와 전체 슬라이드 수 표시
            const slideCountElement = document.querySelector('.s6-slide-count');
            slideCountElement.innerHTML = `<span style="color: black;">${currentSlideIndex}</span> / <span style="color: #777;">${totalSlides}</span>`;
        }
    }
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


/* ==========
알림판 stop
========== */

const stop4 = document.querySelector('.section_4_right_top_button .control');
stop4.addEventListener('click', function (e) {
e.preventDefault();
if (this.classList.contains('pause')) {
swiper.autoplay.stop();
this.classList.remove('pause');
this.classList.add('play');
} else if (this.classList.contains('play')) {
swiper.autoplay.start();
this.classList.remove('play');
this.classList.add('pause');
}
});
/* ==========
    통일부영상 stop
========== */

const stop6 = document.querySelector('.section_6_lefe_top_button_2 .control');
stop6.addEventListener('click', function (e) {
e.preventDefault();
if (this.classList.contains('pause')) {
swipers.autoplay.stop();
this.classList.remove('pause');
this.classList.add('play');
} else if (this.classList.contains('play')) {
swipers.autoplay.start();
this.classList.remove('play');
this.classList.add('pause');
}
});

/* ==========
    카드뉴스 stop
========== */

const stop7 = document.querySelector('.section_6_lefe_top_button_3 .control');
stop7.addEventListener('click', function (e) {
e.preventDefault();
if (this.classList.contains('pause')) {
swiperss.autoplay.stop();
this.classList.remove('pause');
this.classList.add('play');
} else if (this.classList.contains('play')) {
swiperss.autoplay.start();
this.classList.remove('play');
this.classList.add('pause');
}
});


/* 햄버거메뉴 */
$(document).ready(function() {
$(".btn2").click(function() {
$("#menu,.page_cover,html").addClass("open");
window.location.hash = "#open";
})
})

window.onhashchange = function() {
if (location.hash != "#open") {
$("#menu,.page_cover,html").removeClass("open");
}
};

$(document).ready(function(){
$("#menu ul.sub_mobile").hide();
$("#menu ul.nav li").click(function(){
$("ul",this).slideToggle("fast");
})
})
