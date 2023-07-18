import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import getPerfectUnit from '../utils/getPerfectUnit';
import {
  useTheme
} from '@react-navigation/native';

const Notification = ({ title, message, customMessageContainerStyle }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles(colors).messageContainer, customMessageContainerStyle]}>
      <Text style={styles(colors).messageTitle}>
        {title}
      </Text>
      <Text style={styles(colors).messageContent}>
        {message}
      </Text>
    </View>
  );
};

const styles = (colors) => StyleSheet.create({
  messageContainer: {
    width: '100%',
    padding: getPerfectUnit(35),

    backgroundColor: colors.blurGray,
  },
  messageTitle: {
    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(24),
    color: colors.grayText,

    textAlign: 'center',
  },
  messageContent: {
    marginTop: getPerfectUnit(8),

    fontFamily: 'Poppins500',
    fontSize: getPerfectUnit(18),
    color: colors.grayText,

    textAlign: 'center',
    lineHeight: getPerfectUnit(24)
  },
});

export default Notification;