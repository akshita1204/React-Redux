function KgButton() {
    //variable or method anything can be usde with{}
    let name='Akshita';
    let fullName=()=>
    {
        return 'Akshita Tyagi';
    }
    return (
        <div>
            <button>Please Click Here!</button>
            <h2>Hey, My name is {fullName()}</h2> 
        </div>
    );
}
export default KgButton;