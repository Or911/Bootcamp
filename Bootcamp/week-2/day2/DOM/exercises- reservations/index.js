const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function okButton() {
  const inName = document.getElementById("inputName").value;
  let lowerCaseName = inName.toLowerCase();
  let massege = ifReservations(lowerCaseName, reservations);
  document.getElementById("massege").innerHTML = massege;
}
function addTolist(name) {
  let newPerson = document.createElement("li");
  newPerson.innerHTML = name;
  document.getElementById("reservations").appendChild(newPerson);
}

const reservationsToLower = function (reservations) {
  for (let key in reservations) {
    let data = reservations[key]; //save the data in variable
    let newKey = key.toLowerCase(); //declare a new key in lower case
    delete reservations[key]; //delate the old key
    reservations[newKey] = data; // and posh new type in object
  }
};

reservationsToLower(reservations); //call the function to translate the keys to lower case

const ifReservations = function (name, arr) {
  if (arr[name] == undefined) {
    reservations[name] = { claimed: true };
    addTolist(name);
    return `"there is nothing under ${name} name"`;
  } else if (arr[name].claimed) {
    return "welcome ";
  } else {
    return "your order wes climed";
  }
};

for (let person in reservations) {
  let newPerson = document.createElement("li");
  newPerson.innerHTML = person;
  document.getElementById("reservations").appendChild(newPerson);
}
