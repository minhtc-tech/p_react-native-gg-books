import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  useTheme
} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const BookItem = ({ item, goToBookDetails, deleteAction }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={styles(colors).bookItem}
      onPress={() => goToBookDetails(item.id)}
    >
      <View style={styles(colors).bookImageContainer}>
        <Image
          style={styles(colors).bookItemImage}
          source={{ uri: item.imageURI }}
        />
      </View>
      <View style={styles(colors).bookInfo}>
        <Text
          numberOfLines={1}
          style={styles(colors).bookItemTitle}
        >
          {item.title}
        </Text>
        <Text
          numberOfLines={1}
          style={styles(colors).bookItemAuthor}
        >
          {item.authors}
        </Text>
      </View>
      <TouchableOpacity
        style={styles(colors).deleteItemBtn}
        onPress={() => {
          // console.log(index);
          deleteAction();
        }}
      >
        <Ionicons name="md-close" style={styles(colors).deleteItemIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

import { StyleSheet } from 'react-native';
import getPerfectUnit from '../utils/getPerfectUnit';

const styles = (colors) => StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: getPerfectUnit(368),
    height: getPerfectUnit(78),
    marginBottom: getPerfectUnit(24),

    // backgroundColor: '#e83e8c33',
  },
  bookImageContainer: {
    width: getPerfectUnit(50),
    height: getPerfectUnit(78),
    borderRadius: getPerfectUnit(8),

    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: getPerfectUnit(3) },
    shadowOpacity: 1,
    shadowRadius: getPerfectUnit(8),
    elevation: getPerfectUnit(4),
  },
  bookItemImage: {
    width: getPerfectUnit(50),
    height: getPerfectUnit(78),
    borderRadius: getPerfectUnit(8),
  },
  bookInfo: {
    width: getPerfectUnit(278),
    paddingHorizontal: getPerfectUnit(30),
  },
  bookItemTitle: {
    marginTop: getPerfectUnit(6),
    marginBottom: getPerfectUnit(8),
    color: colors.text,

    fontFamily: 'Poppins600',
    fontSize: getPerfectUnit(16),
    textAlign: 'center',
  },
  bookItemAuthor: {
    color: colors.grayText,

    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(12),
    textAlign: 'center',
  },
  deleteItemBtn: {
    width: getPerfectUnit(40),
    height: getPerfectUnit(40),
    borderRadius: getPerfectUnit(8),
    backgroundColor: colors.primaryBlur,

    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteItemIcon: {
    fontSize: getPerfectUnit(27),
    color: colors.primary,
  }
});

export default BookItem;