import React from 'react';
import { NettSalaryCalculatorView, ParoCalculatorView } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './hooks/navigation';
import { LanguageWords, PageNames, PageTitle } from './types';
import { LanguageFAB, TabBar } from './components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from 'react-i18next';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const Src = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        tabBar={(props) => <>
          <TabBar {...props as any} />
        </>}
      >
          <Screen 
            name={PageNames.NETT_SALARY} 
            component={NettSalaryCalculatorView}
            options={{ title: t([LanguageWords.PAGE_TITLE_NET_INCOME]) }}
          />
          <Screen 
            name={PageNames.PARO}
            component={ParoCalculatorView} 
            options={{ title: t(LanguageWords.PAGE_TITLE_PARO) }} 
          />
      </Navigator>
      <LanguageFAB />
    </NavigationContainer>
  );
}

export default Src;
