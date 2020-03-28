
class Tab {
  constructor(id) {
    this.main=document.querySelector(id);
    this.a=this.main.querySelectorAll(".nav-card-a");
    this.section=this.main.querySelectorAll(".content-list");
    this.init();
  }
  init(){
    for(var i=0;i<this.a.length;i++){
      this.a[i].index=i;
      this.a[i].onmouseover=this.show.bind(this,i);
    }
  }
// 显示当前a标签对应的页面
  // var  section  =  this.section
  show(index){
    // var parent =  this
    console.log(index);
    this.clear();
    this.section[index].classList.add("content-list-active");
    this.a[index].classList.add("active");
  }
//清除样式
  clear(){

    for(var i=0;i<this.a.length;i++){
      this.a[i].classList.remove("active");
      this.section[i].classList.remove("content-list-active");
    }
  }
}
// var tab = new Tab("#tabs");
// var sidebar = new Tab("#sidebar-head1");
var tabs = document.querySelectorAll("[xy-name='tab']");
(function(){
  for(var i=0;i<tabs.length;i++){
    tabs[i] = new Tab(`#${tabs[i].id}`);
  }
})();
