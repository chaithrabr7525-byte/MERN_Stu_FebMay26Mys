//Higher order components(HOC)
const Greeting = ({name}) => {
    return(
        <h3>Hello, {name}!</h3>
    );
}
const withBorder = (OriginalComponent) => {
    return function EnhancedComponent(props) {
        return (
            <div className="setBorder">
                <OriginalComponent {...props} />
            </div>
        );

    }
}
const GreetingWithBorder = withBorder(Greeting);
export function HOCExample(){
    return(
        <>
            <h2>Higher Order Components Demo</h2>
            <GreetingWithBorder name="BUBU" />
        </>
    );
}