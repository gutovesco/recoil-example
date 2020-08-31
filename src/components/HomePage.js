import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
            <h1>Home Page</h1>
            <Link to="/users">Go to users</Link>
        </div>
    )
}
