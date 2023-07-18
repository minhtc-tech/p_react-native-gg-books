import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const BookItem = ({ item, styles, goToBookDetails }) => {
  const getBookAuthor = (volumeInfo) => {
    if ('authors' in volumeInfo) {
      let authors = '';
      volumeInfo.authors.forEach(author => {
        authors += `${author}, `;
      });
      return authors.slice(0, -2); // remove last ', '

    } else {
      return null;
    };
  };

  return (
    <TouchableOpacity 
      style={styles.bookItem}
      onPress={() => goToBookDetails(item.id)}
    >
      <View style={styles.bookImageContainer}>
        <Image
          style={styles.bookItemImage}
          source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
        />
      </View>
      <Text
        numberOfLines={1}
        style={styles.bookItemTitle}
      >
        {item.volumeInfo.title}
      </Text>
      <Text
        numberOfLines={1}
        style={styles.bookItemAuthor}
      >
        {getBookAuthor(item.volumeInfo)}
      </Text>
    </TouchableOpacity>
  );
};

export default BookItem;