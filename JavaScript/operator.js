//operator
//arithematic operator
// comparision
// logical
// assignment

let scorshhinSun = true;
let rain = false;
let cloudyDay = true;

if(!scorshhinSun && rain){
    console.log("take umbrella");
}else{
    console.log("no need to take umbrella");
}

let  a = 5;
let b = 10;
let name = "5"
let name2 = 5;
if(a===b){
    console.log("a is greater than b")
}else{
    console.log("b is greater than a");
}
if(name===name2){
    console.log("diff");
}else{
    console.log("not diff");
}

let age = 25;
// if(age<18){
//     console.log("u canot vote");
// }else{
//     console.log("u can vote");
// }
const canVote = age < 18 ? "You cannot vote" : "you can vote";
console.log(canVote);