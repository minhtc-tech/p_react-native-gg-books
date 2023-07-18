import { StyleSheet } from 'react-native';
import getPerfectUnit from '../../utils/getPerfectUnit';

const styles = (colors) => StyleSheet.create({
  errorNotification: {
    marginTop: getPerfectUnit(100),
  },
  productContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: getPerfectUnit(81),
    // backgroundColor: '#6f42c133',
  },

  // header
  header: {
    position: 'absolute',
    width: '100%',
    height: getPerfectUnit(36),
    top: getPerfectUnit(50),
    zIndex: 2,

    flexDirection: 'row',
    justifyContent: 'space-between',

    // backgroundColor: '#dee',
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
  headerFavorite: {
    width: getPerfectUnit(70),
    // backgroundColor: '#d7d',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: getPerfectUnit(35),
  },
  headerFavoriteIcon: {
    width: getPerfectUnit(24),
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#eed',
    // color: colors.primary,
    fontSize: getPerfectUnit(23),
  },
  // end header

  // product top
  productTop: {
    // backgroundColor: '#007bff33',
    alignItems: 'center',
    marginBottom: getPerfectUnit(22),
    paddingTop: getPerfectUnit(86),
    paddingHorizontal: getPerfectUnit(35),
  },
  productImageContainer: {
    width: getPerfectUnit(221),
    height: getPerfectUnit(338),
    borderRadius: getPerfectUnit(20),

    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: getPerfectUnit(7) },
    shadowOpacity: 1,
    shadowRadius: getPerfectUnit(14),
    elevation: getPerfectUnit(7),
  },
  productImage: {
    width: getPerfectUnit(221),
    height: getPerfectUnit(338),
    borderRadius: getPerfectUnit(20),
  },
  productName: {
    marginTop: getPerfectUnit(18),
    fontFamily: 'Poppins600',
    fontSize: getPerfectUnit(18),
    color: colors.text,

    textAlign: 'center',
    lineHeight: getPerfectUnit(31),
  },
  productAuthors: {
    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(16),
    color: colors.grayText,

    textAlign: 'center',
  },
  productSub: {
    // backgroundColor: '#e83e8c33',
    paddingHorizontal: getPerfectUnit(35),
  },
  productInfoSection: {
    // backgroundColor: '#dc354533',
    marginBottom: getPerfectUnit(18),
  },
  productInfoTitle: {
    fontFamily: 'Poppins600',
    fontSize: getPerfectUnit(18),
    color: colors.text,
  },
  productInfoContent: {
    fontFamily: 'Poppins400',
    fontSize: getPerfectUnit(14),
    color: colors.grayText,
    lineHeight: getPerfectUnit(21),
  },
  // end product top

  // product handle
  productHandle: {
    // backgroundColor: '#fd7e1433',

    position: 'absolute',
    bottom: getPerfectUnit(26),

    flexDirection: 'row',
    justifyContent: 'center',

    width: '100%',
    height: getPerfectUnit(55),
    paddingHorizontal: getPerfectUnit(29),
  },
  // productReadPreview: {
  //   justifyContent: 'center',
  //   alignItems: 'center',

  //   width: getPerfectUnit(173),
  //   height: getPerfectUnit(55),
  //   borderRadius: getPerfectUnit(10),
  //   marginHorizontal: getPerfectUnit(6),

  //   backgroundColor: colors.primary,
  // },
  productGoogleView: {
    justifyContent: 'center',
    alignItems: 'center',

    width: getPerfectUnit(173),
    height: getPerfectUnit(55),
    borderRadius: getPerfectUnit(10),
    marginHorizontal: getPerfectUnit(6),

    backgroundColor: colors.primary,
  },
  // productReadPreviewText: {
  //   marginTop: getPerfectUnit(3),

  //   fontFamily: 'Poppins600',
  //   fontSize: getPerfectUnit(14),
  //   color: colors.white,
  // },
  productGoogleViewText: {
    marginTop: getPerfectUnit(3),

    fontFamily: 'Poppins600',
    fontSize: getPerfectUnit(14),
    color: colors.white,
  },
  // end product handle
});

export default styles;