import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {

//let fooditems=["Dal","Green Vegetables","Salad","Chapati","Milk"]; 

let[foodItems,setfooditems]=useState(["Dal","Green Vegetables","Salad","Chapati","Milk"]);

// let textstateArr=useState("Food item entered by user");
// let texttoshow=textstateArr[0];
// let setsstate=textstateArr[1];

let [texttoshow,setsstate]=useState();


//let texttoshow ="Food Items entered by the user.";


const handleOnChange=(event)=>
 {
  if(event.key==='Enter')
  {
    let newFoodItem=event.target.value;  //to find the value entered
    let newItems=[...foodItems,newFoodItem];
    event.target.value="";
    setfooditems(newItems);    //to add the values in the conatainer
    console.log(newFoodItem);
  }
    // console.log(event);
    // setsstate(event.target.value);
  }

{/*Conditional Statements */}
{/*if(foodItems.length===0) 
  {
    return <h1>I am still Hungry.</h1>;
  } */}


   {/*we can also use this method and call it */}
{/*let emptymsg=foodItems.length===0 ? <h3>I am still Hungry</h3> : null;  */}
  

 return (
 <React.Fragment>                            {/* we can use <></> also as it indicates the react.fragment */}
   <Container>
   <h1 className="foodheading">Healthy Food</h1> 
   <FoodInput handleOnChange={handleOnChange}/>
   <ErrorMsg items={foodItems}/>
    {/* <p>{texttoshow}</p>  */}

   <FoodItems items={foodItems}/> 
   </Container>

   <Container>
    {/* <p>Above is the list of the fruits.</p> */}
   </Container>
  {/*{emptymsg} */}
   {/*{foodItems.length===0 ? <h3>I am still Hungry</h3> : null} */} {/*Ternary Operator */}
   

   {/*{foodItems.length===0 && <h3>I am still Hungry.</h3>} */} {/*Logical Operators */}

  {/* <ul class="list-group"> */}

 {/*  <li class="list-group-item">Dal</li>
  <li class="list-group-item">Green Vegetables</li>
  <li class="list-group-item">Salad</li>
  <li class="list-group-item">Chapati</li>
  <li class="list-group-item">Milk</li> */}

   {/* {foodItems.map(item=>(<li key={item} class="list-group-item">{item}</li>))}     */}

  {/*It is recommended to give key for the virtual DOM . Also map is the alternate of the loops*/}

{/* </ul> */}
</React.Fragment>
);
}

export default App

{/*
 What I learnt Here??????
 =>Using React Fragments
 => Using map instead of looping statements
 =>giving key to the list element with the class.
 =>Using conditional statements
 =>Using Ternary Operators
 =>Using Logical Operators
  
  */}
