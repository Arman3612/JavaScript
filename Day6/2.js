var btn=document.querySelector("button");
var ok=document.querySelector("#ok")
var ko=document.querySelector("#ko")
btn.addEventListener("click",function(){
    var temp=ok.src;
    ok.src=ko.src;
    ko.src=temp;
})