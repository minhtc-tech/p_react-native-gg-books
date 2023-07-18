import {
  FAVORITE_HANDLE,
  CLEAR_FAVORITE
} from '../constants/actionType';

const initialState = [];

export const getFavoriteSelector = (state) => ([ ...state.favorite ]);

const favoriteReducer = (state = initialState, action) => {
  // console.log(state);

  switch (action.type) {
    case CLEAR_FAVORITE: {
      return [];
    }
    case FAVORITE_HANDLE: {
      const newState = [...state];
      const removeIndex = state.map((item) => item.id).indexOf(action.payload.item.id);

      if (removeIndex !== -1) {
        newState.splice(removeIndex, 1);

      } else {
        newState.unshift(action.payload.item);
      };

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default favoriteReducer;
