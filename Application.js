

const Form=document.getElementById('form')
const token = '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';

Form.addEventListener('submit',(e)=>{

    e.preventDefault();
let userName=document.getElementById('userName');
let userpassword=document.getElementById('password')


let gitUser=userName.value
let gitPassword=userpassword.value


console.log(gitUser)
console.log(gitPassword)


login()

 
})

async function login(){

  window.open('http://127.0.0.1:5500/profile.html')
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
            
      }
    })
}



