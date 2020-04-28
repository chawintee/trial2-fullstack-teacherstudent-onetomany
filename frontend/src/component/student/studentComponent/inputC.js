import React from 'react'

function InputC(props) {
    return (
        <div>

            <label>{props.name}</label>
            <br/>
            <input onChange={props.inputText} value={props.value} placeholder={props.value} />
        </div>
    )
}

export default InputC
