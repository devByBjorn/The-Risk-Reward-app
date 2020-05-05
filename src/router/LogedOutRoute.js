import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const LogedOutRoute = ({
  isAuth,
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      component={(props) => (
        isAuth ? (
          <Redirect to="/trades" />
        ) : (
            <Component {...props} />
          )
      )}
    />
  )

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid
})

export default connect(mapStateToProps)(LogedOutRoute)
