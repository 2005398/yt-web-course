let arr=[1,13,5,6,8]
let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
//console.log(newArr)
// newArr=arr.map((e)=>{
//     return e**2
// })
// console.log(newArr)
// let newArr=arr.map((e, index, array)=>{
//     return e**2
// })

console.log(arr)
const greaterThanSeven = (e)=>{
    if(e>7){

        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]
console.log(arr2)
const red = (a, b)=>{
    return a*b //you can use any other operator
}
console.log(arr2.reduce(red))

console.log(Array.from("Rohan"))