// function getData(url,callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(result=>{
//         callback(result)
//     })
// }
// getData("https://randomuser.me/api",function(result){
//     console.log(result.results[0].gender)
// })
function getData(t,callback){
    setTimeout(function(){
        console.log("Arman")
        callback()
    },t)
}
getData(2000,function(){
    console.log("ok")
})