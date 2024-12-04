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
// { this can be used instead of the above if we are using the form => event.preventDefault();}
}
  


  return (
    <div className="container text-center">
    <div className="row kg-row">     
      {/* {form insetad of div can be used    //  {onSubmit={handlebuttonclicked}}}  and this can be used with form instead on using onClick on button as it is not button specific , it is a property of form*/}
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
// {if we are given a=[1,2,3] and we want to add 4,5 in it then we can use spread opertor ie b=[...a,4,5] if we will not use ... then it will cause some error as it will not include the previous arr element an will give error }
export default AddToDo;