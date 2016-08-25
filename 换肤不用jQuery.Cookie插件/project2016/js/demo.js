/// <reference path="jquery-1.10.2.min.js" />

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
    else {
        $.post("/Handler1.ashx", { "uname": username, "upwd": pwd, "qq": qq, "tel": tel, "realname": realname, "cmd": "reg" }, function (data) {
            if (data == "ok") {
                layer.msg("恭喜你，注册成功", {
                    icon: 1
                }, function () {
                    location.reload();
                });
            }
            else {
                if (data == "error1") {
                    layer.msg("该用户名已存在", {
                        icon: 2
                    });
                }
                else {
                    layer.msg("注册失败", {
                        icon: 2
                    });
                }
            }
        });
    }
}

var src = "";
$(function () {
    if (localStorage.getItem("bgsrc") == null) {
        $("body").css("background-image", "url(image/bg0.jpg)");
    }
    else {
        $("body").css("background-image", "url(" + localStorage.getItem("bgsrc") + ")");
    }

    $("#txtSearch").keyup(function () {
        var stitle = $.trim($("#txtSearch").val());
        if (stitle != "") {
            $("#dcon").show();
            $.post("/Handler2.ashx", { "title": stitle }, function (data) {
                $("#dcon").html("");
                $("#dcon").append(data);
                //$("#dcon").find("li").bind("click", function () {
                //    alert($(this).text());
                //});
                $("#dcon").find("li").bind("mousemove", function () {
                    $(this).addClass("bg");
                });
                $("#dcon").find("li").bind("mouseout", function () {
                    $(this).removeClass("bg");
                });


            });
        }
        else {
            $("#dcon").hide();
        }
    });


    $(".topitem").eq(0).click(function () {
        $("#dbgs").slideDown(1000);
    });
    $("#dup").click(function () {
        $("#dbgs").slideUp(1000);
    });
    $(".bgitem").click(function () {
        src = $(this).find("img").attr("src")//获取到当前点击的图片的src值
        $("body").css("background-image", "url(" + src + ")");
        localStorage.setItem("bgsrc", src);
    });
});