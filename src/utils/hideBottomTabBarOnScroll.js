export const getTabBarVisible = (route) => {
  const params = route.params;
  if (params) { // when first time come to page params is undefined
    if (params.tabBarVisible === false) {
      return false;
    };
  };
  return true;
};

import { CommonActions } from "@react-navigation/native";
export const hideBottomTabByScroll = (navigation, currentOffset, offset) => {
  const direction = currentOffset > offset ? 'down' : 'up';
  if (direction === 'down') {
    navigation.dispatch(
      CommonActions.setParams({
        tabBarVisible: false,
      })
    );
  } else {
    navigation.dispatch(
      CommonActions.setParams({
        tabBarVisible: true,
      })
    );
  };
};

export const hideBottomTabBar = (navigation) => {
  navigation.dispatch(
    CommonActions.setParams({
      tabBarVisible: false,
    })
  );
};

export const showBottomTabBar = (navigation) => {
  navigation.dispatch(
    CommonActions.setParams({
      tabBarVisible: true,
    })
  );
};