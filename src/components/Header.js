import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <nav className="nav">
      <NavLink exact to="/" activeClassName="current" className="n-link">Home</NavLink>
      <NavLink to="/trades" activeClassName="current" className="n-link">Trades</NavLink>
      <NavLink to="/add" activeClassName="current" className="n-link">Add Trade</NavLink>
      <NavLink to="/what" activeClassName="current" className="n-link">What is R?</NavLink>
    </nav>
  </div>
)

export default Header