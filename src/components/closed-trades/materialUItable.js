import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EditIcon, TrashIcon } from '../../icons/IconsComponents'
import { deleteTrade } from '../../actions/tradeActions'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function createData(market, direction, setup, rewardToRisk, opened, closed, outcome) {
  return { market, direction, setup, rewardToRisk, opened, closed, outcome };
}

const ClosedTradeTableRow = (
  {
    dispatch,
    market,
    direction,
    setup,
    opened,
    closed,
    status,
    period,
    outcome,
    rewardToRisk,
    conclusion,
    id }) => {

  const [rowColor, setRowColor] = useState('')

  useEffect(() => {

    if (outcome === 'loss') {
      setRowColor("#dd7777")
    } else if (outcome === 'win') {
      setRowColor("#77dd77")
    } else {
      setRowColor("#ddaa77")
    }
  })

  const rows = [
    createData(market, direction, setup, rewardToRisk, opened, closed, outcome)
  ]

  return (
    status === 'closed' &&
    <tr style={{ backgroundColor: rowColor }}>
      <td>{market}</td>
      <td>{direction}</td>
      <td>{setup}</td>
      <td>{rewardToRisk}</td>
      <td className="desktop">{opened}</td>
      <td className="desktop">{closed}</td>
      { /*    <td>{period}</td>
          <td>{conclusion.execution}</td>
        <td>{conclusion.management}</td> */}
      <td className="desktop">{outcome}</td>
      <td className="handle-trade-row">
        <div className="handle-trade">
          <Link to={`/edit-trade/${id}`}>
            <EditIcon />
          </Link>
          <button
            className="btn-transparent"
            onClick={() => {
              dispatch(deleteTrade({ id }))
            }}
          ><TrashIcon
              className="trashcan trash-trade"
            />
          </button>
        </div>
      </td>
    </tr>
  )
}
export default connect()(ClosedTradeTableRow)