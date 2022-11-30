window.addEventListener('load', function () {

  var loginSubIsClick = false;

  //登录
  let header__login = this.document.querySelector('.shell')
  let close = this.document.querySelector('.close-icon')
  let x2 = this.document.getElementById('x2')
  let login = this.document.getElementById('login')
  let mimalogin = this.document.getElementById('mimalogin')
  let login1 = this.document.getElementById('login1')
  let yzmloginer = this.document.getElementById('yzmloginer')
  let mimaloginer = this.document.getElementById('mimaloginer')//第一个
  let mimaloginers = this.document.getElementById('mimaloginers')//第二个
  let containerinput = this.document.getElementById('containerinput')
  let error_text = this.document.querySelector('.error-text')
  let MobilePhoneFormat = this.document.getElementById('MobilePhoneFormat')
  let mhy_toast = this.document.querySelector('.mhy-toast')

  $(".loginSub").click(function () {
    loginSubIsClick = true;
    setTimeout(function () {
      loginSubIsClick = false;
    },500);
  });
  header__login.addEventListener('click',function(){
    if (!loginSubIsClick) {
      login.style.display = 'block'
    }
  })
  close.addEventListener('click',function(){
    login.style.display = 'none'
    // $("#resister").style.display = 'none'
    $("#resister").css("display",'none')
  })
  mimaloginers.addEventListener('click',function(){
    $(".active").removeClass("active");
    $(".tab-item:nth-child(2)").addClass("active");
    $("#mimaInput").attr("placeholder", "密码");
    $(".captcha-login-inner-btn").css("display", "none");
    $(".register-bar").css("display", "block");
    $("#LoginFirst").attr("onclick", "toLoginSecond()");


  })
  yzmloginers.addEventListener('click',function(){
    $(".active").removeClass("active");
    $(".tab-item:nth-child(1)").addClass("active");
    $(".register-bar").css("display", "none");
    $(".captcha-login-inner-btn").css("display", "block");
    $("#LoginFirst").attr("onclick", "toLoginFirst()");


    $("#mimaInput").attr("placeholder", "验证码");

  })

  	//判断用户在输入手机号格式是否正确
  // var myforms = document.forms;
  // var myemail = myforms[0].email.value;
  var regtel = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

		// let regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

    containerinput.onblur = function() {
			if(regtel.test(this.value)) {
        error_text.style.display = 'none';
        MobilePhoneFormat.style.display = 'none'
        mhy_toast.style.display = 'none'
         //发送短信
  let VerificationCode = document.getElementById('VerificationCode');
  let time = 59;
  VerificationCode.addEventListener('click',function(){
    VerificationCode.disabled = true;
    var timer = setInterval(function(){
      if(time == 0) {
        // 清除定时器和复原按钮
        clearInterval(timer);
        VerificationCode.disabled = true;
        VerificationCode.innerHTML = '发送验证码'
        time = 59; //这个数需要重新开始
      }
      else {
        VerificationCode.innerHTML = '已发送'+ time +'(S)';
        VerificationCode.disabled = false;
        time--;
      }
    },1000);
  })
			}

      else if(this.value.length == ''){
        error_text.style.display = 'block';
        mhy_toast.style.display = 'block'
      }
			else {
        MobilePhoneFormat.style.display = 'block'
        error_text.style.display = 'none';
        mhy_toast.style.display = 'block'
			}
		}
    setInterval(function () {
      mhy_toast.style.display = 'none'
    },5000)

  //footer
  let socialitemImg1 = this.document.getElementById('socialitemImg1')
  let socialitemImg2 = this.document.getElementById('socialitemImg2')
  let socialitemImg3 = this.document.getElementById('socialitemImg3')
  let socialitemImg4 = this.document.getElementById('socialitemImg4')
  let share__wrap = this.document.querySelector('.share__wrap')
  let qxtc = this.document.querySelector('.qxtc')
})
