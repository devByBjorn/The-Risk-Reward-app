import React, { Fragment } from 'react'
import { Nav, Ul, Li, Button } from '../components_style/FormNavStyles'

export const FormNav = ({ values, navigateByStepValue }) => {
  const { direction, market, entry, stop, target, setup, status,
    execution, management, whyExecution, improveExecution,
    whyManagement, improveManagement, step } = values

  const closedSubmitValues = [market, direction, setup, entry, stop,
    target, status, execution, management, whyExecution, improveExecution,
    whyManagement, improveManagement]

  const activePendingSubmitValues = [market, direction, setup, entry, stop,
    target, status]

  const ableSubmitStep = (submitValues) =>
    submitValues.filter((value) =>
      value === '' || value === 0).length !== 0

  return (
    <Nav>
      <Ul>

        {status &&
          <Fragment>
            <Li>
              <Button
                type="button"
                onClick={() => navigateByStepValue(1)}
                style={step === 1 ? { fontWeight: 'bold' } : {}}
              ><span>Step 1:</span>
            Status
            {status === 'closed' && ', dates & outcome'}
                {status === 'active' && ' & open date'}
              </Button>
            </Li>
            <Li>
              <Button
                type="button"
                disabled={step < 2 && !market ? true : false}
                onClick={() => navigateByStepValue(2)}
                style={step === 2 ? { fontWeight: 'bold' } : {}}
              ><span>Step 2:</span>
                Market, direction & setup
                </Button>
            </Li>
            <Li>
              <Button
                disabled={step < 3 && !entry ? true : false}
                onClick={() => navigateByStepValue(3)}
                style={step === 3 ? { fontWeight: 'bold' } : {}}
              ><span>Step 3:</span>
              Entry, stop & target
            </Button>
            </Li>
          </Fragment>
        }

        {status === 'closed' &&
          <Fragment>
            <Li>
              <Button
                disabled={step < 4 && !execution ? true : false}
                onClick={() => navigateByStepValue(4)}
                style={step === 4 ? { fontWeight: 'bold' } : {}}
              ><span>Step 4:</span>
                Execution
              </Button>
            </Li>
            <Li>
              <Button
                disabled={step < 5 && !management ? true : false}
                onClick={() => navigateByStepValue(5)}
                style={step === 5 ? { fontWeight: 'bold' } : {}}
              ><span>Step 5:</span>
                Management
              </Button>
            </Li>
            <Li>
              <Button
                disabled={ableSubmitStep(closedSubmitValues) ? true : false}
                onClick={() => navigateByStepValue(6)}
                style={step === 6 ? { fontWeight: 'bold' } : {}}
              ><span>Step 6:</span>
                Inspect & Submit
              </Button>
            </Li>
          </Fragment>
        }

        {status === 'active' &&
          <Fragment>
            <Li>
              <Button
                disabled={ableSubmitStep(activePendingSubmitValues) ? true : false}
                onClick={() => navigateByStepValue(4)}
                style={step === 4 ? { fontWeight: 'bold' } : {}}
              ><span>Step 4:</span>
                Inspect & Submit
              </Button>
            </Li>
          </Fragment>
        }

        {status === 'pending' &&
          <Fragment>
            <Li>
              <Button
                disabled={ableSubmitStep(activePendingSubmitValues) ? true : false}
                onClick={() => navigateByStepValue(4)}
                style={step === 4 ? { fontWeight: 'bold' } : {}}
              ><span>Step 4:</span>
                Inspect & Submit
              </Button>
            </Li>
          </Fragment>
        }
      </Ul>
    </Nav>
  )
}

export default FormNav
