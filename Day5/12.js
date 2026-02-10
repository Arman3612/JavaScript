var btn=document.querySelector("button");
btn.textContent="starting..";
var h1=document.querySelector("h1")
h1.textContent+=" After"
var h2=document.querySelector("h2")
h2.innerHTML=("<i>World</i>")
var h3=document.querySelector("h3")
h3.style.color="green"
h3.style.fontSize="40px"
h3.style.fontFamily="Century Gothic"
var p=document.querySelector("p");
p.classList.add("makeitred")
p.classList.remove("makeitred")
var h6=document.createElement("h6");
h6.textContent="Hey"
h6.classList.add("makeitred")
document.querySelector("body").appendChild(h6)
var img=document.createElement("img")
img.src="../photo1.jpg"
document.querySelector("body").appendChild(img)
document.querySelector("body").removeChild(img)