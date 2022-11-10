document.querySelector('#navbar-logo').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/dashboard/dashboard.html'
});
document.querySelector('.account-button').addEventListener('click',function(){
    window.location.href='/bustling-wheel-1520/signup/signup.html'
})
document.querySelector('.footer-button').addEventListener('click',function(){
    window.location.href='/bustling-wheel-1520/signup/signup.html'
})

const url="https://636a23c5b10125b78fd19a2e.mockapi.io/laptops"

async function getData(){
    let res= await fetch(url);
    let data= await res.json();
    console.log(data)
    displayData(data);
}
getData();
let container=document.querySelector('.right-cont')

let LSData=JSON.parse(localStorage.getItem('cartData'))||[];

function displayData(data){
    container.innerHTML=null

    data.forEach((element) => {

        let div=document.createElement('div');
        let imgDiv=document.createElement('div');
        
        let img=document.createElement('img');
        img.setAttribute('src',element.img);
        imgDiv.append(img)
        
        let nameDiv=document.createElement('div');
        let name=document.createElement('p');
        name.innerText=element.name;
        nameDiv.append(name)
        let price=document.createElement('h4')
        price.innerText="Price: ₹ "+element.price
        // let cost=document.createElement('p');
        // cost.innerText="Rs: "+element.price;
        // let rating=document.createElement('p');
        // rating.innerText="Rating: "+element.rating.rate;

        let button=document.createElement('button');
        button.innerText="Add to Cart";
        button.style.cursor='pointer';

        button.addEventListener('click', function(){
            LSData.push(element);
            localStorage.setItem('cartData', JSON.stringify(LSData));
        })

        div.append(imgDiv,nameDiv,price,button);
        container.append(div);
        
    });
}

