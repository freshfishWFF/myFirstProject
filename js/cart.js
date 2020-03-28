function init(){
//获取table 中的元素，包括 单价 数量 总价 和 复选框
var table = document.querySelector("table");
var checkAll = document.getElementById("cb");
var checkboxs = table.querySelectorAll("[type=checkbox]");
console.log(checkboxs)
var totalPrice = document.getElementById("totalPrice");
//获得每行的最后一个td
var lastTds = table.querySelectorAll("td:nth-child(6)");
//添加数量
var btns = table.querySelectorAll("button");
console.log(btns);
//为每个按钮添加事件
for ( var btn of btns ) {
  btn.onclick = function () {
    var num = this.parentNode.children[1];
    var price = this.parentNode.previousElementSibling.innerHTML.trim().slice(1);
    var singleTotalPrice = this.parentNode.nextElementSibling;
    //获得当前行的checkbox的状态是否为选中，如果选中，则需要将变化后的价格同步到总价中去
    var checkbox = checkboxs[this.parentNode.parentNode.rowIndex - 1 ] ;
    //加号按钮
    var p = 0;
    if( this.innerHTML === "+"  ){
      p = parseInt(num.value) + 1;
      num.value = p;
    }else if (this.innerHTML === "-") {
      if ( num.value == 1 ) return;
      else{
        p =  parseInt(num.value)-1;
        num.value = p;
      }
    }
    //每个商品的总价
    var total = parseFloat(price) * p;
    singleTotalPrice.innerHTML = "￥ " + total.toFixed(2);
    //如果为选中的商品，则总价要对应的增长
    if( checkbox.checked ){
      totals();
    }
  }
}
//为复选框添加事件
for ( var check of checkboxs ) {
  check.onclick = function () {
    totals();
    //如果在tbody中找不到未选中的checkbox，则才能全选
    //如果找到未选中的checkbox，就不能全选
    var unchecked = table.querySelector("[type=checkbox]:not(:checked)");
    //如果有未选中的就取消全选
    if ( unchecked == null ) {
      checkAll.checked = true;
    }else {
      checkAll.checked = false;
    }
  }
}
//为全选框添加事件
checkAll.onclick = function () {
  for ( var check of checkboxs ) {
    check.checked = checkAll.checked;
  }
  totals();
}
// 为总价添加事件
function totals(){
  // lastTd = Array.prototype.slice.call( lastTds );
  var sum = 0; 
  for ( var i = 0; i < checkboxs.length; i++ ){
    if ( checkboxs[i].checked ) {
      var p = lastTds[i].innerHTML.trim().slice(1);
      sum += parseFloat(p);
    } else {
      continue;
    }
  }
  //将结果放到总价中
  totalPrice.innerHTML = "￥ " + sum.toFixed(2);
}

};
// window.addEventListener("load",init);
setTimeout(init,300);