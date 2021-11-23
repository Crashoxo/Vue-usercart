var date = new Date( '2000/1/1' );
const ytag = document.createElement("script");
ytag.src = "https://www.youtube.com/iframe_api?date=" + date.getTime();
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(ytag, firstScriptTag);

var ua = navigator.userAgent;
//if ((ua.indexOf('iPad') > 0)) {$('head').prepend('<meta name="viewport" content="width=1300">');}

if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
 $('body').on("mousewheel", function () {
 event.preventDefault();
 var wd = event.wheelDelta;
 var csp = window.pageYOffset;
 window.scrollTo(0, csp - wd);
 });
 }
 //�研�踴���背E
$(window).one('load',function(){if($('.ie9')[0] ||$('.ie10')[0] ||$('.ie11')[0] || $('.edge')[0]) {
 $('body').on("mousewheel", function () { event.preventDefault(); var wd = event.wheelDelta; var csp = window.pageYOffset; window.scrollTo(0, csp - wd); });}
});

//jsmodule
$(document).ready(function(){$('.jsmodule').each(function(i){$(this).load($(this).attr('data-module'));})});

$(document).ready(function(){

$('html,body').addClass('loading');

$('body').append('<div id="baseVW"></div><div id="baseWidth"></div>');
if(ua.indexOf('Mac OS')>0){$('html').addClass('mac');}
    
/**
	viewport

*********************************************************************************/
//ie11
    if ( ua.indexOf('rident/7') > 0 ) {$('html').addClass('ie11');}

    //safari
    if ($('html,body').hasClass('safari')){
    }else{
        $('html,body').addClass('nosafari');
    }

  /* 
		viewport憭匧�硔�扼�芥�准�潦��
	*/

$(window).one('load',function(){
if($('#baseVW').width()>768){
  $('html').attr('data-layout','pc');
}else{
  $('html').attr('data-layout','sp');
}
  setTimeout(checkLayout,1000);
});
function checkLayout(){
  if($('#baseVW').width()>768 && $('html').attr('data-layout')== 'sp'){
    location.href = window.location.href.split('/').pop();
  }else{
   if(769 > $('#baseVW').width() && $('html').attr('data-layout')== 'pc'){
     location.href = window.location.href.split('/').pop();
   }
  }
  setTimeout(checkLayout,1000);
}


/**

    loading
*********************************************************************************/
var loadeditems = '#contents img,#imageloaded i';

  $(loadeditems).imagesLoaded({ background: true }).always(function(){
        //imagescomp();
  })
	.done(function(){
        imagescomp();
    })
	.fail(function(){
        imagescomp();
    });
    function imagescomp (){
        $('html,body').addClass('imgloaded');
		if( getUrlVars()['to'] ){
			if(769>$(window).width()){
				$to = $('#' + getUrlVars()['to']).offset().top - 0;
			}else{
				$to = $('#' + getUrlVars()['to']).offset().top - 0;
			}
			$('html,body').stop().animate({scrollTop:$to},{duration:300,complete:function(){
        var url = location.href;
        var nowhref = url.replace(/\?.*$/,"");
        history.replaceState(null,null,nowhref);
      }});
		}
		
        checkloaded();
        var  outtime = 0.8;
        var  outdelay = 0.6;
        if($('#home.top')[0]){
          outdelay = 0.5;
          outtime = 1.0;
        }else{
          outdelay = 0.3;
        }
        $('#loader').addClass('loadout');
        $('#loader').stop().delay(outdelay*1000).animate({opacity:0},{duration:outtime*1000,complete:function(){
            $('html,body').addClass('windowloaded');
            $('#loader').remove();
            setTimeout(lazy,500);
        }});
    }

    $(window).on('load',function(){
        $('html,body').addClass('webloaded');
    });
    function checkloaded(){
    if($('.windowloaded')[0]){
            //�嫘�胯�准�潦�怒�扎�踺�喋��
            var threshold = 0.2;
            if($('#baseVW').width()>768){
              threshold = 0.6;
            }
            if($('.uatablet')[0]){
              $('[data-anim],[data-once],[data-opacity]').addClass('animated');
              $('.animation-trigger').addClass('animated');
            }else{
              ScrollOut({
              threshold: threshold,
              once: false,
              targets:"[data-anim]",
              onShown:function(el) {
                  el.classList.add("animated");
              }
              });
              ScrollOut({
              threshold: threshold,
              once: true,
              targets:"[data-once]",
              onShown:function(el) {
                  el.classList.add("animated");
              }
              });
              ScrollOut({
              threshold: threshold,
              once: true,
              targets:"[data-opacity],[data-pc-opacity],[data-sp-opacity]",
              onShown:function(el) {
                  el.classList.add("animated");
              }
              });
              ScrollOut({
              once: true,
              threshold:0.5,
              targets:".animation-loop-trigger",
                  onShown:function(el) {
                  el.classList.add("animated");
              }
              });
            }
        }else{
            setTimeout(checkloaded,10);
        }
    }

    function lazy(){
    var imgsize = $("img").length;
        for(var i=0; imgsize>i; i++){
            if($('img').eq(i).attr('src')==='img/blank.gif' || $('img').eq(i).attr('src')==='../img/blank.gif' ){
                $('img').eq(i).attr('src',$('img').eq(i).data('src')).addClass('lazyimgload');
            }
        }
       if($('.macos')[0]||$('.ios')[0]){
            setTimeout(function(){
                $('html,body').addClass('lazyimgload');
            },2000);
        }else{
            if( getUrlVars()['to'] ){
                $('html,body').addClass('lazyimgload');
            }
            $(window).one('scroll',function(){
                $('html,body').addClass('lazyimgload');
            });
        }

    }

//z-index
$('.second #contents section').each(function(i){
	var z = 99;
	$(this).css('zIndex',z-i);
})
  

//�Ｕ�喋�怒�澆𨤍��
	$(document).on('click','a.anchor,.pagetop a',function(e){
    e.preventDefault();
		var $to = $($(this).attr('href')).offset().top ;
        var x = $(window).scrollTop();
		  $offset = 0;
			if($(window).width()>768){
			}else{
				$to = $to - $('.menu').outerHeight();
			}
      $('html,body').stop().animate({scrollTop:$to},100);
	});


/*
  sitemenu
*/
$(document).on('click','.control .menu b,.siteheader .close a',function(e){
  e.preventDefault();
  $('html,body').toggleClass('menuopen');
  if($('.menuopen')[0]){

  }else{
    $('html,body').addClass('menuanim');
    setTimeout(function(){
      $('html,body').removeClass('menuanim');
    },810);
  }
});


$(document).on('click','.siteheader .parent',function(e){
	if($('#baseVW').width()>768){
	}else{
  	e.preventDefault();
		$(this).toggleClass('open');
	}
});


	/**
		movie modal
	*/
	$('body').append('<div id="modalMask"></div><div id="modalContent"><p class="close"><a href="#">��剹�塩��</a></p><div class="mc"></div></div>');
	$('#modalContent,#modalMask,#modalContent p.close a').on('click',function(){
		$('#modalMask,#modalContent').fadeOut(500).removeClass('view');
		$('#modalContent iframe').remove();
    if($('#baseVW').width()>768 && $('body#home')[0]){
      player.playVideo();
    }
		return false;
	});
	$('.moviemodal').on('click',function(e){
  e.preventDefault();
		var openURL   = 'https://www.youtube.com/embed/'+ $(this).attr('href') +'?showinfo=0&rel=0&controls=1';
    if(769>$('#baseVW').width()){
        //�嫘�𠺶�䜘�舐凒�𦻖youtube
        //openURL = 'https://www.youtube.com/watch?v=' + $(this).attr('href');
        window.open(openURL);
      }else{
			$('#modalContent .mc').append('<iframe src="'+openURL+'" frameborder="0" allowfullscreen></iframe>');
			$offh = 0;
			if($(window).width()>1200){
				//��憭�
				if($(this).data('modalwidth')) {$mw = $(this).data('modalwidth');} else {$mw  =1200;}
				if($(this).data('modalheight')){$mw = $(this).data('modalheight');} else{$mh= 1200*0.5625;}
			}else if(1200>$(window).width() && $(window).width()>768){
				$mw  = $(window).width()-50;
				$mh  = $mw*0.5625;
			}else{
				$mw  = $(window).width()-50;
				$mh  = $mw*0.5625;
				$offh = 0;
			}
      if($mh + $offh > $(window).height()){
				$offh = 0;
        $mh = $(window).height() + $offh;
        $ww = ($(window).height() - $offh)/9*16;
        $('#modalContent div.mc').width($ww).height( $(window).height() ).css('marginLeft',0-($ww/2)).css('marginTop',0-(($(window).height())/2));
        $('#modalContent iframe').width($ww).height( $(window).height() - $offh );
        $('#modalMask,#modalContent').fadeIn(500).addClass('view');
      }else{
			 $('#modalContent div.mc').width($mw).height($mh+$offh).css('marginLeft',0-($mw/2)).css('marginTop',0-(($mh+$offh)/2));
			 $('#modalContent iframe').width($mw).height($mh);
			 $('#modalMask,#modalContent').fadeIn(500).addClass('view');
      }
			if($('#bgmPlayer')[0] && $('#bgmPlayer').html()!=''){
				$('#bgmPlayer').html('');
			 $('#bgm .status').removeClass('play');
			}
}
	});




  
	
	});