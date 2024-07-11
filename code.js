///exercise1

const dataObj=[{id: 1, name: "sok"}, {id: 2, name: "sao"},{id: 3, name: "pisey"}]
function getUserInfo(data,id,callback){
  let foundData={}
  setTimeout(()=>{
    data.forEach(element => {
      if(element.id==id)
        foundData=element
    });
    if(foundData)
      callback(null,foundData)

    else
      callback('data not found',null)
  },2000)
}
function capitalizeName(obj,callback){
  setTimeout(()=>{
    obj.name=obj.name[0].toUpperCase()+obj.name.slice(1)
    callback(obj)
  },1500)
}

getUserInfo(dataObj,1,(error,data)=>{
  if(error){
    console.log(error)
    return 
  }
  capitalizeName(data,(data)=>{
    console.log(data)
  })
  getUserInfo(dataObj,2,(error,data)=>{
    if(error){
      console.log(error)
      return 
    }
    capitalizeName(data,(data)=>{
      console.log(data)
    })

  })

})

const fs=require('fs')
//exercise2

function readFile(filepath){
  return new Promise((resolve,reject)=>{
    fs.readFile("file/"+filepath,'utf-8',(err,data)=>{ 
      if(err)
        reject(err)
      else
        resolve(data)
    })
  })
}
function appendFile(filepath,content){
  return new Promise((resolve,reject)=>{
    fs.appendFile("file/"+filepath,content,(err)=>{
      if(err)
        reject(err)
      else{
        console.log("Appending successful")
        resolve()
      }
    })
  })
}

function writeFile(filepath,content){
  return new Promise((resolve,reject)=>{
    fs.writeFile("file/"+filepath,content,(err,data)=>{
      if(err)
        reject(err)
      else{
        console.log("Adding successful")
        resolve()
      }
    })
  })
}

readFile('input.txt').then(data=>{
  console.log(data)
  return appendFile('output1.txt',data+' First modification')
})
.then(()=>{
  return readFile('output1.txt')
})
.then((data)=>{
  console.log(data)
  return appendFile('output2.txt',data+' second modification')
})
.then(()=>{
  return readFile('output2.txt')
})
.then(data=>{
  console.log(data)
}).catch(err=>{
  console.log('Error:',err)
})



//exercise3

async function operateAscyn(){
  try{
    let dataFromFile=await readFile('input.txt') 
    console.log(dataFromFile)
    await appendFile('output1.txt',dataFromFile+' First modification')
    dataFromFile=await readFile('output1.txt')
    console.log(dataFromFile)
    await appendFile('output2.txt',dataFromFile+' second modification')
    dataFromFile=await readFile('output2.txt')
    console.log(dataFromFile)
    
  }
  catch(err){
    console.log(err)
  }
}
operateAscyn()