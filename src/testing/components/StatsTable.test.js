import React from 'react'
import { shallow } from 'enzyme'
import { StatsTable } from '../../components/StatsTable'
import { trades } from '../fixtures/trades'

test('should render StatsTable component with markets stats', () => {
  const wrapper = shallow(<StatsTable trades={trades} keyOfUse='market' />)
  expect(wrapper).toMatchSnapshot()
})

test('should render StatsTable component with markets stats', () => {
  const wrapper = shallow(<StatsTable trades={trades} keyOfUse='setup' />)
  expect(wrapper).toMatchSnapshot()
})



