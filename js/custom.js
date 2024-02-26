const slides = $('.main_banner>div[class*="slide"]');
/* setInterva(함수(할일),시간 ) */
//setInterval(function(){
//	document.write("")
//}, 500);

let idx = 0;
function slide() {
  console.log(slides); // slide1 slide2 slide3
  /* jQuery.each(slides,function(){}); */
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
} ,2800);

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
