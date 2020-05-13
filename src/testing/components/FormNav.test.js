import React from 'react'
import { shallow } from 'enzyme'
import { FormNav } from '../../components/FormNav'

const defaultValues = {
  step: 0,
  direction: '',
  market: '',
  entry: 0,
  stop: 0,
  target: 0,
  exit: 0,
  status: '',
  setup: '',
  opened: 0,
  closed: 0,
  period: 0,
  rewardToRisk: 0,
  rMultiple: 0,
  risk: 0,
  reward: 0,
  conclusion: {
    execution: '',
    improveExecution: '',
    management: '',
    improveManagement: '',
    whyExecution: '',
    whyManagement: '',
  }
}

test('should render FormNav without content', () => {
  const wrapper = shallow(
    <FormNav
      values={defaultValues}
    />
  )
  expect(wrapper).toMatchSnapshot()
})


// STEP 1 
test('should call navigateStepValue with 1 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 1, status: true }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(0).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(1)
})

// STEP 2  
test('should call navigateStepValue with 2 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 2, status: true }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(1).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(2)
})


// STEP 3 
test('should call navigateStepValue with 3 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 3, status: true }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(2).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(3)
})

//  CLOSED STATUS
test('should render FormNav for closed status', () => {
  const values = { status: 'closed' }
  const wrapper = shallow(
    <FormNav
      values={values}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

// STEP 4  CLOSED STATUS
test('should call navigateStepValue with 4 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 4, status: 'closed' }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(3).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(4)
})


// STEP 5  CLOSED STATUS
test('should call navigateStepValue with 5 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 5, status: 'closed' }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(4).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(5)
})

// STEP 6  CLOSED STATUS
test('should call navigateStepValue with 6 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 6, status: 'closed' }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(5).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(6)
})

// ACTIVE STATUS
test('should render FormNav for Active status', () => {
  const values = { status: 'active' }
  const wrapper = shallow(
    <FormNav
      values={values}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

// STEP 4 
test('should call navigateStepValue with 4 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 4, status: 'active' }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(3).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(4)
})

// PENDING STATUS
test('should render FormNav for Pending status', () => {
  const values = { status: 'pending' }
  const wrapper = shallow(
    <FormNav
      values={values}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

// STEP 4 
test('should call navigateStepValue with 4 on click', () => {
  const navigateByStepValue = jest.fn()
  const values = { step: 4, status: 'pending' }
  const wrapper = shallow(
    <FormNav
      navigateByStepValue={navigateByStepValue}
      values={values}
    />
  )

  wrapper.find('FormNavStyles__Button').at(3).simulate('click')
  expect(navigateByStepValue).toHaveBeenCalledWith(4)
})