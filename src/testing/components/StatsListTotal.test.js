import React from 'react'
import { shallow } from 'enzyme'
import { StatsListTrades } from '../../components/StatsListTrades'
import { trades } from '../fixtures/trades'

test('should render StatsListTrades component', () => {
  const wrapper = shallow(<StatsListTrades trades={trades} />)
  expect(wrapper).toMatchSnapshot()
})

