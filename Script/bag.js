const CONVINIEANCE_FEES=99;
let bagItemObject;
onload();
function onload(){
  loadItemObject();
  displaybagItem();
  displaybagsummury();
  
}
function displaybagsummury(){
  let bagsummuryelement=document.querySelector('.bag-summary');
  let totalItem=bagItemObject.length;
  let totalMRP=0;
  let totaldiscount=0;
  let totalamount;
  

  bagItemObject.forEach(bagItems=>{
    totalMRP+=bagItems.original_price;
    totaldiscount+=bagItems.original_price-bagItems.current_price;
   
  });

  if(bagItems.length==0){totalamount=0}
  else{
   totalamount=totalMRP-totaldiscount+CONVINIEANCE_FEES;
  }
  bagsummuryelement.innerHTML=`
  <div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹${totalMRP}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-₹${totaldiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">₹99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹${totalamount}</span>
  </div> 
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>
</div>
  `;
}

function loadItemObject(){
 bagItemObject= bagItems.map(function(itemId){
    for(let i=0 ;i<items.length ;i++){
 if(itemId==items[i].id){
  return items[i];
 }
    }
  });
  console.log(bagItemObject);
}

function displaybagItem(){
  let containerElementbag=document.querySelector('.bag-items-container');
  let innerHTML='';
  bagItemObject.forEach(bagItems => {
    innerHTML+=generatehtml(bagItems);
  });
  containerElementbag.innerHTML=innerHTML;
}
function removefrombag(itemId){
bagItems=bagItems.filter(bagItemId=>bagItemId!=itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
loadItemObject();
displaybagItem();
itemcount();
displaybagsummury();
}
function itemcount(){
  let element=document.querySelector('.count');
  
  element.innerText=bagItems.length;
    if(bagItems.length>0){
      element.style.visibility='visible';
      element.innerText=bagItems.length;

    }else {
      element.style.visibility='hidden';
    }
       
}

function generatehtml(item){
   return `
   <div class="bag-item-container">
             <div class="item-left-part">
               <img class="bag-item-img" src="../${item.image}">
             </div>
             <div class="item-right-part">
               <div class="company">${item.company}</div>
               <div class="item-name">${item.item_name}</div>
               <div class="price-container">
                 <span class="current-price">Rs ${item.current_price}</span>
                 <span class="original-price">Rs ${item.original_price}</span>
                 <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
               </div>
               <div class="return-period">
                 <span class="return-period-days">${item.return_period} days</span> return available
               </div>
               <div class="delivery-details">delivered by
                 <span class="delivery-details-days">${ item.delivery_date}</span>
               </div>
             </div>
 
             <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
           </div>
 
   `
}