/* 컴퓨터 메인네비*/
$('#comNav .gnb').on('mouseenter',function(){
  $(this).stop().animate({ height : '600px'})
})
$('#comNav .gnb').on('mouseleave',function(){
  $(this).stop().animate({ height : '100px'})
})

$('#comNav .gnblist li').on('mouseenter',function(){
  $(this).children('.sublist').stop().css({ backgroundColor : '#c9ffba' })
  $(this).children('a').stop().addClass('active')
})
$('#comNav .gnblist li').on('mouseleave',function(){
  $(this).children('.sublist').stop().css({ backgroundColor : '#fff' })
  $(this).children('a').stop().removeClass('active')
})

/* 모바일 메인네비*/

$('.gnbView a').on('click',function(){
  $("#mobNav .gnb").addClass('active');
})
$('#mobNav .close').on('click',function(){
  $("#mobNav .gnb").removeClass('active');
})

$('#mobNav .sublist').hide();

$('#mobNav .gnblist, .sublist').children('li').on('mouseenter',function(){
  $(this).children('.sublist').show();
})
$('#mobNav .gnblist, .sublist').children('li').on('mouseleave',function(){
  $(this).children('.sublist').hide();
})

  // footer 관련사이트 링크
$('.siteList').hide();
$('.relatedSite2').on('mouseenter',function(){
  $(this).children('ul').stop().slideDown(200)
})
$('.relatedSite2, .siteList').on('mouseleave',function(){
  $(this).children('ul').stop().slideUp(300)
})