import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavigationContainer extends Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div>
                <div>
                    <NavLink exact to='/' activeClassName='nav-link-active'>
                        Home
                    </NavLink>
                </div>

                <div>
                    <NavLink exact to='/about' activeClassName='nav-link-active'>
                        About
                     </NavLink>
                </div>

                <div>
                    <NavLink exact to='/blog' activeClassName='nav-link-active'>
                        Blog
                    </NavLink>
                </div>
                <div>
                    <NavLink exact to='/contact' activeClassName='nav-link-active'>
                        Contact
                </NavLink>
                </div>
            </div>
        )
    }
}