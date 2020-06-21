import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="flex nav-bar-container">
            <div className="flex main-container nav-bar-subcontainer">
                <NavLink exact to={'/'}>
                    <div>GazorpaWeather</div>
                </NavLink>
                <NavLink to={'/favorites'}>
                    <div className="capitalize">my cities</div>
                </NavLink>
                <NavLink to={'/about'}>
                    <div className="capitalize">about</div>
                </NavLink>
            </div>
        </div>
    )
}