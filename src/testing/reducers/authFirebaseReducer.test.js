import authFirebaseReducer from '../../reducers/authFirebaseReducer'

test('shoulf set uid with login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc12345slajfk'
  }
  const state = authFirebaseReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test('should set log out', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authFirebaseReducer({ uid: 'abc12345slajfk' }, action)
  expect(state).toEqual({})
})