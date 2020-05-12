import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
//import { getObjectCountList, objListToArr } from '../calculations/objLists'
import { getKeysArr, outcomePerSetup, getArrOfArrsTrades } from '../calculations/calcBasedOnKey'
import { getAvarage, getTotal } from '../calculations/calcR'
import { getWinRatio } from '../calculations/calcOutcomes'
import { capitalize } from '../helpers/capitalize'
import useStyles from '../components_style/StatsTableStyle'

//const bestSetup = outcomePerSetup(trades, 'win').mostCountedSetup
//const bestSetupWins = outcomePerSetup(trades, 'win').arrOfMostCountedSetup
//const worstSetup = outcomePerSetup(trades, 'loss').mostCountedSetup
// const worstSetupLosses = outcomePerSetup(trades, 'loss').arrOfMostCountedSetup
//const listAllSetups = getObjectCountList(allSetups)
// const setupsListArr = objListToArr(listAllSetups)

const StatsTable = ({ trades, keyOfUse }) => {
  const classes = useStyles()
  const allKeyOfUse = getKeysArr(trades, keyOfUse)
  const arrOfArrsKeyOfUse = getArrOfArrsTrades(trades, allKeyOfUse, keyOfUse)

  const headCells = [
    //{ id: `${keyOfUse}`, numeric: false, label: `${capitalize(keyOfUse)}` },
    { id: 'winRate', numeric: false, label: 'WinRate' },
    { id: 'r', numeric: false, label: 'R' },
    { id: 'trades', numeric: false, label: 'Trades' },
  ]

  return (
    <TableContainer className={classes.tableContainer} components={Paper}>
      <Table aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow className={classes.tableRow}>
            <TableCell key={keyOfUse} className={classes.mainHeading}>{capitalize(keyOfUse)}</TableCell>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id} className={classes.heading}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {allKeyOfUse && arrOfArrsKeyOfUse.map((singleArr, i) => {
            return (
              <TableRow className={classes.tableRow} key={`${keyOfUse}-${i}`}>
                <TableCell
                  key={`${singleArr[0][keyOfUse]}`}
                  className={classes.heading}
                  component="th" scope="row">{`${singleArr[0][keyOfUse].toUpperCase()}`}
                </TableCell>
                <TableCell>{`${getWinRatio(singleArr)}%`}</TableCell>
                <TableCell>{`${getTotal(singleArr, 'rMultiple')}`}</TableCell>
                <TableCell>{`${singleArr.length}`}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})



export default connect(mapStateToProps)(StatsTable)