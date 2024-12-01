import Items from "./Items";
import { useState } from "react";
const FoodItems=({items})=>
{
//let foodItems=["Dal","Green Vegetables","Salad","Chapati","Milk"]; 
let[activeItems,setactiveItems]= useState([]);

let onBuyButton=(item,event)=>
{
  let newItems=[...activeItems,item] ;
  setactiveItems(newItems);
}
return(
<>
<ul className="list-group">
{items.map(item=>(
    <Items key={item} 
    foodItem={item}
    bought={activeItems.includes(item)}
     handleBuyButtonClicked={(event)=>onBuyButton(item,event)}/>   //  we are passing an argument here using =>foodItem={item}
    // <li key={item} class="list-group-item">{item}</li>

    ))} 
</ul>
 
</>
)
}
export default FoodItems;