import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { NettSalaryCalculatorView, ParoCalculatorView } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './hooks/navigation';
import { PageNames, PageTitle } from './types';
import { Banner } from './components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const Src = () => {
  const testRef = useRef<any>(new Animated.Value(145)).current;

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        tabBar={(props) => <>
          <Banner {...props as any} />
        </>}
      >
          <Screen 
            name={PageNames.NETT_SALARY} 
            component={NettSalaryCalculatorView}
            options={{ title: PageTitle.NETT_SALARY }}
            initialParams={{ testRef }}
          />
          <Screen 
            name={PageNames.PARO}
            component={ParoCalculatorView} 
            options={{ title: PageTitle.PARO }} 
          />
      </Navigator>
    </NavigationContainer>
  );
}

export default Src;
