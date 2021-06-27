//how to do addition, multiplication, create sentence using reduce 
const numbers = [5,10, 15, 20]
const strings = ['element 1', 'element 2', 'element3']

function result(){
    return strings.reduceRight((sum,val)=>{
        return sum+" " +val
    },"start")
}
console.log(result()+"end")