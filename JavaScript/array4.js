let cartItems = [
    {name: "Ramesh", 
        product: [
            {
                tile: "Laptop",
                price: 1000
            },
            {
                tile: "mouse",
                price: 50,
            },
            {
                tile: "keyboard",
                price: 200,
            }
        ]
    },
    {name: "Rahul", 
        product: [
            {
                tile: "jeans",
                price: 100
            },
            {
                tile: "shoe",
                price: 50,
            },
            {
                tile: "tshirt",
                price: 200,
            }
        ]
    },
    {name: "Rajesh", 
        product: [
            {
                tile: "PC",
                price: 10
            },
            {
                tile: "earphone",
                price: 50,
            },
            {
                tile: "mobile",
                price: 200,
            }
        ]
    }
    

]
cartItems.map((prod)=>{
    let total = prod.product.reduce((acc, curr) => acc + curr.price, 0)
    console.log(`${prod.name} total expenditure is: ${total}`)

});

let courses = [
    {
        class: "Python",
        completedStattus: false
    },
    {
        class: "Mern",
        completedStattus: true
    },
    {
        class: "UI/Ux",
        completedStattus: false
    },
    {
        class: "Data Science",
        completedStattus: false
    },
    {
        class: "Devops",
        completedStattus: true
    }
]

let completed = [];
let inCompleted = [];

courses.forEach((course)=>{
    if(course.completedStattus){
        completed.push(course.class);
    }else{
        inCompleted.push(course.class);
    }
})
console.log("completed course",completed);
console.log("incompleted course",inCompleted)

// let completedCourses = courses.filter(course => course.completedStattus);
// console.log(completedCourses);

// let completedOrScholarshipCourses = coursed.filter(course => course.completeStatus || course.scholorshi);
// console.log(completedOrScholarshipCourses);

// let notCompletedCoursesAndScholorship = coursed.filter(course => !course.completeStatus && !course.scholorshi);
// console.log(notCompletedCoursesAndScholorship);