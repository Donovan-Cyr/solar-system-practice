import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
  // Your code goes here...
  const asteroid = data.asteroids;
  const compareName = asteroid.filter(nameCheck);

  function nameCheck(asteroid) {
    let nameCheck = asteroid.name;
    return nameCheck.includes(asteroidName);
  }

  return compareName[0];

  // for (var i = 0; i < asteroid.length; i++) {
  //   if (asteroid[i].name.includes(asteroidName) === true) {
  //     return asteroid[i];
  //   }
  // }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
