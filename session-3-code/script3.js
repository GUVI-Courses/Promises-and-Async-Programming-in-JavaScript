console.log('promises: Pending, Resolved, Rejected')

const basicPromise = new Promise((resolve,reject)=>{
    const success = false;
    setTimeout(()=>{
        if(success)
        {
            resolve("Promise resolved successfully..")
        }
        else{
            reject("Promise is rejected:(")
        }
    },1500)
})

basicPromise.then(result=>
{
    console.log("Success:",result);
}
).catch(error=>{
    console.error("Error:",error)
}).finally(()=>
{
    console.log("Promise is setteld (success or failure)")
})

