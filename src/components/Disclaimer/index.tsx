import { Text } from '@rneui/themed';
import {StyleSheet, View } from 'react-native';

function Disclaimer() {

  return (
    <View style={styles.container}>
      <Text bold style={styles.text}>
        Los resultados de la simulación se basan en los datos introducidos por el usuario y tienen valor meramente informativos y orientativos, en ningún caso son vinculantes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 10
  }
});

export default Disclaimer;