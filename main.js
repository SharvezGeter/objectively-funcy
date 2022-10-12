// Your code here.


/*
getFirstName
paramters: person object

person = {
  firstName: string
  lastName: string
}
return firstName property

//Getter function - gets a value from an object
//doesn't modify the object
//getPropertyName()
*/
//getFirstName~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getFirstName(person){
    return person.firstName;
    //let firstName = person.firstName  - same as above
    //return firstName;
}
// console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'}));
// console.log(getFirstName({firstName: 'Petra', lastName: 'Solano'}));

//getLastName~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getLastName(person){
  return person.lastName;
  //let lastName = person.lastName  - same as above
  //return lastName;
}
// console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'}));
// console.log(getLastName({firstName: 'Petra', lastName: 'Solano'}));

//getFullName~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getFullName(person){
  return person.firstName + " " + person.lastName;
}
// console.log(getFullName({firstName: 'Colin', lastName: 'Jaffe'}));
// console.log(getFullName({firstName: 'Petra', lastName: 'Solano'}));

 /*
setFirstName
parameter: person object, newFirstName string

*/
//setFirstName~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function setFirstName(person, newFirstName){
  person.firstName = newFirstName;
  return newFirstName
}
// console.log(setFirstName({
//   firstName: 'Colin',
//   lastName: 'Jaffe'}, 'Redacted') === 
//   {newFirstName: 'Redacted', 
//   lastName: 'Jaffe'
// })

//setAge~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function setAge(person, age){
  person.age = age;
  return age;
}
// console.log(setAge({
// firstName: 'Colin', 
// lastName: 'Jaffe', 
// age: 39}, 45) ===
//  {firstName: 'Colin', 
//  lastName: 'Jaffe', 
//  age: 45
// })

//giveBirthday~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function giveBirthday(person){
  if(person.age === undefined){
      person.age = 1;
  }else if([person.age !== undefined]){
    person.age += 1;
  }
}
// console.log(giveBirthday({
//   firstName: 'Colin', 
//   lastName: 'Jaffe', 
//   age: 39}) ===
//    {firstName: 'Colin', 
//    lastName: 'Jaffe', 
//   })

   
//marry~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function marry(person1, person2){
  person1.married = true
  person2.married = true 
  person1.spouseName = person2.firstName + " " + person2.lastName;
  person2.spouseName =person1.firstName + " " + person1.lastName;
}
// console.log(person1);
// console.log(person2);

// console.log(marry[person1]({
// firstName: 'Colin', 
// lastName: 'Jaffe', 
// married: true, 
// }))
// console.log(marry[person2]({
// firstName: 'Petra', 
// lastName: 'Solano', 
// married: true,
// }))

//divorce~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function divorce(person1, person2){
  person1.married = false;
  person2.married = false;

  delete person1.spouseName
  delete person2.spouseName
}

// console.log(person1, person2);













// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
