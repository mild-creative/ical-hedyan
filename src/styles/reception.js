import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  receptionContainer: {
    marginBottom: '3.5rem'
  },
  saveTheDate: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '45px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '35px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '27.5px'
    },
    marginBottom: '1.3rem'
  },
  akadNikah: {
    fontWeight: 800,
    fontSize: '25px',
    marginBottom: '2rem !important'
  },
  infoWithIcons: {
    '& p': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem'
    },
    '& img': {
      marginRight: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem'
    }
  },
  infoIconsTextWrapper: {
    // [theme.breakpoints.up('md')]: {
    //   width: '60%',
    // },
    margin: '0 auto',
  },

  countDownEach: {
    borderRadius: '3px',
    background: 'rgba(1,1,1,0.3)',
    width: '50%',
    height: '30%',
    padding: '1rem',
    '& p': {
      fontSize: '12px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '45%'
    }
  },
  numberCounter: {
    fontSize: '35px !important',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px !important'
    }
  },
  placeInfo: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem'
    }
  },
  placeInfoLink: {
    // textDecoration: 'none',
    color: '#000000'
  }
}));

export default useStyles;