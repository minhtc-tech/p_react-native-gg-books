import * as React from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

class HomeScreen extends React.Component {
  offset = 0;
  onScrollHandler = (e) => {
    const currentOffset = e.nativeEvent.contentOffset.y;
    var direction = currentOffset > this.offset ? "down" : "up";
    this.offset = currentOffset;
    if (direction === "down") {
      this.props.navigation.dispatch(
        CommonActions.setParams({
          tabBarVisible: false,
        })
      );
    } else {
      this.props.navigation.dispatch(
        CommonActions.setParams({
          tabBarVisible: true,
        })
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={this.onScrollHandler}
        >
          <View
            style={{
              alignItems: "center",
              height: height * 2,
              width: width,
              backgroundColor: "red",
            }}
          >
            <View
              style={{
                backgroundColor: "blue",
                width: 100,
                height: height * 2,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route) => {
  const params = route.params;
  if (params) {
    if (params.tabBarVisible === false) {
      return false;
    }
  }
  return true;
};

class MyTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }) => ({
            tabBarVisible: getTabBarVisible(route),
          })}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
