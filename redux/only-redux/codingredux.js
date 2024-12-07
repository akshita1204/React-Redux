const redux=require('redux');
const reducer=(store,action)=>
{
    return {counter:store.counter+1};
}
const store=redux.createStore(reducer);
const subscriber=()=>
{
    const state=store.getState();
    console.log(state);
}
store.subscribe(subscriber);
//to throw any action 
store.dispatch({type});