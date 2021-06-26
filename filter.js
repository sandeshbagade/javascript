//how to filter array of numbers, strings and objects
const arrayOfNumbers = [1,2,3,4,5];
const arrayOfStrings = ['Apple', 'Banana', 'Avocado', 'Grapes'];
const arrayOfObjects=[
    {
        id:1,
        name:'IIT Bombay',
        rankNeeded:1000
    },
    {
        id:2,
        name:'IIT Delhi',
        rankNeeded:1500
    },
    {
        id:3,
        name:'IIT Kanpur',
        rankNeeded:1700
    },
    {
        id:4,
        name:'IIT Madras',
        rankNeeded:1800
    },
    {
        id:5,
        name:'IIT Kharagpur',
        rankNeeded:2500
    }
]
const filteredArray = () =>{
    return arrayOfObjects.filter(filteredArrayOfObjects)
}
console.log(filteredArray())






function filteredArrayOfNumbers(v){
    return v>3
} 
function filteredArrayOfStrings(v){
    return v==='Apple'|| v=='Banana'
}
function filteredArrayOfObjects(v){ 
    return v.rankNeeded>2000
}