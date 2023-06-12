function getTime(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sess = "AM";
    if(hrs > 12){
        sess = "PM";
        hrs = hrs - 12;
    } else{
        sess = "AM";
    }

    if(hrs < 10){
        hrs = "0"+hrs;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("session").innerHTML = sess;
}
setInterval(getTime, 10);


btn.addEventListner('click', setInterval(function(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var sess = "";

    if(hrs < 10){
        hrs = "0"+hrs;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("session").innerHTML = sess;
},10));