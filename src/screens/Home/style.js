import { StyleSheet } from 'react-native';
import getPerfectUnit from '../../utils/getPerfectUnit';

import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = (colors) => StyleSheet.create({
  // header
  header: {
    width: '100%',
    paddingTop: getPerfectUnit(34),
    top: getPerfectUnit(16),
    zIndex: 11,
  },
  headerTopChangeThemeIcon: {
    position: 'absolute',
    top: getPerfectUnit(1.5),
    width: getPerfectUnit(22),
    height: getPerfectUnit(22),

    borderRadius: getPerfectUnit(11),

    backgroundColor: colors.white,
  },
  headerTop: {
    width: '100%',
    paddingHorizontal: getPerfectUnit(30),

    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  headerTopChangeThemeContainer: {
    marginRight: getPerfectUnit(20),
  },
  headerTopChangeTheme: {
    width: getPerfectUnit(57),
    height: getPerfectUnit(25),
  },
  headerTopLogo: {
    width: getPerfectUnit(40),
    height: getPerfectUnit(40.5),
  },
  headerSub: {
    width: '100%',
    marginTop: getPerfectUnit(37.5),
    paddingHorizontal: getPerfectUnit(30),
  },
  headerSubLightText: {
    color: colors.grayText,

    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(16),
    lineHeight: getPerfectUnit(24),
  },
  headerSubMainText: {
    marginTop: getPerfectUnit(2),
    color: colors.text,

    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(26),
    lineHeight: getPerfectUnit(36),
  },
  // end header

  // body 
  bodySticky: {
    width: '100%',
    paddingTop: getPerfectUnit(50),
    // top: getPerfectUnit(16),

    backgroundColor: colors.background,
  },
  searchArea: {
    width: '100%',
    height: getPerfectUnit(49),
    justifyContent: 'center'
  },
  searchInput: {
    position: 'absolute',
    top: 0,
    left: getPerfectUnit(30),
    right: getPerfectUnit(30),

    height: getPerfectUnit(49),
    paddingLeft: getPerfectUnit(56),
    paddingRight: getPerfectUnit(27.5),
    paddingTop: getPerfectUnit(4.875),

    borderRadius: getPerfectUnit(10),

    backgroundColor: colors.blurGray,
    color: colors.text,

    fontFamily: 'Poppins400',
    fontSize: getPerfectUnit(16)
  },
  searchIcon: {
    fontSize: getPerfectUnit(25),
    color: colors.lightGray,

    marginLeft: getPerfectUnit(45.5)
  },

  filter: {
    width: '100%',
    marginTop: getPerfectUnit(19),
    paddingHorizontal: getPerfectUnit(20),
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  filterItemContainer: {
    paddingHorizontal: getPerfectUnit(15),
    paddingVertical: getPerfectUnit(15),
  },
  categories: {
    flexDirection: 'row'
  },
  categoryChoosenItem: {
    borderBottomColor: colors.primary,
    borderBottomWidth: getPerfectUnit(2),

    fontFamily: 'Poppins400',
    fontSize: getPerfectUnit(16),
    lineHeight: getPerfectUnit(24),
    color: colors.text,
  },
  categoryItem: {
    fontFamily: 'Poppins400',
    fontSize: getPerfectUnit(16),
    lineHeight: getPerfectUnit(24),
    color: colors.grayText,
  },
  orderText: {
    fontFamily: 'Poppins400',
    fontSize: getPerfectUnit(16),
    lineHeight: getPerfectUnit(24),

    color: colors.primary,
  },

  bodyContent: {
    paddingTop: getPerfectUnit(10),
    paddingBottom: getPerfectUnit(106),
    alignItems: 'center'
  },
  bookList: {
    width: '100%',
    // backgroundColor: '#343',
    paddingHorizontal: getPerfectUnit(18),
  },
  bookItem: {
    width: getPerfectUnit(160),
    marginBottom: getPerfectUnit(24),
    marginTop: getPerfectUnit(10),
    marginHorizontal: getPerfectUnit(18),
  },
  bookImageContainer: {
    borderRadius: getPerfectUnit(20),

    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: getPerfectUnit(7) },
    shadowOpacity: 1,
    shadowRadius: getPerfectUnit(14),
    elevation: getPerfectUnit(7),
  },
  bookItemImage: {
    width: getPerfectUnit(160),
    height: getPerfectUnit(250),
    borderRadius: getPerfectUnit(20),
  },
  bookItemTitle: {
    marginTop: getPerfectUnit(15),

    fontFamily: 'Poppins600',
    fontSize: getPerfectUnit(16),
    color: colors.text,
  },
  bookItemAuthor: {
    marginTop: getPerfectUnit(1),

    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(12),
    color: colors.grayText,

  },

  loadMore: {
    alignItems: 'center',

    width: '100%',
    height: (windowHeight - getPerfectUnit(244)),
    top: getPerfectUnit(-13),
    paddingTop: getPerfectUnit(20),

    // backgroundColor: '#dad',
  },
  // end body 

  // order filter
  orderFilter: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    justifyContent: 'center',
    paddingHorizontal: getPerfectUnit(30),

    backgroundColor: colors.overlay,
  },
  orderFilterItem: {
    alignItems: 'center',
    justifyContent: 'center',

    height: getPerfectUnit(54),
    borderRadius: getPerfectUnit(25),
    marginVertical: getPerfectUnit(15),
    backgroundColor: colors.primary,
  },
  orderFilterText: {
    color: colors.white,
    marginTop: getPerfectUnit(2),

    fontFamily: 'Poppins600',
    fontSize: getPerfectUnit(18),
  },
  // end order filter

  // err handle
  notification: {
    width: getPerfectUnit(364),
    marginTop: getPerfectUnit(16),
    marginEnd: getPerfectUnit(32),
    marginStart: getPerfectUnit(32),
    borderRadius: getPerfectUnit(8),

    backgroundColor: colors.card,
  },
  // end err handle
});

export default styles;
