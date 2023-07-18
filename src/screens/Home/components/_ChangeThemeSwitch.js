import getPerfectUnit from '../../../utils/getPerfectUnit';

import {
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const ChangeThemeSwitch = ({ styles, isDarkTheme, changeTheme }) => {
  return (
    <TouchableOpacity 
      style={styles.headerTopChangeThemeContainer}
      onPress={() => changeTheme(!isDarkTheme)}
    >
      <ImageBackground
        source={
          isDarkTheme 
          ? require('../../../assets/images/switchDarkTheme.png')
          : require('../../../assets/images/switchLightTheme.png')
        }
        style={styles.headerTopChangeTheme}
      >
      </ImageBackground>
      <View 
        style={
          [
            styles.headerTopChangeThemeIcon, 
            isDarkTheme ? { left: getPerfectUnit(1.5) } : { right: getPerfectUnit(1.5) }
          ]
        }
      ></View>
    </TouchableOpacity>
  );
};

export default ChangeThemeSwitch;