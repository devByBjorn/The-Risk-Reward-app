import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { EditIcon, TrashIcon } from '../icons/IconsComponents'
import { deleteFirebaseTrade } from '../actions/tradeActions'

const PendingTableRow = (
  {
    dispatch,
    market,
    direction,
    setup,
    entry,
    stop,
    target,
    status,
    negativeR,
    positiveR,
    id }) => (

    status === 'pending' &&

    <tr>
      <td>{market}</td>
      <td>{direction}</td>
      <td>{setup}</td>
      <td>{entry}</td>
      <td>{stop}</td>
      <td>{target}</td>
      <td>{negativeR}</td> {/* loss -R*/}
      <td>{positiveR}</td> {/* win +R*/}
      <td>
        <div>
          <NavLink to={`/edit-trade/${id}`}>
            <EditIcon />
          </NavLink>
          <button
            onClick={() => {
              dispatch(deleteFirebaseTrade({ id }))
            }}
          ><TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  )

export default connect()(PendingTableRow)