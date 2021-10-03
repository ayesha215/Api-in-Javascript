
ShowProfile()

async function ShowProfile(){

    const token = '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';
      const response= await fetch('https://api.github.com/user', {
          headers: {
            Authorization: `token ${token}`
          }
      }).then(function(data){
          return data.json()
      }).then(function(data){
          console.log(data)
          userName=""
          userpassword=""
          if(data.message=="Bad credentials")
          alert('You are not an authorized User')
        else{
          
            var result = `<img class="img-thumbnail ml-4" width="100" height="100" src="${data.avatar_url}"/>
            <br>
            <br><h1 style="color:white">User ${data.login}</h1><br>
            <br>
            <h1 style="color:white">Public Repositries ${data.public_repos}</h1>
            <a target="_blank" href="${data.html_url}"><button class="btn btn-primary">See Profile</button></a>
             `
            $("#result").html(result)
              
        }
      })
  }




  



    
  