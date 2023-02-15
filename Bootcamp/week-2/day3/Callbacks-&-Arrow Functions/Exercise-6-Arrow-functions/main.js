const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (num) => console.log(`it's ${determineWeather(num)}`);
commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"
