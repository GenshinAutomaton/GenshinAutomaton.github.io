var light_index = 0;
var imgs = [
    "static/image/MiJing/bg1.png",
    "static/image/MiJing/bg2.png",
    "static/image/MiJing/bg3.png",
    "static/image/MiJing/bg4.png",
    "static/image/MiJing/bg5.png",
    "static/image/MiJing/bg6.png",
    "static/image/MiJing/bg7.png",
    "static/image/MiJing/bg8.png",
    "static/image/MiJing/bg9.png",
    "static/image/MiJing/bg10.png",
    "static/image/MiJing/bg11.png",
];
var reward1 = [
    "static/image/MiJing/reward1-0.png",
    "static/image/MiJing/reward2-0.png",
    "static/image/MiJing/reward3-0.png",
    "static/image/MiJing/reward4-0.png",
    "static/image/MiJing/reward5-0.png",
    "static/image/MiJing/reward6-0.png",
    "static/image/MiJing/reward7-0.png",
    "static/image/MiJing/reward8-0.png",
    "static/image/MiJing/reward9-0.png",
    "static/image/MiJing/reward10-0.png",
    "static/image/MiJing/reward11-0.png",

];
var reward2 = [
    "static/image/MiJing/reward1-1.png",
    "static/image/MiJing/reward2-1.png",
    "static/image/MiJing/reward3-1.png",
    "static/image/MiJing/reward4-1.png",
    "static/image/MiJing/reward5-1.png",
    "static/image/MiJing/reward6-1.png",
    "static/image/MiJing/reward7-1.png",
    "static/image/MiJing/reward8-1.png",
    "static/image/MiJing/reward9-1.png",
    "static/image/MiJing/reward10-1.png",
    "static/image/MiJing/reward11-1.png",
];
var reward3 = [
    "",
    "",
    "",
    "",
    "",

    "static/image/MiJing/reward6-3.png",
    "static/image/MiJing/reward7-3.png",
    "",
    "",
    "static/image/MiJing/reward10-3.png",

    "static/image/MiJing/reward11-3.png",
    "",
    "",
    "static/image/MiJing/reward14-3.png",
    "static/image/MiJing/reward15-3.png",

    "static/image/MiJing/reward16-3.png",
    "",
    "static/image/MiJing/reward18-3.png",
    "",

];
var hasThird = [
    false,
    false,
    false,
    false,
    false,

    true,
    true,
    false,
    false,
    true,

    true,
    false,
    false,
    true,
    true,

    true,
    false,
    true,
    false,
]

var names = [
    "????????????",
    "????????????",
    "??????????????????",
    "??????????????????",
    "????????????",
    "??????????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "?????????",
]
$(".box_left").click(function () {
    light_index = (light_index - 1) % 11;
    if (light_index < 0) {
        light_index = light_index + 11;
    }
    if (light_index%1==0) {
        change(light_index);
        close(false);
    }

});
$(".box_right").click(function () {
    light_index = (light_index + 1) % 11;
    if (light_index%1==0) {
        change(light_index);
        close(false);
    }

});
$(".light").click(function () {
    lightClick()

});
$("#back").click(function () {
    close();

});
$(".bu").hover(function () {
    $(".bu").attr("src", "static/image/MiJing/bu1.png");

}, function () {
    $(".bu").attr("src", "static/image/MiJing/bu2.png");

});

function clickAddToCmd(){

    if (!checkIsStarting()) {
        tipIn();
    } else {
        execTip("???????????????????????????????????????????????????!");
    }
}
var isFadeOut = true;


function change(index) {
    let text = $(".Ins_name");
    $(".light").attr("src", imgs[index]);
    text.text(names[index]);
    $("#reward1").attr("src",reward1[index]);
    $("#reward2").attr("src",reward2[index]);
    if (names[index].length===6){
        $(".Ins_name").css("left","43%");
    }
    if (names[index].length===4){
        $(".Ins_name").css("left","45%");
    }
    if (names[index].length===3){
        $(".Ins_name").css("left","46%");
    }
}


var tipFlag = 0;

function tipIn() {
    $(".el-message__content").text("????????????????????????: " + names[light_index]);
    setCookie(light_index);
    tipFlag = 0;
    $(".tip").fadeIn(200);
    let long = $(".tip").css("top");
    $(".tip").css("visibility","visible");
    long = long + "";
    long = long.replace("px", "");
    long = long.trim();
    for (let i = 0; i < 50; i++) {
        $(".tip").css("top", Number(long) + i + "px");
    }
    setInterval(function () {
        tipFlag = tipFlag + 1;
    }, 999);
    setTimeout(function () {
        if (tipFlag >= 2) {
            tipOut();
        }
    }, 3000);
}

function tipOut() {
    $(".tip").fadeOut(400);
    let long = $(".tip").css("top");
    long = long + "";
    long = long.replace("px", "");
    long = long.trim();
    for (let i = 0; i < 150; i++) {
        $(".tip").css("top", Number(long) - i + "px");
    }
    setTimeout(function () {
        $(".tip").css("top", "0px");
    }, 350);

    // $(".tip.css").css("visibility", "hidden");

}

function setCookie(index) {
    let number;
    if (getCookie(names[index]) !== "") {
        number = getCookie(names[index]);
        $.cookie(names[index], Number(number) + 1);
        return true;
    } else {
        $.cookie(names[index], 1);
    }
}

function setCookieKeyAndValue(name, value) {
    let number;
    if (getCookie(name) !== "") {
        number = getCookie(name);
        $.cookie(name, value);
        return true;
    } else {
        $.cookie(name, value);
    }
}

function setCookieValueAdd(value) {
    let number;
    if (getCookie(value) !== "") {
        number = getCookie(value);
        $.cookie(value, Number(number) + 1);
        return true;
    } else {
        $.cookie(value, 1);
    }
}

function setCookieValueMinus(value) {
    let number;
    if (getCookie(value) !== "") {
        number = getCookie(value);
        if (Number(number) > 1) {
            $.cookie(value, Number(number) - 1);
        } else {
            execTip("??????????????????!");
        }
        return true;
    } else {
        $.cookie(value, 1);
    }
}

function setCookieValueToZero(index) {
    let number;
    if (getCookie(names[index]) !== "") {
        number = getCookie(names[index]);
        $.cookie(names[index], -1);
        return true;
    } else {
        $.cookie(names[index], -1);
    }
}

function getCookie(key) {
    if ($.cookie(key) != null) {
        return $.cookie(key);
    } else {
        return "";
    }
}


function deleteCookie(key) {
    $.cookie(key, null, {expires: 0});
}

function taskFinish() {
    setCookieValueToZero(value);
    var p = $(this).parent();
    p.fadeOut(function () {
        $(".comp").append(p);
        p.fadeIn();
    });
    $(this).remove();
}

function taskDoing(index) {
    setCookieValueToZero(index);
    var p = $(this).parent();
    p.fadeOut(function () {
        $(".comp").append(p);
        p.fadeIn();
    });
    $(this).remove();
}
var execTasks = [];
var execTasksIndex = [];
var execTasksNumber = [];

function execTask() {
    if (!checkIsStarting()) {
        execTasks.length = 0;
        execTasksIndex.length = 0;
        execTasksNumber.length = 0;
        names.forEach(function (value, index, array) {
            let cookie = getCookie(value);
            if (cookie !== "" && cookie !== -1) {
                execTasks.push(value);
                execTasksIndex.push(index)
                execTasksNumber.push(cookie);
            }
        });
        if (execTasks.length === 0) {
            execTip("??????????????????????????????!");
        } else {
            storeList(execTasksIndex, execTasksNumber);
            $(".popup").addClass("show");

        }
    } else {
        execTip("???????????????????????????????????????????????????!");

    }
}

function reFreshTasks() {
    selectList();
}

function execTip(text) {
    $(".el-message__content").text(text);
    $(".tip").fadeIn(200);
    let long = $(".tip").css("top");
    $(".tip").css("visibility", "visible");
    long = long + "";
    long = long.replace("px", "");
    long = long.trim();
    for (let i = 0; i < 50; i++) {
        $(".tip").css("top", Number(long) + i + "px");
    }
    setInterval(function () {
        tipFlag = tipFlag + 1;
    }, 999);
    setTimeout(function () {
        if (tipFlag >= 2) {
            tipOut();
        }
    }, 3000);
}

function renew() {
    $.ajax({  //????????????
        type: "get",
        url: '/api/email/renew',
        async: false,
        dataType: "json",
        traditional: true,
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                execTip("????????????????????????!");

            } else if (data.code === 401) {
                execTip("????????????!");

            } else if (data.code !== 200) {
                //??????????????????
                execTip(data.message);

            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}

//????????????????????????
var frontResult;
function getStatus() {

    $.ajax({  //????????????
        type: "get",
        url: '/api/MiJing/checkStatus',
        async: false,
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                console.log(data.data);

                let result=JSON.parse(data.data);

                //??????cookie??????frontResult
                let cookie = getCookie("frontResult");

                if (cookie != null&&cookie!=="") {
                    if (JSON.stringify(result) === cookie) {
                        console.info("??????");
                        return;
                    }
                }

                setCookieKeyAndValue("frontResult", JSON.stringify(result));
                let cur = result.cur;
                let fin = result.fin;
                if (fin!==undefined&&fin!==null) {
                    finKey = Object.keys(fin);
                }
                names.forEach(function (value, index, array) {
                    deleteCookie(value.concat("doing"));
                });
                if (cur!==undefined&&cur!==null) {

                    setCookieKeyAndValue(names[cur] + "doing", -2);
                    if (getCookie(names[cur]) > 1) {
                        setCookieValueMinus(names[cur]);
                    } else if (getCookie(names[cur]) == 1) {
                        deleteCookie(names[cur]);
                    }
                }
                if (fin!==undefined&&fin!==null) {
                finKey.forEach(function (value,index,array) {
                    if (getCookie(names[value].concat("finish") )===-1) {
                        setCookieKeyAndValue(names[value].concat("finish"), getCookie(names[value].concat("finish")) + fin[value]);
                    }else {
                        setCookieKeyAndValue(names[value].concat("finish"), fin[value]);
                    }
                });
                }
                setTimeout(function () {
                    //??????????????????
                    checkIsFinish();

                    setTimeout(function () {
                        refrushTask();
                        //??????redis??????key
                    },500);

                },500);
            } else if (data.code === 401) {
                // execTip("????????????!");
            } else if (data.code !== 200) {
                // execTip(data.message);
                setTimeout(function () {
                    //??????????????????
                    checkIsFinish();
                },500);
            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}

/**
 * ??????????????????????????????,?????????????????????????????????
 */
function checkIsStarting() {
    var html = $(".doingTask").html();
    if (html !== undefined) {  //?????????????????????
        return true;
    }
    return false;
}

function checkIsFinish() {
    $.ajax({  //????????????
        type: "get",
        url: '/api/MiJing/checkIsFinish',
        async: false,
        dataType: "json",
        traditional: true,
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                execTip("????????????????????????!");
                $(".doingTask").each(function (value, index) {
                    deleteCookie($(this).attr("id"));
                    $(this).fadeOut(function () {
                        $(this).remove();
                    });
                });
                names.forEach(function (value) {
                    deleteCookie(value.concat("doing"));
                });
                $(".notcomp").each(function (value, index) {
                    deleteCookie($(this).attr("id"));
                    $(this).fadeOut(function () {
                        $(this).remove();
                    });
                });
                refrushTask();

            } else if (data.code === 401) {
                execTip("????????????!");

            } else if (data.code !== 200) {
               //??????????????????

            }
        },
        error: function () {
            execTip("?????????????????????????????????????????????????????????,??????????????????!");
        },
    });

}

function storeList(list, numberList) {
    $.ajax({  //????????????
        type: "post",
        url: '/api/MiJing/storeList',
        async: false,
        dataType: "json",
        data: {
            MiJingList: list,
            numberList: numberList,
        },
        traditional: true,
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                execTip("?????????????????????!");

            } else if (data.code === 401) {
                execTip("????????????!");

            } else if (data.code !== 200) {
                execTip(data.message);

            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}

function selectList() {
    $.ajax({  //????????????
        type: "get",
        url: '/api/MiJing/selectList',
        async: false,
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {
                MiJingDetail = data.data;
                list = MiJingDetail.toList;
                numberList = MiJingDetail.toNumberList;
                popup2.classList.toggle("show");
                execTip("????????????????????????????????????!");
                list.forEach(function (value, index, array) {
                    //?????????cookie
                    setCookieKeyAndValue(names[value], numberList[index]);
                });

                refrushTask()

            } else if (data.code === 401) {
                execTip("????????????!");

            } else if (data.code !== 200) {
                execTip(data.message);

            }
        },
        error: function () {
            window.location = "../../500page.html";
        },
    });
}

function refrushTask() {

    $(".task").each(function (value,index) {
        $(this).fadeOut(function () {
            $(this).remove();
        });
    });
    $(".doingTask").each(function (value,index) {
        // $(this).remove();
        $(this).fadeOut(function () {
            $(this).remove();
        });
    });



    numbers.length = 0;

    names.forEach(function (value, index, array) {
        let cookie = getCookie(value);
        if (cookie !== "" && cookie !== -1) {


            numbers.push(cookie);

            var task = $("<div class='task' data-num='1'></div>").text(value);
            var del = $("<i class='fas fa-trash-alt'></i>").click(function () {
                if (!checkIsStarting()) {

                    $(this).attr("id", value);
                    var p = $(this).parent();
                    p.attr("id", value);


                    deleteCookie($(this).attr("id"));
                    p.fadeOut(function () {
                        p.remove();
                    });
                } else {
                    execTip("???????????????????????????????????????????????????!");

                }
            });


            var plus = $("<i class='fas fa-plus'></i>").click(function () {
                if (!checkIsStarting()) {

                    setCookieValueAdd(value);
                    refreshTaskNumber();
                } else {
                    execTip("???????????????????????????????????????????????????!");
                }
            });
            var minus = $("<i class='fas fa-minus'></i>").click(function () {
                if (!checkIsStarting()) {

                    setCookieValueMinus(value);
                    refreshTaskNumber();
                } else {
                    execTip("???????????????????????????????????????????????????!");

                }
            });


            if (cookie !== "" && cookie === "-1") {
                task.append(del);
                $(".comp").append(task);
            } else {
                task.append(del, plus, minus);
                $(".notcomp").append(task);
            }
        }
    });


    names.forEach(function (value, index, array) {
        let cookie = getCookie(value.concat("doing"));
        if (cookie !== "" ) {
            // numbers.push(cookie);

            var task = $("<div class='doingTask'></div>").text(value);

            if (cookie !== "" && cookie === "-1") {
                task.append(del);
                $(".comp").append(task);
            } else {
                $(".doing").append(task);
            }
        }
    });


    names.forEach(function (value, index, array) {
        let cookie = getCookie(value.concat("finish"));
        if (cookie !== "" ) {
            numbers.push(cookie);

            var task = $("<div class='task' data-num='"+cookie+"'></div>").text(value);
            console.log(cookie);
            var del = $("<i class='fas fa-trash-alt'></i>").click(function () {
                if (!checkIsStarting()) {

                    $(this).attr("id", value);
                    var p = $(this).parent();
                    p.attr("id", value.concat("finish"));


                    deleteCookie($(this).attr("id"));
                    p.fadeOut(function () {
                        p.remove();
                    });
                } else {
                    execTip("???????????????????????????????????????????????????!");

                }
            });



            if (cookie !== "" && cookie === "-1") {
                task.append(del);
                $(".comp").append(task);
            } else {
                task.append(del);
                // task.fadeOut();
                $(".comp").append(task);
                // task.fadeIn();
            }
        }
    });
    console.log(numbers);
    setTimeout(function () {
        let demo = 0;
        $(".task").each(function (index) {
            if (numbers[index] != -2) {
                $(this).attr("data-num", numbers[index]);
                console.log(index + ": " + numbers[index]);
                demo = demo+1;
            } else {
            }
        });
    },500);
}

function loginGetList() {
    if (!checkIsStarting()) {
        popup2.classList.toggle("show");

        getFrontList();
    } else {
        execTip('???????????????????????????????????????????????????!');

    }
}

function otherGetList() {
    if (!checkIsStarting()) {
        getFrontList();
    } else {
        execTip('???????????????????????????????????????????????????!');

    }
}
function getFrontList() {
    //????????????????????????????????????????????????
    //????????????????????????????????????????????????????????????
    $.ajax({  //????????????
        type: "get",
        url: '/api/auth/guest/isGuest',
        async: false,
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            if (data.code === 200) {

                //?????????????????????????????????????????????????????????????????????
                getStatus();
                if (numbers.length === 0) {
                    $(".popup2").remove("show");
                    selectList();
                } else {
                    $(".popup2").remove("show");

                    $.ajax({  //????????????
                        type: "get",
                        url: '/api/MiJing/selectList',
                        async: false,
                        dataType: "json",
                        xhrFields: {
                            withCredentials: true,
                        },
                        success: function (data) {
                            if (data.code === 200) {
                                MiJingDetail = data.data;
                                list = MiJingDetail.toList;
                                numberList = MiJingDetail.toNumberList;
                                popup2.classList.toggle("show");
                                execTip("????????????????????????????????????!");
                                //?????????????????????
                                list.forEach(function (value,index) {
                                    setCookieKeyAndValue(names[value], numberList[index]);
                                });
                                //???????????????????????????????????????
                                names.forEach(function (nameValue) {
                                    if (getCookie(nameValue.concat("finish")) !== null && getCookie(nameValue.concat("finish")) !== undefined && getCookie(nameValue.concat("finish")) !== "") {
                                        cookie = getCookie(nameValue.concat("finish"));
                                        console.info(nameValue + "???cookie: " + cookie);
                                        list.forEach(function (value, index, array) {
                                            if (names[value] === nameValue) {
                                                //?????????????????????0?????????0????????????
                                                if (numberList[index] - cookie <= 0) {
                                                    deleteCookie(names[value]);
                                                    console.info(names[value] + "?????????");
                                                } else {
                                                    //?????????cookie
                                                    setCookieKeyAndValue(names[value], numberList[index] - cookie);
                                                    console.info(names[value] + "?????????" + cookie);
                                                }
                                            }
                                        });
                                    }
                                });
                                names.forEach(function (nameValue) {
                                    if (getCookie(nameValue.concat("doing")) !== null && getCookie(nameValue.concat("doing")) !== undefined && getCookie(nameValue.concat("finish")) !== "") {
                                        list.forEach(function (value, index, array) {
                                            if (names[value] === nameValue) {
                                                //?????????cookie
                                                cookie = getCookie(nameValue);
                                                //?????????????????????0?????????0????????????
                                                if (cookie - 1 <= 0) {
                                                    deleteCookie(names[value]);
                                                } else {
                                                    //?????????cookie
                                                    setCookieKeyAndValue(names[value], cookie - 1);
                                                }
                                            }
                                        });
                                    }
                                });
                                refrushTask()

                            } else if (data.code === 401) {
                                execTip("????????????!");

                            } else if (data.code !== 200) {
                                execTip(data.message);
                            }
                        },
                        error: function () {
                            window.location = "../../500page.html";
                        },
                    });
                }
            } else if (data.code === 401) {
            } else if (data.code !== 200) {
                execTip(data.message);
            }
        },
    });
}