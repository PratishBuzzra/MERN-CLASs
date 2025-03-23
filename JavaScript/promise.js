



// function multiply(x,y){
//     return x*y;
// }
// console.log(multiply(5,5));

// const add = ((x,y)=> x+y)
// console.log(add(5,5));

// const car = (brand)=>{
//     console.log("Brand is..");
    
//     setTimeout(() => {
//        console.log(brand);
       
        
//     }, 5000);
    
// }
// car("toyota");

//promise

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Internal server error");
        // resolve({
        //     data:{
        //         name: "John",
        //         email: "123.@gmail.com"
        //     }
        // });

    },2000)
});

promise.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.error(error);
})

// promises
 const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("I am a promise");
        resolve("success");
        // reject("error");
    })
 }
let promises = getPromise();
promises.then((res)=>{
    console.log("promise fulfilled",res);
})
promises.catch((err)=>{
    console.log("rejected",err)
})

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let success = true;
        if(success){
            resolve("data from promise");
        }else{
            reject("error occur");
        }
    }, 2000);
})

myPromise.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

//async await
// const fetchData = async ()=>{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = response.json();
//     console.log("this is reponse",data);

// }
// fetchData();

// const fetchData = async ()=>{
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         let data = response.json();
//         console.log("this is reponse",data);

//     }catch(error){
//         throw new Error("internal server error");

//     }

// }
// fetchData();

// newsapi.org 



