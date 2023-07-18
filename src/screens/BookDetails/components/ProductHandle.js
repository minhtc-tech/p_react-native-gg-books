import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const ProductHandle = ({ styles, bookItem, goToGoogleView }) => {
  if (bookItem === false) {
    return null;

  } else {
    const googlePreviewLink = bookItem.volumeInfo.infoLink;

    return (
      <View style={styles.productHandle}>
        <TouchableOpacity
          style={styles.productGoogleView}
          onPress={() => {
            goToGoogleView(googlePreviewLink);
          }}
        >
          <Text style={styles.productGoogleViewText}>
            Google View
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
};

export default ProductHandle;