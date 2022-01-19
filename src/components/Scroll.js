// till now we have seen props, state. now we will see children 
import React from 'react';

// () - every props have children 
const Scroll = (props) => {
    // console.log(props);
    // return props.children       // every single component in react has this property children and this children contains the card list 
    return (
        // just like html you can add style here, but in js you need top use {{}} - double curly brackets, in which,  {javascript expression} and within this we are returning object{{returning object}}
        // and this object can have css 
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '700px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;