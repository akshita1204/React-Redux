import Items from "./Items";

const FoodItems=({items})=>
{
//let foodItems=["Dal","Green Vegetables","Salad","Chapati","Milk"]; 
return(
<>
<ul className="list-group">
{items.map(item=>(
    <Items key={item} foodItem={item} handleBuyButtonClicked={()=>console.log(`${item} bought`)}/>   //  we are passing an argument here using =>foodItem={item}
    // <li key={item} class="list-group-item">{item}</li>
    ))} 
</ul>
 
</>
)
}
export default FoodItems;