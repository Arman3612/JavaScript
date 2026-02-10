//2.SetInterval
// console.log("Arman");
// setInterval(()=>{
//     console.log("Ok")
// },2000);
// console.log("Khan");
//To stop at any specification
console.log("Arman")
var c=0;
const ko=setInterval(()=>{
    c++;
    
    console.log("ok");
    if(c==3){
        clearInterval(ko);
    }
},2000)
console.log("khan")