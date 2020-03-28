/**
 * Created by web on 2019/12/11.
 */
window.onload=function(){
	// console.log(uname)
	var i=1,flag=0;
	let dot = document.getElementsByClassName("cast");
	var myShopCart = document.getElementById("my_shop_cart");
	myShopCart.onclick = function(){
		window.open("shopCart.html");
	}

	var button = document.getElementById("button");
	var cast = document.getElementById("main-cast");
	var width=750;
    button.onmousedown = function(){
        button.style.backgroundColor="#ffffff";
    }
    button.onmouseup = function(){
        button.style.backgroundColor="#25bfaf";
	}
	// dott(i);
	var timer = setInterval(function(){
		clock();
	},1000);

	var timer1 = setInterval(function(){lunbo()},5000);
	right.onclick=function(){toRight()};
	left.onclick=function(){toLeft()};


function clock(){
	var date = new Date();
    var month=date.getMonth()+1;
	if(month<10){
		month = "0"+month;
	}
    var day=date.getDate();
	if(day<10){
		day="0"+day;
	}
	var hour=date.getHours();
	if(hour<10){
		hour="0"+hour;
	}
    var minute=date.getMinutes();
	if(minute<10){
		minute="0"+minute;
	}
    var second = date.getSeconds();
	if(second<10){
		second="0"+second;
	}
    var str = `${date.getFullYear()}年${month}月${day}日 ${hour}:${minute}:${second}`;
	current.innerHTML=str;
}

for(let j=0;i<dot.length;j++){
	dot[j].onclick=function(){
		i=j;
		console.log(i)
		dott(i);
		lunbo();
	}
}
function stop(){
	clearInterval(timer1);
	console.log("1");
}
function lunbo(){
	flag=1;
	if(i==4) i=0;
	cast.style.left="-"+i*width+"px";
	// console.log(i);
	dott(i);
	i++;
	// i++;
}
function dott(i){
	for(let j=0;j<dot.length;j++){
		dot[j].classList.remove("checked");
	}
	dot[i].classList.add("checked");
}
function toRight(){
	//console.log("right");
	if(flag==0){
		i=1;
	}else if(i==4){
		i=0;
	}
	dott(i);
	lunbo();

}
//---------------------
function toLeft(){
	if(flag==0||i==1){
		i=3;
	}else{
		i=i-2;
	}
	dott(i);
	lunbo();
}
	
}
function log(){
	window.location.href="reg.html?action=login";
}
function getCookie(name){
			var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
			// (^| )表示第一个或中间某一个 因为前面有空格
			// name 紧接着就是名字
			//
			if (arr != null) {
				return (arr[2]);
			}
			return null;
}
function setCookie(name,value) {
			var Days = 365;
			var exp = new Date;
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			document.cookie = name + ("=" + (value) + ";expires=" + exp.toGMTString() + ";path=/;");}
function addClassActive(ev){
	var obj=document.getElementsByClassName("nav-card-a");
	for(let i=0;i<obj.length;i++){
		obj[i].classList.remove("active");
	}
	p1.setAttribute("display","none");
	p2.setAttribute("display","block");
	ev.classList.add("active");
	// ev.click();

}
