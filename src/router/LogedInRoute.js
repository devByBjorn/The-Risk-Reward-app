import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import NavMain from '../components/NavMain'

export const LogedInRoute = ({
  isAuth,
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      component={(props) => (
        isAuth
          ? (
            <Fragment>
              <NavMain />
              <Component {...props} />
            </Fragment>
          )
          : (
            <Redirect to="/" />
          )
      )}
    />
  )

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid
})

export default connect(mapStateToProps)(LogedInRoute)
