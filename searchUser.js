
var form=document.getElementById("form1")

form.addEventListener('submit',function(e){

    e.preventDefault()


    var search=document.getElementById("search").value

    fetch('https://api.github.com/users/'+ search)
    .then((result)=>result.json())
    .then((data)=>{
         console.log(data)
         if(data.message=="Not Found")
         alert('User doesnot exist')
       else{
         
           var result = `<img class="img-thumbnail ml-4" width="100" height="100" src="${data.avatar_url}"/>
           <br>
           <br><h1 style="color:white">User: ${data.login}</h1><br>
           <br>
           <h1 style="color:white">Public Repositries:${data.public_repos}</h1>
            <br>
            <br><h1 style="color:white">Followers: ${data.followers}</h1><br>
            <br><h1 style="color:white">Followings: ${data.following}</h1><br>    
           
            `
           $("#result").html(result)
             
       }
    } )


})





   



