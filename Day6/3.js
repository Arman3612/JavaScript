var inps=document.querySelectorAll('input[type="text"]');
var h4=document.querySelector("h4");
var form=document.querySelector("form");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(var i=0;i<inps.length;i++){
        if(inps[i].value.trim() ===''){
            alert("Error");
            // h4.style.color="red";
            break;
        }
        else{
            h4.textContent="Done";
        }
    }
})
