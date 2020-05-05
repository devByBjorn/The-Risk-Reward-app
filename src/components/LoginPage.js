import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/authFirebase'

const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(null, mapDispatchToProps)(LoginPage)