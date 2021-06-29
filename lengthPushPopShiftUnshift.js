// You can do any array manipulation if you know these array methods
//length push() pop() shift() unshift() splice() slice()
const array = [1, 2, 3, 4, 5];
console.log(array.length) //5
array.push(123)
console.log(array) //[1, 2, 3, 4, 5, 123] adds element at end
array.unshift(234)
console.log(array) //[234,1, 2, 3, 4, 5, 123] adds element at start
array.pop()
console.log(array) //[234,1, 2, 3, 4, 5] removes last element
array.shift()
console.log(array) //[1, 2, 3, 4, 5] removes first element

const arr = array.slice(1,4)
console.log(arr,array) //[1 5] [1, 2, 3, 4, 5] 
                       //works as same as splice but does not make any change in original array

const arr = array.splice(1,4)
console.log(array) //[1 5] 
                   //removes elements of original array from starting index till end index 
                   //(notice it does not removes element at last index)
