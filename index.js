// Code your solution here

function findMatching(arrayDrivers, string) {
  return arrayDrivers.filter(
    driver => driver.toUpperCase() === string.toUpperCase()
  );
}

function fuzzyMatch(arrayDrivers, string) {
  return arrayDrivers.filter(
    driver => string.charAt(0).toUpperCase() === driver.charAt(0).toUpperCase()
  );
}

function matchName(arrayDrivers, string) {
  return arrayDrivers.filter(driver => driver.name === string);
}
