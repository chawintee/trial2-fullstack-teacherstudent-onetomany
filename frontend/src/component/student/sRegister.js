import React,{useState} from 'react'
import inputC from './studentComponent/inputC'

function sRegister() {

    const [name, setName] = useState("");

    const nameInput=(e)=>{
        setName(e.target.value)
        console.log(name)
    }


    return (
        <div>
            
            Hello
            <input onChange={nameInput} value={name}/>

        </div>
    )
}

export default sRegister
