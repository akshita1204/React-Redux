import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/ToDoItems";

const todoItems=[
  {
    name:'Buy Milk',
    duedate:'12/12/24'
  },
  {
    name:'Buy Fruits',
    duedate:'11/12/24'
  }
]
function App() {
  return <center class="todo-container">
    <AppName/>
    <AddToDo/>
    <TodoItems todoItems={todoItems}></TodoItems>
   
  </center>
}

export default App;


