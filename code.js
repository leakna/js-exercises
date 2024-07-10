//exercise1

var color=["Red" , "Blue", "Green"]
let [red,,blue]=color
console.log(red,blue)

//exercise2

const {name,age}={name: "Alice", age: 25, job: "Developer"}
console.log(name,age)

//exercise3

const {address:{street,city}}={
  id: 1,
  name: "Sok",
  address: {
    street: "123 Main St",
    city: "PP"
  }
};
console.log(street,city)

//exercise4

let Nums1 = [1, 2, 3]
let Nums2 = [4, 5, 6]
let merge=[...Nums1,...Nums2]
console.log(merge)

//exercise5

function sumAll(...params){
  let sum=0
  params.forEach(element=>{
    sum+=element
  })
  return sum
}
console.log(sumAll(1,2))
console.log(sumAll(1,2,3,4,5))

//exercise6

let points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}]
const [firstPoint,...otherPoints]=points
console.log(firstPoint,otherPoints)

//exercise7
function filterProps(object,...rest){
  let newObj={}
  for(let key in object){
    if(!rest.includes(key))
      newObj[key]=object[key]
  }
  return newObj 
}
let  object = {a:1, b:2, c:3, d:4}
console.log(filterProps(object, "b", "d"))

