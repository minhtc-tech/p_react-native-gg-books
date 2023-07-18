import {
  View,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';

import BookItem from './_BookItem';
import Notification from '../../../components/Notification';

const Body = (props) => {
  const {
    styles,
    primaryColor,
    store,
    goToBookDetails
  } = props;

  const showLoadingIndicator = () => {
    if (store.isLoading) {
      return (
        <View style={styles.loadMore}>
          <ActivityIndicator
            color={primaryColor}
            size='large'
          />
        </View>
      );
    } else {
      return null;
    };
  };

  if (store.items === false) {
    return (
      <View style={styles.bodyContent}>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Something went wrong with Google Book API
          </Text>
        </View>
      </View>
    );

  } else if (!store.items) {
    return (
      <Notification
        title={'SORRY'}
        message={'No data match your search'}
        customMessageContainerStyle={styles.notification}
      />
    );

  } else {
    return (
      <View style={styles.bodyContent}>
        <FlatList
          numColumns={2}
          style={styles.bookList}
          data={store.items}
          keyExtractor={(item, index) => (item.id + index)}
          renderItem={({ item }) => {
            return (
              <BookItem
                item={item}
                styles={styles}
                goToBookDetails={goToBookDetails}
              />
            );
          }}
        />
        {showLoadingIndicator()}
      </View>
    );
  };
};

export default Body;