// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(
    driver => driver.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch(drivers, string){
  return drivers.filter(
    driver => driver.toLowerCase().slice(0, string.length) === string.toLowerCase()
  );
}

function matchName(drivers, string) {
  return drivers.filter(
    driver => driver.name === string
  );
}