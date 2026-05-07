//Synthetic Events in React
//what is a synthetic event?
//A synthetic event is a cross-browser wrapper around the browser's native event.
//it provide a consistent API across different browsers
//Wprks similarly to native DOM events
//Still allows access to the original browser events via event.nativeEvnet

//why does React use it?
//TO make event handling behave consistently
//To simplify cross-browser compatibility or differences in event handling
//To integrate smoothly with React's event system

//How Synthetic event works:
//Component renders: A button appears on the screen
//handleClick is defiend but it is not executed yet

//User clicks the button: browser creates a native click event and
//  React's synthetic event system captures it
//React creates a synthetic event object that wraps the native event
//React calls the handleClick function and passes the synthetic event as an argument

//event refers to the synthetic
//event.target gives us athe hTML elements


