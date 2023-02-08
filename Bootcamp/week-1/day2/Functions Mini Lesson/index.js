people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
  capitalizedStr += str.slice(1); //add the rest of str normallyreturn capitalizedStr
  return capitalizedStr;
};

const getAge = function (age) {
  if (age < 21) {
    return "Underage";
  } else if (age > 55) {
    return "55+";
  } else return age;
};
const getProfession = function (profession) {
  let prof = profession.split(" ");
  let newProf = "";
  for (let item of prof) {
    newProf += " " + capitalize(item);
  }
  return newProf;
};
const onLocation = function (country, city) {
  return `${capitalize(country)},${capitalize(city)}`;
};
const phrase = function (text) {
  return `${text}`;
};

let pepole = people_info[1];

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += `and ${getProfession(person.profession)} `;
  summary += ` ${onLocation(person.country, person.city)}`;
  summary += ` ${capitalize(person.name)} oves to say ${phrase(
    person.catchphrase
  )}`;
  return summary;
};

console.log(getSummary(pepole));

// const getSummary = function(person){
//     let summary = ""
//     let key = (Object.keys(person))

//     console.log();
//     summary = ``

//   }
// let pepole = (people_info[0]);
//   getSummary(pepole)
