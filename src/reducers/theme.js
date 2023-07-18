import {
  CHANGE_THEME
} from '../constants/actionType';

const initialState = {
  isDarkTheme: true
};

export const getThemeSelector = (state) => ({ ...state.theme });

const isThemeReducer = (state = initialState, action) => {
  // console.log(state);

  switch (action.type) {
    case CHANGE_THEME: {
      return {
        isDarkTheme: action.payload.isDarkTheme
      };
    }
    default: {
      return state;
    }
  }
};

export default isThemeReducer;
