var btn=document.querySelector("button")
btn.addEventListener("click",function(){
    btn.textContent=("staring")
    btn.style.backgroundColor="green"
})
var bn=document.querySelector("#lo")
bn.addEventListener("dblclick",function(){
    bn.textContent=("staring")
    bn.style.backgroundColor="blue"
    bn.style.color="white"
})
var tn=document.querySelector("#op")
tn.addEventListener("mouseover",function(){
    tn.textContent=("staring")
    tn.style.backgroundColor="blue"
    tn.style.color="white"
})
var tn=document.querySelector("#op")
tn.addEventListener("mouseleave",function(){
    tn.textContent=("no")
    tn.style.backgroundColor="orange"
    tn.style.color="white"
})

