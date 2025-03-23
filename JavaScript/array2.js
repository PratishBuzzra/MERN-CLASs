let student3 =[{
    name: "Ramesh",
    place: "Pokhara",
    age: 18
},
{
    name: "ram",
    place: "Pokhara",
    age: 18
},
{
    name: "John",
    place: "Pokhara",
    age: 18
}]

let number = [1,2,3,4,5,6,7,8,9,10];
let evenNumber =[];
let oddNumber = [];
console.log(student3[0].name);

// seperate using for each 

// number.forEach((element)=>{
//     if(element%2==0){
//         evenNumber.push(element)
//     }else{
//         oddNumber.push(element)
//     }
// })
// console.log(evenNumber)
// console.log(oddNumber)

//map methods

number.map((num)=>{
    if(num%2==0){
                evenNumber.push(num)
            }else{
                oddNumber.push(num)
            }
        })

        console.log(evenNumber)
        console.log(oddNumber)

