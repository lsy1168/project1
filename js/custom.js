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
} ,3500);
