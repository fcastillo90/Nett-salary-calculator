import React, { useEffect, useRef, useState } from 'react';
import { FAB, useTheme } from '@rneui/themed';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';
import { LANGUAGES } from '../../constants';
import { useTranslation } from 'react-i18next';

const LanguageFAB = () => {
  const [language, setLanguage] = useState('es');
  const { i18n } = useTranslation();

  const languagePickerRef = useRef<any>();
  const { theme } = useTheme();

  const handleTogglePicker = () => {
    languagePickerRef.current?.togglePicker();
  }

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language])
  return (
    <>
      <RNPickerSelect
        style={{
          inputIOS: {
            display: 'none'
          },
        }}
        ref={languagePickerRef}
        items={LANGUAGES}
        value={language}
        onValueChange={setLanguage}
        placeholder={{}}
      />
      <FAB
        placement="right"
        visible={true}
        icon={{ name: 'language', type: "ionicon", color: 'white' }}
        color={theme?.colors.primary}
        onPress={handleTogglePicker}
        style={styles.fab}
      />
    </>
  );
}
const styles = StyleSheet.create({
  fab: {
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    zIndex: 1000,
    marginBottom: 30,
    marginRight: 20
  },
  modalView: {
    margin: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor: 'white',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default LanguageFAB;
