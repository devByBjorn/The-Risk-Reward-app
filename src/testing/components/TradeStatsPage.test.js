import React from 'react'
import { shallow } from 'enzyme'
import TradeStatsPage from '../../components/TradeStatsPage'
import { trades } from '../fixtures/trades'

test('should render TradeStatsPage', () => {
  const wrapper = shallow(<TradeStatsPage />)
  expect(wrapper).toMatchSnapshot()
})