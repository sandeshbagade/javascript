//includes() find() findIndex() indexOf() lastIndexOf()
const array = [2, 5, 7, 10, 5, 25]

console.log(array.includes(5)) //checks if element exists in an array and return boolean value
console.log(array.find((v)=>v>6)) //Returns the value of the first element in the array where predicate is true, and undefined otherwise
console.log(array.findIndex((v)=>v>6))//Returns the index of the first element in the array where predicate is true, and -1 otherwise
console.log(array.indexOf(5)) //Returns the index of the first occurrence of a value in an array, or -1 if it is not present
console.log(array.lastIndexOf(5)) //Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.