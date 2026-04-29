//passing function as Props
//Also called as callback props
// Child component has to invoke parent logic
function ChildButton({onGreet}){
    return(
        <button onClick={onGreet}>invoke parent function</button>
    )
}
export function FunctionProps() {
    const greet = () => alert("Hello from parent component");
    return(
        <>
        <h2>Passing function as Props</h2>
        <ChildButton onGreet={greet}/>        
        </>
    )
    
}