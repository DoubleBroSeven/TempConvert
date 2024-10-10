// Create a new project called "temperature-converter"
//Done
// Prompt the user to input a Fahrenheit temperature and let them know that we'll convert it to Celsius
//Done
// Create a function called convertToCelsius that takes in the user input (Fahrenheit temperature) and returns the Celsius temperature
// You can use the following calculation to convert a temperature from Fahrenheit to Celsius... celsiusTemp = (fahrenheitTemp - 32) * (5/9)
// Create a function called describeTemperature which will take in a Fahrenheit temperature and return a description based on the following...
//  Temperature     ->     Description
//       < 32              ->      "very cold"
//       < 64              ->          "cold"
//       < 86              ->         "warm"
//      < 100             ->           "hot"
//     >= 100            ->        "very hot"

// 5. Send an alert to the user including the Fahrenheit temperature they entered, what that temperature is when it is converted to Celsius, and how that feels.

// 6. Pusht the project to Github and submit

const userinput=prompt(`Input A Temperature in Farenheit! Let Us Convert It To Celsius for you`)

const convertToCelsius= (userinput) => {
  let celsiusTemp = (userinput - 32) * (5 / 9)
  return celsiusTemp
}

const celsiusTemp = convertToCelsius(userinput)


let describeTemperature = (userinput) => {
  if (userinput <=32) {
    return ' Very Cold ';
  } else if (userinput < 64) {
    return ` Cold `;
  } else if (userinput < 86) {
    return ` Warm `;
  } else if (userinput < 100) {
    return ` Hot `;
  } else if (userinput >= 100) {
    return ` Very Hot `;
  }
}

let TempType= describeTemperature(userinput)

console.log(TempType)

alert(`Farenheit=` + userinput +` \n`+ `Celsius Conversion=` + celsiusTemp + `\n`+ 'Whats That Feel Like?' + TempType)