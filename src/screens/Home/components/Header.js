import {
  Text,
  View,
  Image,
} from 'react-native';

import ChangeThemeSwitch from './_ChangeThemeSwitch';

const Header = ({ styles, isDarkTheme, changeTheme }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <ChangeThemeSwitch styles={ styles } isDarkTheme={isDarkTheme} changeTheme={changeTheme} />

        <Image
          style={styles.headerTopLogo}
          source={require('../../../assets/images/logo.png')}
        />
      </View>

      <View style={styles.headerSub}>
        <Text style={styles.headerSubLightText}>Welcome back</Text>
        <Text style={styles.headerSubMainText}>
          What do you want to
        </Text>
        <Text style={styles.headerSubMainText}>read today?</Text>
      </View>
    </View>
  );
};

export default Header;