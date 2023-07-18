import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Linking
} from 'react-native';
import { WebView } from 'react-native-webview';
import {
  useTheme
} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './style';

const GoogleViewScreen = (props) => {
  const { colors } = useTheme();
  const {
    route,
    navigation
  } = props;

  const [showWebView, setShowWebView] = useState(false);
  const googleViewLink = route.params.googleViewLink;
  // console.log('Google Link: ', googleViewLink);

  const customInterfaceJS = `
    document.getElementsByClassName('HJP88')[0].style.display = 'none'; // hide header
    document.getElementsByClassName('WpDbMd')[0].style.paddingTop = 0; // custom body
    document.getElementsByClassName('tlG8q')[0].style.display = 'none'; // hide aside
    document.getElementsByClassName('RRKTjb')[0].style.display = 'none'; // hide footer
    true; // note: this is required, or you'll sometimes get silent failures
  `;

  return (
    <>
      <View style={styles(colors).header}>
        <TouchableOpacity
          style={styles(colors).headerBack}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" style={styles(colors).headerBackIcon} />
        </TouchableOpacity>
        <View></View>
      </View>
      {!showWebView ? (
        <View style={styles(colors).loadMore}>
          <ActivityIndicator
            color={colors.primary}
            size='large'
          />
        </View>
      ) : (
        null
      )}
      <WebView
        javaScriptEnabled // for anroid
        source={{
          uri: googleViewLink
        }}
        injectedJavaScript={customInterfaceJS}
        style={showWebView ? styles(colors).webView : { display: 'none' }}
        onLoadStart={() => {
          if (showWebView === true) {
            setShowWebView(false);
          };
        }}
        onLoadEnd={() => {
          if (showWebView === false) {
            setShowWebView(true);
          };
        }}
        onNavigationStateChange={(event) => {
          // console.log('other', event);
          if (event.url !== googleViewLink) {
            Linking.openURL(event.url);
            event.url = googleViewLink;
          };
        }}
      />
    </>
  );
};

export default GoogleViewScreen;