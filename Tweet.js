import React from 'react';
import "./App.css";

function Tweet({name,massage}){

    return(
    <div className='tweet'>
        <h3>{name}</h3>
        <p>{massage}</p>
        <h3>Company Name</h3>
    </div>

    )
}
export default Tweet;