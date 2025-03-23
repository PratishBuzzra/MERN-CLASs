let student = [
    {
    name: "john",
    age: 20,
    grade: 90
},
{
    name: "Jane",
    age: 21,
    grade: 85
},
{
    name: "Bob",
    age: 19,
    grade: 95
},
{
    name: "Alice",
    age: 20,
    grade: 90
},
]

const studentsName = student.map((student)=>student.age);
console.log(studentsName);

//average age

let cartItems = [

    {
        name: "apple", price:100, quantity:2
    },
    {
        name: "banana", price:100, quantity:3
    },
    {
        name: "orange", price:100, quantity:1
    },
    {
        name: "grapes", price:100, quantity:2
    },
    {
        name: "grapes", price:100, quantity:2
    },
    {
        name: "grapes", price:100, quantity:2
    },
    {
        name: "grapes", price:100, quantity:2
    }
]
const total = cartItems.reduce((acc,cur)=> acc + cur.price * cur.quantity, 0);
console.log(total)


// math.ceil
let num = 3.7;
console.log(Math.ceil(num));

//math.floor
console.log(Math.floor(num))

//random
let num1 = Math.floor(Math.random());
console.log(num1);




let countries = [
    {
        name: "Nepal",
        code: "NP"
    },
    {
        name: "India",
        code: "IN"
    },
    {
        name: "Australis",
        code: "AU"
    },
    {
        name: "America",
        code: "US"
    },
    {
        name: "Japan",
        code: "JP"
    }
];


function findCountryCode(countryName){
    
    for(let i = 0;i<countries.length; i++){
        const element = countries[i]
        ;
        if(element.name.toLocaleLowerCase() === countryName.toLocaleLowerCase().trim()){
            return element.code;
        }
    }
        return "not found"
       
    
    }
    
// console.log(findCountryCode(`the conty code of ${countryName} is`, country));

function printCountryCode(countryName){
    const countryCode = findCountryCode(countryName);
        console.log(`the country code of ${countryName} is ${countryCode}`);

}
printCountryCode('china')

function sum(a,b){
    return a+b;
}
console.log(sum(2,2) + 2)


let coursed = [
    {name:"javascript", completeStatus: true, scholorshi: true},
    {name:"python", completeStatus: false, scholorshi: false},
    {name:"java", completeStatus: true, scholorshi: false},
    {name:"c++", completeStatus: true, scholorshi: true},
    {name:"MERN", completeStatus: false, scholorshi: true},

];
//using filter
let completedAndScholarshipCourses = coursed.filter(course => course.completeStatus && course.scholorshi);
console.log(completedAndScholarshipCourses);

let completedOrScholarshipCourses = coursed.filter(course => course.completeStatus || course.scholorshi);
console.log(completedOrScholarshipCourses);

let notCompletedCoursesAndScholorship = coursed.filter(course => !course.completeStatus && !course.scholorshi);
console.log(notCompletedCoursesAndScholorship);

//using if else
let filteredCourses = coursed.map(course => {
    if (course.completeStatus && course.scholorshi) {
        return course;  
    } else {
        return null;  
    }
})

console.log(filteredCourses);


