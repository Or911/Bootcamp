//~~~~~~~~~ exercise tesla ~~~~~~~~~~~~~~

// let didBoughtTesla = false
// const yearOfTeslaPurchase = 2014
// let isUSCitizen = true
// let currentYear = 2018

// if ( didBoughtTesla && isUSCitizen ) {
//     if ( currentYear - yearOfTeslaPurchase >=4) {

//         let askUpgrade = prompt("you would like an upgrade")
//         if (askUpgrade == "yes"){
//             console.log("ok lest talk");
//         }
//         else{
//             console.log("did you satisfied with the car");
//         }

//     }
// }else if (didBoughtTesla && !isUSCitizen){
//     console.log(" you would like to move to the US");
// }
// else{
//     if (!didBoughtTesla){
//         console.log("did you interested in buying one");
//     }
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~Arrays  Exercise 1~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2)
numbers[3] = 1
numbers.splice(3,1,1) //another way to that bat is code obios
console.log(numbers);
numbers.splice(-4)//remove form the end 
numbers.unshift(0)
console.log(numbers);
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~objects  Exercise 1~~~~~~~~~~~~~~~~~~~~~~~~~~

// const p1 = {
//     name : "or",
//     age : 26,
//     city : "beer sheva"
// }

// const p2 = {
//     name : "ron",
//     age : 28,
//     city : "beer sheva"
// }

// console.log(p1["name"]);

//     if (p1.age === p2.age){
//         console.log("they are same age");
//     }

//     if (p1.city === p2.city){
//         console.log(`${p1["name"]} was want to left the city with ${p2["name"]}`);
//     }
//     else{
//         console.log(`${p1["name"]} was want to left the city with ${p2["name"]} bat he can not`);
//     }

//~~~~~~~~~~~~~~~~~~~~~~~~~~objects  Exercise 2~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
const library ={
    books :[
        {bereshit : "1"} ,
        {shmot :"2"},
        {vaikra : "3"},]
}
console.log(library.books[0].bereshit);
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercises  1  Loops~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for (let index in names){
//     people.push({name :names[index] , age :ages[index]})
// }
// console.log(people);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercises  2  Loops~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// for (let person of people){
//     console.log(`${person.name} is ${person.age} years old`);
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercises  3  Loops~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const posts = [
//   { id: 1, text: "Love this product" },
//   { id: 2, text: "This is the worst. DON'T BUY!" },
//   { id: 3, text: "So glad I found this. Bought four already!" },
// ];

// for (let index in posts) {
//   if (posts[index].id === 2) {
//     posts.splice(index, 1);
//   }
// }
// console.log(posts);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercises  4  Loops~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const posts = [
//   {
//     id: 1,
//     text: "Love this product",
//     comments: [],
//   },
//   {
//     id: 2,
//     text: "This is the worst. DON'T BUY!",
//     comments: [
//       { id: 1, text: "Idiot has no idea" },
//       { id: 2, text: "Fool!" },
//       { id: 3, text: "I agree!" },
//     ],
//   },
//   {
//     id: 3,
//     text: "So glad I found this. Bought four already!",
//     comments: [],
//   },
// ];

// for (let post of posts) {
//   if (post.id == 2) {
//     for (let index in post.comments) {
//       if (post.comments[index].id == 3) {
//         post.comments.splice([index], 1);
//       }
//     }
//   }
// }
// console.log(posts[1].comments);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercises  5  Loops~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

let keys = Object.keys(dictionary)

for(let key of keys) {
    console.log(`Words that begin with  ${key}:`);

    for (index in dictionary[key]){
        console.log(dictionary[key][index]);
    }
}
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
