
const { rejects } = require('assert');
var fs = require('fs');
const { resolve } = require('path');
//exercise1
// function squareNumber(number){
//   return number*number
// }
// function map(array,callback){
//   let squareArr=[]
//   array.forEach(element => {
//     squareArr.push(callback(element));
//   });
//   return squareArr
// }
// console.log(map([1,2,3],squareNumber))

//exercise2
// function filterNumber(number){
//   return (number%2==0)
// }
// function filter(array,callback){
//   let filterArray=[]
//   array.forEach(element => {
//     (callback(element))?filterArray.push(element):null
//   });
//   return filterArray
// }

// console.log(filter([1,2,3,4,5],filterNumber))

//exercise3

// function readFile(filepath){
//   return new Promise((resolve,reject)=>{
//     fs.readFile(filepath,'utf-8',(data,err)=>{
//       if(err)
//         reject(err)
//       else
//         resolve(data)
//     })
//   })
// }
// async function read(filepath,callback){
//   try{
//     return await callback('file/'+filepath)
//   }
//   catch(error){
//     return error
//   }
// }
// read('file.txt',readFile).then(data=>{
//   console.log(data)
// }).catch(err=>{
//   console.log(err)
// })

//exercise4

// function writeFile(filepath,content){
//   return new Promise((resolve,reject)=>{
//     fs.writeFile(filepath,content,(err,data)=>{
//       if(err)
//         reject(err)
//       else
//         resolve('Writing is successful')
//     })
//   })
// }
// function write(filepath,content,callback){
//   callback('file/'+filepath,content).then((data)=>{console.log(data)})
//   .catch(err=>{
//     console.log(err)
//   })
// }
// write('write.txt','hello world',writeFile)

//exercise5
function readFile(filepath){
  return new Promise((resolve,reject)=>{
    fs.readFile(filepath,'utf-8',(err,data)=>{
      if(err)
        reject(err)
      else
        resolve(data)
    })
  })
}
function appendFile(filepath,content){
  return new Promise((resolve,reject)=>{
    fs.appendFile(filepath,"\n"+content,(err)=>{
      if(err)
        reject(err)
      else
        resolve('File is appending')
    })
  })
}
async function fileOperator(filepath,content,callback){
  filepath='file/'+filepath
  if(content){
      callback(filepath,content).then(message=>{
          console.log(message)
      }).catch(err=>{
        console.log(err)
      })

  }
   else{
      
    try{
      
      return await callback(filepath)
    }
    catch(err){
        throw err;
    }
   }
}

(async () => {
  try {
    let data = await fileOperator('input.txt', '', readFile);
    console.log("Data from input.txt:", data);

    await fileOperator('output1.txt', data, appendFile);
    data = await fileOperator('output1.txt', '', readFile);
    console.log("Data from output1.txt:", data);

    await fileOperator('output2.txt', data, appendFile);
    data = await fileOperator('output2.txt', '', readFile); // This line will throw an error
    console.log("Data from output2.txt:", data);

  } catch (err) {
    console.error('catch:', err);
  }
})();

