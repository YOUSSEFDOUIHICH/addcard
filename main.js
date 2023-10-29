let list=document.querySelector('.listcard');
let open=document.querySelector('.add');
let close=document.querySelector('.butncard');
let total=document.querySelector('.inpcard');
let quantity=document.querySelector('.quantity');
let prod=document.querySelector('.product');
let body=document.querySelector('body')
let listcard=document.querySelector('.listcard')

let products = [
    {
        id : 1,
        name : 'product1',
        image : '2.png',
        price : 200 
    },
    {
        id : 2,
        name : 'product1',
        image : '3.png',
        price : 200 

    },
    {
        id : 3,
        name : 'product1',
        image : '4.png',
        price : 200 

    },
    {
        id : 4,
        name : 'product1',
        image : '5.png',
        price : 200 

    },
    {
        id : 5,
        name : 'product1',
        image : '6.png',
        price : 200 

    },
    {
        id : 6,
        name : 'product1',
        image : '2.png',
        price : 200 

    },
    
];
function addproduct(){
    products.forEach((value ,key)=>{
        let newDiv=document.createElement('div');
        newDiv.classList.add('pro');
        newDiv.innerHTML=`
        <img src="img.png/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <button onclick="addCard(${key})" class="btnadd">add to card</button>
        `;
        prod.appendChild(newDiv);
    })
}
addproduct();

open.addEventListener("click",()=>{
    body.classList.add('action');

})
close.addEventListener("click",()=>{
    body.classList.remove('action');
    
})
let listCards=[];
function addCard(key){
    listCards[key]=products[key];
    listCards[key].quantity=1; 
    relodCard()
}
function relodCard(){
    listcard.innerHTML="";
    let count=0;
    let totalprice=0;
    listCards.forEach((value )=>{
        totalprice=totalprice + value.price;
        count=count+value.quantity;
        let newli=document.createElement('li');
        newli.innerHTML=`
        <img src="img.png/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
          `;
        listcard.appendChild(newli);
    })
    total.innerText=totalprice;
    quantity.innerText=count;
}
