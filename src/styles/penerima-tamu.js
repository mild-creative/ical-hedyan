import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: '2.5rem',
    display: 'flex',
    justifyContent: 'center'
  },  
  button: {
    boxShadow: '2px 2px grey',
    width: '100%'
  },
  formWrapper: {
    marginBottom: '2rem',
    '& input, textarea': {
      width: 300,
      [theme.breakpoints.down('xs')]: {
        width: '75vw'
      }
    },
    '& div': {
      marginBottom: '.4rem'
    }
  },
  animationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    '& p': {
      fontSize: '21px'
    }
  }
}));
export default useStyles;