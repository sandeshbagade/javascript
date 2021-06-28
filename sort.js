//how to sort an array
const values = [1, 125, 23, 91, 3];
const colours = ['Bed', 'Green', 'Black', 'Dec'];
const elements =[   
                    {colour:'Red', value:20}, 
                    {colour:'Green', value:10},
                    {colour:'Black', value:100}
                ];
function sortObject (a,b){
    return a.value - b.value
}
function sortNumber (a,b){
    return a-b
}
function sortString (a,b){
    return a-b
}

function sorting(){
    return elements.sort(sortNumber)
}

console.log(sorting())