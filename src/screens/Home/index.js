import { useState, useEffect } from 'react';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native';
import {
  useTheme
} from '@react-navigation/native';

import styles from './style';
import Header from './components/Header';
import StickyFilter from './components/StickyFilter';
import Body from './components/Body';

import getPerfectUnit from '../../utils/getPerfectUnit';
import {
  hideBottomTabByScroll,
  hideBottomTabBar,
  showBottomTabBar
} from '../../utils/hideBottomTabBarOnScroll';

const HomeScreen = (props) => {
  const { colors } = useTheme();

  const {
    isLoading,
    fetchData,
    items,
    isFullLoaded,
    isDarkTheme,
    changeTheme,
    navigation
  } = props;
  // console.log(navigation);

  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('all');
  const [filter, setFilter] = useState('full');
  const [order, setOrder] = useState('relevance');
  const [pageNum, setPageNum] = useState(0);
  const [orderPopupShow, setOrderPopupShow] = useState(false);

  useEffect(() => {
    fetchData(searchTerm, filter, order);
  }, []);

  let searchSetTimeOut;
  const changeSearchTerm = (searchTermValue) => {
    // console.log('Search term value is: ' + searchTermValue);

    setPageNum(0);

    if (searchTermValue === '') {
      searchTermValue = 'all';
    };
    setSearchTerm(searchTermValue);

    clearTimeout(searchSetTimeOut);
    searchSetTimeOut = setTimeout(() => {
      fetchData(searchTermValue, filter, order);
    }, 300);
  };

  const changeFilter = (filterValue) => {
    // console.log('Filter value is: ' + filterValue);

    setPageNum(0);
    setFilter(filterValue);
    fetchData(searchTerm, filterValue, order);
  };

  const changeOrder = (orderValue) => {
    // console.log('Order value is: ' + filterValue);

    setPageNum(0);
    setOrder(orderValue);
    fetchData(searchTerm, filter, orderValue);
  };

  const allowLoadMore = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = getPerfectUnit(300);

    return (layoutMeasurement.height + contentOffset.y) >=
      (contentSize.height - paddingToBottom);
  };
  const loadMoreData = () => {
    // console.log(isFullLoaded);
    setPageNum(pageNum + 1);
    const loadMore = true;
    fetchData(
      searchTerm,
      filter,
      order,
      loadMore,
      (pageNum + 1)
    );
  };

  const goToBookDetails = (id) => {
    navigation.push('BookDetails', { id: id });
  };

  const showPopup = () => {
    setOrderPopupShow(true);
    hideBottomTabBar(navigation);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        stickyHeaderIndices={[1]}
        onScroll={({ nativeEvent }) => {
          if (
            allowLoadMore(nativeEvent) &&
            (isLoading === false) &&
            (isFullLoaded === false)
          ) {
            loadMoreData();
          };

          const currentOffset = nativeEvent.contentOffset.y;
          hideBottomTabByScroll(navigation, currentOffset, offset);
          setOffset(currentOffset);
        }}
      >
        <Header 
          styles={styles(colors)}  
          isDarkTheme={isDarkTheme}
          changeTheme={changeTheme}
        />
        <StickyFilter
          styles={styles(colors)}
          onTermChange={changeSearchTerm}
          changeFilter={changeFilter}
          changeOrder={changeOrder}
          showPopup={showPopup}
          navigation={navigation}
        />
        <Body
          primaryColor={colors.primary}
          styles={styles(colors)}
          store={{
            isLoading,
            items
          }}
          goToBookDetails={goToBookDetails}
        />
      </ScrollView>

      <TouchableOpacity
        style={orderPopupShow ? styles(colors).orderFilter : { display: 'none' }}
        onPress={() => {
          setOrderPopupShow(false);
          showBottomTabBar(navigation);
        }}
      >
        <TouchableOpacity
          style={styles(colors).orderFilterItem}
          onPress={() => {
            changeOrder('relevance');
          }}
        >
          <Text style={styles(colors).orderFilterText}>
            Relevance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(colors).orderFilterItem}
          onPress={() => {
            changeOrder('newest');
          }}
        >
          <Text style={styles(colors).orderFilterText}>
            Newest
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;