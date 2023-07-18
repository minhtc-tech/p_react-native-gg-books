import config from '../lib/config';

export const fetchBooksData = (searchTerm, filter, order, pageNum) => {
  const maxResults = 10;
  const startIndex = pageNum * maxResults;
  const url = `${config.API_URL}books/v1/volumes`
    + `?q=${searchTerm}`
    + `&filter=${filter}`
    + `&orderBy=${order}`
    + `&maxResults=${maxResults}`
    + `&startIndex=${startIndex}`;

  // console.log('><--><><--><><--><><--><><--><><--><');
  // console.log(url);
  // console.log('><--><><--><><--><><--><><--><><--><');

  return (
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.items)
      .catch((err) => err)
  );
};

export const fetchBookDetailsData = (id) => {
  const url = `${config.API_URL}books/v1/volumes/${id}`;

  console.log('><--><><--><><--><><--><><--><><--><');
  console.log(url);
  console.log('><--><><--><><--><><--><><--><><--><');

  return (
    fetch(url)
      .then((res) => res.json())
      .then((result) => result)
      .catch((err) => {
        console.log(err);
        return false;
      })
  );
};