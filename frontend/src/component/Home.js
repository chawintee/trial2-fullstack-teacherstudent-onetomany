import React from 'react'
import { Link } from 'react-router-dom'

function Home() {


    return (
        <div>
            <h1>Home</h1>
            <Link to='/sHome'>Student Home</Link>
            <br/>
            <Link to='/tHome'>Teacher Home</Link>
        </div>
    )
}

export default Home
