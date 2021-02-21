import api from './base-url';

export const getGallery = (page = 1) => {
  return api().get('/gallery', { params: { page } })
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    })
}

export const postGallery = (data) => {
  return api().request({
    url:'/gallery',
    method:'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: data
  })
  .then(data => {
    return data
  })
  .catch(err => {
    return err
  })
}