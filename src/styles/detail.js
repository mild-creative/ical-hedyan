import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  detailContainer: {
    marginBottom: '3.5rem'
  },
  topContainer: {
    width: '50%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '70%'
    },
    marginBottom: '4rem'
  },
  spousesName: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '40px'
  },
  bismillah: {
    fontFamily: `'Halimun', cursive`,
    fontSize: '25px',
    marginBottom: '1rem'
  },
  profileGrid: {
    marginTop: '2rem',
    marginBottom: '2rem',

    '& img': {
      borderRadius: '50%',
      border: '2px solid white',
      width: 240,
      height: 'intrinsic',
      [theme.breakpoints.down('sm')]: {
        width: '200px'
      },
      [theme.breakpoints.down('xs')]: {
        width: '105px',
        height: '105px'
      }
    }
  },
  leftProfile: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      '& div': {
        width: '100%'
      }
    }
  },
  leftImage: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  profileName: {
    fontSize: '30px',
    fontWeight: 800,
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    }
  },
  profileKeterangan: {
    fontSize: '12px',
    fontWeight: 800,
    lineHeight: 3
  },
  parents: {
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      }
    }
  }
}));

export default useStyles;