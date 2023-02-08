
// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log(`I like ${food}`)
//     }
//   }
//   console.log(person.name) //you know what this will do

// person.speak("cheese toast") //and this? Try it out!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 1  ~~~~~~~~~~~~~~~

// const isEven = (num)=> {
//     return (num % 2 == 0)
// }
// console.log(isEven(5));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 2  ~~~~~~~~~~~~~~~
/*

const arr = [44,21,1,56,87,43,34,0,2,100,101]

const printEven = function (arry){
const newArr =[]    
    for (item of arry){
        if(isEven(item)){
            newArr.push(item)
        }
        
    }
    return newArr
}


const isEven = (num)=> {
    if(num % 2 == 0){
        return true
    }
}

console.log(printEven(arr));

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 3  ~~~~~~~~~~~~~~~
/*
const arr = [44,21,1,56,87,43,34,0,2,100,101]

const isExists = function (arr ,num = 1){
    for (let ar of arr){
        if (ar === num){
            return true
        }

    }
    return false
    
    
}

console.log(isExists(arr,7));

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 4  ~~~~~~~~~~~~~~~


// const calculator = {
//     add : function (num1,num2){ return num1 + num2},
//     subtract : function (num1,num2){ return num1 - num2}
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42


//~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 5  ~~~~~~~~~~~~~~~
/* 
const increaseByNameLength = (money, name) => {return name.length * money}
const makeRegal = (name) => { return `His Royal Highness, ${name}`}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
*/

