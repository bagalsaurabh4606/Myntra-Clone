


let bagItems;
onload();
function onload() {
  let bagItemstr=localStorage.getItem('bagItems');
  bagItems=bagItemstr ? JSON.parse(bagItemstr) :[];
  displayItem();
  itemcount();
}

  
function addTobag(itemId){
   bagItems.push(itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   itemcount();
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

function displayItem () {
  let containerElement= document.querySelector('.items_container');
  if(!containerElement){
    return;
  }
  let innerHTML='';
  items.forEach(item=>{
  innerHTML+=`<div class="items">
  <img class="item_image1" src="${item.image}" alt="image">
  <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}k </div>
  <div class="company_name">${item.company}</div>
  <div class="items_names">${item.item_name}</div>
  <div class="price">
    <span class="current_price">Rs ${item.current_price}</span>
    <span class="original_price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="add_to_bag" onclick="addTobag(${item.id})"><span class="material-symbols-outlined action_icon">
  shopping_bag
  </span>ADD TO BAG</button>
  </div>
  
  `
  })
  containerElement.innerHTML=innerHTML;
}
























// let item=
// {
//  items_images :'images/1.jpg',
//  rating:{
//   stars:4.5,
//   noOfreviwes:1.4,
//  },
//  comany_name:'Carten London',
//  item_name:'Rhodium_plated CZ Floral Studs',
//  current_price:606,
//  original_price:1045,
//  discount:42,

// }

// containerElement.innerHTML=`
// <div class="items">
//         <img class="item_image1" src="${item.items_images}" alt="image">
//         <div class="rating">${item.rating.stars}⭐ | ${item.rating.noOfreviwes}k </div>
//         <div class="company_name">${item.comany_name}</div>
//         <div class="items_names">${item.item_name}</div>
//         <div class="price">
//           <span class="current_price">Rs ${item.current_price}</span>
//           <span class="original_price">Rs ${item.original_price}</span>
//           <span class="discount">(${item.discount}% OFF)</span>
//         </div>
//         <button class="add_to_bag">    <span class="material-symbols-outlined action_icon">
//       shopping_bag
//       </span>ADD TO BAG</button>
//        </div>
// `