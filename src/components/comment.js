import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import GuestForm from './guest-form';
import useStyles from '../styles/comment';
// import firebase from '../firebase';
import { CODES } from '../constants';

function Comment() {
  const classes = useStyles();
  // const query = window.location.search?.substr(1);
  const query = window.location.pathname?.substr(1);
  // const db = firebase.firestore();
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(1);
  const [loadingSubmit, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [commentPage, setPage] = useState(0);
  const [name, setName] = useState('');
  const [whoAmI, setWhoAmI] = useState('');
  const [guest, setGuest] = useState(1);
  const [msg, setMsg] = useState('');
  const [coming, setComing] = useState('true');

  useEffect(() => {
    fetchCommentsFromFB();
  }, [])

  const fetchCommentsFromFB = async (page) => {
    // setFetchLoading(true);
    // try {
    //   const dataFB = await db.collection('comments').orderBy('createdDate', 'desc').get();
    //   const cleanData = dataFB.docs.map(doc => doc.data());
    //   setComments(cleanData);
    //   setCount(Math.ceil(dataFB.size / 10));
    // } finally {
    //   setFetchLoading(false);
    // }
  }

  const handleSubmit = () => {
    // setLoading(true);
    // const dataToSubmit = {
    //   name, coming, whoAmI, msg,
    //   guest: query === CODES.ONE_GUEST_FIRST_SESSION ? 1 : guest,
    //   createdDate: Date.now()
    // }
    // try {
    //   db.collection('comments').add(dataToSubmit);
    // } finally {
    //   fetchCommentsFromFB();
    //   resetField();
    //   setAlertOpen(true);
    //   setLoading(false);
    // }
  }

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    if (!id && name) {
      switch (name) {
        case 'rsvp':
          setComing(value);
          break;
        case 'guest':
          setGuest(value);
          break;
        default:
          break;
      }
    }
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'whoAmI':
        setWhoAmI(value);
        break;
      case 'msg':
        setMsg(value);
        break;
      default:
        break;
    }
  }

  const resetField = () => {
    setName('');
    setWhoAmI('');
    setMsg('');
  }

  const onChangePage = (_, page) => {
    setPage(page - 1);
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.guestBook}>Greetings</Typography>
      <GuestForm
        handleSubmit={handleSubmit}
        loadingSubmit={loadingSubmit}
        setAlertOpen={setAlertOpen}
        msg={msg}
        alertOpen={alertOpen}
        handleChange={handleChange}
        name={name}
        whoAmI={whoAmI}
        coming={coming}
        guest={guest}
      />
      <hr />
      {fetchLoading && <h3>Loading ...</h3>}
      {/* {!fetchLoading && comments.map((comment) => ( */}
      {!fetchLoading && comments.slice(commentPage * 10, commentPage * 10 + 10).map((comment) => (
        <div key={comment.email}>
          <p>
            <span className={classes.name}>{comment.name} </span>
            <span className={classes.email}>{`(${comment.whoAmI})`}</span>
          </p>
          <Typography>{comment.msg}</Typography>
          <hr />
        </div>
      ))}
      <Pagination
        count={count}
        variant="outlined"
        defaultPage={1}
        page={commentPage + 1}
        onChange={onChangePage}
      />
    </Container>
  );
}

export default Comment;