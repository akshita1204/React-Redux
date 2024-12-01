import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/display";;
function App()
{

let [calval,setcalval]=useState("");
const  onButtonClick=(buttonText)=>
{
  if(buttonText==="C")
  {
    setcalval("");
  }
  else if(buttonText==="=")
  {
    const res=eval(calval); 
    setcalval(res);
  }
  else
  {
    const newDisplayVal=calval+buttonText;
    setcalval(newDisplayVal);
  }
}
 return (
  <div className={styles.calculator}>
    <Display displayValue={calval}/>
    <ButtonsContainer
     onButtonClick={onButtonClick}/>
  </div>
 );

}

export default App
