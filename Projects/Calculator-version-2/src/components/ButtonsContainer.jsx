import styles from "./ButtonsContainer.module.css";
const ButtonsContainer=({onButtonClick})=>
{
    const buttonsName=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    // return(
    //     <div className={styles.buttonsContainer}>
    //      {buttonsName.map(item=><button className={styles.button}>{item}</button>)}   
    //     </div>
    
    // );
    return (
        <div className={styles.ButtonsContainer}>
            {buttonsName.map((buttonsName)=>(
                <button className={styles.button} onClick={()=>onButtonClick(buttonsName)}>{buttonsName}</button>
            ))}
        </div>

    );

}
export default ButtonsContainer;