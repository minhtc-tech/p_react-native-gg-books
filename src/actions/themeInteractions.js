import {
  CHANGE_THEME
} from '../constants/actionType';

export const changeTheme = (isDarkTheme) => (
  {
    type: CHANGE_THEME,
    payload: { isDarkTheme: isDarkTheme }
  }
);