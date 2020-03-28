(function(){
  var main = document.querySelector("#banner");
  var listBox = main.querySelector(".pro-list").querySelector("ul");
  var list = listBox.querySelectorAll("li");
  var length = listBox.querySelector("li>div").clientWidth;
  var prev = main.querySelector(".prev");
  var next = main.querySelector(".next");
  var listSize = list.length;
  var first_li = list[0].cloneNode(true);
  var last_li = list[listSize-1].cloneNode(true);
  //定义一个索引值
  var index = 1;
  // 定义一个定时器
  var Timer;
  listBox.insertBefore(last_li, listBox.firstChild);
  console.log(length);
  listBox.style["margin-left"]= `-${length}px`;
  listBox.appendChild(first_li);

  next.onclick = function(){
    index++;
    console.log(111);
    openTransition();
    indexShow();
    if(index>listSize){
      index=1;
      setTimeout(function(){
        stopTransition();
        indexShow();
      },2000);
    }
  }
  prev.onclick = function(){
    index--;
    openTransition();
    indexShow();
    if(index<1){
      index=listSize;
      setTimeout(function(){
        stopTransition();
        indexShow();
      },2000);
    }
  }

  function openTransition(){
    listBox.style.transition = "all 2s";
  }
  function stopTransition(){
    listBox.style.transition = "none";
  }
  function indexShow(){
    listBox.style["margin-left"]= `-${index*length}px`;
  }
  // main.onmouseover = function(){
  //   clearInterval(Timer);
  // }
  // main.onmouseleave = function(){
  //   Timer = setInterval(function(){

  //   });
  // }



})();