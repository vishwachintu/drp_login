import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <h2 className="main-title home-page-title">Welcome to our Dr.Pinnacle's Validation App</h2>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}

