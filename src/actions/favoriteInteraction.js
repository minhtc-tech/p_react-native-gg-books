import {
  FAVORITE_HANDLE,
  CLEAR_FAVORITE
} from '../constants/actionType';

export const favoriteHandle = (item) => (
  {
    type: FAVORITE_HANDLE,
    payload: { item: item },
  }
);

export const clearFavorite = () => (
  {
    type: CLEAR_FAVORITE,
    payload: {},
  }
);