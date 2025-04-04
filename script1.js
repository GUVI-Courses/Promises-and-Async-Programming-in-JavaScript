// console.log('Hello')

// Synchronous Execution

function syncTask()
{
    console.log('Start synchronous task');
    for(let i=0; i<1e9;i++){} //long blocking operation
    console.log('End synchronous task')
}

// syncTask()

//Asyncchronous Execution
function asyncTask()
{
    console.log("Start async task")
    setTimeout(()=>{
        console.log("Async operation completed after 2 seconds")
    },2000);
    console.log("End of async task setup")
    setTimeout(()=>{
        console.log("Async operation completed after 1 seconds")
    },1000);
    console.log("GUVI")
    setTimeout(()=>{
        console.log("Async operation completed after 0.5 seconds")
    },500);
    console.log("HCL")
}

asyncTask()