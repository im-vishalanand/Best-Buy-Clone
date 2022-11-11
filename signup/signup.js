

document.querySelector('#navbar-top img').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/dashboard/dashboard.html';
})

document.querySelector('#navbar-top a').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/dashboard/dashboard.html';
})

document.querySelector('h5>span').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/signin/signin.html';
})

let formData=document.querySelector('#form');
let LSData=JSON.parse(localStorage.getItem('signupData'))||[];

formData.addEventListener('submit', function(event){
    event.preventDefault();
    let objData={
        email:formData.email.value,
        password:formData.password.value,
    }
    
    if(formData.password.value==formData.confirm.value){
        LSData.push(objData);
        localStorage.setItem('signupData', JSON.stringify(LSData))
        alert("Sign Up successfull !");
        window.location.href='/bustling-wheel-1520/signin/signin.html';
    }
    else{
        alert("Password doesn't match. Please try again!")
    }
})



