import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { calculatePositiveR, calculateNegativeR } from '../../calculate-r/riskRewardCalculation'
import { EditIcon, TrashIcon } from '../../icons/Icons'
import { deleteTrade } from '../../actions/tradeActions'

const PendingTableRow = (
  {
    dispatch,
    market,
    direction,
    entry,
    stop,
    target,
    status,
    id }) => (

    status === 'pending' &&
    <tr>
      <td>{market}</td>
      <td>{direction}</td>
      <td>{entry}</td>
      <td>{stop}</td>
      <td>{target}</td>
      <td>{calculateNegativeR(entry, stop, target, direction)}</td> {/* loss -R*/}
      <td>{calculatePositiveR(entry, stop, target, direction)}</td> {/* win +R*/}
      <td>
        <div>
          <Link to={`/edit-trade/${id}`}>
            <EditIcon />
          </Link>
          <button
            onClick={() => {
              dispatch(deleteTrade({ id }))
            }}
          ><TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  )

export default connect()(PendingTableRow)