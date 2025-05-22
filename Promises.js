const simranpromise = new Promise((resolve, reject)=>{

    let parentsDecision = false

    if(parentsDecision){
        resolve("Accepted")
    }
    else {
        reject("Rejected")
    }
})

simranpromise.then((msg)=>{
    console.log("Simran message : ", msg)
    console.log("Let's book the wedding venue")
}).catch((msg)=>{
    console.log("Simran message : ", msg)
    console.log("Tinder kaha ho yaar")
}).finally(()=> {
    console.log("Finally, clarity mili")
})

console.log('Hlw')