// Write function which takes array of objects (think of human) in a given format of:
// { name: ‘somename’, age: 35 }
// and returns array of names of those people who are older than 65.
// E.g getPensionersName( [ {name: ‘Vasya’, age: 13}, {name: ‘Vasiliy’, age: 66} ] // -> [ ‘Vasiliy’ ]

function getPensionersName(people) {
  return people.reduce(function(oldPeople, human) {
    if(human.age > 65) {
      oldPeople.push(human.name);
    }

    return oldPeople;
  }, []);
}
