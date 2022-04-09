import { withTheme } from '@rneui/themed';
import React from 'react';
import { NettSalaryCalculator, ParoCalculator } from './pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { navigationRef } from './hooks/navigation';
import { PageNames, PageTitle } from './types';

type MyCustomComponentProps = {
};
const {Navigator, Screen} = createBottomTabNavigator();

const Src = withTheme<MyCustomComponentProps>((props) => {
  const {theme} = props;
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        tabBar={() => <></>}
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Futura'
          },
          headerTitleContainerStyle: {
            borderWidth: 0,
            zIndex: 20
          },
          headerStyle: {
            backgroundColor: theme?.colors.primary,
            borderWidth: 0,
            shadowColor: 'transparent'
          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            borderRadius: 50,
            backgroundColor: theme?.colors.background,
            ...styles.shadow
          }, 
          tabBarIcon: () => null,
        }}
      >
          <Screen 
            name={PageNames.NETT_SALARY} 
            component={NettSalaryCalculator}
            options={{ title: PageTitle.NETT_SALARY }} 
          />
          <Screen 
            name={PageNames.PARO}
            component={ParoCalculator} 
            options={{ title: PageTitle.PARO }} 
          />
      </Navigator>
    </NavigationContainer>
  );
})
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
})

export default Src;
