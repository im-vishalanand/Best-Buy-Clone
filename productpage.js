document.querySelector('#navbar-logo').addEventListener('click', function(){
    window.location.href='dashboard.html'
});
document.querySelector('.account-button').addEventListener('click',function(){
    window.location.href='signup.html'
})
document.querySelector('.footer-button').addEventListener('click',function(){
    window.location.href='signup.html'
})

const url="https://636a23c5b10125b78fd19a2e.mockapi.io/laptops"

let out=[];

async function getData(){
    try {
        let res= await fetch(url);
        let data= await res.json();
        console.log(data)
        displayData(data);
        out=[...data];
        
    } catch (error) {
        alert(error)
    }
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

        let button=document.createElement('button');
        button.innerText="Add to Cart";
        button.style.cursor='pointer';

        button.addEventListener('click', function(){
            LSData.push(element);
            localStorage.setItem('cartData', JSON.stringify(LSData));
            alert("Product added to cart")
        })

        div.append(imgDiv,nameDiv,price,button);
        container.append(div);
        
    });
}

document.querySelector('#sort').addEventListener('change', function(){
    let selected=document.querySelector('#sort').value;

    if(selected==""){
        return out;
    }
    if(selected=="LTH"){
        out.sort((a,b)=>(+a.price)-(+b.price))
    }
    if(selected=="HTL"){
        out.sort((a,b)=>(+b.price)-(+a.price))
    }

    displayData(out)
  })


  





