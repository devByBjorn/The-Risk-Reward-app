import React from 'react'
import { shallow } from 'enzyme'
import { TradeAddPage } from '../../components/TradeAddPage'
import { trades } from '../fixtures/trades'

let addFirebaseTrade, history, wrapper

beforeEach(() => {
  addFirebaseTrade = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <TradeAddPage
      addFirebaseTrade={addFirebaseTrade}
      history={history}
      trade={trades[1]}
    />
  )
})

test('should render TradeAddPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should add trade to trades array', () => {
  wrapper.find('FormParent').prop('handleSubmit')(trades[1])
  expect(history.push).toHaveBeenLastCalledWith('/trades')
  expect(addFirebaseTrade).toHaveBeenLastCalledWith(trades[1])
})
