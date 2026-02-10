var start=document.querySelector("#ok")
var stop=document.querySelector("#ko")
var h3=document.querySelector("h3")
var int;
start.addEventListener("click",function(){
    var count=0;
    int = setInterval(function(){
        h3.textContent = count;
        count++;
    },1000);
});
stop.addEventListener("click",function(){
    clearInterval(int);
})