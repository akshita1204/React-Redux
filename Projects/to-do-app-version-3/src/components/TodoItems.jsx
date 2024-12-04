import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
import { ToDoItemsContext } from "../store/todo-items-store";
const TodoItems=({todoItems,onDeleteClick})=>
{
    const todoItemsfromContext=useContext(ToDoItemsContext);
    return (
        <div class={styles.itemsContainer}>
    {todoItems.map(item=><ToDoItem 
    key={item.name}
    todoName={item.name} 
    todoDate={item.duedate}
     onDeleteClick={onDeleteClick}></ToDoItem>)}
    </div>
    );
}
export default TodoItems;