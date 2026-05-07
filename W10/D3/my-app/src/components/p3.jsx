//Pasing arguments to Event Handlers
import { useState } from "react";
export function PassingArguments() {
    const [message, setMessage] = useState('No message yet');
    //Event handler function
    const handleClick = (msg) => {
        setMessage(msg);
    };
    return(
        <section>
            <h2>Passing Arguments to Event Handlers</h2>
            <button onClick={() => handleClick('idre nemdiyagirbeku')}>
                Click Me
            </button>
            <p>{message}</p>
        </section>
    ) 
}