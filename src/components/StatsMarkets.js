import React from 'react'
import { connect } from 'react-redux'
import { getKeysArr, outcomePerSetup, getArrOfArrsTrades } from '../calculations/calcBasedOnKey'
import { getAvarageR, getTotalR } from '../calculations/calcR'
import { getHitRatio } from '../calculations/calcOutcomes'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    boxShadow: '1px 1px 2px #eee',
    minWidth: 700,
  },
})

const StatsMarkets = ({ trades, useKey }) => {
  const allMarkets = getKeysArr(trades, useKey)
  const arrOfArrsMarkets = getArrOfArrsTrades(trades, allMarkets, useKey)

  const classes = useStyles()

  return (
    <TableContainer components={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Market</TableCell>
            <TableCell align="right">Winrate</TableCell>
            <TableCell align="right">R</TableCell>
            <TableCell align="right">Trades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allMarkets && arrOfArrsMarkets.map((singleArr, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {`${singleArr[0][useKey].toUpperCase()}`}
              </TableCell>
              <TableCell align="right">{`${getHitRatio(singleArr)}%`}</TableCell>
              <TableCell align="right">{`${getTotalR(singleArr)}R`}</TableCell>
              <TableCell align="right">{`${singleArr.length}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsMarkets)