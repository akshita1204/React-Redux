import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
const TodoItems=({todoItems,onDeleteClick})=>
{
    return (
        <div class={styles.itemsContainer}>
    {todoItems.map(item=><ToDoItem todoName={item.name} todoDate={item.duedate} onDeleteClick={onDeleteClick}></ToDoItem>)}
    </div>
    );
}
export default TodoItems;