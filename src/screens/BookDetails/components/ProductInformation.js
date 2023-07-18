import { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Notification from '../../../components/Notification';

const ProductInformation = (props) => {
  const {
    styles, 
    navigation, 
    bookItem, 
    colors,
    favoriteHandle
  } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  if (bookItem === false) {
    return (
      <View style={styles.productContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBack}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" style={styles.headerBackIcon} />
          </TouchableOpacity>
          <View></View>
        </View>
        <ScrollView>
          <Notification
            title={'ERROR'}
            message={'Some error occurred when get data of book item from API'}
            customMessageContainerStyle={styles.errorNotification}
          />
        </ScrollView>
      </View>
    );

  } else if (bookItem !== false) {
    useEffect(() => {
      setIsFavorite(bookItem.appCheckFavorite);
    }, []);
    // setIsFavorite(bookItem.appCheckFavorite);

    // top info
    const bookImage = bookItem.volumeInfo.imageLinks.thumbnail;
    const bookTitle = bookItem.volumeInfo.title;
    const bookAuthors = ('authors' in bookItem.volumeInfo) 
      ? bookItem.volumeInfo.authors.join(', ') 
      : 'Unknown';

    // sub info
    const bookRating = ((stars, reviews) => {
      if (!stars) {
        return '0 Reviews';

      } else {
        return `${stars} stars - ${reviews} reviews`;
      };
    })(bookItem.volumeInfo.averageRating, bookItem.volumeInfo.ratingsCount);
    const bookPublish = ((publisher, publishedDate) => {
      if (!publishedDate) {
        publishedDate = '';

      } else {
        publishedDate = ` - ${publishedDate}`;
      };
      return `${publisher}${publishedDate}`;
    })(bookItem.volumeInfo.publisher, bookItem.volumeInfo.publishedDate);
    const bookCategories = ((categories) => {
      if (!categories) {
        return 'Unknown';

      } else {
        let result = '';
        categories.forEach(category => {
          result = result + category + ', ';
        });
        return result.slice(0, -2);
      }
    })(bookItem.volumeInfo.categories);
    const bookPages = bookItem.volumeInfo.pageCount;

    return (
      <View style={styles.productContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBack}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" style={styles.headerBackIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerFavorite}
            onPress={() => {
              setIsFavorite(!isFavorite);
              favoriteHandle({
                id: bookItem.id,
                imageURI: bookImage,
                title: bookTitle,
                authors: bookAuthors
              });
            }}
          >
            <FontAwesome 
              name="heart" 
              color={ isFavorite ? colors.primary : colors.grayText } 
              style={styles.headerFavoriteIcon} 
            />
          </TouchableOpacity>
        </View>
        <ScrollView>

          <View style={styles.productTop}>
            <View style={styles.productImageContainer}>
              <Image
                style={styles.productImage}
                source={{ uri: bookImage }}
              />
            </View>
            <Text style={styles.productName}>
              {bookTitle}
            </Text>
            <Text style={styles.productAuthors}>
              {bookAuthors}
            </Text>
          </View>

          <View style={styles.productSub}>
            <View style={styles.productInfoSection}>
              <Text style={styles.productInfoTitle}>
                Rating
              </Text>
              <Text style={styles.productInfoContent}>
                {bookRating}
              </Text>
            </View>
            <View style={styles.productInfoSection}>
              <Text style={styles.productInfoTitle}>
                Publish
              </Text>
              <Text style={styles.productInfoContent}>
                {bookPublish}
              </Text>
            </View>
            <View style={styles.productInfoSection}>
              <Text style={styles.productInfoTitle}>
                Categories
              </Text>
              <Text style={styles.productInfoContent}>
                {bookCategories}
              </Text>
            </View>
            <View style={styles.productInfoSection}>
              <Text style={styles.productInfoTitle}>
                Pages
              </Text>
              <Text style={styles.productInfoContent}>
                {bookPages}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };
};

export default ProductInformation;