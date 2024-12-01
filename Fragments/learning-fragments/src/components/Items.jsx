import styles from "./Items.module.css"

const Items=({foodItem,handleBuyButtonClicked})=>
{
 return (
    <li className={`${styles['kg-items']} list-group-item`}>
        <span className={styles['kg-span']}>{foodItem}</span>
        <button className={`${styles.button} btn btn-info `}
        onClick={(event)=>handleBuyButtonClicked(event)}
        >Buy</button>
        </li>
 );

}
export default Items;
