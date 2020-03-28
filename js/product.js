(function(){
  var buy = document.querySelector("div.buy>div>div");
  // console.log(buy.children[0]);
  //通过dom节点为元素添加事件，可以减少很多命名，非常好用
  //获得按钮
  var btns = buy.querySelectorAll("a");
  //为加减按钮添加事件处理函数
  for(var btn of btns){
    btn.onclick = function(){
      if(this.innerHTML == "-" && buy.children[1].value > 1){
        buy.children[1].value = parseInt(buy.children[1].value)-1;//减法时会自动类型转换
      }else if(this.innerHTML == "+"){
        buy.children[1].value = parseInt(buy.children[1].value)+1;
      }else return;
      // 判断输入框中值是否为1则将-框变灰
      if(buy.children[1].value == "1" && this.innerHTML == "-"){
        this.parentNode.children[0].style.color="#aaa"; 
      }else{
        this.parentNode.children[0].style.color="#000";
      }
    }
  }
})();