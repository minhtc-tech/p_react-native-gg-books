import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    Poppins600: require('../assets/fonts/Poppins-SemiBold.ttf'),
    Poppins500: require('../assets/fonts/Poppins-Medium.ttf'),
    Poppins400: require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins300: require('../assets/fonts/Poppins-Light.ttf'),
  });