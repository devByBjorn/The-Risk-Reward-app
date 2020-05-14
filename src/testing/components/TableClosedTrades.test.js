import React from 'react'
import { shallow } from 'enzyme'
import { trades } from '../fixtures/trades'
import { TableClosedTrades } from '../../components/TableClosedTrades'

test('should render TabelClosedTrades without data', () => {
  const wrapper = shallow(<TableClosedTrades trades={[]} />)
  expect(wrapper).toMatchSnapshot()
})
test('should render TabelClosedTrades with trades data', () => {
  const wrapper = shallow(<TableClosedTrades trade={trades[0]} />)
  expect(wrapper).toMatchSnapshot()
})