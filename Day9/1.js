//Promises
const parchi=new Promise(function(resolve,reject){
    fetch('https://api.allorigins.win/raw?url=https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(result=>{
        if(result.results[0].gender === "male")resolve();
        else reject();
    })
})
parchi 
.then(function(){
    console.log("hara button");
})
.catch(function(){
    console.log("Laal button");
})
