
class sideBar{
  constructor(id){
    this.main = document.querySelector(id);
    this.li = this.main.querySelectorAll("li");
    this.init();
    console.log(this.li);
    // console.log(this.li);
  }
  init(){
    for(var i=0;i<this.li.length;i++){
      this.li[i].index=i;
      if(i%2==0){
        this.li[i].onmouseover=this.show.bind(this,i);
      }
    }
  }
  show(index){
    this.clear();
    this.li[index+1].classList.remove("none");
    this.li[index].classList.add("none");
    
  }
  clear(){
    for(var i=0;i<this.li.length;i++){
      if(i%2!=0){
        console.log(i);
        this.li[i].classList.add("none");
      }else{
        this.li[i].classList.remove("none");
      }
    }
  }
}
var sidebar1 = document.getElementById("sidebar1");
sidebar1.onmouseover = function(){
  var sidebar = new sideBar("#sidebar1");
}

var sidebar2 = new sideBar("#sidebar2");