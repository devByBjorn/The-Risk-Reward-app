import React, { Fragment } from 'react'
import FormNavBtn from '../components_style/FormNavBtn'
import formNavStyle from '../components_style/formNavStyled'

const FormNav = ({ values, navigateByStepValue, }) => {
  const { direction, market, entry, stop, target, setup, status,
    outcome, execution, management, whyExecution, improveExecution,
    whyManagement, improveManagement, step } = values

  const classes = formNavStyle()

  const closedSubmitValues = [market, direction, setup, entry, stop,
    target, status, execution, management, whyExecution, improveExecution,
    whyManagement, improveManagement]

  const activePendingSubmitValues = [market, direction, setup, entry, stop,
    target, status]

  const ableSubmitStep = (submitValues) =>
    submitValues.filter((value) =>
      value === '' || value === 0).length !== 0

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <FormNavBtn
            value={1}
            onClick={navigateByStepValue}
            text="Market, direction & setup"
            spanText="Step 1:"
          />
        </li>
        <li className={classes.listItem}>
          <FormNavBtn
            disabled={step < 2 && !entry && true}
            value={2}
            onClick={navigateByStepValue}
            text="Entry, stop & target"
            spanText="Step 2:"
          />
        </li>
        <li className={classes.listItem}>
          <FormNavBtn
            disabled={step < 3 && !status && true}
            value={3}
            onClick={navigateByStepValue}
            text="Trade status"
            spanText="Step 3:"
          />
        </li>
        {status === 'closed' && outcome &&
          <Fragment>
            <li className={classes.listItem}>
              <FormNavBtn
                disabled={step < 4 && !execution && true}
                value={4}
                text="Execution"
                spanText="Step 4:"
                onClick={navigateByStepValue}
              />
            </li>
            <li className={classes.listItem}>
              <FormNavBtn
                disabled={step < 5 && !management && true}
                value={5}
                text="Managemnet"
                spanText="Step 5:"
                onClick={navigateByStepValue}
              />
            </li>
            <li className={classes.listItem}>
              <FormNavBtn
                disabled={ableSubmitStep(closedSubmitValues) && true}
                value={6}
                text="Inspect & Submit"
                spanText="Step 6:"
                onClick={navigateByStepValue}
              />
            </li>
          </Fragment>
        }
        {status === 'active' &&
          <Fragment>
            <li className={classes.listItem}>
              <FormNavBtn
                disabled={ableSubmitStep(activePendingSubmitValues) && true}
                value={4}
                text="Inspect & Submit"
                spanText="Step 4:"
                onClick={navigateByStepValue}
              />
            </li>
          </Fragment>
        }
        {status === 'pending' &&
          <Fragment>
            <li className={classes.listItem}>
              <FormNavBtn
                disabled={ableSubmitStep(activePendingSubmitValues) && true}
                value={4}
                text="Inspect & Submit"
                spanText="Step 4:"
                onClick={navigateByStepValue}
              />
            </li>
          </Fragment>
        }
      </ul>
    </nav>
  )
}

export default FormNav
