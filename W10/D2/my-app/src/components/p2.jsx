//Custom hooks
//it's a normal JavaScript function that usees react hooks 
//inside it. its name must start with use.
//it helps reuse logic across multiple components.

import { use } from "react";

//why to use it?
//1. avoid repeating the same hook logic
//2. keeps components clean
//3. makes code easier to test

//importent things to remember about custom hooks
//1. they must start with use
//2. they can call other hooks
//3. they can return anything (not just JSX)

//Document Title changer: custom hook which updates the browser tab title changes
import { useEffect, useState } from "react";
export function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;

        return () => {
            document.title = "My React App";
        };
    }, [title]);
}

//custom hook: manage a boolean value & provide a reusable
//toggle function

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(prev => !prev);
    };

    return [value, toggle];
}

export function CustomHooksIntro() {
    const [count, setCount] = useState(0);
    const [isVisible, toggleIsVisible] = useToggle(true);

    useDocumentTitle(`Count: ${count}`);

    return(
        <section>
            <h2>Custom Hooks Intro</h2>
            <div style={{marginBottom: '10px'}}>
                <h3>Counter hooks</h3>
                <p>Count: {count}</p>
                <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
                
            </div>
            <div style={{marginBottom: '10px' }}>
                <h3>Toggle hooks</h3>
             <button onClick={toggleIsVisible}>Toggle Visibility
                {isVisible ? "Hide message" : "Show message"}
                  </button>   
                {isVisible && <p>This text is visible by a custom hook.</p>}
            </div>
        </section>
    )
} 