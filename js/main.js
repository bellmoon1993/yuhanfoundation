let liLength = $("#sliderList li").length; 
let num;
let classNum;
let state = 1;
$("#sliderList li:eq(0)").addClass("active");
$("#btnNum a:eq(0)").addClass('on');
let nextSlider = function() {
  classNum = $("#sliderList li:first").attr("class").substr(13, 1);
  if (classNum == liLength) classNum = 0;
  $("#btnNum a").removeClass('on');
  
  $("#btnNum a:eq("+ classNum +")").addClass('on');
  
  $("#sliderList li:eq(1)").addClass("active")
                           .css({ opacity: 0 })
                           .animate({ opacity: 1 },1000, function() {
                             $("#sliderList").append($("#sliderList li:eq(0)"))
                             $("#sliderList li:last").removeClass('active');
                             state = 1;
                           })
}
let prevSlider = function() {
  classNum = $("#sliderList li:last").attr("class").substr(13, 1)-1;
  $("#btnNum a").removeClass('on');
  
  $("#btnNum a:eq("+ classNum +")").addClass('on');
  
  $("#sliderList li:last").addClass('active')
                          .css({ opacity: 0 })
                          .animate({ opacity: 1 },1000, function() {
                            $("#sliderList").prepend($("#sliderList li:last"));
                            $("#sliderList li:eq(1)").removeClass('active');
                            state = 1;
                          })
}
$(".next").on('click', function() {
  if ( state == 1 ) {
    state = 0;
    nextSlider();
  }
})
$(".prev").on('click', function() {
  if ( state == 1 ) {
    state = 0;
    prevSlider();
  }
})

$("#btnNum a").on('click', function() {
  if ( state == 1 ) {
    state = 0;
    let btnIndex = $(this).index()+1;
    num = btnIndex;
    // 같은 번호를 클릭하면 발생하는 애니메이션 제어
    if ( $(".slider"+btnIndex).hasClass('active') ) {
      state = 1;
      return;
    }
    $("#btnNum a").removeClass('on');
    $(this).addClass('on');
    $(".slider"+btnIndex).addClass('active').css({ opacity: 0 })
                         .animate({ opacity: 1 }, 1000, function() {
                           $("#sliderList li").not($(this)).removeClass('active');
                           for ( let i=1; i<liLength; i++ ) {
                             if ( num == liLength ) num = 0;
                             num++;
                             $("#sliderList").append($(".slider"+num));
                           }
                           state = 1;
                         })
  }
})

let timer = setInterval($.throttle(1000/15,function(){
  nextSlider();
}, 4000), 4000)

$("#btnPos a, #btnNum a").on('click',function(e){
    e.preventDefault();
    clearInterval(timer);
    timer=setInterval(nextSlider,4000)
    $(".pause").css({ display : 'block' })
    $(".play").css({ display : 'none' })
})

$("#playBtn .pause").on('click',function(e){
  e.preventDefault();
  clearInterval(timer);
  $("#playBtn .pause").css({ display : 'none'})
  $("#playBtn .play").css({ display : 'block' })
})
$("#playBtn .play").on('click',function(e){
  e.preventDefault();
  clearInterval(timer);
  timer = setInterval(nextSlider, 4000)
  $("#playBtn .pause").css({ display : 'block' })
  $("#playBtn .play").css({ display : 'none' })
})

/* 재단활동소식 */

$(".activeNews").slick({
    dots: false,
    infinite: true,
    // centerMode: true,
    arrows:true, // next, prev 이동 버튼
    prevArrow :  `.newsPrev`,
     nextArrow : `.newsNext`, 
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [ // -> 반응형 옵션
    {
      breakpoint: 600,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots : true
      }
    }
  ]

  });


$(function(){
    var $duration = 300,
        $image = $('.activeNews a');

   $image.mouseover(function(){
    $(this).find('span').stop().animate({opacity : 1}, $duration);
    })
    .mouseout(function(){
        $(this).find('span').stop().animate({ opacity : 0 }, $duration);
    })
})

// 공지사항 Slick

$(".noticeNews").slick({
    dots: false,
    infinite: true,
    // centerMode: true,
    arrows:true, // next, prev 이동 버튼
    prevArrow :  `.noticePrev`,
     nextArrow : `.noticeNext`, 
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [ // -> 반응형 옵션
    {
      breakpoint: 600,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots : true
      }
    }
  ]
  });

$(".siteList").on('mouseover',function(){

})