
$("#sForm1").submit(function() {
	if ($("#_top_search1").val().length < 2) {
	  alert('검색어를 두 글자 이상 입력해주세요.');
	  $("#_top_search1").focus();
	  return false;
	}
  });


  /* 팝업 */
const pop = document.querySelector('.popup');
const btn = document.querySelector('.popup>span');
btn.onclick = function () {
pop.style.display = 'none';
};
$('.popup>span').on('click', function () {
	$('.popup').hide(1500, function () {});
});
/* ///팝업 */
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




// 플러스 버튼 클릭 시
document.querySelector('.btn-font-plus').addEventListener('click', function () {
    changeScreenSize('increase');
});

// 마이너스 버튼 클릭 시
document.querySelector('.btn-font-minus').addEventListener('click', function () {
    changeScreenSize('decrease');
});

// 화면 비율 변경 함수
function changeScreenSize(action) {
    let currentZoom = parseFloat(document.body.style.zoom) || 1; // 현재 화면 비율 가져오기, 기본값은 1
    const step = 0.1; // 변경 단계

    // 크게 버튼 클릭 시
    if (action === 'increase') {
        currentZoom += step; // 화면 비율 증가
    }
    // 작게 버튼 클릭 시
    else if (action === 'decrease') {
        currentZoom -= step; // 화면 비율 감소
    }

    // 최소/최대 비율 설정 (0.5부터 2까지)
    currentZoom = Math.min(Math.max(currentZoom, 0.5), 2);

    // 화면 비율 변경 적용
    document.body.style.zoom = currentZoom;
}
