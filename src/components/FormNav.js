import React, { Fragment } from 'react'
import Btn from './Btn'

const TradeParentFormNav = ({ values, navigateByStepValue }) => {
  return (
    <nav className="edit-trade-nav">
      <ul>
        <Fragment>
          <li>
            <Btn
              value={1}
              text="Market & Direction"
              onClick={navigateByStepValue}
            />
          </li>
          <li>
            <Btn
              value={2}
              text="Entry, Stop, Target"
              onClick={navigateByStepValue}
            />
          </li>
          <li>
            <Btn
              value={3}
              text="Trade Status"
              onClick={navigateByStepValue}
            />
          </li>
          {values.status === 'pending' &&
            <Fragment>
              <li>
                <Btn
                  value={4}
                  text="Inspect & Submit"
                  onClick={navigateByStepValue}
                />
              </li>
            </Fragment>
          }
          {values.status === 'active' &&
            <Fragment>
              <li>
                <Btn
                  value={4}
                  text="Opening date"
                  onClick={navigateByStepValue}
                />
              </li>
              <li>
                <Btn
                  value={5}
                  text="Inspect & Submit"
                  onClick={navigateByStepValue}
                />
              </li>
            </Fragment>
          }
        </Fragment>

        {values.status === 'closed' &&
          <Fragment>
            <li>
              <Btn
                value={4}
                text="Outcome & Dates"
                onClick={navigateByStepValue}
              />
            </li>
            <li>
              <Btn
                value={5}
                text="Conclusion: Execution"
                onClick={navigateByStepValue}
              />
            </li>
            <li>
              <Btn
                value={6}
                text="Conclusion: Managemnet"
                onClick={navigateByStepValue}
              />
            </li>
            <li>
              <Btn
                value={7}
                text="Inspect & Submit"
                onClick={navigateByStepValue}
              />
            </li>
          </Fragment>
        }
      </ul>
    </nav>
  )
}

export default TradeParentFormNav
