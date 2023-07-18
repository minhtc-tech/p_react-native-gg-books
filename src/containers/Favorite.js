import { connect } from 'react-redux';
import FavoriteScreen from '../screens/Favorite';
import { getFavoriteSelector } from '../reducers/favorite';
import {
  favoriteHandle,
  clearFavorite
} from '../actions/favoriteInteraction';

const mapStateToProps = (state) => {
  const favoriteItems = getFavoriteSelector(state);

  return { favoriteItems };
};

const mapDispatchToProps = (dispatch) => ({
  favoriteHandle: (item = {
    id: String(),
    imageURI: String(),
    title: String(),
    authors: String()
  }) => {
    dispatch(favoriteHandle(item));
  },
  clearFavorite: () => {
    dispatch(clearFavorite());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteScreen);