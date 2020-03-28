(function(){
  var data = window.location.search.slice(1);
  //获取页面中的元素
  var $midImg = $("#midImgContainer>img");
  var $bigImg = $("#big-img>img");
  var $smList = $("#img-list .img-list-container");
  var $title = $(".intro-content h1")
  var $detail = $(".intro-content h2")
  var $authors = $(".intro-content .author")
  var $author = $authors.children().eq(0)
  var $press = $authors.children().eq(1)
  var $ptime = $authors.children().eq(2)
  var $currentPrice = $(".intro-content .price>h3>span:last-child");
  var $originPrice = $(".intro-content .price>p>span");
  var $buy = $(".intro-content .buy>div")
  var $input = $buy.find("input");
  // console.log($input,1111111)
  var $cartBUtton  = $buy.children().eq(1)
  var $buyButton = $buy.children().eq(2)
  console.log($title, $detail, $author);
  //向服务器请求到对应id的详细信息，并返回
  ajax({
    data,
    url:"/index/productDetail"
  }).then(result=>{
    // console.log(result);
    //使用解构赋值
    var {book_id, shelf_time, title, brief_intro, author, press, price, discount, sm, md} = result[0];
    // console.log(book_id, shelf_time, title, brief_intro, author, press, price, discount, sm, md)
    var mid = md.split('/'), sm = sm.split("/");
    // console.log(mid[0])
    $midImg.attr("src","images/big/"+mid[0]);
    $bigImg.attr("src","images/big/"+mid[0]);
    var cont = "";
    for(var i = 0; i < sm.length; i++){
      cont += `<a href="javascript:; class="">
              <img src="images/small/${sm[i]}" alt="" data-big="images/big/${mid[i]}">
              </a>`
    }
    // console.log(cont);
    $smList.html(cont);
    $smList.children().eq(0).addClass("active");
    // $smList.html(cont).children().first-child.addClass("active");
    $title.html(title);
    $detail.html(brief_intro);
    $author.html(author);
    $press.html(press);
    $currentPrice.html(discount.toFixed(2));
    $originPrice.html(price.toFixed(2));
    $cartBUtton.attr("data-pid",book_id);
    $buyButton.attr("data-pid", book_id);
    console.log((new Date(shelf_time)).toLocaleString());
    //给购物车和购买按钮添加事件
    $cartBUtton.click(function(){
      // alert($input.val());
      //获得商品的id
      var id = $(this).attr("data-pid")
      //获得商品的数量
      var num = $input.val();
      var data = `product_id=${id}&count=${num}`
      // console.log(data);
      ajax({data,type:"post",url:"/index/shopCart"}).then(result=>{
        // alert(result)
        if(result.ok == 0){
          alert(result.msg)
        }else if(result.ok == 1 ){
          alert("成功添加至购物车")
        }
      });
    })
  })
})();


