import Items from "./Items";

const FoodItems=({items})=>
{
//let foodItems=["Dal","Green Vegetables","Salad","Chapati","Milk"]; 
return(
<>
<ul class="list-group">
{items.map(item=>(
    <Items key={item} foodItem={item}/>   //  we are passing an argument here using =>foodItem={item}
    // <li key={item} class="list-group-item">{item}</li>
    ))} 
</ul>
 
</>
)
}
export default FoodItems;