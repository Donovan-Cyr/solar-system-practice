import { data } from "../data/data";
// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const sortedData = [];
  const asteroidData = data.asteroids;
  var mostDiscovered = 0;
  var currentCount = 0;
  var yearMost = 0;
  for (var i = 0; i < asteroidData.length; i++){
    currentCount = 0;
    for (var x = 0; x <asteroidData.length; x++){
      if (asteroidData[x].discoveryYear === asteroidData[i].discoveryYear) {
        currentCount++;
        if (currentCount > mostDiscovered) {
          mostDiscovered = currentCount;
          yearMost = asteroidData[i].discoveryYear;
        }
      }
    }
  } 
  return yearMost;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
