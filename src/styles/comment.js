  import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '3.5rem'
  },
  // formControl: {
  //   width: '100%',
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
  guestBook: {
    fontFamily: `'Satisfy', cursive`,
    fontSize: '35px',
    marginBottom: '1rem',
    marginTop: '2.5rem'
  },
  button: {
    boxShadow: '2px 2px grey',
    width: '200px'
  },
  formWrapper: {
    marginBottom: '2rem',
    '& input, textarea, select': {
      width: 300,
      [theme.breakpoints.down('xs')]: {
        width: '75vw'
      }
    },
    '& div': {
      marginBottom: '.4rem'
    },
    '& .MuiSelect-outlined': {
      padding: '0px 14px',
      height: '40px'
    },
  },
  msgWrapper: {
    '& .MuiOutlinedInput-root': {
      height: '100px'
    }
  },
  email: {
    color: 'grey'
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold'
  }
}));

export default useStyles;