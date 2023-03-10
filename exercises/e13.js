import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  const planets = data.planets;
  const planetAvgTemp = planets.map(getAvgTemp);

  /* for (var i = 0; i < planets.length; i++) {
    planetAvgTemp.push(planets[i].avgTemp);
  } */

  function getAvgTemp (planet) {
    return planet.avgTemp;
  }
  var tempSum = planetAvgTemp.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  var tempAvg = tempSum /= planetAvgTemp.length;
  return tempAvg;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
