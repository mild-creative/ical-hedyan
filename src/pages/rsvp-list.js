import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
// import firebase from '../firebase';
import useStyles from '../styles/rsvp';

let attendeesComing = 0;

const columns = [{
  id: 'name',
  label: 'Name',
  // minWidth: 100
}, {
  id: 'whoAmI',
  label: 'Who Am I'
}, {
  id: 'coming',
  label: 'RSVP'
}, {
  id: 'msg',
  label: 'Message'
}, {
  id: 'guest',
  label: 'Guest'
}];

function RsvpList() {
  const classes = useStyles();
  // const db = firebase.firestore();
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  const [msgs, setMsgs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
  //   setLoading(true);
  //   try {
  //     const dataFromDB = await db.collection('comments').orderBy('createdDate', 'desc').get();
  //     const commentsData = dataFromDB.docs.map(doc => doc.data());
  //     commentsData.forEach(c => attendeesComing += Number(c.guest));
  //     setCount(Math.ceil(dataFromDB.size / 10));
  //     setMsgs(commentsData);
  //   } finally {
  //     setLoading(false);
  //   }
  }

  const onChangePage = (_, page) => {
    setPage(page - 1);
  }

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && <h5 style={{ marginLeft: '1rem' }}>Loading ...</h5>}
              {!loading && msgs.slice(page * 10, page * 10 + 10).map((row) => {
                // {!loading && msgs.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Pagination
        count={count}
        variant="outlined"
        defaultPage={1}
        page={page + 1}
        onChange={onChangePage}
        style={{marginTop: '1rem'}}
      />
      <section>
        <p>
          <span>Total Coming:</span>
          <span>{`  ${attendeesComing}`}</span>
        </p>
      </section>
    </>
  );
}

export default RsvpList;