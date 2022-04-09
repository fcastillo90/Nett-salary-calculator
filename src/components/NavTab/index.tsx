import { Text } from '@rneui/themed';
import {StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '../../hooks/navigation';
import { PageNames } from '../../types';

interface Props {
  screenName: string;
}

function NavTab({screenName}: Props) {
  return (
    <View style={styles.navigation}>
      <View 
        style={
          [
            styles.option, 
            screenName === PageNames.NETT_SALARY && styles.selected
          ]
        }
      >
        <TouchableWithoutFeedback 
          onPress={()=> useNavigation(PageNames.NETT_SALARY)}
        >
          <Text bold>Sueldo Neto</Text>
        </TouchableWithoutFeedback>
      </View>
      <View 
        style={
          [
            styles.option, 
            screenName === PageNames.PARO && styles.selected
          ]
        }
      >
        <TouchableWithoutFeedback 
        onPress={()=> useNavigation(PageNames.PARO)}
        >
          <Text bold>Paro</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#ccf5ec",
    borderRadius: 50,
    width: '60%',
    height: 60,
    minWidth: 200,
    maxWidth: 300,
    padding:10,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    width: "50%",
  },
  selected: {
    backgroundColor: "#81e6d1",
    height: 45,
    borderRadius: 50,
  }
});

export default NavTab;