import React, { Fragment } from 'react'
import { connect } from 'react-redux'
//import { getObjectCountList, objListToArr } from '../calculations/objLists'
import { getKeysArr, outcomePerSetup, getArrOfArrsTrades } from '../calculations/calcBaseOnKey'
import { getAvarageR, getTotalR } from '../calculations/calcR'
import { getHitRatio } from '../calculations/calcOutcomes'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles({
  tableContainer: {
    background: '#fff',
    borderCollapse: 'collapse',
    boxShadow: '1px 1px 3px',
    width: '100%'
  },
  table: {
    minWidth: 700,
  },
  mainHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  heading: {
    fontWeight: 'bold',
  },
  row: {
    padding: '1rem 2rem',
  }
})

//const bestSetup = outcomePerSetup(trades, 'win').mostCountedSetup
//const bestSetupWins = outcomePerSetup(trades, 'win').arrOfMostCountedSetup
//const worstSetup = outcomePerSetup(trades, 'loss').mostCountedSetup
// const worstSetupLosses = outcomePerSetup(trades, 'loss').arrOfMostCountedSetup
//const listAllSetups = getObjectCountList(allSetups)
// const setupsListArr = objListToArr(listAllSetups)

const StatsSetups = ({ trades, useKey }) => {
  const classes = useStyles()
  const allSetups = getKeysArr(trades, useKey)
  const arrOfArrsSetups = getArrOfArrsTrades(trades, allSetups, useKey)

  return (
    <TableContainer className={classes.tableContainer} components={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.mainHeading}>Setup</TableCell>
            <TableCell className={classes.heading} align="right">WinRate</TableCell>
            <TableCell className={classes.heading} align="right">R</TableCell>
            <TableCell className={classes.heading} align="right">Trades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allSetups && arrOfArrsSetups.map((singleArr, i) => (
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

const mapStateToProps = (state) => {
  return {
    trades: state.trades.filter((trade) => trade.status === 'closed')
  }
}

export default connect(mapStateToProps)(StatsSetups)