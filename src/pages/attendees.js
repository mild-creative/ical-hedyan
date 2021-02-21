import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ReactExport from "react-data-export";

import firebase from '../firebase';
import useStyles from '../styles/attendees';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const columns = [{
  id: 'name',
  label: 'Name',
  minWidth: 100
}, {
  id: 'address',
  label: 'Address'
}];

function Attendees() {
  const classes = useStyles();
  // const db = firebase.firestore();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchAttendees = async () => {
    // setLoading(true);
    // try {
    //   await db.collection('attendees').orderBy('createdDate', 'desc').onSnapshot((querySnapshot) => {
    //     let guests = [];
    //     querySnapshot.forEach(function (doc) {
    //       guests.push(doc.data());
    //     });
    //     setAttendees(guests);
    //   });
    // } finally {
    //   setLoading(false);
    // }
  }

  useEffect(() => {
    fetchAttendees();
  }, []);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
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
            {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => { */}
            {attendees.map((row) => {
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
      {console.log(attendees)}
      <ExcelFile>
        <ExcelSheet data={attendees} name="Attendees">
          <ExcelColumn label="Nama" value="name" />
          <ExcelColumn label="Alamat" value="address" />
        </ExcelSheet>
      </ExcelFile>
    </Paper>
  );
}

export default Attendees;