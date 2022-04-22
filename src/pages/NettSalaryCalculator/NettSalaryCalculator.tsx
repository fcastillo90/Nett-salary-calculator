import { CheckBox, Icon, Input, Button, useTheme } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { LayoutRectangle, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { CustomDropdown, Disclaimer, InputLabel, NettSalaryModal } from '../../components';
import { CONTRACT_TYPE, DISCAPACITY_TYPE, FAMILY_STATUS, PROFESSION_TYPE } from '../../constants';
import { EmploymentType, LanguagesAvailable, LanguageWords, NettSalaryCalculator as NettSalaryInterface, NettSalaryInputNames } from '../../types';
import { initNettSalaryValues, nettSalaryCalculator } from '../../utils/netSalary';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const NettSalaryCalculator = (props: any) => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const salaryRef = useRef<TextInput>();
  const resultRef = useRef<ScrollView>();

  const [anualSalary, setAnualSalary] = useState<number>(0);
  const [numberOfPays, setNumberOfPays] = useState<number>(12);
  const [age, setAge] = useState<number>(0);
  const [employmentType, setEmploymentType] = useState<EmploymentType>(EmploymentType.GENERAL);
  const [professionType, setProfessionType] = useState('bachelor');
  const [geoMovility, setGeoMovility] = useState(false)
  const [discapacityType, setDiscapacityType] = useState('none');
  const [familyStatus, setFamilyStatus] = useState('single');
  const [isShowResult, setIsShowResult] = useState(false);
  const [nettSalary, setNettSalary] = useState<NettSalaryInterface>(initNettSalaryValues);
  const [resultScroll, setResultScroll] = useState<LayoutRectangle | null>(null);

  const currentLanguage = i18n.language as LanguagesAvailable;

  const handleShowResult = () => {
    setIsShowResult(true);
    const result = nettSalaryCalculator({ anualSalary, numberOfPays, employmentType })
    setNettSalary(result);
    setTimeout(
      () => resultRef.current?.scrollTo({ y: resultScroll?.y, animated: true }), 
    100);
  }

  const showResult = isShowResult && !!anualSalary && !!numberOfPays && !!employmentType && !!age

  const handleRecalculate = () => {
    setIsShowResult(false);
    setNettSalary(initNettSalaryValues);
    salaryRef.current?.focus();
  }

  const handleInputChange = (value: string, input: NettSalaryInputNames) => {
    switch (input) {
      case NettSalaryInputNames.ANUAL_SALARY:
        setAnualSalary(Number(value))
        break;
      case NettSalaryInputNames.EMPLOYMENT_TYPE:
        setEmploymentType(value as EmploymentType)
        break;
      case NettSalaryInputNames.NUMBER_OF_PAYS:
        setNumberOfPays(Number(value))
        break;
      case NettSalaryInputNames.PROFESSION_TYPE:
        setProfessionType(value)
        break;
      case NettSalaryInputNames.AGE:
        setAge(Number(value))
        break;
      case NettSalaryInputNames.GEO_MOVILITY:
        setGeoMovility(!geoMovility)
        break;
      case NettSalaryInputNames.FAMILY_STATUS:
        setFamilyStatus(value)
        break;
      case NettSalaryInputNames.DISCAPACITY_TYPE:
        setDiscapacityType(value)
        break;
    }
    if (isShowResult) {
      setIsShowResult(false);
    }
  }
  
  return (
    <>
      <ScrollView 
        ref={resultRef as any}
        style={{
          backgroundColor: theme?.colors.background
        }}
        keyboardDismissMode="on-drag"
      >
        <SafeAreaView
          style={styles.centeredContainer} 
        >
          <Input
            ref={salaryRef as any}
            shake={() => { }}
            label={() => <InputLabel bold>{t(LanguageWords.INPUT_LABEL_NI_ANUAL_SALARY)}</InputLabel>}
            rightIcon={<Icon
              name='logo-euro'
              type='ionicon'
              color={theme?.colors.primary}
            />}
            value={anualSalary ? anualSalary.toString() : ''}
            onChangeText={(value) => handleInputChange(value, NettSalaryInputNames.ANUAL_SALARY)}
            keyboardType="numeric"
            placeholder={t(LanguageWords.INPUT_PLACEHOLDER_NI_ANUAL_SALARY)}
          />

          <CustomDropdown
            bold
            value={employmentType}
            onChange={(value) => handleInputChange(value as EmploymentType, NettSalaryInputNames.EMPLOYMENT_TYPE)}
            data={CONTRACT_TYPE[currentLanguage]}
            label={t(LanguageWords.INPUT_LABEL_NI_EMPLOYMENT_TYPE)}
          />

          <CustomDropdown
            bold
            value={professionType}
            onChange={(value) => handleInputChange(value, NettSalaryInputNames.PROFESSION_TYPE)}
            data={PROFESSION_TYPE[currentLanguage]}
            label={t(LanguageWords.INPUT_LABEL_NI_PROFESSION_TYPE)}
          />

          <Input
            label={() => <InputLabel bold>{t(LanguageWords.INPUT_LABEL_NI_NUMBER_OF_PAYS)}</InputLabel>}
            shake={() => { }}
            placeholder={t(LanguageWords.INPUT_PLACEHOLDER_NI_NUMBER_OF_PAYS)}
            value={numberOfPays ? numberOfPays.toString() : ''}
            onChangeText={(value) => handleInputChange(value, NettSalaryInputNames.NUMBER_OF_PAYS)}
            keyboardType="numeric"
          />

          <Input
            label={() => <InputLabel bold>{t(LanguageWords.INPUT_LABEL_NI_AGE)}</InputLabel>}
            shake={() => { }}
            placeholder={t(LanguageWords.INPUT_PLACEHOLDER_NI_AGE)}
            value={age ? age.toString() : ''}
            onChangeText={(value) => handleInputChange(value, NettSalaryInputNames.AGE)}
            keyboardType="numeric"
          />

          <CustomDropdown
            bold
            value={familyStatus}
            onChange={(value) => handleInputChange(value, NettSalaryInputNames.FAMILY_STATUS)}
            data={FAMILY_STATUS[currentLanguage]}
            label={t(LanguageWords.INPUT_LABEL_NI_FAMILY_STATUS)}
          />

          <CustomDropdown
            bold
            value={discapacityType}
            onChange={(value) => handleInputChange(value, NettSalaryInputNames.DISCAPACITY_TYPE)}
            data={DISCAPACITY_TYPE[currentLanguage]}
            label={t(LanguageWords.INPUT_LABEL_NI_DISCAPACITY_TYPE)}
          />

          <CheckBox
            checked={geoMovility}
            containerStyle={{ width: "100%" }}
            onPress={() => handleInputChange('', NettSalaryInputNames.GEO_MOVILITY)}
            size={30}
            textStyle={{}}
            title={<InputLabel bold>{t(LanguageWords.INPUT_LABEL_NI_GEO_MOVILITY)}</InputLabel>}
            titleProps={{}}
          />

          <View style={{flex: 1, width: '100%'}}>
            <Button
              style={{ marginBottom: 40, marginTop: 15, }}
              title={t(LanguageWords.BUTTON_CALCULATE)}
              onPress={handleShowResult}
              disabled={showResult}
            />
          </View>

          <View 
            style={{flex: 1, width: '100%'}}
            onLayout={event => setResultScroll(event.nativeEvent.layout)}
          >
            {showResult &&
              <NettSalaryModal
                isVisible={showResult}
                result={nettSalary}
                onRecalculate={handleRecalculate}
              />
            }
          </View>

          <Disclaimer />

        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    marginTop: -20,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default NettSalaryCalculator;
