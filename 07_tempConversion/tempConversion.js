const convertToCelsius = function (temp) {

  let unroundedCelcius = ((temp - 32) * 5) / 9
  let roundedTemp = Math.round(unroundedCelcius * 10) / 10;
  return roundedTemp;

};

const convertToFahrenheit = function (temp) {
  let unroundedFarenheit = (temp * 1.8) + 32;
  let roundedTemp = Math.round(unroundedFarenheit * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
