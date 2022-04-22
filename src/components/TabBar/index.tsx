import { FAB, Text, useTheme } from '@rneui/themed';
import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native';


function TabBar({ state, descriptors, navigation, position, ...props }: any) {
  const { theme } = useTheme();
  const onPress = ({key, name, isFocused}: {key: string, name: string, isFocused: boolean}) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: name, merge: true });
    }
  };
  return (
      <View 
        style={{
          ...styles.container,
          height: 116,
          backgroundColor: theme?.colors.background,
        }}
      >
          <View 
            style={styles.navigation}
          >
            {state.routes.map((route: any, index: number) => {
              const isFocused = state.index === index;
              const { options } = descriptors[route.key];
              const label = options.title
              return (
                <View 
                  key={label}
                  style={styles.option}
                >
                  <TouchableWithoutFeedback 
                    onPress={() => onPress({key: route.key, name: route.name, isFocused})}
                  >
                    <Text bold>{label}</Text>
                  </TouchableWithoutFeedback>
                </View>)
            })}
        </View>
        <Animated.View 
          style={{
            ...styles.selected,
            borderColor: theme?.colors.primary,
            transform: [
              { translateX: position.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 170],
              }) },
            ]
          }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  navigation: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: "50%",
    zIndex: 2
  },
  selected: {
    position: 'absolute',
    borderBottomWidth: 4,
    zIndex: 1,
    bottom: 0,
    left: 22,
    width: '50%',
  }
});

export default TabBar;