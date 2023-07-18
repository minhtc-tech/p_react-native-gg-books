import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_MORE_DATA_SUCCESS,
  CLEAR_DATA,
} from '../constants/actionType';
import { fetchBooksData } from '../services/httpRequests';

const fetchDataError = () => (
  {
    type: FETCH_DATA_ERROR,
    payload: { items: false },
  }
);

const fetchDataRequest = () => (
  {
    type: FETCH_DATA_REQUEST,
    payload: { isLoading: true },
  }
);

const fetchDataSuccess = (items) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: { items },
  }
);

const fetchMoreDataSuccess = (items) => (
  {
    type: FETCH_MORE_DATA_SUCCESS,
    payload: { items },
  }
);

const clearData = () => (
  {
    type: CLEAR_DATA,
    payload: {},
  }
);

export const fetchData = (searchTerm, filter, order, loadMore = false, pageNum = 0) => (
  (dispatch) => {
    if (!loadMore) {
      dispatch(clearData());
    };
    dispatch(fetchDataRequest());
    return fetchBooksData(searchTerm, filter, order, pageNum)
      .then((bookItems) => {
        if (loadMore) {
          dispatch(fetchMoreDataSuccess(bookItems));
        } else {
          dispatch(fetchDataSuccess(bookItems));
        };
      })
      .catch((err) => {
        console.log(`Error with fetch data dispatch: ${err}`);
        dispatch(fetchDataError());
      });
  }
);