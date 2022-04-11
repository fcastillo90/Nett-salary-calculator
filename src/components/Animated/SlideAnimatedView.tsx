import * as React from 'react';
import { Animated } from 'react-native';
import {
  useFocusEffect,
} from '@react-navigation/native';

const SlideAnimatedView = (props: any) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default SlideAnimatedView;