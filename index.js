// Code your solution here

function findMatching(arrayDrivers, string) {
  return arrayDrivers.filter(
    driver => driver.toUpperCase() === string.toUpperCase()
  );
}

function fuzzyMatch(arrayDrivers, string) {
  return arrayDrivers.filter(function(driver) {
    for (char of string.split(" ")) {
      driver.charAt(0).toUpperCase() === char.toUpperCase();
    }
  });
}
