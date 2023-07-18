import { useState, useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {
  useTheme
} from '@react-navigation/native';

import styles from './style';
import ProductInformation from './components/ProductInformation';
import ProductHandle from './components/ProductHandle';

import { fetchBookDetailsData } from '../../services/httpRequests';

const BookDetails = (props) => { // route must go with navigation 
  const {
    route,
    navigation,
    addToHistory,
    favoriteHandle,
    favoriteItems
  } = props;
  // console.log(props);
  const { colors } = useTheme();

  const [result, setResult] = useState(null);

  const bookId = route.params.id;
  useEffect(() => {
    fetchBookDetailsData(bookId).then((bookItem) => {
      // console.log(bookId);
      addToHistory({
        id: bookId,
        imageURI: bookItem.volumeInfo.imageLinks.thumbnail,
        title: bookItem.volumeInfo.title,
        authors: ('authors' in bookItem.volumeInfo)
          ? bookItem.volumeInfo.authors.join(', ')
          : 'Unknown'
      });

      (function setFavorite() {
        let favoriteCheck = false;
        favoriteItems.forEach((item) => {
          if (item.id === bookId) {
            favoriteCheck = true;
          };
        });

        bookItem.appCheckFavorite = favoriteCheck;
      })();

      setResult(bookItem);
    });
  }, [bookId]);

  const goToGoogleView = (uri) => {
    navigation.push('GoogleView', { googleViewLink: uri });
  };

  if (result === null) {
    return null;
  };

  return (
    <SafeAreaView>
      <ProductInformation
        styles={styles(colors)}
        navigation={navigation}
        bookItem={result}
        colors={colors}
        favoriteHandle={favoriteHandle}
      />

      <ProductHandle
        styles={styles(colors)}
        bookItem={result}
        goToGoogleView={goToGoogleView}
      />
    </SafeAreaView>
  );
};

export default BookDetails;