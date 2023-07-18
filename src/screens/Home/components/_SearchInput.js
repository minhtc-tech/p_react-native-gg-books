import {
  View,
  TextInput,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import {
  useTheme
} from '@react-navigation/native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const SearchInput = ({ styles, onTermChange }) => {
  const colors = useTheme();
  return (
    <View style={styles.searchArea}>
      <EvilIcons name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder='Search'
        onChangeText={onTermChange}
        placeholderTextColor={colors.colors.lightGray}
      />
    </View>
  );
};

export default SearchInput;