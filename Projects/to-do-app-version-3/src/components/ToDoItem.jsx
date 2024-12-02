function ToDoItem({todoName,todoDate,onDeleteClick})
{
    return(
        <div class="container">
        <div class="row kg-row">
        <div class="col-6">{todoName}</div>
       <div class="col-4"> {todoDate}</div>
     <div class="col-2">
     <button type="button" className="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoName)}>Delete</button>
     </div>
    </div>
    </div>
    );
}
export default ToDoItem;