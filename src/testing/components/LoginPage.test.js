import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import LoginPageDefault, { LoginPage } from '../../components/LoginPage'
import LoginTwitterButton from '../../components/LoginTwitterButton'
import LoginGoogleButton from '../../components/LoginGoogleButton'

const mockStore = configureMockStore([thunk])

test('should render LoginPage with components', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})

test('should render LoginPage', () => {
  const store = mockStore({})
  const wrapper = shallow(<LoginPageDefault store={store} />)
  expect(wrapper).toMatchSnapshot()
})


// test('Should run googleLogin on button click', () => {
//   const store = mockStore({})
//   const googleLoginSpy = jest.fn()
//   const wrapper = shallow(<LoginPage store={store} googleLogin={googleLoginSpy} />).dive()
//   wrapper.find(LoginGoogleButton).simulate('click')
//   expect(googleLoginSpy).toHaveBeenCalled()
// })