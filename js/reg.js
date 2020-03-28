//设置全局变量 判定是否可以继续下一步
var regUserIdFlag=false,regUserPwdFlag=false,regCheckPwdflag=false;
function reload(){
  var obj=document.getElementsByTagName("input");
  for(var i=0;i<obj.length;i++){
    obj[i].value="";
  }
  console.log(obj.length);
}
//-------------------------------
function getURL(){
  var url=new URLSearchParams(location.search);
  var action=url.get("action");
  console.log(action);
  return action;
}
function turnAction(){
  if(getURL()=="login"){
    container.style.transform="translate(-50%,-50%) rotateY(90deg)";
  }
}
// -------------------------
function back(){
  console.log(1);
  container.style.transform="translate(-50%,-50%) rotateY(0deg)";
}
function next(){
  if(regUserIdFlag&&regUserPwdFlag&&regCheckPwdflag){
    container.style.transform="translate(-50%,-50%) rotateY(-90deg)";
  }else{
    alert("请完善信息后继续");
  }
  // container.style.transform="translate(-50%,-50%) rotateY(-90deg)";
}
function turnLog(){
  container.style.transform="translate(-50%,-50%) rotateY(90deg)";
}
//注册界面的函数
function regShowUserId(){
  if(regUserId.value==""){
      regUserIdInfo.setAttribute("data-placeholder","为6~10位字符,不可以包含特殊字符");
      regUserIdInfo.setAttribute("class","text-normal")
  }else{
   console.log(2);
  }
}
function regCheckUserId(){
  if(regUserId.value==""){
    regUserIdInfo.setAttribute("data-placeholder","用户名不能为空");
    regUserIdInfo.setAttribute("class","text-danger");
    regUserIdFlag=false;
  }else if(regUserId.value.length<6 || regUserId.value.length>10){
    regUserIdInfo.setAttribute("data-placeholder","用户名长度不合法");
    regUserIdInfo.setAttribute("class","text-danger");
    regUserIdFlag=false;
  }else{
    checkRepeat(regUserId.value);
  }
}
function checkRepeat(uname){
  var xhr =new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      let request=xhr.responseText;
      if(request==1){
        regUserIdInfo.setAttribute("data-placeholder","用户名已经被占用");
        regUserIdInfo.setAttribute("class","text-danger");
        regUserIdFlag=false;
      }else{
        regUserIdInfo.setAttribute("data-placeholder","正确");
        regUserIdInfo.setAttribute("class","text-success");
        regUserIdFlag=true;
      }
    }
  }
  xhr.open("get","pro/v1/check/"+uname,true);
  xhr.send();
}
function regShowUserPwd(){
  if(regUserPwd.value==""){
    regUserPwdInfo.setAttribute("data-placeholder","密码为6~12位字符");
    regUserPwdInfo.setAttribute("class","text-normal");
  }
}
function regCheckUserPwd(){
  if(regUserPwd.value.length<6 || regUserPwd.value.length>12){
    regUserPwdInfo.setAttribute("data-placeholder","密码长度不合法");
    regUserPwdInfo.setAttribute("class","text-danger");
    regUserPwdFlag=false;
  }else{
    regUserPwdInfo.setAttribute("data-placeholder","正确");
    regUserPwdInfo.setAttribute("class","text-success");
    regUserPwdFlag=true;
  }
}
function regCheckRepeatPwd(){
  if(regRepeatPwd.value==""){
    return;
  }else if(regRepeatPwd.value==regUserPwd.value){
    regRepeatPwdInfo.setAttribute("data-placeholder","正确");
    regRepeatPwdInfo.setAttribute("class","text-success");
    regCheckPwdflag=true;
  }else{
    regRepeatPwdInfo.setAttribute("data-placeholder","两次输入密码不相同");
    regRepeatPwdInfo.setAttribute("class","text-danger");
    regCheckPwdflag=false;
  }
}
//——————————————完善信息页面————————————
var realNameFlag=false,regPhoneFlag=false,regEmailFlag=false;
function showRealName(){
  realNameInfo.setAttribute("data-placeholder","真实姓名");
  realNameInfo.setAttribute("class","text-normal");
}
function regCheckRealName(){
  if(realName.value==""){
    realNameInfo.setAttribute("data-placeholder","姓名不能为空");
    realNameInfo.setAttribute("class","text-danger");
    realNameFlag=false;
  }else{
    realNameInfo.setAttribute("data-placeholder","正确");
    realNameInfo.setAttribute("class","text-success");
    realNameFlag=true;
  }
}

function regCheckPhone(){
    if(!(/^1[3456789]\d{9}$/.test(regPhone.value))){
      regPhoneInfo.setAttribute("data-placeholder","手机号码有误，请重填");
      regPhoneInfo.setAttribute("class","text-danger");
      // regPhone.value="";
      regPhoneFlag=false;
    }else{
      regPhoneInfo.setAttribute("data-placeholder","正确");
      regPhoneInfo.setAttribute("class","text-success");
      regPhoneFlag=true;
    }
}

function regCheckEmail(){
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		if(reg.test(regEmail.value)){
			regEmailInfo.setAttribute("data-placeholder","正确");
      regEmailInfo.setAttribute("class","text-success");
      regEmailFlag=true;
		}else{
			regEmailInfo.setAttribute("data-placeholder","邮箱格式错误");
      regEmailInfo.setAttribute("class","text-danger");
      regEmailFlag=false;
		}
}
function userReg(){
  if(realNameFlag&&regPhoneFlag&&regEmailFlag){
    sendRegInfo();
  }else{
    alert("请完善信息后继续！");
  }
}
function sex(){
  let gender = document.getElementsByClassName("sex");
  for(let i=0;i<gender.length;i++){
    if(gender[i].checked){
      return gender[i].id;
    }
  }
}
//___向服务器发送注册信息
function sendRegInfo(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      let result=xhr.responseText;
      console.log("here");
      if(result==1){
        alert("注册成功");
      }
    }
  }
  xhr.open("post","pro/v1/reg",true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  let data=`uname=${regUserId.value}&upwd=${regUserPwd.value}&email=${regEmail.value}&phone=${regPhone.value}&user_name=${realName.value}&gender=${sex()}`;
  xhr.send(data);
}
// -------------登录模块--------------------
var logUserIdFlag=false,logPwdFlag=false;
function logShowUserId(){
  if(logUserId.value==""){
    logUserIdInfo.setAttribute("data-placeholder","用户名");
    logUserIdInfo.setAttribute("class","text-normal");
  }else{
    return;
  }
}
function logCheckUserId(){
  if(logUserId.value==""){
    logUserIdInfo.setAttribute("data-placeholder","用户名不能为空");
    logUserIdInfo.setAttribute("class","text-danger");
    logUserIdFlag=false;
  }else{
    logUserIdInfo.setAttribute("data-placeholder","用户名");
    logUserIdInfo.setAttribute("class","text-success");
    logUserIdFlag=true;
  }
}
function logShowPwd(){
  if(logPwd.value==""){
    logPwdInfo.setAttribute("data-placeholder","密码");
    logPwdInfo.setAttribute("class","text-normal");
  }else{return;}
}
function logCheckPwd(){
  if(logPwd.value==""){
    logPwdInfo.setAttribute("data-placeholder","密码不能为空");
    logPwdInfo.setAttribute("class","text-danger");
    logPwdFlag=false;
  }else{
    logPwdInfo.setAttribute("data-placeholder","密码");
    logPwdInfo.setAttribute("class","text-success");
    logPwdFlag=true;
  }
}

function login(){
  if(logUserIdFlag&&logPwdFlag){
     sendLoginInfo();
  }else{
    alert("请完善信息");
  }
}
function sendLoginInfo(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
      let result= xhr.responseText;
      result=JSON.parse(result);
      if(result.msg==1){
        //返回上一层并刷新
        window.location.href=document.referrer;;
      }else{
        alert("用户名或密码错误");
      }
    }
  }
  xhr.open("post","pro/v1/login","true");
  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
  let data=`uname=${logUserId.value}&upwd=${logPwd.value}`;
  xhr.send(data);
}
// 查看密码
function showPwdDetail(){
  logPwd.setAttribute("type","text");
}
function hidePwdDetail(){
  logPwd.setAttribute("type","password");
}
// //————————cookie
// function setCookie(name,value) {
//       document.cookie = name + "=" + (value) ;
//     }
// function getCookie(name){
//       			var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
//       			if (arr != null) {
//       				return (arr[2]);
//       			}
//       			return null;
//       }
