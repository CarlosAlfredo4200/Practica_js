let mul=0
let sum=0
function math(n1,n2,n3){
     mul=n2 * n3
    sum = n1 + mul
    return sum
}
console.log(math(53,61,67))

//----------------segunda version sin definir variables---------

function math (a, b, c) {
    return (b * c) + a
  }

  console.log(math(53, 61, 67))