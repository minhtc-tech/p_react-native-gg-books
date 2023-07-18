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

const HistoryScreen = (props) => {
  const { colors } = useTheme();
  const [offset, setOffset] = useState(0);

  const {
    deleteFromHistory,
    clearHistory,
    historyItems,
    navigation
  } = props;
  // console.log(historyItems);

  const goToBookDetails = (id) => {
    navigation.push('BookDetails', { id: id });
  };

  const getBookList = (data) => {
    if (data.length === 0) {
      return (
        <Notification
          title={'History Empty'}
          message={'Let add some books into your history'}
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
          renderItem={({ item, index }) => {
            const deleteAction = () => {
              deleteFromHistory(index);
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
            History
          </Text>
        </View>

        <TouchableOpacity
          style={styles(colors).headerClear}
          onPress={() => {
            clearHistory();
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
        {getBookList(historyItems)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;