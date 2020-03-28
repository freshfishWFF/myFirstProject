function ajax({
  url,
  type = "get",
  data
}){
  return new Promise( function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        // alert(xhr.responseText)
        var result = JSON.parse(xhr.responseText);
        resolve(result);
      }
    }
    if(type == "get" && data != undefined){
      url += "?" + data;
    }
    xhr.open(type, url);
    if(type == "post"){
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    }
    if(type == "post"){
      // alert(data)
      xhr.send(data);
    }else{
      xhr.send();
    }
  })
}



