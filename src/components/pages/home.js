import React from 'react'

import NavigationContainer from '../navigation/navigation-container'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div>
            <h2>Home</h2>
            <Link to='/slug-detail/unicorns'> Find out more about unicorns</Link>

        </div>
    )
}