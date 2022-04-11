import { Text, useTheme } from '@rneui/themed';
import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native';
import BannerSvg from '../Svg';


function TestBanner({ state, descriptors, navigation, position }: any) {
  const { theme } = useTheme();

  return (
    <>
    <View 
      style={{
        ...styles.container,
        backgroundColor: theme?.colors.background
      }}
    >
      <View 
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme?.colors.primary,
          paddingHorizontal: 20,
          paddingTop: 30
        }}
      >
        <View style={styles.navigation}>
          {state.routes.map((route: any, index: number) => {
            const isFocused = state.index === index;
            const { options } = descriptors[route.key];
            const label = options.title
            
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({ name: route.name, merge: true });
              }
            };
            return (
              <View 
                key={label}
                style={
                  [
                    styles.option, 
                  ]
                }
              >
                <TouchableWithoutFeedback 
                  onPress={onPress}
                >
                  <Text bold>{label}</Text>
                </TouchableWithoutFeedback>
              </View>)
          })}
          <Animated.View 
            style={{
              ...styles.selected,
              transform: [
                { translateY: -22.5, },
                { translateX:  -75 },
                { translateX: position.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 130],
                }) },
              ]
            }}
          ></Animated.View >
        </View>
      </View>

    </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 145,
  },
  navigation: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#ccf5ec",
    borderRadius: 50,
    width: 300,
    height: 60,
    minWidth: 200,
    padding: 10,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: "50%",
    zIndex: 2
  },
  selected: {
    zIndex: 1,
    position: 'absolute',
    marginHorizontal: 10,
    top: 30,
    left: 75,
    backgroundColor: "#81e6d1",
    height: 45,
    width: 150,
    borderRadius: 50,
  }
});

export default TestBanner;