import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
const TodoItems=({todoItems,onDeleteClick})=>
{
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