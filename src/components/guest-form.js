import React, { useRef, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Button, Snackbar, Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Select
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from '../styles/comment';
import { CODES } from '../constants';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function GuestForm({
  handleSubmit,
  loadingSubmit,
  setAlertOpen,
  msg,
  alertOpen,
  handleChange,
  name,
  whoAmI,
  upload,
  nameUpload,
  coming,
  guest
}) {
  const classes = useStyles();
  const inputRef = useRef(null);
  const query = window.location.pathname?.substr(1);

  useEffect(() => {
    ValidatorForm.addValidationRule('msgChars', (value) => {
      if (value.length > 160) {
        return false;
      }
      return true;
    });
  }, [msg]);

  useEffect(() => {
    ValidatorForm.addValidationRule('nameChars', (value) => {
      if (value.length > 20) {
        return false;
      }
      return true;
    });
  }, [name]);

  useEffect(() => {
    ValidatorForm.addValidationRule('whoamiChars', (value) => {
      if (value.length > 20) {
        return false;
      }
      return true;
    });
  }, [whoAmI]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <ValidatorForm
      ref={inputRef}
      onSubmit={handleSubmit}
      onError={errors => console.log(errors)}
      className={classes.formWrapper}
    >
      {!upload && (
        <>
          <div>
            <TextValidator
              label="Name"
              id="name"
              size="small"
              type="text"
              variant="outlined"
              value={name}
              onChange={handleChange}
              validators={['required', 'nameChars']}
              errorMessages={['Name field is required', 'Name fields should not be more than 20 characters']}
            />
          </div>
          {/* <section>
            <FormLabel component="legend">Are you coming?</FormLabel>
            <RadioGroup aria-label="rsvp" name="rsvp" value={coming} onChange={handleChange}>
              <FormControlLabel value={'true'} control={<Radio />} label="Accept with pleasure" />
              <FormControlLabel value={'false'} control={<Radio />} label="Sad to miss it 😢" />
            </RadioGroup>
          </section> */}
          <div>
            <TextValidator
              label="Who Am I? (e.g. Temen Main)"
              id="whoAmI"
              size="small"
              type="text"
              variant="outlined"
              value={whoAmI}
              onChange={handleChange}
              validators={['required', 'whoamiChars']}
              errorMessages={['Who Am I field is required', 'WhoAmI field should not be more than 20 characters']}
            />
          </div>
          {/* <div>
            <FormLabel component="legend" style={{ marginBottom: '1rem' }}>Number Attending:</FormLabel>
            <FormControl disabled={query === CODES.ONE_GUEST_FIRST_SESSION || coming === 'false'} variant="outlined" className={classes.formControl}>
              <Select
                name="guest"
                native
                value={guest}
                onChange={handleChange}
              // size="small"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </Select>
            </FormControl>
          </div> */}
          <div className={classes.msgWrapper}>
            <TextValidator
              label="Message"
              id="msg"
              size="medium"
              type="text"
              multiline={true}
              variant="outlined"
              value={msg}
              onChange={handleChange}
              validators={['required', 'msgChars']}
              errorMessages={['Message field is required', 'Message should be less than 160 characters']}
            />
          </div>
        </>
      )}
      {upload && (<>
        <div>
          <TextValidator
            label="Name"
            id="name"
            size="small"
            type="text"
            variant="outlined"
            value={nameUpload}
            onChange={(e) => { handleChange(e) }}
            validators={['required']}
            errorMessages={['Name field is required']}
          />
        </div>
        <div>
          <TextValidator
            id="file"
            size="small"
            type="file"
            variant="outlined"
            value={name}
            onChange={(e) => { handleChange(e) }}
            validators={['required']}
            errorMessages={['File field is required']}
          />
        </div>
        <p style={{ textDecoration: 'underline' }}>
          max file 15 MB
        </p>
      </>
      )}
      {
        upload
          ? <Button disabled={loadingSubmit || (coming === 'true' && Number(guest) === 0)} type="submit" variant="outlined" className={classes.button}>
            {/* ? <Button disabled={true} type="submit" variant="outlined" className={classes.button}> */}
            {loadingSubmit ? 'Submitting...' : 'Submit'}
          </Button>
          : <Button disabled={loadingSubmit || (coming === 'true' && Number(guest) === 0)} type="submit" variant="outlined" className={classes.button}>
            {/* : <Button disabled={true} type="submit" variant="outlined" className={classes.button}> */}
            {loadingSubmit ? 'Submitting...' : 'Submit'}
          </Button>
      }
      <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {upload ? `Upload success` : `Success submit comment`}
        </Alert>
      </Snackbar>
    </ValidatorForm>
  );
}

export default GuestForm;