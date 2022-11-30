function toLoginFirst() {
    let email = $("#containerinput").val();
    let password = $("#mimaInput").val();
    $.ajax({  //验证身份
        type: "post",
        url: '/api/auth/loginByCode',
        async: false,
        dataType: "json",
        data:{
            username: email,
            code: password,
        },
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                execTip("欢迎"+email+"!");
                $("#login").css("display", "none");
                $("#user").text(email);
                $(".popup2").addClass("show");
                $(".login__header").css("width","200px");
                $(".login__header").css("transform","translateX(-50%)");


            } else if (data.code === 401) {
                execTip(data.message);

            } else if (data.code !== 200) {
                execTip(data.message);

            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}
function toLoginSecond() {
    let email = $("#containerinput").val();
    let password = $("#mimaInput").val();
    $.ajax({  //验证身份
        type: "post",
        url: '/api/auth/login',
        async: false,
        dataType: "json",
        data:{
            username: email,
            password: password,
        },
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                execTip("欢迎"+email+"!");
                $("#login").css("display", "none");
                $("#user").text(email);
                $(".popup2").addClass("show");
                $(".login__header").css("width","200px");
                $(".login__header").css("transform","translateX(-50%)");


            } else if (data.code === 401) {
                execTip(data.message);

            } else if (data.code !== 200) {
                execTip(data.message);

            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}

function toRegister() {
    let email = $("#containerinput1").val();
    let password = $("#mimaInput1").val();
    let code = $("#mimaInput2").val();

    $.ajax({  //验证身份
        type: "post",
        url: '/api/auth/register',
        async: false,
        dataType: "json",
        data:{
            code: code,
            username: email,
            password: password,
            email: email,
        },
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                // window.alert("注册成功!");
                execTip("注册成功!");

                $.ajax({  //验证身份
                    type: "post",
                    url: '/api/auth/login',
                    async: false,
                    dataType: "json",
                    data:{
                        username: email,
                        password: password,
                    },
                    xhrFields: {
                        withCredentials: true,
                    },
                    success: function (data) {
                        if (data.code === 200) {
                            execTip("欢迎"+email+"!");
                            $("#user").text(username);

                            $(".close-icon").click();
                            $(".popup2").addClass("show")
                            $(".login__header").css("width","200px");
                            $(".login__header").css("transform","translateX(-50%)");



                        } else if (data.code === 401) {
                            execTip(data.message);


                        } else if (data.code !== 200) {
                            execTip(data.message);

                        }
                    },
                    error: function () {
                        window.location = "../../500page.html";
                    },
                });
            } else if (data.code === 401) {
                execTip(data.message);


            } else if (data.code !== 200) {
                execTip(data.message);

            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}
$(function () {
    $.ajax({  //验证身份
        type: "get",
        url: '/api/auth/guest/isGuest',
        async: false,
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                $.ajax({  //验证身份
                    type: "get",
                    url: '/api/user/getUserDetails',
                    async: false,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true,
                    },
                    success: function (data) {
                        if (data.code === 200) {
                            username = data.data.username;
                            $(".login__header").css("width","200px");
                            $(".login__header").css("transform","translateX(-50%)");
                            $("#user").text(username);
                        } else if (data.code === 401) {

                        } else if (data.code !== 200) {
                            execTip(data.message);

                        }
                    },
                    error: function () {
                        window.location = "../../500page.html";
                    },
                });
            } else if (data.code === 401) {


            } else if (data.code !== 200) {
                execTip(data.message);

            }
        },
    });
});
function getVerifyCode() {
    let email = $("#containerinput1").val();
    let email2 = $("#containerinput").val();
    if (email == "") {
        email = email2;
    }

    $.ajax({  //验证身份
        type: "post",
        url: '/api/auth/verify',
        async: false,
        dataType: "json",
        data:{
            email: email,
        },
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                execTip("发送验证码成功");

            } else if (data.code === 401) {
                execTip(data.message);

            } else if (data.code !== 200) {
                execTip(data.message);

            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}
function openRegister() {
    $(".close-icon").click();
    $("#resister").css("display", "block");
    $(".captcha-login-inner-btn").css("display", "block");
    $("input").css("padding", "10px 12px");
    $(".error-text").css("margin","0");
    /*$(".mhy-account-flow-dialog-content").css("height", "376px");*/
}
function openLogin() {
    $(".header__login").click();
    $("#resister").css("display", "none");
    $(".captcha-login-inner-btn").css("display", "none");
    $("input").css("padding", "10px 12px");
    /*$(".mhy-account-flow-dialog-content").css("height", "346px");*/
    $("#LoginFirst").attr("onclick", "toLoginFirst()");
}
$(".close-icon").click(function () {
    $("#resister").css("display", "none");
    $("input").css("padding", "10px 12px");
    // $(".mhy-account-flow-dialog-content").css("height", "346px");
    $(".active").removeClass("active");
    $(".tab-item:nth-child(1)").addClass("active");
    $(".register-bar").css("display", "none");
    $(".captcha-login-inner-btn").css("display", "block");
    $("#mimaInput").attr("placeholder", "验证码");
});
function logOut() {
    $.ajax({  //验证身份
        type: "get",
        url: '/api/auth/logout',
        async: false,
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                execTip("退出登录成功!");
                $("#user").text("登录");
                $(".login__header").css("width","100px");
                $(".login__header").css("transform","translateX(0%)");
            } else if (data.code === 401) {
                execTip("请先登录!");

            } else if (data.code !== 200) {
                execTip(data.message);
            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}
