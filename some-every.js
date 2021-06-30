//Two underrated array methods that you must know .some() .every()
const array = [32, 65, 32, 89, 45]

function check(v){
    return v<35
}

console.log(array.some(check)) //at least one item of array should satisfy the condition
console.log(array.every(check))//every item of array should satisfy the condition