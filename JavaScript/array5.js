let users = [
  {
    name: "John",
    product: [
      { name: "Macbook", price: 1000 },
      { name: "iphone", price: 500 },
      { name: "watch", price: 200 },
    ],
  },
  {
    name: "Jane",
    product: [
      { name: "Macbook", price: 1000 },
      { name: "iphone", price: 200 },
      { name: "watch", price: 50 },
    ],
  },
  {
    name: "bob",
    product: [
      { name: "Macbook", price: 500 },
      { name: "iphone", price: 200 },
      { name: "watch", price: 50 },
      { name: "headphone", price: 50 },
    ],
  },
];
users.forEach((user) => {
  user.product.forEach((product) => {
    if (product.name === "Headphone".toLowerCase().trim()) {
      console.log(
        `${user.name} own ${product.name} which cost Rs. ${product.price}`
      );
    }
  });
});

let user1 = [
  "Ram",
  "shyam",
  "hari",
  "gopal",
  "krishna",
  "sanjay",
  "sita",
  "radha",
  "gita",
  "savitri",
];

// welcome back you are register user else you are not resigter user
function checkIfRegisterd(userName) {
  for (let i = 0; i < user1.length; i++) {
    if (userName.toLowerCase().trim() === user1[i].toLocaleLowerCase()) {
      return "welcome back you are registerd user";
    }
  }
  return " you are not resigterd user ";
}
console.log(checkIfRegisterd("shyam   "));

let user2 = [
//   {
//     name: "John",
//     age: 20,
//     class: 10,
//     password: "xxxxx",
//     email: "john@gmail.com",
//     phone: "123456789"
//   },
  "shyam",
  "hari",
  "gopal",
  "krishna",
  "sanjay",
  "sita",
  "radha",
  "gita",
  "savitri",
];

const registeredUser = (name)=>{
    const user = user2.find((u)=>{
        return u.toLocaleLowerCase()===name.toLocaleLowerCase().trim()

    })
    if(user){
        console.log(`You are registerd user`);
    }else{
        console.log("you are not registerd user");
    }
}
registeredUser("HARI  ");



//account number masking
const accountNumber  =  1234567890;
function maskAccountNumber(accountNumber){
    let accNo =  accountNumber.toString();
    const lastFour = accNo.slice(-4)
    const maskedPart = "x".repeat(accNo.length - 2)
    return maskedPart + lastFour;
}
console.log(maskAccountNumber(accountNumber));


//task assignment
let phoneNumber = 9818496054;

function maskPhoneNumber(phoneNumber){
    let pNo = phoneNumber.toString();
    return "x".repeat(pNo.length - 2) + pNo.slice(-2);
}
console.log(maskPhoneNumber(phoneNumber))

//xxxxxxxx89


