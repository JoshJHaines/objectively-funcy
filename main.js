// Your code here.

function getFirstName(obj) {
	return obj.firstName;
}

function getLastName(obj) {
	return obj.lastName;
}

function getFullName(obj) {
	return `${obj.firstName} ${obj.lastName}`;
}

function setFirstName(obj, name) {
  obj.firstName = name
}

function setAge(pers, age){
  pers.age = age
}

function giveBirthday(pers){
  if (pers.age === undefined){
    pers.age = 1
  } else {
    pers.age = pers.age + 1
  }
}

function marry(pers1, pers2){
  pers1.married = true
  pers2.married = true
  pers1.spouseName = getFullName(pers2)
  pers2.spouseName = getFullName(pers1)
}

function divorce(pers1, pers2){
  pers1.married = false
  pers2.married = false
  delete pers1.spouseName
  delete pers2.spouseName
}



// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
	getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
	getLastName = undefined;
}

if (typeof getFullName === "undefined") {
	getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
	setFirstName = undefined;
}

if (typeof setAge === "undefined") {
	setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
	giveBirthday = undefined;
}

if (typeof marry === "undefined") {
	marry = undefined;
}

if (typeof divorce === "undefined") {
	divorce = undefined;
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
};
