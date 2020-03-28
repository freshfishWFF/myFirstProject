// 获取到元素
var content = document.querySelector(".content");
var imgContent = content.querySelector(".img-content");
var ct =content.offsetTop;
var cl = content.offsetLeft;
var bigBox = document.querySelector("#big-img");

midImg.onmouseover = function(){
  mark.style.display="block";
  bigBox.style.display="block";
}
midImg.onmouseout = function(){
  mark.style.display = "none";
  bigBox.style.display="none";
}

midImg.onmousemove = function(ev){
  var bigImg = bigBox.querySelector("img");
  var e = ev || window.event;
  var t =  e.clientY - midImg.offsetTop - ct - 76.8;
  var l = e.clientX - midImg.offsetLeft - cl - 76.8;
  if(t < 0){
    t = 0;
  }
  if(t > 166.4){
    t = 166.4;
  }
  if(l < 0){
    l = 0;
  }
  if(l > 166.4){
    l = 166.4;
  }
  mark.style.left = l + "px";
  mark.style.top = t + "px";
  /**
   * 放大后的图片向相反的方向移动
   */
  bigImg.style.left = `-${l*2.5}px`;
  bigImg.style.top = `-${t*2.5}px`;
}