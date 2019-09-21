import React from 'react';

const Button = (props)=>{

    let btnClass=`btn ${props.btnClass}`;
    let divId;
    if(props.btnClass=="clear"){
        divId="clear"
    }
    return(
        
        <div id={divId}>
            <button className={btnClass} onClick={()=>{props.expressionHandler(props.children)}}>{props.children}</button>
        </div>
    );

}
export default Button;