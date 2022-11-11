document.querySelector('#navbar-logo').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/dashboard/dashboard.html'
});
document.querySelector('.account-button').addEventListener('click',function(){
    window.location.href='/bustling-wheel-1520/signup/signup.html'
})

let LSData=JSON.parse(localStorage.getItem('cartData'))
console.log(LSData)

let container=document.querySelector('#left-cont');
let container2=document.querySelector('#right-cont');

function displayData(data){
    container.innerHTML=null

    data.forEach((element) => {

        let div=document.createElement('div');

        let imgDiv=document.createElement('div');
        let img=document.createElement('img');
        img.setAttribute('src',element.img);
        imgDiv.append(img);
        
        let nameDiv=document.createElement('div');
        let name=document.createElement('p');
        name.innerText=element.name;
        let price=document.createElement('h3')
        price.innerText="Price: ₹ "+element.price
        
        
        let subButton=document.createElement('button'); 
        subButton.innerText="-"
        subButton.addEventListener('click', function(){
            qty.innerText=+(qty.innerText)-1;
            totalPrice-=(+element.price)
            document.querySelector('#cart-total').innerText=totalPrice
            if(qty.innerText==0){
                data.splice(index,1);
                localStorage.setItem('cart',JSON.stringify(data))
                displayData(LSData)
            }
        })
        let qty=document.createElement('span');
        qty.innerText=1;
        let addButton=document.createElement('button'); 
        addButton.innerText="+"
        addButton.addEventListener('click', function(){
          qty.innerText=+(qty.innerText)+1;
          totalPrice+=(+element.price)
          document.querySelector('#cart-total').innerText=totalPrice
        })
        let remove=document.createElement('button');
        remove.innerText="Remove";
        remove.addEventListener('click', function(){
            data.splice(index,1);
            localStorage.setItem('cart',JSON.stringify(data))
            displayData(LSData);
            window.location.reload()
        })
        nameDiv.append(name,price,subButton,qty,addButton,remove)
        
        div.append(imgDiv,nameDiv);
        container.append(div);
        
        
    });
}
let rightDiv=document.createElement('div');
container2.append(rightDiv)
let h2=document.createElement('h2');
h2.innerText='Price details';
let price=document.createElement('div')
let priceName=document.createElement('p')
priceName.innerText="Price"
price.append(priceName)
let pricefig=document.createElement('p');
pricefig.append(fig)
let discount=document.createElement('div')
let discountName=document.createElement('p')
discountName.innerText="Price"
price.append(priceName)
let discountfig=document.createElement('p');
price.append(fig)



rightDiv.append(h2,price);


displayData(LSData)