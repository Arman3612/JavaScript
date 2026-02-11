//Genaarator
function* abc(){
    console.log("Started");
    yield 1;
    console.log("1st");
    yield 2;
    console.log("2nd");
    yield 3;
}
const ans=abc();
ans.next();
console.log(ans.next().value);
console.log(ans.next());
console.log(ans.next());
