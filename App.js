import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import useFonts from "./src/hooks/useFonts";
import { lightTheme, darkTheme } from "./src/hooks/useTheme";
import { connect } from "react-redux";
import { getThemeSelector } from "./src/reducers/theme";
import configureStore from "./src/store/configureStore";
import Navigator from "./src/components/Navigator";
import { PersistGate } from "redux-persist/lib/integration/react";

const { store, persister } = configureStore();

let App = ({ isDarkTheme }) => {
  const [isReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <PersistGate loading={null} persistor={persister}>
      <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
        <Navigator />
      </NavigationContainer>
    </PersistGate>
  );
};

const mapStateToProps = (state) => {
  const isDarkTheme = getThemeSelector(state).isDarkTheme;

  return { isDarkTheme };
};

App = connect(mapStateToProps)(App);

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
