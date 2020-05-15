import React from 'react'
import { shallow } from 'enzyme'
import { StatsListR } from '../../components/StatsListR'
import { trades } from '../fixtures/trades'

test('should render StatsListR', () => {
  const wrapper = shallow(
    <StatsListR
      trades={trades}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

