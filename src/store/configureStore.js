import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loggingMiddleware from './middleware/logging';

const persistConfig = {
  key: 'smart-book',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['history', 'favorite', 'books', 'theme']
};

const configureStore = (initialState = {}) => {
  const middleware = applyMiddleware(thunk, loggingMiddleware);
  const pReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(pReducer, initialState, middleware);
  const persister = persistStore(store, null);

  return { store, persister };
};

export default configureStore;