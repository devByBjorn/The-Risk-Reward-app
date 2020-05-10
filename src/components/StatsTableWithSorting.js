import React, { useState } from 'react'
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
import { getHitRatio } from '../calculations/calcOutcomes'
import { capitalize } from '../helpers/capitalize'

const useStyles = makeStyles({
  heading: {
    fontWeight: 'bold',
  },
  mainHeading: {
    color: '#f50057',
    fontWeight: 'bold',
  },
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
  rowBody: {
    color: '#fff',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#eee',
      boxShadow: '1px 1px 4px 2px rgba(0,0,0,0.75)',
    }
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
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const StatsTable = ({ trades, useKey }) => {

  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('winRate')

  const classes = useStyles()
  const allSetups = getKeysArr(trades, useKey)
  const arrOfArrsSetups = getArrOfArrsTrades(trades, allSetups, useKey)

  const headCells = [
    //{ id: `${useKey}`, numeric: false, label: `${capitalize(useKey)}` },
    { id: 'winRate', numeric: true, label: 'WinRate' },
    { id: 'r', numeric: true, label: 'R' },
    { id: 'trades', numeric: true, label: 'Trades' },
  ]

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
    console.log('hello')
  }

  const createSortHandler = (property) => (event) =>
    handleRequestSort(event, property)


  return (
    <TableContainer className={classes.tableContainer} components={Paper}>
      <Table aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.mainHeading}>{`${capitalize(useKey)}`}</TableCell>
            {headCells.map((headCell) => (
              <TableCell
                className={classes.heading}
                key={headCell.id}
                align="left"
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >{headCell.label}
                  {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {allSetups && stableSort(arrOfArrsSetups, getComparator(order, orderBy))
            .map((singleArr, i) => (
              <TableRow
                className={classes.rowBody}
                key={i}
              >
                <TableCell className={classes.heading} component="th" scope="row">
                  {`${singleArr[0][useKey].toUpperCase()}`}
                </TableCell>
                <TableCell>{`${getHitRatio(singleArr)}%`}</TableCell>
                <TableCell>{`${getTotal(singleArr, 'rMultiple')}`}</TableCell>
                <TableCell>{`${singleArr.length}`}</TableCell>
              </TableRow>
            ))}

          {/*stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
          allSetups && arrOfArrsSetups.map((singleArr, i) => (
            <TableRow 
            className={classes.rowBody}
            key={row.name}
            >
              <TableCell className={classes.heading} component="th" scope="row">
                {`${singleArr[0][useKey].toUpperCase()}`}
              </TableCell>
              <TableCell>{`${getHitRatio(singleArr)}%`}</TableCell>
              <TableCell>{`${getTotal(singleArr, 'rMultiple')}`}</TableCell>
              <TableCell>{`${singleArr.length}`}</TableCell>
            </TableRow>
          ))
        })*/}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})



export default connect(mapStateToProps)(StatsTable)