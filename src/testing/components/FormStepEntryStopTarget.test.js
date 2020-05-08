import React from 'react'
import { shallow } from 'enzyme'
import FormStepEntryStopTarget from '../../components/FormStepEntryStopTarget'
import { trades } from '../fixtures/trades'


test('should render FormParent', () => {
  const defaultValues = {
    direction: 'long',
    market: 'dax',
    entry: '',
    stop: '',
    target: '',
    status: 'closed',
    setup: 'ibl',
  }

  const wrapper = shallow(<FormStepEntryStopTarget values={defaultValues} />)
  expect(wrapper).toMatchSnapshot()
})

// test('should render error when no entry value', () => {
//   const nextStep = jest.fn()
//   const values = {
//     entry: '',
//     stop: '255',
//     target: '300',
//   }
//   const wrapper = shallow(<FormStepEntryStopTarget values={values} nextStep={nextStep} />)
//   wrapper.find('WithStyles(ForwardRef(Button))').at(1).simulate('click', {
//     preventDefault: () => { }
//   })

// })