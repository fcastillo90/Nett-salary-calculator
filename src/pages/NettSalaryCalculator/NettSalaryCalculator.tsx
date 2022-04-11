import { CheckBox, Icon, Input, Button, useTheme } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { LayoutRectangle, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { CustomDropdown, Disclaimer, InputLabel, NettSalaryModal, ScrollBouncer } from '../../components';
import { CONTRACT_TYPE, DISCAPACITY_TYPE, FAMILY_STATUS, PROFESSION_TYPE } from '../../constants';
import { EmploymentType, NettSalaryCalculator as NettSalaryInterface, NettSalaryInputNames } from '../../types';
import { initNettSalaryValues, nettSalaryCalculator } from '../../utils/netSalary';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BannerSvg from '../../components/Svg';

const NettSalaryCalculator = () => {
  const { theme } = useTheme();
  const salaryRef = useRef<TextInput>();
  const resultRef = useRef<ScrollView>();

  const [anualSalary, setAnualSalary] = useState<number>(55000);
  const [numberOfPays, setNumberOfPays] = useState<number>(12);
  const [age, setAge] = useState<number>(32);
  const [employmentType, setEmploymentType] = useState<EmploymentType>(EmploymentType.GENERAL);
  const [professionType, setProfessionType] = useState('bachelor');
  const [geoMovility, setGeoMovility] = useState(false)
  const [discapacityType, setDiscapacityType] = useState('none');
  const [familyStatus, setFamilyStatus] = useState('single');
  const [isShowResult, setIsShowResult] = useState(false);
  const [nettSalary, setNettSalary] = useState<NettSalaryInterface>(initNettSalaryValues);
  const [resultScroll, setResultScroll] = useState<LayoutRectangle | null>(null);

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
      <ScrollBouncer
        topBounceColor={theme?.colors.primary}
        bottomBounceColor={theme?.colors.background}
      />
      <ScrollView 
        ref={resultRef as any}
        style={{
          flex: 1,
        }}
        keyboardDismissMode="on-drag"
        stickyHeaderIndices={[0]}
      >
        <BannerSvg />
        <SafeAreaProvider
          style={{ 
            ...styles.centeredContainer,
            backgroundColor: theme?.colors.background
          }} 
        >
          <Input
            ref={salaryRef as any}
            shake={() => { }}
            label={() => <InputLabel bold>Salario bruto anual</InputLabel>}
            rightIcon={<Icon
              name='logo-euro'
              type='ionicon'
              color={theme?.colors.primary}
            />}
            value={anualSalary ? anualSalary.toString() : ''}
            onChangeText={(value) => handleInputChange(value, NettSalaryInputNames.ANUAL_SALARY)}
            keyboardType="numeric"
            placeholder='Ej: 24000'
          />

          <CustomDropdown
            bold
            value={employmentType}
            onChange={(value) => handleInputChange(value as EmploymentType, NettSalaryInputNames.EMPLOYMENT_TYPE)}
            data={CONTRACT_TYPE}
            label='Tipo de contrato'
          />

          <CustomDropdown
            bold
            value={professionType}
            onChange={(value) => handleInputChange(value, NettSalaryInputNames.PROFESSION_TYPE)}
            data={PROFESSION_TYPE}
            label='Categoría profesional'
          />

          <Input
            label={() => <InputLabel bold>Número de pagas</InputLabel>}
            shake={() => { }}
            placeholder="Ej: 12"
            value={numberOfPays ? numberOfPays.toString() : ''}
            onChangeText={(value) => handleInputChange(value, NettSalaryInputNames.NUMBER_OF_PAYS)}
            keyboardType="numeric"
          />

          <Input
            label={() => <InputLabel bold>Edad</InputLabel>}
            shake={() => { }}
            placeholder="Ej: 30"
            value={age ? age.toString() : ''}
            onChangeText={(value) => handleInputChange(value, NettSalaryInputNames.AGE)}
            keyboardType="numeric"
          />

          <CustomDropdown
            bold
            value={familyStatus}
            onChange={(value) => handleInputChange(value, NettSalaryInputNames.FAMILY_STATUS)}
            data={FAMILY_STATUS}
            label='Situación familiar'
          />

          <CustomDropdown
            bold
            value={discapacityType}
            onChange={(value) => handleInputChange(value, NettSalaryInputNames.DISCAPACITY_TYPE)}
            data={DISCAPACITY_TYPE}
            label='¿Padeces algún tipo de discapacidad?'
          />

          <CheckBox
            checked={geoMovility}
            containerStyle={{ width: "100%" }}
            onPress={() => handleInputChange('', NettSalaryInputNames.GEO_MOVILITY)}
            size={30}
            textStyle={{}}
            title={<InputLabel bold>Tengo movilidad geográfica</InputLabel>}
            titleProps={{}}
          />

          <View style={{flex: 1, width: '100%'}}>
            <Button
              style={{ marginBottom: 40, marginTop: 15, }}
              title="Calcular"
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

        </SafeAreaProvider>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});


export default NettSalaryCalculator;
