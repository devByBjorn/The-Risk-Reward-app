import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  tableContainer: {
    background: '#fff',
    borderCollapse: 'collapse',
    borderRadius: '10px',
    boxShadow: '5px 5px 20px 15px #eee',
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

export default useStyles