import React from 'react'
import { shallow } from 'enzyme'
import TradeTablePage from '../../components/TradeTablePage'

test('should render TradeTablePage', () => {
  const wrapper = shallow(<TradeTablePage />)
  expect(wrapper).toMatchSnapshot()
})