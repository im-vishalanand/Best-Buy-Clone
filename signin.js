

document.querySelector('#navbar-top img').addEventListener('click', function(){
    window.location.href='dashboard.html';
})

document.querySelector('#navbar-top a').addEventListener('click', function(){
    window.location.href='dashboard.html';
})

document.querySelector('h5>span').addEventListener('click', function(){
    window.location.href='signup.html';
})

let LSData=JSON.parse(localStorage.getItem('signupData'))||[];

let formData=document.querySelector('#form');
let count=0;
formData.addEventListener('submit', function(event){
    event.preventDefault();
    let objData={
        email:formData.email.value,
        password:formData.password.value,
    }

    for(let i=0;i<LSData.length;i++){
        if(objData.email==LSData[i].email && objData.password==LSData[i].password){
            alert("Sign in successfull !");
                window.location.href='dashboard.html';
        }
        else{
            count++;
        }
    }
    if(count==LSData.length){
        alert("Wrong Credentials. Please try again!");x
        window.location.href='signin.html';
    }
})
