import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to='/sHome'>Student Home</Link>
            <br/>
            <Link to='/tHome'>Teacher Home</Link>
        </div>
    )
}

export default Home
