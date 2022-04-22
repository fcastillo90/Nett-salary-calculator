import { Text } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import {StyleSheet, View } from 'react-native';
import { LanguageWords } from '../../types';

function Disclaimer() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text bold style={styles.text}>
        {t(LanguageWords.DISCLAIMER)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 40
  },
  text: {
    fontSize: 10
  }
});

export default Disclaimer;