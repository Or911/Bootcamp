const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};
const inName = prompt("Please enter the name for your reservation");
let lowerCaseName = inName.toLowerCase()
console.log(lowerCaseName);

const reservationsToLower = function (reservations){
  for (let key in reservations){
    let data = reservations[key]//save the data in variable
    let newKey = key.toLowerCase()//declare a new key in lower case
    delete reservations[key];//delate the old key
    reservations[newKey]= data// and posh new type in object
  }
}

reservationsToLower(reservations)//call the function to translate the keys to lower case

const ifReservations = function (name, arr) {
  const keys = Object.keys(arr);
  for (let key of keys) {
    if (key == name) {
      if (arr[key].claimed) {
        return "welcome ";
      } else {
        return "your order wes climed";
      }
    } else {
      reservations[name] = { claimed: true };
      return `"there is nothing under ${name} name"`;
    }
  }
};

console.log(ifReservations(lowerCaseName, reservations));
console.log(reservations);
