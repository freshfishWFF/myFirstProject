function clock(){
  setInterval(currentTime,1000);
}


function currentTime(){
  var date = new Date();
  function check(num){
    return num<10?"0"+num:num;
  }
  var str = `${date.getFullYear()}年${check(date.getMonth()+1)}月${check(date.getDate())}日${check(date.getHours())}:${check(date.getMinutes())}:${check(date.getSeconds())}`;
  current.innerHTML = str;
}


clock();