//检查session如果存在，则取出并替换“请登录”

  function isLogin(){
    var tag = $("#nav_top_center>ul>li:first-child>a:nth-child(2)");
    ajax({
      url:"pro/islogin"
    }).then(result=>{
      console.log(result)
      var msg = result.ok;
      if( msg == 0 ) {
        tag.css("display","none")
        .prev().css("display","inline");
        tag.next().css("display","none");
      }
      else if( msg == 1 ){
        console.log(tag)
        tag.html(result.uname);
        tag.prev().css("display","none");
        tag.css("display","inline");
        tag.attr("href","/user?uid="+result.uid);
        tag.next().css("display","inline").attr("href",`javascript:logout();`)
        // tag.addClass("show");
      }
    })
  }
  isLogin();
  var myShopCart = document.getElementById("my_shop_cart");
    myShopCart.onclick = function(){
      window.open("shopCart.html");
    }
  
  
  // 获得输入框的内容
  var $input = $("#searchbox");
  var $button = $("#button");
  var $showBar = $("#showBar");
  var timer;
  $input.keyup(function(e){
    if(e.keyCode==13 && $input.val().trim()){
      $button.click();
    }else if(e.keyCode!==13 && $input.val().trim()){
      clearTimeout(timer);
      timer = setTimeout(function(){
        ajax({
          url:"/index/searchKey",
          data:`keywords=${$input.val().trim()}`
        }).then(result=>{
          var a ="";
          for(var item of result){
            a +=`<a href="javscript:;">${item.title}</a>`
          }
          $showBar.html(a)
          .css("display","block");
          var a = $showBar.find("a");
          a.click(function(){
            $input.val($(this).html().trim());
            $button.click();
            $showBar.css("display","none")
          })
        })
      },700);
    }else if($input.val().trim()==""){
      $showBar.empty();
      $showBar.css("display","none");
    }else{
      return;
    }
  })
  $button.click(function(){
    var $input = $("#searchbox");
    var $con = $input.val().trim();
    if(!$input.val().trim()) return;
    $input.val("");
    window.open(`/productGroup.html?keywords=${$con}`,"_self");
  }) 
  function logout(){
    ajax({
      url:"pro/logout"
    }).then((result)=>{
        if(result.ok==1)
        isLogin();
    })
  }

function reg(){
  window.open("reg.html?action=login","_self")
}

