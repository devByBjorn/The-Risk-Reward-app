import React, { Fragment, useState, useRef } from 'react'
import FormNavBtn from '../components_style/FormNavBtn'
import formNavStyle, { Nav, Ul, Li, Button } from '../components_style/formNavStyled'


const FormNav = ({ values, navigateByStepValue }) => {
  const { direction, market, entry, stop, target, setup, status,
    outcome, execution, management, whyExecution, improveExecution,
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
        <Li>
          <Button
            type="button"
            onClick={() => navigateByStepValue(1)}
          ><span>Step 1:</span>
            Trade status
            {status === 'closed' && ', dates & outcome'}
            {status === 'active' && ' & open date'}
          </Button>
        </Li>


        {status &&
          <Fragment>
            <Li>
              <Button
                type="button"
                disabled={step < 2 && !market && true}
                onClick={() => navigateByStepValue(2)}
              ><span>Step 2:</span>
                Market, direction & setup
                </Button>
            </Li>
            <Li>
              <Button
                disabled={step < 3 && !entry && true}
                onClick={() => navigateByStepValue(3)}
              ><span>Step 3:</span>
              Entry, stop & target
            </Button>
            </Li>
          </Fragment>
        }
        {step <= 3 && !status &&
          <Fragment>
            <Li>
              <Button
                disabled={true}
                text=""
                spanText=""
              />
            </Li>
            <Li>
              <Button
                disabled={true}
                text=""
                spanText=""
              />
            </Li>
            <Li>
              <Button
                disabled={true}
                text=""
                spanText=""
              />
            </Li>
          </Fragment>

        }
        {status === 'closed' &&
          <Fragment>
            <Li>
              <Button
                disabled={step < 4 && !execution && true}
                onClick={() => navigateByStepValue(4)}
              ><span>Step 4:</span>
                Execution
              </Button>
            </Li>
            <Li>
              <Button
                disabled={step < 5 && !management && true}
                onClick={() => navigateByStepValue(5)}
              ><span>Step 5:</span>
                Management
              </Button>
            </Li>
            <Li>
              <Button
                disabled={ableSubmitStep(closedSubmitValues) && true}
                onClick={() => navigateByStepValue(6)}
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
                disabled={ableSubmitStep(activePendingSubmitValues) && true}
                onClick={() => navigateByStepValue(4)}
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
                disabled={ableSubmitStep(activePendingSubmitValues) && true}
                onClick={() => navigateByStepValue(4)}
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
