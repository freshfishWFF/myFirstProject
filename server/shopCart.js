// 当页面加载时，去服务器查询根据用户的id对应的购物车的内容
function showOn(){
  var tbody = $("#cart>table>tbody");
  //根据session获得id并查购物车
  var d = "总榜";
  ajax({
    url:"index//getUserShopCart"
  }).then(result=>{
    var toal = ""
    for(var elem of result){
      var {count, book_id, title, discount,i_img}=elem;
      var tr = `<tr>
      <td> <input type="checkbox" id="${book_id}"></td>
      <td>
        <a href="" title="${title}">
          <img src="images/index/newbook/${i_img}" alt="">
        </a>                        
      </td>
      <td>
        <a href="product.html?book_id=${book_id}">
          ${title}
        </a>
      </td>
      <td>
        ￥ ${parseFloat(discount).toFixed(2)}
      </td>
      <td>
        <button>-</button>
        <input type="text" value="${count}">
        <button>+</button>
      </td>
      <td>
        ￥ ${(parseFloat(discount)*count).toFixed(2)}
      </td>
      <td>
          <a href="javascript:;" data-id="${book_id}">删除</a>
          <a href="javascript:;" data-id="${book_id}">加入收藏</a>
      </td>
      </tr>`;
      toal += tr;
    }
    tbody.html(toal);
    // 给tbody添加事件委托
    tbody.on("click", "a",function(){
      var $this = $(this);
      if($this.html()!= "删除")
      var $title = $this.html();
      if($this.html()=="删除"){
        if(confirm(`您确定要删除“${$title}”吗？`)){
          // $this.parent().parent().css("display","none").parent().listView("refresh")
          ajax({
            data:`pid=${$this.attr("data-id")}`,
            url:"index/delShopCart"
          }).then(result=>{
            if(result.ok==1){
              history.go(0)
            }
          })
        }else{
          alert("取消")
        }
      }
    })
  })
}
showOn();