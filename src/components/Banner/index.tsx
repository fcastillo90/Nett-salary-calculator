import { Text, useTheme } from '@rneui/themed';
import {StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavTab from '../NavTab';
import BannerSvg from '../Svg';

interface Props {
  screenName: string;
}

function Banner(props: Props) {
  const { theme } = useTheme();

  return (
    <View 
      style={{
        ...styles.container,
        backgroundColor: theme?.colors.background
      }}
    >
      <View 
        style={{
          flex: 1,
          backgroundColor: theme?.colors.primary
        }}
      >
        <SafeAreaProvider
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text bold={true} style={styles.text}>
            TBD
          </Text>
          <NavTab screenName={props.screenName} />
        </SafeAreaProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Banner;