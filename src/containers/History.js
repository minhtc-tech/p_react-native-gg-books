import { connect } from 'react-redux';
import HistoryScreen from '../screens/History';
import { getHistorySelector } from '../reducers/history';
import {
  deleteFromHistory,
  clearHistory
} from '../actions/historyInteraction';

const mapStateToProps = (state) => {
  const historyItems = getHistorySelector(state);

  return { historyItems };
};

const mapDispatchToProps = (dispatch) => ({
  deleteFromHistory: (index = Number()) => {
    dispatch(deleteFromHistory(index));
  },
  clearHistory: () => {
    dispatch(clearHistory());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryScreen);