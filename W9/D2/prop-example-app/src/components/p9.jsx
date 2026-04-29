import { useState } from "react";
//Props vs State
//Prop: data passed from parent to child component
//data comes from outside the component
//are read-only
//are used for passing data b/w components
//state: data manage inside a component
//belongs to the component itsilf can be modified/changed
//setter method is used to modify data

function Child({title}){
    return <p>Prop:{title}</p>
}
export function PropsState(){
    const [stateValue,setStatevalue] = useState('local state');
    return(
        <>
        <h3>Props vs State</h3>
        <Child title="Parent data"/>

        <p>State: {stateValue}</p>
        <button onClick = {() => setStatevalue('this is new state')}>Update State</button>
        </>
    )
}