//prop destructuring
//A syntax of ES6 approach that allows us to unpack properties from prop object dirctly into its values
import React from "react";
//Child Components
function UserProfile(username,skill){
    return(
        <div>
            <p>User: {username}</p>
            <p>Skill: {skill}</p>
        </div>
    )
}

//Parent component
export function PropDestructuring(){
    return(
        <>
        <h2>Prop Destructuring</h2>
        <UserProfile username="bubu" skill="React"/>
        </>
    );
}