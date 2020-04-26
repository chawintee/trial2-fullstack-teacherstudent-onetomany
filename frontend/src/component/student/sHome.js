import React from 'react'
import {  Redirect, Link } from 'react-router-dom'

function sHome() {
    return (
        <div>
            <h1>Student Homepage</h1>
            <Link to='/sRegister'>Register</Link>
            {/* <Redirect to='/sRegister'/> */}
        </div>
    )
}

export default sHome
