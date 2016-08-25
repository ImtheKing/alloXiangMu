

function ShowLoginBox() {
    layer.open({
        type: 1,
        title: "登陆",
        area: ["392px", "300px"],
        content: $("#loginbox")
    });
}
function ShowRegBox() {
    layer.open({
        type: 1,
        title: "注册",
        area: ["392px", "480px"],
        content: $("#regbox")
    });
}


function Login() {
    var username = $.trim($("#txtUserName").val());
    var pwd = $.trim($("#txtPwd").val());
    if (username == "" || pwd == "") {
        //layer.alert("用户名或密码不能为空", {
        //    title: "提示",
        //    icon:2
        //});
        layer.msg("用户名或密码不能为空", {
            icon: 2
        });
    }
    else {
        $.post("/Handler1.ashx", { "uname": username, "upwd": pwd, "cmd": "login" }, function (data) {
            if (data == "ok") {
                layer.msg("登陆成功", {
                    icon: 1
                }, function () {
                    location.href = "http://www.ruanmou.net";
                });
            }
            else {
                layer.msg("用户名或密码错误", {
                    icon: 2
                });
            }
        });
    }
}


function Reg() {
    var username = $.trim($("#txtRUserName").val());
    var pwd = $.trim($("#txtRPwd").val());
    var qq = $.trim($("#txtRQQ").val());
    var realname = $.trim($("#txtRRealName").val());
    var tel = $.trim($("#txtRTel").val());
    if (username == "" || pwd == "") {
        layer.msg("用户名或密码不能为空", {
            icon: 2
        });
    }
    
}







function showImage() {

	$("#tapbax").slideDown(1000);

}
function hideImage(){

	$("#tapbax").slideUp(500);
}


$(function(){
		if ($.cookie("bg-pic") == ""||$.cookie("bg-pic") == null) {
			$("body").css("background-image","url(image/bg0.jpg)");
		}
		else{
			$("body").css("background-image","url('"+ $.cookie("bg-pic") +"')")

		}
	$(".bgitame img").click(function(){
		var src = $(this).attr("src");
	
		$("body").css("background-image","url('"+ src +"')");
		$.cookie("bg-pic",src,{ expires: 7 });
	});
  
  

});