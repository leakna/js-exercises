//exercise1
// function filterObj(obj){
//   let newArr=[]
//  obj.forEach(element => {
//     if(element.age>18){
//       newArr.push(element)
//     }
//  });
//  return newArr
// }
// console.log(filterObj(
//   [
//     {name:'leakna',age:'18'},
//     {name:'angel',age:'20'}
//   ]
// ))


//exercise2

// let duplicateArray=[1,1,2,3,4,5,4]
// let newArray=duplicateArray.filter((element,index,self)=>{
//   return self.indexOf(element)==index
  
// })
// console.log(newArray)


//exercise3
// console.log([
//   {name:'angel',age:'20'},
//   {name:'leakna',age:'18'}
// ].map((element)=>{
// return {name:element.name};
// }))

//exercise4

// console.log(["2024-01-01", "2024-02-02", "2024-04-04"].map((element)=>{
//   let date=element.split('-');
//   return date[2]+'-'+date[1]+'-'+date[0];
// }))

//exercise5
// console.log([1,2,30,4,2,1,11].reduce((accum,current)=>{
//   if(accum>current)
//     return accum
//   else 
//     return current
// }))


//exercise6

// console.log([ {name: "Bread", category: "Grocery"}, 
//   {name: "Butter", category: "Grocery"},
//   {name: "Shampoo", category: "Personal Care"}].reduce((accum,current)=>{
//       if(accum[current.category])
//         accum[current.category].push(current.name)
//       else
//       accum[current.category]=[current.name]
//     return accum

//   },{}))
