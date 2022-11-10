document.querySelector('#navbar-logo').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/dashboard/dashboard.html'
});

let count=0;
document.querySelector('.navbar-button').addEventListener('click', function(){
    count++
    let inner=document.querySelector('.navbar-button')
    if(count%2==1){
        inner.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" width="28" fill="white"><path d="M4.75 20c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.5-14.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14.5 14.5c-.15.15-.34.22-.53.22z"></path><path d="M19.25 20c-.19 0-.38-.07-.53-.22L4.22 5.28c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l14.5 14.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"></path></svg><div class="menu">MENU</div>`
    }
    if(count%2==0){
        inner.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" fill="white"><path d="M19.25 7.5H4.75c-.41 0-.75-.34-.75-.75S4.34 6 4.75 6h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75z"></path></svg><div class="menu">MENU</div>`
    }
});

document.querySelector('#navbar-logo').addEventListener('click', function(){
    window.location.href="/bustling-wheel-1520/index/index.html"
})
document.querySelector('#account-button').addEventListener('click', function(){
    console.log('fvgbhn')
})

document.querySelector('.account-button').addEventListener('click',function(){
    window.location.href='/bustling-wheel-1520/signup/signup.html'
})
document.querySelector('.footer-button').addEventListener('click',function(){
    window.location.href='/bustling-wheel-1520/signup/signup.html'
})

document.querySelector('#cont-products>div:nth-child(1)').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/productpage/productpage.html'
})



