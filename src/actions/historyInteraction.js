import {
  ADD_TO_HISTORY,
  DELETE_FROM_HISTORY,
  CLEAR_HISTORY
} from '../constants/actionType';

export const addToHistory = (item) => (
  {
    type: ADD_TO_HISTORY,
    payload: { item: item },
  }
);

export const deleteFromHistory = (index) => (
  {
    type: DELETE_FROM_HISTORY,
    payload: { index: index },
  }
);

export const clearHistory = () => (
  {
    type: CLEAR_HISTORY,
    payload: {},
  }
);