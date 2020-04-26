import React from 'react'
import { NavLink } from 'react-router-dom'
import headerStyled from '../components_style/HeaderStyled'



const Header = () => {
  const classes = headerStyled()
  return (
    <div>
      <nav className={classes.nav}>
        <NavLink exact to="/" activeClassName={classes.current} className={classes.link}>Home</NavLink>
        <NavLink to="/trades" activeClassName={classes.current} className={classes.link}>Trades</NavLink>
        <NavLink to="/add-trade" activeClassName={classes.current} className={classes.link}>Add<span className={classes.noShow}>-</span>Trade</NavLink>
        {<NavLink to="/trade-stats" activeClassName={classes.current} className={classes.link}>Stats</NavLink>}
        {/*<NavLink to="/watchlist" activeClassName={classes.current} className={classes.link}>Watchlist</NavLink>
  <NavLink to="/demons" activeClassName={classes.current} className={classes.link}>Demons</NavLink>
        <NavLink to="/what" activeClassName={classes.current} className={classes.link}>What is R?</NavLink>*/}
      </nav>
    </div>
  )
}

export default Header