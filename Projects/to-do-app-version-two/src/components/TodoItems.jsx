import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
const TodoItems=({todoItems})=>
{
    return (
        <div class={styles.itemsContainer}>
    {todoItems.map(item=><ToDoItem
    
     todoName={item.name} 
     todoDate={item.duedate}
     ></ToDoItem>)}
    </div>
    );
}
export default TodoItems;