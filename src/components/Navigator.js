import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  FontAwesome5,
  FontAwesome
} from '@expo/vector-icons';
import getPerfectUnit from '../utils/getPerfectUnit';
import Screens from '../hooks/useScreens';
import { getTabBarVisible } from '../utils/hideBottomTabBarOnScroll';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarActiveTintColor: {Theme},
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Screens.Home}
        options={({ route }) => ({
          tabBarStyle: getTabBarVisible(route)
            ? styles.tabBar
            : { display: 'none' }, // hiding bottom tab bar on React Navigation 6
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="home"
              color={color}
              size={getPerfectUnit(25)}
              style={styles.icon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="History"
        component={Screens.History}
        options={({ route }) => ({
          tabBarStyle: getTabBarVisible(route)
            ? styles.tabBar
            : { display: 'none' }, // hiding bottom tab bar on React Navigation 6
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="history"
              color={color}
              size={getPerfectUnit(23)}
              style={styles.icon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={Screens.Favorite}
        options={({ route }) => ({
          tabBarStyle: getTabBarVisible(route)
            ? styles.tabBar
            : { display: 'none' }, // hiding bottom tab bar on React Navigation 6
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="heart"
              color={color}
              size={getPerfectUnit(24)}
              style={styles.icon}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WithBottomTab"
      // defaultScreenOptions={With}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WithBottomTab" component={BottomTab} />
      <Stack.Screen
        name="BookDetails"
        component={Screens.BookDetails}
      />
      <Stack.Screen
        name="GoogleView"
        component={Screens.GoogleView}
        options={{
          animationEnabled: false // avoid crash app when using webview
        }}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
      /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    height: getPerfectUnit(102),
    paddingHorizontal: getPerfectUnit(32),

    borderTopWidth: 0,
    borderTopLeftRadius: getPerfectUnit(51),
    borderTopRightRadius: getPerfectUnit(51),

    elevation: 0, // remove box shadow
  },
  icon: { // to make icon have full part
    width: '100%',
    textAlign: 'center',
  }
});

export default Navigator;