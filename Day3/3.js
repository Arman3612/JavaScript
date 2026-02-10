//wap to count and print length of array?
var arr =[12,34,45,"yu",9];
var count=0;
var sum=0;
for(var i=0;i<arr.length;i++){
    count++;
    sum+=arr[i];
    console.log(arr[i]);
}
console.log(count);
console.log(sum);
var sm=0;
arr.forEach(function(val)
{
    console.log("Hi");
    console.log(val);
    count++;
    sm+=val;
})
console.log(count);
console.log(sm);
var arr=[2,"gh",65,'h'];
arr.forEach(function(val){
    console.log(val);
})
var obj={
    name:"Arman",
    age:25,
    section:'a'
};
Object.values(obj).forEach(function(val){
    console.log(val);
})
Object.entries(obj).forEach(function([key, val]) {
    console.log(key + ":", val);
})
