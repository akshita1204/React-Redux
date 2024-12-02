import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function AddToDo({onNewItem})
{

const [todoname,settodoname]=useState("");
const [duedate,setduedate]=useState("");

const handlenamechange=(event)=>
{
  settodoname(event.target.value);
}
const handledatechange=(event)=>
  {
    setduedate(event.target.value);
  }
const handlebuttonclicked=()=>
{
onNewItem(todoname,duedate);
settodoname("");
setduedate("");
}
  


  return (
    <div className="container text-center">
    <div className="row kg-row">
       <div class="col-6">
         <input type="text" placeholder="Enter TODO here" value={todoname} onChange={handlenamechange}/>
       </div>
    <div className="col-4">
       <input type="date" value={duedate} onChange={handledatechange}/>
      </div>
    <div className="col-2">
     <button type="button" class="btn btn-success kg-button"
     onClick={handlebuttonclicked}
     >
      <IoAddCircle />
     </button>
    </div>
</div>
</div>
  );

}
export default AddToDo;