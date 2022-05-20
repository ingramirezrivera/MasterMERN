import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const ControlPanel = () => {
  return (
    <div>
        <h1>Control Panel</h1>
        <p>Choose one of this options</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="HomePanel">Home Panel</NavLink>
                </li>
                <li>
                    <NavLink to="Create">Create</NavLink>
                </li>
                <li>
                    <NavLink to="Managment">Managment</NavLink>
                </li>
                <li>
                    <NavLink to="About">About</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* TO LOAD THE COMPONENTS OF NESTED SUBPATHS */}
            <Outlet />
        </div>
    </div>
  )
}
