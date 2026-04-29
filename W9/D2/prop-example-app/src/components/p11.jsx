import PropTypes from 'prop-types';
//Prop validation
function Profile({name, age}){
    return(
        <div className="card">
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}
Profile.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};
export function PropTypeDemo(){
    return(
        <>  
        <h2>Prop Type Demo</h2>
        <Profile name="BUBU" age={21} />
        </>
    );
}