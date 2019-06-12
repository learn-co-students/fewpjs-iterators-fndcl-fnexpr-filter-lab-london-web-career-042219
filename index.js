// Code your solution here

const divers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching( arrayIn, searchString ) {
    return arrayIn.filter( element => {
        return element.toUpperCase() === searchString.toUpperCase();
    });
}

function fuzzyMatch( arrayIn, searchString ) {
    return arrayIn.filter( element => {
        return element.toUpperCase().substr(0,searchString.length) === searchString.toUpperCase();
    });
}

function matchName( arrayObjIn, searchString ) {
    return arrayObjIn.filter( element => {
        return element.name.toUpperCase() === searchString.toUpperCase();
    });
}


console.log(findMatching(divers,'bobby'))
console.log(fuzzyMatch(divers,'s'))
console.log(matchName(drivers, 'bobby'))