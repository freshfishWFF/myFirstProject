(function(){
// 初次得到的顺序
var total="";
//先得到url中的数据
var data = window.location.search.slice(1);
// 获得作者及出版社ul
var $header = $(".container>.header");
// 利用事件委托设置事件
$header.on("click", "a" , function(){
  if($(this).hasClass("more")){
    $(this).prev().toggleClass("cHover");
  }
})
// 分页按钮
var $page = $(".container>.page");
// 得到第一页商品加总页数
ajax({
  data,
  url:"/index/searchPro"
}).then((result)=>{
  console.log(result);
  var $pl = $(".container>.productList");
  var product = "";
  for(var item of result){
    product +=`<div class="productItem">
    <a href="" title="${item.title}">
      <img src="images/index/newbook/${item["i_img"]}" alt="">
    </a> 
    <a href="product.html?book_id=${item["book_id"]}" title="${item.title}">
      ${item.title}
    </a>
    <span>￥ ${item.discount.toFixed(2)}</span>
    <span>￥ ${item.price.toFixed(2)}</span>
    <div class="option">
      <a href="javascript:;" data-pid="${item["book_id"]}">加入购物车</a>
      <a href="javascript:;" data-pid="${item["book_id"]}">收藏</a>
    </div>
  </div>`
  }
  // console.log(product);
  total = product;
  $pl.html(product);
  var $cartBUtton = $(".productItem .option");
    $cartBUtton.on("click","a",function(){
      // alert("1")
      $(this).html()=="加入购物车"&& ajax({
        data:`product_id=${$(this).attr("data-pid")}&count=1`,
        type:"post",
        url:"/index/shopCart"
      }).then(result=>{
        if(result.ok == 0){
          alert(result.msg)
        }else if(result.ok == 1 ){
          alert("成功添加至购物车")
        }
      })
  })

})
// 排序按钮事件
var $orderBy = $(".orderBy");
$orderBy.on("click",function(e){
  var $this = $(e.target)
  if($this.html()=="综合排序"){

  }else if($this.html()=="出版时间 ↓"){

  }
})
})();
