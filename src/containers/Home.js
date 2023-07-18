import { connect } from 'react-redux';
import HomeScreen from '../screens/Home';
import { getBooksSelector } from '../reducers/books';
import { fetchData } from '../actions/fetchData';
import { getThemeSelector } from '../reducers/theme';
import { changeTheme } from '../actions/themeInteractions';

const mapStateToProps = (state) => {
  const { isLoading, items, isFullLoaded } = getBooksSelector(state);
  const isDarkTheme = getThemeSelector(state).isDarkTheme;

  return { isLoading, items, isFullLoaded, isDarkTheme };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: (searchTerm, filter, order, loadMore = false, pageNum = 0) => {
    // console.log('lm is' + loadMore);
    dispatch(fetchData(searchTerm, filter, order, loadMore, pageNum))
  },
  changeTheme: (isDarkTheme = Boolean()) => {
    dispatch(changeTheme(isDarkTheme))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);