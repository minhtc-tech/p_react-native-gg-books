import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const designWidth = 428;

const getPerfectUnit = (number) => {
  return (number * (windowWidth / designWidth));
};

export default getPerfectUnit;