function foo(){
  let sum = 0
  for (let i = 1000; i < 2000; i++){
      if (i % 203 === 0){
          sum += getSecondDigit(i)
      } else if (i % 497 === 0) {
          sum += getLastDigit(i)
      } else if (i % 293 === 0) {
          sum += getLastDigit(i*13)
      } 
  }
  return sum
}

function getSecondDigit(number){
  return parseInt(number.toString().split("")[0])
}

function getLastDigit(number){
  let numberLength = number.toString().length
  return parseInt(number.toString().split("")[numberLength - 1])
}

foo()

//1 Is there a time when getSecondDigit is being 
//called with the number 1623 as a parameter? No 

//How many times getLastDigit is being called when i % 293 === 0?  3

//3 Is there a time when getLastDigit is being
// called with a number parameter that has 1 as it’s last digit? 
//what is the value of that number parameter? Yes, 1491.


