import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Snackbar } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import MuiAlert from '@material-ui/lab/Alert';

// import GuestForm from './input-form';
import GuestForm from './guest-form';
import useStyles from '../styles/gallery';
import VideoThumb from '../assets/video-icon.png';
import { detect } from 'detect-browser';
// import firebase, { storage } from '../firebase';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Gallery() {
  const classes = useStyles();
  // const db = firebase.firestore();
  const [gallery, setGallery] = useState([]);
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState('');
  const [type, setType] = useState('');
  const [file_, setFile] = useState('');
  const [loadingSubmit, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [alertErrOpen, setErrOpen] = useState(false);
  const [msgAfterSubmit, setMsg] = useState('');
  const [commentPage, setPage] = useState(0);
  const [guestFile, setGuestFile] = useState('');
  const [nameUpload, setNameUpload] = useState('');

  useEffect(() => {
    fetchGallery();
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrOpen(false);
  };

  const onSubmit = () => {
    setLoading(true);

    try {
      formData.append('name', nameUpload)
      const fileSize = file_ && parseInt(file_.size, 10);
      // if (fileSize > 3000000) {
      if (fileSize > 15000000) {
        throw new Error();
        // return;
      }
      uploadFile();
    } catch (error) {
      setErrOpen(true);
      setMsg('File is too large, please try another file');
    }
  }

  const uploadFile = () => {
  //   var metadata = {};
  //   if (type === 'image') {
  //     metadata['contentType'] = 'image/jpeg';
  //   } else {
  //     metadata['contentType'] = 'video/mp4';
  //   }

  //   const uploadTask = storage.ref(`gallery/${nameUpload}`).put(file_, metadata);
  //   uploadTask.on(
  //     'state_changed',
  //     snapshot => {},
  //     error => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref('gallery')
  //         .child(nameUpload)
  //         .getDownloadURL()
  //         .then(url => {
  //           db.collection('gallery').add({
  //             name: nameUpload,
  //             url,
  //             type: metadata.contentType,
  //             createdDate: Date.now()
  //           });
  //           setLoading(false);
  //           fetchGallery();
  //           resetField();
  //         })
  //     }
  //   )
  }

  const handleChange = (e) => {
    // switch (e.target.id) {
    //   case 'name':
    //     setNameUpload(e.target.value)
    //     break;
    //   default:
    //     const selectedFile = e.target.files[0];
    //     const fileType = selectedFile.type;
    //     setType(fileType.substring(0, 5));
    //     let formData = new FormData()
    //     formData.append('image', e.target.files[0])
    //     setFile(e.target.files[0]);
    //     setFormData(formData);
    //     setGuestFile(e.target.value)
    //     break;
    // }
  }

  const resetField = () => {
    setGuestFile('');
    setFormData('')
    setNameUpload('')
  }

  const fetchGallery = async (showPage) => {
    // setFetchLoading(true);
    // try {
    //   const dataFB = await db.collection('gallery').orderBy('createdDate', 'desc').get();
    //   const galleryData = dataFB.docs.map(doc => doc.data());
    //   setGallery(galleryData);
    //   setCount(Math.ceil(dataFB.size / 4));
    // } finally {
    //   setFetchLoading(false);
    // }
  }

  const onChangePage = (_, page) => {
    setPage(page - 1);
    // fetchGallery(page);
  }

  return (
    <Container className={classes.container}>
      <Typography className={classes.guestBook}>Guest Gallery</Typography>
      <GuestForm
        handleSubmit={onSubmit}
        loadingSubmit={loadingSubmit}
        setAlertOpen={setAlertOpen}
        alertOpen={alertOpen}
        handleChange={handleChange}
        name={guestFile}
        nameUpload={nameUpload}
        upload={true}
      />
      <Grid container className={classes.galleryContainer} spacing={2}>
        {/* {gallery.map(content => ( */}
        {gallery.slice(commentPage * 4, commentPage * 4 + 4).map((content) => (
          <Grid item xs={6} md={4} lg={3} className={classes.eachGallery}>
            {(content.type === 'image/jpeg' || content.type === 'image/png') && (
              <a href={content.url} target="_blank" rel="noopener noreferrer">
                <img src={content.url} alt={content.url} className={classes.galleryImg} />
              </a>
            )}
            {content.type === 'video/mp4' && detect().os == 'Android OS'
              ? <video poster={VideoThumb} style={{ width: '100%' }} muted src={content.url} playsInline controls className={classes.galleryImg} />
              : content.type === 'video/mp4'
                ? <video preload='metadata' style={{ width: '100%' }} muted src={content.url + '#t=0.1'} playsInline controls className={classes.galleryImg} />
                : null
            }
            <Typography align="center">{`@${content?.name ?? '-'}`}</Typography>
          </Grid>
        ))}
      </Grid>
      <Snackbar open={alertErrOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {!!msgAfterSubmit ? msgAfterSubmit : 'Something went wrong'}
        </Alert>
      </Snackbar>
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

export default Gallery;