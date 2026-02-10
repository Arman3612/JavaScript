var add=document.querySelector("#ok")
var remove=document.querySelector("#ko")
var inp =document.querySelector('input[type="text"]')
var ol=document.querySelector('ol');
var li;
add.addEventListener("click",function(){
    if(inp.value.trim()===''){}
    else{
        li=document.createElement("li");
        li.textContent=inp.value;
        ol.appendChild(li);
        inp.value="";
    }
})
remove.addEventListener("click",function(){
    ol.removeChild(li)
})
