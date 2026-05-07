//Basic event handling in React
//what is an event?
//  An event is an action  triggered by the user(mouse, keyboard, DOM)
// React uses camelcase attributes like onClick, onMouseOver, onChange etc to handle events
//React passes an event object (Synthetic evenet) to the event handler function

export function EventBasics(){
    //Declaring a event handler function
    const handleClick = () => alert("Button clicked!");
    return (
        <section>
            <h2>Event Basics</h2>
            {/*Event binding */}
            <button onClick={handleClick}>Click Me</button>
        </section>
    );
}