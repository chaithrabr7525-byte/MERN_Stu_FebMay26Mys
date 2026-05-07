//useCallback with Event Handlers
import { useState, useCallback, memo } from "react";

const ChildButton = memo(function ChildButton({ onClick }){
    console.log("ChildButton rendered");
    return (
        <button onClick={onClick}>increment</button>
    );
});

export function UseCallbackEvents(){
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <section> 
            <h2>useCallback with Event Handlers</h2>
            <p>Count: {count}</p>
            <ChildButton onClick={handleClick} />
        </section>
    );
}