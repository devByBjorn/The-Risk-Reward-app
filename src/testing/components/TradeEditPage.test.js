import React from 'react'
import { shallow } from 'enzyme'
import { TradeEditPage } from '../../components/TradeEditPage'
import { trades } from '../fixtures/trades'

let editFirebaseTrade, deleteFirebaseTrade, history, wrapper

beforeEach(() => {
  editFirebaseTrade = jest.fn()
  deleteFirebaseTrade = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <TradeEditPage
      editFirebaseTrade={editFirebaseTrade}
      deleteFirebaseTrade={deleteFirebaseTrade}
      history={history}
      trade={trades[0]}
    />
  )
})

test('should render TradeEditPage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editFirebaseTrade', () => {
  wrapper.find('FormParent').prop('handleSubmit')(trades[0])
  expect(history.push).toHaveBeenLastCalledWith('/trades')
  expect(editFirebaseTrade).toHaveBeenLastCalledWith(trades[0].id, trades[0])
})

