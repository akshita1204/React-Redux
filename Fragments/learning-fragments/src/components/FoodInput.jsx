import styles from './FoodInput.module.css'

const FoodInput=({handleOnChange})=>
{

    //  const handleOnChange=(event)=>
    //  {
    //    console.log(event.target.value);
    //  }


return <input type="text" 
placeholder="Enter Food Items here"
className={styles.FoodInput}
// onChange={handleOnChange}
onKeyDown={handleOnChange}
/>
}
export default FoodInput;