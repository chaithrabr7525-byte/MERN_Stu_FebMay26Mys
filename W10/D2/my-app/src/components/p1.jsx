//useContext hook
//Context: lets you share data b/w components w/o 
// passing props down manually at every level
import { createContext, useContext, useState } from 'react';
import { useDocumentTitle } from './p2.jsx';
//why to use context: 1.to avoid prop drilling (passing props through multiple levels of components)
//2.to manage global state (like user authentication, theme, language)
//basic steps to use context:
//1.create a context using createContext()
//2.provide the context value using a Context.Provider component
//3.consume or read the context value using useContext() hook  

//1. create a context
const ThemeContext = createContext();

//child component 1 that consumes the context value
function Header() {
    const theme = useContext(ThemeContext);
    return (
        <header style={{
            background: theme === 'dark' ? '#333' : '#eee',
            color: theme === 'dark' ? '#fff' : '#000',
            padding: '20px',
            marginTop: '20px',
        }}>
            <h3>Header of My App</h3>
            <p>Current theme: {theme}</p>
        </header>
    );
}
//child component 2 that consumes the context value
function Content() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{padding: '20px',
            marginTop: '20px',
            background: theme === 'dark' ? '#555' : '#ccc',
            color: theme === 'dark' ? '#fff' : '#000',   }}>
            <h3>Content of My App</h3>
            <p>This component also uses the same context value.</p>
        </div>
    );
}
function Layout() {
    return(
        <div>
            <Header />
            <Content />
        </div>
    );
}
export function UseContextIntro() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
     useDocumentTitle(`theme: ${theme}`); // using custom hook to update document title based on theme from p2.jsx
    return (
        <section>
            <h2>useContext Hook Introduction</h2>
            <p>This is a simple example of how to use the useContext hook in React.</p>
            <button onClick={toggleTheme}>Theme</button>
            <ThemeContext.Provider value={theme}>
                <Layout/>
            </ThemeContext.Provider>
        </section>
    );
}

    


