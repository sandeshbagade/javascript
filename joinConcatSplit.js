//join(), concat(), split()
const str = "This looks good. Let me try. Then we will plan further."
const arr = [34,56,43,22,51]
const arr1 = [12,38,68,65,21]
console.log(str.split(".").join(","))  //This looks good, Let me try, Then we will plan further,
console.log(arr.concat(str))   // [34,56,43,22,51,str]
console.log(str.concat(arr))   // This looks good. Let me try. Then we will plan further.34,56,43,22,51 
                               //(final result will be string and array element will append to string with comma in between them)
console.log(arr.concat(arr1)) // [34,56,43,22,51,12,38,68,65,21]
console.log(arr.concat(arr1,arr1,arr1)) // same as above and arr1 will be appended 3 times 