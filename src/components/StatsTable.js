import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
//import { getObjectCountList, objListToArr } from '../calculations/objLists'
import { getKeysArr, outcomePerSetup, getArrOfArrsTrades } from '../calculations/calcBasedOnKey'
import { getAvarage, getTotal } from '../calculations/calcR'
import { getWinRatio } from '../calculations/calcOutcomes'
import { capitalize } from '../helpers/capitalize'

const useStyles = makeStyles({
  tableContainer: {
    background: '#fff',
    borderCollapse: 'collapse',
    boxShadow: '2px 2px 4px',
    //border: '1px solid #eee',
    margin: '2rem',
    width: '100%',
    '@media(max-width: 850px)': {
      margin: '1rem 0',
    }
  },
  tableHead: {
    background: '#fafafa',
    fontWeight: 'bold',
  },
  mainHeading: {
    color: '#f50057',
    fontWeight: 'bold',
  },
  heading: {
    fontWeight: 'bold',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
})

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
          <TableRow>
            <TableCell key={keyOfUse} className={classes.mainHeading}>{capitalize(keyOfUse)}</TableCell>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id} className={classes.heading}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {allKeyOfUse && arrOfArrsKeyOfUse.map((singleArr, i) => {
            return (
              <TableRow key={`${keyOfUse}-${i}`}>
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