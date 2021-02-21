import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  top: {
    letterSpacing: '2px',
    color: 'rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1.5rem'
    }
  },
  couplesName: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px'
    }
  },
  and: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '20px'
  },
  openerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    "& p": {
      marginBottom: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      '& p': {
        marginBottom: '1.3rem'
      }
    }
  },
  containerOpener: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '3.5rem'
    }
  },
  buttonOpen: {
    backgroundColor: '#010101',
    color: '#FFFFFF',
    transition: 'opacity 1.5s',
    width: '55%',
    textTransform: 'none',
    height: '40px',
    fontSize: '16px',
    marginBottom: '4rem',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#FFFFFF'
    }
  },
  brand: {
    letterSpacing: '1.5px',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  appbar: {
    backgroundColor: '#FFFFFF',
    height: '80px',

    '& h6': {
      color: 'rgba(1,1,1,0.8)',
      fontSize: '14px',
      transition: '0.5s',
      marginRight: '5%',
      cursor: 'pointer'
    },
    '& h6:hover': {
      opacity: '0.5'
    },
    '& .MuiToolbar-dense': {
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  },
  brandName: {
    textDecoration: 'none',
    '& p': {
      color: '#000000',
      fontFamily: `'Halimun', cursive`,
      fontSize: '20px'
    }
  },
  theWedding: {
    letterSpacing: '15px',
    fontSize: '15px',
    marginTop: '10px'
  },
  videoBackground: {
    objectFit: 'cover',
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.4
  },
  btnFlip: {
    opacity: 1,
    marginBottom: '4rem',
    width: '150px',
    outline: 0,
    color: '#fff',
    lineHeight: '40px',
    position: 'relative',
    textAlign: 'center',
    letterSpacing: '1px',
    display: 'inline-block',
    textDecoration: 'none',
    fontFamily: 'Open Sans',
    textTransform: 'uppercase',
    
    '&:hover': {
      '&:after': {
        opacity: 1,
        transform: 'translateY(0) rotateX(0)',
      },
      '&:before': {
        opacity: 0,
        transform: 'translateY(50%) rotateX(90deg)',
      }
    },
    
    '&:after': {
      top: 0,
      left: 0,
      opacity: 0,
      width: '100%',
      color: '#323237',
      display: 'block',
      transition: '0.5s',
      position: 'absolute',
      background: '#adadaf',
      content: 'attr(data-back)',
      transform: 'translateY(-50%) rotateX(90deg)',
    },
    
    '&:before': {
      top: 0,
      left: 0,
      opacity: 1,
      color: '#adadaf',
      display: 'block',
      padding: '0 30px',
      lineHeight: '40px',
      transition: '0.5s',
      position: 'relative',
      background: '#323237',
      content: "attr(data-front)",
      transform: 'translateY(0) rotateX(0)',
    }
  }
}))

export default useStyles;