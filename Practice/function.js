// function myFunction()
// {
//     console.log("Welcome!");
//     console.log("We are learning js");
// }
// myFunction();
// myFunction();
// function myFunction(msg)
// {
//     console.log(msg);
// }
// myFunction("I love js");
// function add(a,b)
// {
//     console.log(a+b);
// }
// add(4,5)
// function sum(a,b)
// {
//     let s=a+b;
//     return s;
// }
// let val =add(5,5)
// console.log(val);
// let arrowMul=(x1,y1)=>
// {
//     console.log(x1*y1)
// }
// arrowMul(5,10)
// let arrowSum=(a1,b1)=>
// {
//     return a1+b1;
// }
// console.log(arrowSum(5,10))
// let printHello=()=>console.log("Hello!");
// printHello();
// let countVowels = (str) => {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countVowels("Aeiou"));
// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val)
// })
// let arr1=[1,2,3,4,5]
// arr.forEach((val)=>console.log(val));
// let arr2=["pune","delhi","mumbai"]
// arr2.forEach((val1,idx,arr2)=>
// {
//     console.log(val1.toUpperCase(),idx,arr2);
// })
// let n = 5;   // change number here
// let fact = 1;
// let arr = Array.from({ length: n }, (_, i) => i + 1);
// arr.forEach(function(num) {
//     fact *= num;
// });
// console.log("Factorial =", fact);
// let nums=[67,52,39];
// let newArr=nums.map((val)=>
// {
//     return val;
// })
// console.log(newArr)
// let nums2=[67,52,39];
// let arr=[1,2,3,4,5]
// let evenArr=arr.filter((val)=>
// {
//     return val%2==0
// })
// console.log(evenArr)
// console.log(arr)
let arr=[97,64,32,49,99,96,86]
let evenArr=arr.filter((val)=>
{
    return val>=90 
})
console.log(evenArr)
console.log(arr)
console.logcc 