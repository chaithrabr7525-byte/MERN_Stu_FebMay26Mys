//React Event object
//what is an event object?
//React automatically passes an event object as an argument to the event handler function
//The event object contains information about the event that occurred
//eg: input field: event.target.value
//event: info about the input change event
//event.target: the Html input element(input field)
//event.target.value: the current value of the input field
import { useState } from "react";
export function EventObject() {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return (
        <section>
            <h2>Event Object</h2>
            <input type="text" value={text}
             onChange={handleChange} 
             placeholder="Type something..." /> 
            <p>You typed: {text}</p>
    
        </section>
    )


}