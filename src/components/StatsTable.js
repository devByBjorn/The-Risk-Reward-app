import React from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
//import { getObjectCountList, objListToArr } from '../calculations/objLists'
import { getKeysArr, outcomePerSetup, getArrOfArrsTrades } from '../calculations/calcBasedOnKey'
import { getAvarageR, getTotalR } from '../calculations/calcR'
import { getHitRatio } from '../calculations/calcOutcomes'
import { capitalize } from '../helpers/capitalize'

const useStyles = makeStyles({
  tableContainer: {
    background: '#fff',
    borderCollapse: 'collapse',
    //boxShadow: '1px 1px 3px',
    border: '1px solid #eee',
    margin: '2rem',
    width: '100%',
    '@media(max-width: 850px)': {
      margin: '1rem 0',
    }
  },
  mainHeading: {
    color: '#d93025',
    fontWeight: 'bold',
  },
  heading: {
    fontWeight: 'bold',
  },
})

//const bestSetup = outcomePerSetup(trades, 'win').mostCountedSetup
//const bestSetupWins = outcomePerSetup(trades, 'win').arrOfMostCountedSetup
//const worstSetup = outcomePerSetup(trades, 'loss').mostCountedSetup
// const worstSetupLosses = outcomePerSetup(trades, 'loss').arrOfMostCountedSetup
//const listAllSetups = getObjectCountList(allSetups)
// const setupsListArr = objListToArr(listAllSetups)

const StatsTable = ({ trades, useKey }) => {
  const classes = useStyles()
  const allSetups = getKeysArr(trades, useKey)
  const arrOfArrsSetups = getArrOfArrsTrades(trades, allSetups, useKey)

  return (
    <TableContainer className={classes.tableContainer} components={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.mainHeading}>{capitalize(useKey)}</TableCell>
            <TableCell className={classes.heading} align="right">WinRate</TableCell>
            <TableCell className={classes.heading} align="right">R</TableCell>
            <TableCell className={classes.heading} align="right">Trades</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allSetups && arrOfArrsSetups.map((singleArr, i) => (
            <TableRow key={i}>
              <TableCell className={classes.heading} component="th" scope="row">
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

export default connect(mapStateToProps)(StatsTable)