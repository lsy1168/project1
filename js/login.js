//login
const loginBtn = $("#login");
const logoutBtn = $("#logout");
let text = $(".main_banner h2");
let textold = text.text();
logoutBtn.css("display", "none");

function init() {
  if (!localStorage.getItem("user")) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "test",
        password: "5246",
        isLoggedIn: false,
      })
    );
  }
}

function login() {
  let uid = $("#uid").val();
  let upw = $("#upw").val();
  let user = JSON.parse(localStorage.getItem("user"));
  if (uid === user.id && upw === user.password) {
    alert("병무청에 오신 걸 환영합니다!");
    text.text(`${uid}님 ${textold}`);
    $(".input_group, #login").css("display", "none");
    logoutBtn.css("display", "flex");
    $(".login").html(`마이페이지`);
    user.isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    alert("회원 전용 페이지입니다.");
  }
}

function logout() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user.isLoggedIn) {
    alert("로그아웃 성공");
    user.isLoggedIn = false;
    localStorage.setItem("user", JSON.stringify(user));
    text.text(textold);
    $(".input_group, #login").css("display", "flex");
    logoutBtn.css("display", "none");
    $(".login").text(`로그인`);
    document.querySelector("#uid").value = "";
    document.querySelector("#upw").value = "";
  }
}

loginBtn.on("click", (e) => {
  e.preventDefault();
  login();
});

logoutBtn.on("click", (e) => {
  e.preventDefault();
  logout();
});

init();



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






  $('.popup>span').on('click', function () {
    $('.popup').hide(1500, function () {});
  });
  

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