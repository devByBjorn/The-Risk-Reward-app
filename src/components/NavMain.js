import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/authFirebase'
import NavMainStyled, { linkStyled } from '../components_style/NavMainStyled'

const NavMain = ({ startLogout }) => {
  const classes = linkStyled()
  return (
    <NavMainStyled>
      <NavLink
        to="/trades"
        activeClassName={classes.current}
        className={classes.link}
      >Trades
      </NavLink>
      <NavLink
        to="/trade-stats"
        activeClassName={classes.current}
        className={classes.link}
      >Stats
      </NavLink>

      <button onClick={startLogout}>Logout</button>


      {/*<NavLink to="/add-trade" activeClassName={classes.current} className={classes.link}>Add<span className={classes.noShow}>-</span>Trade</NavLink>*/}

      {/*<NavLink to="/watchlist" activeClassName={classes.current} className={classes.link}>Watchlist</NavLink>
  <NavLink to="/demons" activeClassName={classes.current} className={classes.link}>Demons</NavLink>
        <NavLink to="/what" activeClassName={classes.current} className={classes.link}>What is R?</NavLink>*/}
    </NavMainStyled>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(null, mapDispatchToProps)(NavMain)