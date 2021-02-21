import React, { useRef, useState, useEffect } from 'react';
import { Container, Snackbar, Button, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Lottie from 'react-lottie';
import MuiAlert from '@material-ui/lab/Alert';
import Navbar from '../components/navbar';
import useStyles from '../styles/penerima-tamu';
import animationData from '../lotties/success-animation.json';
// import firebase from '../firebase';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function PenerimaTamu() {
  const classes = useStyles();
  const inputRef = useRef(null);
  // const db = firebase.firestore();
  const [comments, setComments] = useState([]);
  const [autoComplete, setAutoComplete] = useState([]);
  const [loadingSubmit, setLoading] = useState(false);
  const [submitSuccess, setSubmitSucces] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    fetchCommentsFromFB();
  }, []);

  const fetchCommentsFromFB = async () => {
    // const dataFB = await db.collection('comments').where('coming', '==', 'true').orderBy('createdDate', 'desc').get();
    // const cleanData = dataFB.docs.map(doc => doc.data());
    // setComments(cleanData);
  }

  useEffect(() => {
    let names = [];
    comments.map(com => {
      // if (com.coming === 'true') {
        let regex = new RegExp(name, 'gi');
        let res = com.name.match(regex);
        if (res) {
          names = [...names, com.name]
        }
      // }
    })
    setAutoComplete(names);
  }, [name, comments]);

  const handleSubmit = () => {
    // setLoading(true);
    // try {
    //   db.collection('attendees').add({
    //     name, address,
    //     createdDate: Date.now()
    //   });
    // } finally {
    //   setLoading(false);
    //   setSubmitSucces(true);
    //   setTimeout(() => {
    //   }, 2000)
    // }
  }

  return (
    <>
      {!submitSuccess && (
        <>
          <Navbar />
          <Container maxWidth="md" className={classes.formContainer}>
            <ValidatorForm
              ref={inputRef}
              onSubmit={handleSubmit}
              onError={errors => console.log(errors)}
              className={classes.formWrapper}
            >
              <Autocomplete
                id="name"
                freeSolo
                options={autoComplete}
                onInputChange={(e, val, reason) => setName(val)}
                renderInput={(params) => (
                  <TextValidator
                    {...params}
                    label="Guest Name"
                    // id="name"
                    size="small"
                    type="text"
                    variant="outlined"
                    value={name}
                    onChange={handleChange}
                    validators={['required']}
                    errorMessages={['Name field is required']}
                  />
                )}
              />
              {/* <TextValidator
                label="Guest Name"
                id="name"
                size="small"
                type="text"
                variant="outlined"
                value={name}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['Name field is required']}
              /> */}
              <TextValidator
                label="Address"
                id="address"
                size="small"
                type="text"
                variant="outlined"
                value={address}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['Address field is required']}
              />
              <Button disabled={loadingSubmit} type="submit" variant="outlined" className={classes.button}>
                {loadingSubmit ? 'Submitting...' : 'Submit'}
              </Button>
              {/* // TO DO handle error */}
              {/* <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {`Form submitted`}
            </Alert>
          </Snackbar> */}
            </ValidatorForm>
          </Container>
        </>
      )}
      {submitSuccess && (
        <Container className={classes.animationContainer}>
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            speed={0.85}
          />
          <Typography>Thank you for coming!</Typography>
        </Container>
      )}
    </>
  )
}

export default PenerimaTamu;