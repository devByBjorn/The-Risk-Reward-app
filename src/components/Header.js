import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <nav className="nav">
      <NavLink exact to="/" activeClassName="current" className="n-link">Home</NavLink>
      <NavLink to="/trades" activeClassName="current" className="n-link">Trades</NavLink>
      <NavLink to="/trade-stats" activeClassName="current" className="n-link">Stats</NavLink>
      {/*<NavLink to="/watchlist" activeClassName="current" className="n-link">Watchlist</NavLink>
<NavLink to="/demons" activeClassName="current" className="n-link">Demons</NavLink>*/}
      <NavLink to="/what" activeClassName="current" className="n-link">What is R?</NavLink>
    </nav>
  </div>
)

export default Header