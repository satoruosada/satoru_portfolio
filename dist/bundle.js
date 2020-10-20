(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

$(function() {
  // フロートヘッダーメニュー
  var targetHeight = $('#message').height();
  $(window).on('scroll', function(){
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });


  //spメニュー
  $('.js-toggle-sp-menu').on('click',function(){
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });


//message
  $(window).scroll(function(){
    $('.js-fadeUp').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if(scroll > targetElement - windowHeight){
        $(this).css('opacity',1);
        $(this).css('transform', 'translateX(0)');
      }
    });
  });

  $(window).scroll(function(){
    $('.js-slideInto').each(function(){
      var targetElement = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();
       if(scroll > targetElement - windowHeight){
         $(this).css('opacity','1');
         $(this).css('transform','translateX(0)');
       }
     });
   });

  $(window).scroll(function(){
    $('.js-slideUp').each(function(){
      var targetElement = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();
       if(scroll > targetElement - windowHeight + 300){
         $(this).css('opacity','1');
         $(this).css('transform','translateX(0)');
       }
     });
   });

//contact
   $(window).scroll(function(){
     $('.js-fadeIn').each(function(){
       var targetElement = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();
       if(scroll > targetElement - windowHeight + 300){
         $(this).css('opacity','1');
         $(this).css('transform','translateY(0)');
       }
     });
   });

    $(window).scroll(function (){
        $('.js-slideIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','2');
                $(this).css('transform','translateX(0)');
        }
      });
    });
 
  //キービジュアルのスライドショー
  const pics_src = ["../images/image.1.jpeg","../images/image.2.jpeg","../images/image.3.jpeg"];
  let num = -1;
 
function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 3000);


$(window).on('load',function(){
   // テキストを<span></span>で囲む
   $('.js-typing').children().andSelf().contents().each(function() {
    if (this.nodeType == 3) {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    }
   });
  // 一文字ずつフェードインさせる
  $('.js-typing').css({'opacity':1});
   for (var i = 0; i <= $('.js-typing').children().size(); i++) {
    $('.js-typing').children('span:eq('+i+')').delay(200*i).animate({'opacity':1},100);
    };
  });
});
},{}]},{},[1]);
