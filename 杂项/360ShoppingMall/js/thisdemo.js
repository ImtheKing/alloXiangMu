
function openon() {
    layer.open({
        type:1,
        title: '欢迎来到德莱联盟',
        area:["395px","300px"],
        content:$("#logion-con")

    });
}



function logionin(){
    var username = $.trim($("#login-pop").val());
    var  password = $.trim($("#reg-pop" ).val());
    if (username==""|| password==""){
       layer.alert("用户名或密码不能为空",{

        title:"提示",
        icon:5


        	
        });

    }


}

var i = 0;
var timer;
$(function () {
	/*侧边栏导航*/
	$(".elevator2").click(function(){
		/*$(".part-smart").html($(this).html());*/
		$(this).html($(".part-smart").html());

	},function(){});

	$(".first-item").hover(function(){
		$(".sublistbox").show();

	},function(){
		$(".sublistbox").hide();

	});

	$(".rWeChat").hover(function(){
		$(".rtipscont ").show();

	},function(){

		$(".rtipscont ").hide();
	});

	$(".topshopcart").hover(function(){
		$(".topshopcart .header-cart-popup").show();

	},function(){
		$(".topshopcart .header-cart-popup").hide();
	});
	$(".sub-itemm.menu1.odd").hover(function(){
		$(".left-sub-listt").show();

	},function(){
		$(".left-sub-listt").hide();
	});
	$(".sub-itemm.menu2 ").hover(function(){
		$(".left-sub-listt2").show();
	},function(){
		$(".left-sub-listt2").hide();
	});
	$(".sub-itemm.menu3.odd").hover(function(){
		$(".left-sub-listt3").show();

	},function(){
		$(".left-sub-listt3").hide();
	});

	$(".sub-itemm.menu4 ").hover(function(){
		$(".left-sub-listt4").show();
	},function(){
		$(".left-sub-listt4").hide();
	});
	$(".sub-itemm.menu5.odd").hover(function(){
		$(".left-sub-listt5").show();

	},function(){
		$(".left-sub-listt5").hide();
	});
	$(".sub-itemm.menu6 ").hover(function(){
		$(".left-sub-listt6").show();
	},function(){
		$(".left-sub-listt6").hide();
	});
	$(".sub-itemm.menu7.odd").hover(function(){
		$(".left-sub-listt7").show();

	},function(){
		$(".left-sub-listt7").hide();
	});
	$(".sub-itemm.menu8 ").hover(function(){
		$(".left-sub-listt8").show();
	},function(){
		$(".left-sub-listt8").hide();
	});



	$(".banner-slider").hover(function() {
		$(".btn").show();
	}, function() {
		$(".btn").hide();
	});
	$(".slider-film").eq(0).show().siblings().hide();
	ShowTime();
 
	$(".wtab").hover(function(){
	 	i = $(this).index();/*获取到当前鼠标下标的索引*/
	 	Show();
	 	clearInterval(timer);/*清除轮播*/
	 	
	 },function(){
	 	ShowTime();
	 });
	$(".btn1").click(function(){
		clearInterval(timer);
		if (i==0) {
			i = 6
		}
		i--;
		Show();
		ShowTime();
	});
	$(".btn2").click(function(){
		clearInterval(timer);
		if (i == 5) {
			i =-1;
		}
		i++;
		Show();
		ShowTime();
	});

});


function Show() {
	$(".slider-film").eq(i).fadeIn(300).siblings().fadeOut(300);
	$(".wtab").eq(i).addClass("bg").siblings().removeClass("bg");

}

function ShowTime() {
	 timer = setInterval(function (){
			i++;
			
		if (i == 6) {
			i = 0;
		}
		Show();
		},4000);
    }

function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;
 
   // ¹ö¶¯Ìõµ½Ò³Ãæ¶¥²¿µÄË®Æ½¾àÀë
   var x = Math.max(x1, Math.max(x2, x3));
   // ¹ö¶¯Ìõµ½Ò³Ãæ¶¥²¿µÄ´¹Ö±¾àÀë
   var y = Math.max(y1, Math.max(y2, y3));
 
   // ¹ö¶¯¾àÀë = Ä¿Ç°¾àÀë / ËÙ¶È, ÒòÎª¾àÀëÔ­À´Ô½Ð¡, ËÙ¶ÈÊÇ´óÓÚ 1 µÄÊý, ËùÒÔ¹ö¶¯¾àÀë»áÔ½À´Ô½Ð¡
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
   // Èç¹û¾àÀë²»ÎªÁã, ¼ÌÐøµ÷ÓÃº¯Êý
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}