import { data } from "../data/data";

// SPACE DATA EXERCISE 6
// Return an array with all asteroids names discovered after a given year
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidsDiscoveredAfterYear(data, year) {
  // Your code goes here...
  const asteroids = data.asteroids;
  const asteroidDiscovered = asteroids.filter(afterYear);
  const asteroidNames = asteroidDiscovered.map(getName);

  function afterYear(asteroid) {
    return asteroid.discoveryYear > year;
  }

  function getName(asteroid) {
    return asteroid.name;
  }

  // for (var i = 0; i < asteroids.length; i++) {
  //   if (asteroids[i].discoveryYear > year) {
  //     asteroidNames.push(asteroids[i].name);
  //   }
  // }

  return asteroidNames;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
