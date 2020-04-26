import React from 'react'

function inputC(props) {
    return (
        <div>
            This is input
            <label></label>
            <input onChange={props.inputText}/>
        </div>
    )
}

export default inputC
