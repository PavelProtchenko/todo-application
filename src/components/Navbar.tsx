import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper teal accent-2 px1">
      <NavLink to="/" className="brand-logo">Logo</NavLink>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Todo list</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
      </ul>
    </div>
  </nav>
)