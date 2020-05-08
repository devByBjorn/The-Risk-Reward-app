import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { login, logout } from '../../actions/authFirebase'

const createMockStore = configureMockStore([thunk])

test('should generate login action object', () => {
  const uid = "78LSq76Dh3gLWmOIR2Duz9bStnf1"
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should generate logout action object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT',
  })
})
