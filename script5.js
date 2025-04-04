

const fetchUser=()=> new Promise(resolve=>
    setTimeout(()=>resolve({id:1, name:"Alice"}),1000)
)

const fetchPosts =(user)=>new Promise(resolve=>
    setTimeout(()=>resolve(["POST 1","POST 2"]),1500)
)

const fetchComments =(post)=> new Promise(resolve=>
    setTimeout(()=>resolve(["Comment 1"]),2000));


async function asyncAwaitExample(params) {
    
    try
    {
        console.log("Starting async operation...");
        const user = await fetchUser();
        console.log("User:",user);

        const posts= await fetchPosts(user);
        console.log("Posts:",posts);

        const comments = await fetchComments(posts[0]);
        console.log("Comments:",comments);

        console.log("All operations completed..!")


    }

    catch(error)
    {
        console.error("Error in async operations:",error);
    }
    finally{
        console.log("async operations attempted")
    }
}

// asyncAwaitExample()


async function errorhandlingExample() {

    try{
        const result = await new Promise((_,reject)=>
        
            setTimeout(()=>reject("Failed on purpose"),1000)
        );

    }
 catch (error) {
    console.error("Caught error:", error);
  }
}

// errorhandlingExample()


Promise.all([fetchUser(),fetchPosts({id:1})])
.then(([user,posts])=>{
    console.log("user:",user);
    console.log("posts",posts)
}).catch(error=>
{
    console.error("Error",error)
}
)