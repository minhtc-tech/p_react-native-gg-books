import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {
  useTheme
} from '@react-navigation/native';

import styles from './style';
import HorizontalBookItem from '../../components/HorizontalBookItem';
import Notification from '../../components/Notification';

import { hideBottomTabByScroll } from '../../utils/hideBottomTabBarOnScroll';

const FavoriteScreen = (props) => {
  const { colors } = useTheme();
  const [offset, setOffset] = useState(0);

  const {
    favoriteHandle,
    clearFavorite,
    favoriteItems,
    navigation
  } = props;
  // console.log(favoriteItems);

  const goToBookDetails = (id) => {
    navigation.push('BookDetails', { id: id });
  };

  const getBookList = (data) => {
    if (data.length === 0) {
      return (
        <Notification
          title={'Favorite Empty'}
          message={'Let add some books into your favorite'}
          customMessageContainerStyle={styles(colors).emptyList}
        />
      );

    } else if (data.length > 0) {
      return (
        <FlatList
          numColumns={1}
          style={styles(colors).bookList}
          data={data}
          keyExtractor={(item, index) => (item.id + index)}
          renderItem={({ item }) => {
            const deleteAction = () => {
              favoriteHandle(item);
            };
            return (
              <HorizontalBookItem
                item={item}
                goToBookDetails={goToBookDetails}
                deleteAction={deleteAction}
              />
            );
          }}
        />
      );
    };
  };

  return (
    <SafeAreaView>
      <View style={styles(colors).header}>
        <View style={styles(colors).headerPageName}>
          <Text style={styles(colors).headerPageNameText}>
            Favorite
          </Text>
        </View>

        <TouchableOpacity
          style={styles(colors).headerClear}
          onPress={() => {
            clearFavorite();
          }}
        >
          <Text style={styles(colors).headerClearText}>
            Clear
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        onScroll={({ nativeEvent }) => {
          const currentOffset = nativeEvent.contentOffset.y;
          hideBottomTabByScroll(navigation, currentOffset, offset);
          setOffset(currentOffset);
        }}
      >
        {getBookList(favoriteItems)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteScreen;