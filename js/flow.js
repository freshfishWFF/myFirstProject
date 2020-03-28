(function(){
  var i = 0;
  var anotherItem = document.querySelector(".another-item");
  var uls = anotherItem.querySelector(".uls");
  var uls2 = anotherItem.querySelector(".uls2");
  var sizess = uls.querySelectorAll("li").length;
  var box =   anotherItem.querySelector(".box");
  var sizesspx = sizess*150;
  var clone = uls.innerHTML;
  uls2.innerHTML= clone;
  var Timer = setInterval(moveL, 50);

// 动画函数
  function moveL(){
    i++;
    if(i>sizesspx){//等到最后一个到了最上面的时候,就会把最下边的进行替换,只是看不出来而已
      box.style.top="0";
      i=0;
    }
    box.style.top=`-${i}px`;
  }
  box.onmouseover = function(){
    clearInterval(Timer);
  }
  box.onmouseleave = function(){
    Timer = setInterval(moveL, 50);
  }
})();