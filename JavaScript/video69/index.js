console.log("This is a solution of fatorial number")

let a=8

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c= arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}

function facFor(number){
    let fac = 1
    for (let i = 1; i <= number; i++) {
        fac = fac*i
        
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))
