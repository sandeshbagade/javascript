//ways to loop through an array
const array = [
    {id: 10, name: 'Paul', age: 30},
    {id: 20, name: 'Anna', age: 42},
    {id: 30, name: 'Bob', age: 21},
    {id: 40, name: 'Jenny', age: 22},
];

//for loop
for(let i = 0; i<array.length;i++){
    console.log(array[i].name)
}
//while
let i = 0;
while(i<array.length){
    console.log(array[i].name)
i++;
}
//do-while
let j = 0
do{
    console.log(array[j].name)
    j++
}while(j<array.length)
//for/of OR for/in
for(let val in array){
    console.log(array[val].name)
}
for(let val of array){
    console.log(val.name)
}
//forEach
array.forEach((val)=>console.log(val.name))
//map()
array.map((val)=>console.log(val.name))

