import { connect } from 'react-redux';
import BookDetailsScreen from '../screens/BookDetails';
import { getFavoriteSelector } from '../reducers/favorite';
import { addToHistory } from '../actions/historyInteraction';
import { 
  favoriteHandle
} from '../actions/favoriteInteraction';

const mapStateToProps = (state) => {
  const favoriteItems = getFavoriteSelector(state);

  return { favoriteItems };
};

const mapDispatchToProps = (dispatch) => ({
  addToHistory: (item = {
    id: String(),
    imageURI: String(),
    title: String(),
    authors: String()
  }) => {
    // console.log(item);
    dispatch(addToHistory(item));
  },
  favoriteHandle: (item = {
    id: String(),
    imageURI: String(),
    title: String(),
    authors: String()
  }) => {
    // console.log(item);
    dispatch(favoriteHandle(item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookDetailsScreen);