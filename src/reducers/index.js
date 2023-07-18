import { combineReducers } from 'redux';
import booksReducer from './books';
import historyReducer from './history';
import favoriteReducer from './favorite';
import themeReducer from './theme';

const rootReducer = combineReducers({
  books: booksReducer,
  history: historyReducer,
  favorite: favoriteReducer,
  theme: themeReducer
});

export default rootReducer;
