import React from 'react'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Todo list</a></li>
        <li><a href="/">About us</a></li>
      </ul>
    </div>
  </nav>
)