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
});
/* //// */
$(document).ready(function(){
    var isPaused = false;

    $('.slidebox').on('mouseenter', function(){
        isPaused = true;
    }).on('mouseleave', function(){
        isPaused = false;
    });

    $('.slidebox').slick({
        centerMode: true,
        centerPadding: '11.5vw',
        slidesToShow: 1,
        autoplay: true, // 자동 슬라이드
        autoplaySpeed: 2500, // 슬라이드 간 시간 간격 (ms)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10vw',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10vw',
                    slidesToShow: 1
                }
            }
        ]
    });

    // 페이저 버튼 추가
    var pager = '<div class="pager-buttons">';
    for (var i = 1; i <= 5; i++) {
        pager += '<button type="button" class="pager-btn" data-slide="' + i + '"></button>'; // 버튼 내용을 비움
    }
    pager += '</div>';
    $('.slidebox').after(pager);

    // 페이저 버튼 클릭 시 해당 번호의 슬라이드로 이동
    $('.pager-btn').click(function(){
        var slideIndex = $(this).data('slide') - 1;
        $('.slidebox').slick('slickGoTo', slideIndex);
    });

    // 슬라이드 변경 시 이미지 블러 처리
    $('.slidebox').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if (!isPaused) {
            blurSlides();
        }
    });

    // 가운데 슬라이드에는 블러 처리 제거 및 크기 복원
    $('.slidebox').on('afterChange', function(event, slick, currentSlide){
        $('.slick-center img').css({
            'filter': 'none'
        });
        // 가운데 슬라이드 외의 슬라이드 크기를 조절
        $('.slick-slide').not('.slick-center').css({
            'transform': 'scale(0.95)' // 크기를 95%로 축소
        });
        // 가운데 슬라이드 크기를 원래대로 복원 (부드럽게 애니메이션 적용)
        $('.slick-center').css({
            'transform': 'scale(1)' // 원래대로 복원
        });

        // 모든 페이저 버튼의 색상을 원래대로 초기화
        $('.pager-btn').removeClass('active');

        // 현재 슬라이드에 해당하는 페이저 버튼에만 active 클래스 추가
        $('.pager-btn[data-slide="' + (currentSlide + 1) + '"]').addClass('active');
    });

    // 슬라이드 변경 함수 정의
    function blurSlides() {
        $('.slick-slide img').css({
            'filter': 'blur(5px)'
        });
    }
});

$(document).ready(function(){
    // 이전 버튼 클릭 시
    $('.slick-prev').click(function(){
        // 배경 이미지 변경
        $(this).css('background-image', 'url(../img/lefe-arrow.png)');
    });

    // 다음 버튼 클릭 시
    $('.slick-next').click(function(){
        // 배경 이미지 변경
        $(this).css('background-image', 'url(../img/right-arrow.png)');
    });
});

$(document).ready(function(){
    $('.custom-prev').click(function(){
        $('.slidebox').slick('slickPrev');
    });

    $('.custom-next').click(function(){
        $('.slidebox').slick('slickNext');
    });
});

/* 슬라이드 끝 */

$(document).ready(function(){
    // 통일부 관련 누리집을 클릭했을 때 실행할 함수를 정의합니다.
    $('a[href="javascript:void(0);"]').click(function(){
        // 클릭된 요소의 다음 형제 요소인 div.show-box1을 찾아서 해당 요소가 슬라이드 업되도록 합니다.
        $(this).next('div.show-box1').slideToggle("slow");
        // 클릭된 요소의 부모 요소인 li가 활성화 클래스인 'on'을 갖도록 토글링합니다.
        $(this).parent('li').toggleClass('on');
        // 클릭된 요소의 부모 요소인 li에 'on' 클래스가 있는지 확인합니다.
        if($(this).parent('li').hasClass('on')){
            // 활성화된 li 요소를 현재 위치로 이동합니다.
            $(this).parent('li').prependTo($(this).parents('.Newfoot-meun1').find('ul'));
        }
        // 클릭된 요소의 부모 요소인 li의 형제 요소들의 위쪽 보더를 0으로 설정합니다.
        $(this).parent('li').siblings().removeClass('on');
    });
});
document.addEventListener("DOMContentLoaded", function() {
	const links = document.querySelectorAll(".Newfoot-select1 > ul > li > a");

	links.forEach(function(link) {
		link.addEventListener("click", function(event) {
			event.preventDefault(); // 링크의 기본 동작 방지

			// 현재 클릭된 링크의 부모 요소(li)에서 active 클래스를 토글합니다.
			const parentLi = link.parentNode;
			parentLi.classList.toggle("active");

			// 애니메이션을 위해 0.5초 동안 부드러운 전환 효과를 적용합니다.
			setTimeout(function() {
				parentLi.style.transition = "border-top 0.5s ease";
			}, 0);
		});
	});
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
// 첫 번째 슬라이드 관련 변수 설정
let currentIndex1 = 0;
const slides1 = document.querySelectorAll('.section3_bottom_box1');
const totalSlides1 = slides1.length;

// 두 번째 슬라이드 관련 변수 설정
let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.section3_bottom_box2');
const totalSlides2 = slides2.length;

// 세 번째 슬라이드 관련 변수 설정
let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.section3_bottom_box3');
const totalSlides3 = slides3.length;

// 초기화 함수 호출
showSlide(currentIndex1, slides1);
showSlide(currentIndex2, slides2);
showSlide(currentIndex3, slides3);

// 슬라이드 표시 함수
function showSlide(index, slides) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

// 이전/다음 슬라이드 이동 함수
function moveSlide(n, currentIndex, totalSlides, slides) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex, slides);
    return currentIndex;
}

// 첫 번째 슬라이드 좌우 버튼 클릭 이벤트 처리
document.querySelector('.slide-left').addEventListener('click', () => {
    currentIndex1 = moveSlide(-1, currentIndex1, totalSlides1, slides1);
});

document.querySelector('.slide-right').addEventListener('click', () => {
    currentIndex1 = moveSlide(1, currentIndex1, totalSlides1, slides1);
});

// 두 번째 슬라이드 좌우 버튼 클릭 이벤트 처리
document.querySelector('.slide-left').addEventListener('click', () => {
    currentIndex2 = moveSlide(-1, currentIndex2, totalSlides2, slides2);
});

document.querySelector('.slide-right').addEventListener('click', () => {
    currentIndex2 = moveSlide(1, currentIndex2, totalSlides2, slides2);
});

// 세 번째 슬라이드 좌우 버튼 클릭 이벤트 처리
document.querySelector('.slide-left').addEventListener('click', () => {
    currentIndex3 = moveSlide(-1, currentIndex3, totalSlides3, slides3);
});

document.querySelector('.slide-right').addEventListener('click', () => {
    currentIndex3 = moveSlide(1, currentIndex3, totalSlides3, slides3);
});