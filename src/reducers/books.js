import {
  CLEAR_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_MORE_DATA_SUCCESS,
} from '../constants/actionType';

const initialState = {
  items: [],
  isLoading: false,
  isFullLoaded: false,
};

export const getBooksSelector = (state) => ({ ...state.books });

const booksReducer = (state = initialState, action) => {
  // console.log(state);

  switch (action.type) {
    case CLEAR_DATA: {
      return {
        isLoading: state.isLoading,
        items: [],
        isFullLoaded: state.isFullLoaded,
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        isLoading: false,
        items: action.payload.items,
        isFullLoaded: false,
      };
    }
    case FETCH_MORE_DATA_SUCCESS: {
      if (action.payload.items !== undefined) {
        return {
          isLoading: false,
          items: [...state.items, ...action.payload.items],
          isFullLoaded: false,
        };
      } else {
        return {
          isLoading: false,
          items: state.items,
          isFullLoaded: true,
        };
      }
    }
    case FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        items: (state.items.length > 0) ? state.items : [],
        isFullLoaded: state.isFullLoaded,
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        isLoading: false,
        items: false,
        isFullLoaded: state.isFullLoaded,
      };
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
