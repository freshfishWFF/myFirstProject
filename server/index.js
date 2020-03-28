
function sideBarDis(id, title){
  var $elem = $(id);
  // var title = title;
  //当首页加载时，执行这部分代码，把商品列表发回首页
  ajax({
    data:`intro=${title}`,
    url:"index/reIndex"
  }).then(result=>{
    console.log(result)
    var str="",i=1;
    for(var elem of result){
      var {book_id, title, price, discount, i_img} = elem;
      var li = `<li class="list1 intro">
      <span class="float-left">
        ${i}
      </span>
      <p class="main-title">
        <a href="">${title}</a>
      </p>
      </li>
      <li class="list1 item none">
      <span class="float-left">${i}</span>
      <div class="display-flex justify-content-center">
        <div>
          <img src="images/index/newbook/${i_img}" alt="">
        </div>
        <div>
          <div class="content-title">
            <a href="product.html?book_id=${book_id}" title="${title}">${title}</a>
          </div>
          <p class="currentPrice">
            ￥${discount.toFixed(2)}
          </p>
          <p class="originPrice">
            ￥${price.toFixed(2)}
          </p>
        </div>
      </div>
      </li>`
      str += li;
      i++;
    }
    $elem.html(str);
    $( id+">li:lt(6)>span").addClass("hot")
    $(id+">li:gt(17)").toggleClass("none")
  })
};
// document.addEventListener("ready",()=>{
  
// });
sideBarDis("#sidebar1","总榜")


