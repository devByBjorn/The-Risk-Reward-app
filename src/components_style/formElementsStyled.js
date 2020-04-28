import { makeStyles } from '@material-ui/core/styles'

const formElementsStyled = makeStyles((theme) => ({
  arrow: {
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(5, 0, 0, 0),
    width: '100%',
  },
  button: {
    background: '#f50057',
    color: '#fff',
    margin: theme.spacing(1, 1, 0, 0),
    width: '50%',
    '&:hover': {
      background: '#3f51b5'
    }
  },
  date: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1rem'
  },
  dateWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    padding: theme.spacing(2, 0)
  },
  helperText: {
    color: '#d93025',
  },
  formControl: {
    margin: theme.spacing(7),
  },
  formgGroup: {
    display: 'inline-block'
  },
  formLabel: {
    fontWeight: 600,
    margin: theme.spacing(0, 0, 1, 0),
    display: 'inline-block',
  },
  textArea: {
    margin: theme.spacing(2, 0, 0, 0),
    maxWidth: '100%',
    padding: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(5, 0),
  }
}))

export default formElementsStyled