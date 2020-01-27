// Code your solution here
addEventListener("DOMContentLoaded", () => {
  console.log("shitcunt");
});

//Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, string) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, startingLetters) {
  //This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
  return drivers.filter(driver => ace(driver, startingLetters));
}

function ace(driver, startingLetters) {
  let start = startingLetters.split("");
  let fuzzy;
  for (let i = 0; i < start.length; i++) {
    if (start[i] == driver[i]) {
      fuzzy = true;
    } else {
      fuzzy = false;
    }
  }
  return fuzzy;
}

function matchName(drivers, string) {
  //This function takes an array of drivers and a string as arguments
  //each element of the drivers array is a JavaScript object that has a property of name
  //function should return each element whose name property matches the provided string
  return drivers.filter(driver => {
    return driver.name === string;
  });
}
