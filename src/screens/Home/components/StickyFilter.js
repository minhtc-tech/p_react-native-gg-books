import { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import SearchInput from './_SearchInput';

const StickyFilter = (props) => {
  const {
    styles, 
    onTermChange, 
    changeFilter, 
    showPopup,
  } = props;

  const [filterStyle, setFilterStyle] = useState('full');
  const getTextFilterStyle = (filterStyleValue) => {
    if (filterStyleValue === filterStyle) {
      return styles.categoryChoosenItem;
    } else {
      return styles.categoryItem;
    }
  };

  return (
    <View style={styles.bodySticky}>
      <SearchInput
        styles={styles}
        onTermChange={onTermChange}
      />

      <View style={styles.filter}>
        <View style={styles.categories}>
          <TouchableOpacity 
            style={styles.filterItemContainer}
            onPress={() => {
              changeFilter('full');
              setFilterStyle('full');
            }}
          >
            <Text style={getTextFilterStyle('full')}>Full</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.filterItemContainer}
            onPress={() => {
              changeFilter('partial');
              setFilterStyle('partial');
            }}
          >
            <Text style={getTextFilterStyle('partial')}>Partial</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.filterItemContainer}
            onPress={() => {
              changeFilter('free-ebooks');
              setFilterStyle('free');
            }}
          >
            <Text style={getTextFilterStyle('free')}>Free</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.filterItemContainer}
            onPress={() => {
              changeFilter('paid-ebooks');
              setFilterStyle('paid');
            }}
          >
            <Text style={getTextFilterStyle('paid')}>Paid</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.filterItemContainer}
          onPress={() => {
            showPopup();
          }}
        >
          <View>
            <Text style={styles.orderText}>Order by</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StickyFilter;