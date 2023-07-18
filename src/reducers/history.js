import {
  ADD_TO_HISTORY,
  DELETE_FROM_HISTORY,
  CLEAR_HISTORY
} from '../constants/actionType';

const initialState = [];

export const getHistorySelector = (state) => ([ ...state.history ]);

const historyReducer = (state = initialState, action) => {
  // console.log(state);

  switch (action.type) {
    case CLEAR_HISTORY: {
      return [];
    }
    case ADD_TO_HISTORY: {
      const itemIndex = state.findIndex((item) => item.id === action.payload.item.id);

      const newState = [...state];
      if (itemIndex !== -1) { // item is existed in array
        newState.splice(itemIndex, 1);
      };

      return [action.payload.item, ...newState];
    }
    case DELETE_FROM_HISTORY: {
      const newState = [...state];
      newState.splice(action.payload.index, 1);
      
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default historyReducer;
