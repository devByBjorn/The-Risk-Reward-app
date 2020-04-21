import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { calculatePositiveR, calculateNegativeR } from '../calculations/riskRewardCalculation'
import { EditIcon, TrashIcon } from '../icons/IconsComponents'
import { deleteFirebaseTrade } from '../actions/tradeActions'

const ActiveTableRow = (
  {
    dispatch,
    market,
    direction,
    setup,
    entry,
    stop,
    target,
    status,
    opened,
    negativeR,
    positiveR,
    id }) => (
    status === 'active' &&
    <tr>
      <td>{market}</td>
      <td>{direction}</td>
      <td>{setup}</td>
      <td>{entry}</td>
      <td>{stop}</td>
      <td>{target}</td>
      <td>{opened}</td>
      <td>{negativeR}</td> {/* loss -R*/}
      <td>{positiveR}</td> {/* win +R*/}
      <td>
        <div>
          <Link to={`/edit-trade/${id}`}>
            <EditIcon />
          </Link>
          <button onClick={() => {
            dispatch(deleteFirebaseTrade({ id }))
          }}
          ><TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  )

export default connect()(ActiveTableRow)