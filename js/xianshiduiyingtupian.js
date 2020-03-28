// var aList = document.querySelector(".img-list-container").querySelectorAll("a");

var imgBox = document.querySelector(".img-list-container");

// var arr = ["28469677-1_u_20.jpg","28469677-2_u_6.jpg","28469677-3_u_6.jpg","28469677-4_u_6.jpg","28469677-5_u_6.jpg","28469677-6_u_6.jpg","28469677-7_u_6.jpg"];

// for(let i = 0; i < aList.length; i++){
//   aList[i].onmouseover = function(){
//     for(var j =0; j<aList.length;j++){
//       aList[j].className="";
//       midImgContainer.innerHTML="";
//       bigBox.innerHTML="";
//     }
//     aList[i].className = "active";
//     var imgPath = `<img src="images\\big\\${arr[i]}">`;
//     midImgContainer.innerHTML=imgPath;
//     bigBox.innerHTML=imgPath;
//   }
// }
//用事件托管的方式
imgBox.onmouseover = function (ev) {
  var bigBox = document.querySelector("#big-img>img");
  var midImgContainer = document.querySelector("#midImgContainer>img");
  var ass = imgBox.querySelectorAll("a");
  //获取触发事件的元素
  var target = ev.target;
  //如果触发事件的是img则执行函数
  if (target.nodeName == "IMG"){
    //清除样式
    for(var a of ass){
      a.className = "";
    }
    //获得当前img对应的大图
    // alert("1111")
    target.parentNode.className = "active";
    // var bigImg = target.getAttribute("data-big") ;
    var bigImg = target.dataset.big;
    midImgContainer.src = bigImg;
    bigBox.src = bigImg;
  } 
}

  
