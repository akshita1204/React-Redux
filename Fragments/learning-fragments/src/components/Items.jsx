import styles from "./Items.module.css"

const Items=(props)=>
{
 return (
    <li  className={`${styles['kg-items']} list-group-item{}`}>
        <span className={styles['kg-span']}>{props.foodItem}</span>
        </li>
 );

}
export default Items;
