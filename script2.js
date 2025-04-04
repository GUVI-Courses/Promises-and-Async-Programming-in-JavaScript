// Callbacks 
// function  getUserData(userId, callback)
// {
//     console.log("Fetchng User Data")
//     setTimeout(()=>{
//         callback(null,{id:userId,name:"Jhon"})
//         console.log("Fetched User Data Completed")
//     },1000)
//     console.log("loading.....")
    
// }

// getUserData(123,(err,data)=>{
//     if(err) console.log(err);
//     else console.log("User data",data)
//     console.log("function call")
// })

// Callback Hell Example
function callbackHell()
{
    setTimeout(()=>{
        console.log("First Operation");
        setTimeout(()=>
        {
            console.log("Second Operation");
            setTimeout(()=>
            {
                console.log("Third Operation");
                setTimeout(()=>
                {
                    console.log("Reached callback hell")
                },500)
            },1000)
        },1500)
    },2000)
}

callbackHell()