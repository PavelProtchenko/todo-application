import React from 'react'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper teal accent-2 px1">
      <a href="/" className="brand-logo">Logo</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Todo list</a></li>
        <li><a href="/">About us</a></li>
      </ul>
    </div>
  </nav>
)