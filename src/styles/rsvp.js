import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: `'Satisfy', cursive`,
    fontSize: '35px',
    marginBottom: '1rem',
    marginTop: '2.5rem'
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
  button: {
    boxShadow: '2px 2px grey',
    width: '200px'
  }
}));

export default useStyles;