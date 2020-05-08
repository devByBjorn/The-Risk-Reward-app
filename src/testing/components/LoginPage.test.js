import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import LoginPage from '../../components/LoginPage'

const mockStore = configureMockStore([thunk])

test('should render LoginPage', () => {
  const store = mockStore({})
  const wrapper = shallow(<LoginPage store={store} />)
  expect(wrapper).toMatchSnapshot()
})

// test('Should run googleLogin on button click', () => {
//   const store = mockStore({})
//   const googleLoginSpy = jest.fn()
//   const wrapper = shallow(<LoginPage store={store} googleLogin={googleLoginSpy} />)
//   wrapper.dive().find('LoginGoogleButton').simulate('click')
//   expect(googleLoginSpy).toHaveBeenCalled()
// })