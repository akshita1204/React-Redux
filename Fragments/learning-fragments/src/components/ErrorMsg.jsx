const ErrorMsg=({items})=>
{
    return <>{items.length===0 ? <h3>I am still Hungry</h3> : null}</> 

}
export default ErrorMsg;
// as we need to define the foodItems whereever it is required which is not good or can say an optimised method as foodItem should be declared once and can be used at multiple places so 