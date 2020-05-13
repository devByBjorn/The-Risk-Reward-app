import React from 'react'
import { shallow } from 'enzyme'
import { StatsListTrades } from '../../components/StatsListTrades'
import { trades } from '../fixtures/trades'
import { getOutcomeCount, getWinRatio } from '../../calculations/calcOutcomes'

test('should render StatsListTrades component', () => {
  const wrapper = shallow(<StatsListTrades trades={trades} />)
  expect(wrapper).toMatchSnapshot()
})

test('should return count of winning trades', () => {
  expect(getOutcomeCount(trades, 'win')).toBe(2)
})

test('should return win ratio of all trades', () => {
  expect(getWinRatio(trades)).toBe(66.67)
})