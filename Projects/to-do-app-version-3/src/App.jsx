import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";



function App() {

  const initialtodoItems=[
    {
      name:'Buy Milk',
      duedate:'12/12/24'
    },
    {
      name:'Buy Fruits',
      duedate:'11/12/24'
    }
  ]
  const [todoItems,settodoItems]=useState(initialtodoItems);
  
  const handleNewItem=(itemName,itemDueDate)=>
  {
    console.log(`New Item Name: ${itemName}  New Item Date:${itemDueDate}`);
    const newtodoitems=[...todoItems,{name:itemName,duedate:itemDueDate}];
    settodoItems(newtodoitems);
  }

  return <center class="todo-container">
    <AppName/>
    <AddToDo onNewItem={handleNewItem}/>
    {todoItems.length===0 && <WelcomeMsg/>}
    <TodoItems todoItems={todoItems}></TodoItems>
   
  </center>
}

export default App;


