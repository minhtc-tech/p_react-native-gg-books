import { StyleSheet } from 'react-native';
import getPerfectUnit from '../../utils/getPerfectUnit';

const styles = (colors) => StyleSheet.create({
  // header
  header: {
    width: '100%',
    height: getPerfectUnit(36 + 50 + 8),
    paddingTop: getPerfectUnit(50),
    paddingBottom: getPerfectUnit(8),

    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: colors.background,
  },
  headerBack: {
    width: getPerfectUnit(70),
    // backgroundColor: '#d7d',
    justifyContent: 'center',
    paddingLeft: getPerfectUnit(35),
  },
  headerBackIcon: {
    width: '100%',
    color: colors.text,
    fontSize: getPerfectUnit(21),
  },
  // end header

  webView: {
    // marginTop: getPerfectUnit(90),
  },
  loadMore: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',
    paddingBottom: getPerfectUnit(200),

    backgroundColor: colors.background,
  },
});

export default styles;