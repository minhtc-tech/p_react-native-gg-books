import { StyleSheet } from 'react-native';
import getPerfectUnit from '../../utils/getPerfectUnit';

const styles = (colors) => StyleSheet.create({
  // header
  header: {
    position: 'absolute',
    top: getPerfectUnit(48),
    left: 0,
    zIndex: 2,

    width: '100%',
    height: getPerfectUnit(50),
    justifyContent: 'space-between',
    flexDirection: 'row',

    // backgroundColor: '#007bff',
  },
  headerPageName: {
    height: getPerfectUnit(50),
    justifyContent: 'center',
    paddingHorizontal: getPerfectUnit(30),
  },
  headerPageNameText: {
    color: colors.text,

    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(20),
  },
  headerClear: {
    height: getPerfectUnit(50),
    justifyContent: 'center',
    paddingHorizontal: getPerfectUnit(30),
    backgroundColor: colors.background,
  },
  headerClearText: {
    color: colors.primary,

    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(16),
  },
  // end header

  // body
  bookList: {
    paddingHorizontal: getPerfectUnit(30),
    paddingTop: getPerfectUnit(124),
    paddingBottom: getPerfectUnit(105),
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    
    width: getPerfectUnit(368),
    height: getPerfectUnit(180),
    borderRadius: getPerfectUnit(8),
    marginTop: getPerfectUnit(124),
    marginHorizontal: getPerfectUnit(30),

    backgroundColor: colors.blurGray,
  },
  // end body
});

export default styles;
