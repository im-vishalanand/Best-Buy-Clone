document.querySelector('#navbar-logo').addEventListener('click', function(){
    window.location.href='/bustling-wheel-1520/dashboard/dashboard.html'
});
document.querySelector('.account-button').addEventListener('click',function(){
    window.location.href='/bustling-wheel-1520/signup/signup.html'
})

let LSData=JSON.parse(localStorage.getItem('cartData'))||[]
// console.log(LSData)

let container=document.querySelector('#left-cont');
let container2=document.querySelector('#right-cont');

let cartPrice=LSData.reduce((acc,ele)=>{
    return acc+(+ele.price);
  },0);


//   let LSPrice=localStorage.getItem('buy')||0
  let LSPrice=cartPrice

//   console.log(cartPrice)

function displayData(data){
    container.innerHTML=null

    data.forEach((element, index) => {

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
            cartPrice-=(+element.price)
            document.querySelector('#priceTotal').innerText=cartPrice;
            totalfig.innerText=cartPrice-585;
            localStorage.setItem('buy', cartPrice-495+90);

            if(qty.innerText=="0"){
                data.splice(index,1);
                localStorage.setItem('cartData',JSON.stringify(data))
                displayData(data);
            }
        })
        let qty=document.createElement('span');
        qty.innerText=1;
        let addButton=document.createElement('button'); 
        addButton.innerText="+"
        addButton.addEventListener('click', function(){
          qty.innerText=+(qty.innerText)+1;
          cartPrice+=(element.price)*(+qty.innerText-1)
          document.querySelector('#priceTotal').innerText=cartPrice;
          totalfig.innerText=cartPrice-585;
          localStorage.setItem('buy', cartPrice-495+90);
        })
        let remove=document.createElement('button');
        remove.innerText="Remove";
        remove.addEventListener('click', function(){
            data.splice(index,1);
            localStorage.setItem('cartData',JSON.stringify(data))
            displayData(data);
            window.location.reload()
        })
        nameDiv.append(name,price,subButton,qty,addButton,remove)
        
        div.append(imgDiv,nameDiv);
        container.append(div);
        
        
    });
    let rightDiv=document.createElement('div');
    container2.append(rightDiv)
    let h2=document.createElement('h2');
    h2.innerText='Price details';
    let price=document.createElement('div')
    let priceName=document.createElement('p')
    priceName.innerText="Price"
    let pricefig=document.createElement('p');
    pricefig.setAttribute('id','priceTotal')
    pricefig.innerText=cartPrice;
    price.append(priceName,pricefig)
    
    let discount=document.createElement('div')
    let discountName=document.createElement('p')
    discountName.innerText="Discount"
    let discountfig=document.createElement('p');
    discountfig.innerText="- 495"
    discount.append(discountName,discountfig)
    
    let delivery=document.createElement('div')
    let deliveryName=document.createElement('p')
    deliveryName.innerText="Delivery"
    let deliveryfig=document.createElement('p');
    deliveryfig.innerText="+ 90"
    delivery.append(deliveryName,deliveryfig)
    
    let total=document.createElement('div')
    let totalName=document.createElement('p')
    totalName.innerText="Total Amount"
    let totalfig=document.createElement('p');
    totalfig.innerText=cartPrice-405;
    total.append(totalName,totalfig)
    
    let placeOrder=document.createElement('button');
    
    placeOrder.innerText='Place Order'
    placeOrder.setAttribute('class', 'placeOrder')
    
    
    rightDiv.append(h2,price,discount,delivery, total,placeOrder);
    
    document.querySelector('.placeOrder').addEventListener('click', function(){
        window.location.href='/bustling-wheel-1520/payment/payment.html'
    })
}


displayData(LSData)

