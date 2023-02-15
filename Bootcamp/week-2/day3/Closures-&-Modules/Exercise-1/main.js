const StringFormatter = function () {

  const capitalizeFirst = function (txt) {
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    return newTxt;
  };

  const toSkewerCase = function (txt) {
    return txt.replace(/ /g, "-");
  };

  return {
    capitalizeFirst,
    toSkewerCase,
  };

};


const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy"));
console.log(formatter.toSkewerCase("blue box")); 
