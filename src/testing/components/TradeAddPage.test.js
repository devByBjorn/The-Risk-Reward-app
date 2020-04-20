import React from 'react'
import { shallow } from 'enzyme'
import TradeAddPage from '../../components/TradeAddPage'
import prevstate from '../fixtures/tradesPrevState'

let startAddTrade, history, wrapper

beforeEach(() => {
  startAddTrade = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<TradeAddPage startAddTrade={startAddTrade} history={history} />).dive()
})

test('should render TradeAddPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})
