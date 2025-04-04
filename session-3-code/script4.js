// Promise Chaining

const fetchUser=()=> new Promise(resolve=>
    setTimeout(()=>resolve({id:1, name:"Alice"}),1000)
)

const fetchPosts =(user)=>new Promise(resolve=>
    setTimeout(()=>resolve(["POST 1","POST 2"]),1500)
)

const fetchComments =(post)=> new Promise(resolve=>
    setTimeout(()=>resolve(["Comment 1"]),2000));



fetchUser().then(user=>
{
    console.log("User is fetched: ",user);
    return fetchPosts(user)
}
).then(posts=>{
    console.log("Post fetched..",posts);
    return fetchComments(posts[0])
}).then(comments=>{
    console.log("Comments fetched:",comments)
}).catch(error=>{
    console.error("Error:",error)
}).finally(()=>
{
    console.log("Promise is setteld (success or failure)")
})

