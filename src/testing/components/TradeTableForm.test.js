import React from 'react'
import { shallow } from 'enzyme'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import TradeTableForm from '../../components/form/TradeTableForm'
import trades from '../fixtures/tradesPrevState'

test('should render TradeTableForm', () => {
  const wrapper = shallow(<TradeTableForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render TradeTableForm with model data', () => {
  const wrapper = shallow(<TradeTableForm trade={trades[0]} />)
  expect(wrapper).toMatchSnapshot()
})

// Missing input data for submit - state: inputError
test('should render TradeTableForm with input error message', () => {
  const wrapper = shallow(<TradeTableForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('inputError').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

// ????
// Correctly filled out form submit
test('should render TableForm with valid form submission', () => {
  const handleSubmitSpy = jest.fn()
  const wrapper = shallow(
    <TradeTableForm
      trade={trades[1]}
      handleSubmit={handleSubmitSpy}
    />
  )
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('inputError')).toBe('')
  expect(handleSubmitSpy).toHaveBeenLastCalledWith({
    direction: trades[1].direction,
    market: trades[1].market,
    entry: trades[1].entry,
    stop: trades[1].stop,
    target: trades[1].target,
    opened: trades[1].opened,
    closed: trades[1].closed,
    period: (trades[1].closed - trades[1].opened),
    outcome: trades[1].outcome,
    rewardToRisk: trades[1].rewardToRisk,
    conclusion: {
      execution: trades[1].conclusion.execution,
      management: trades[1].conclusion.management,
      whyNote: trades[1].conclusion.whyNote,
      improveNote: trades[1].conclusion.improveNote,
    },
    id: trades[1].id
  })
})

test('should set input for market', () => {
  const value = 'USD/JPY'
  const wrapper = shallow(<TradeTableForm />)
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('market')).toBe(value)
})

test('should set outcome input to value', () => {
  const value = 'win'
  const wrapper = shallow(<TradeTableForm />)
  wrapper.find('input').at(6).simulate('click', {
    target: { value }
  })
  expect(wrapper.state('outcome')).toBe(value)
})


// Open date must be before closing date
test('should render TradeTableForm with date error message', () => {
  const opened = moment(0).add(4, 'days')
  const wrapper = shallow(<TradeTableForm trade={trades[0]} />)
  wrapper.find(SingleDatePicker).at(0).prop('onDateChange')(opened)
  expect(wrapper.state('dateError').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

// Close date must be after open date
test('should render TradeTableForm with date error message', () => {
  const closed = moment(0).subtract(4, 'days')
  const wrapper = shallow(<TradeTableForm trade={trades[0]} />)
  wrapper.find(SingleDatePicker).at(1).prop('onDateChange')(closed)
  expect(wrapper.state('dateError').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set calander focus on focus change', () => {
  const focused = true
  const wrapper = shallow(<TradeTableForm />)
  wrapper.find(SingleDatePicker).at(0).prop('onFocusChange')({ focused })
  expect(wrapper.state('openedFocused')).toEqual(focused)
})