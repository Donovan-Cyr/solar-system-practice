import { data } from "../data/data";

// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidNames(data) {
  // Your code goes here...
  const asteroids = data.asteroids;
  const asteroidNames = asteroids.map(getNames);

  function getNames(asteroid) {
    return asteroid.name;
  }

  // for (var i = 0; i < asteroid.length; i++) {
  //   asteroidNames.push(asteroid[i].name);
  // }

  return asteroidNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
