import { LayoutRectangle, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Input, useTheme, Icon, Button } from '@rneui/themed';
import { Disclaimer, InputLabel, CustomDropdown, Banner, ScrollBouncer } from '../../components';
import SecondSvg from '../../components/Svg/secondSvg';
import { useRef, useState } from 'react';
import { CHILDREN_IN_CHARGE, TIME_WORKED } from '../../constants';
import { ParoInputNames } from '../../types';
import ParoResult from '../../components/Modal/ParoResult';
import { paroCalculator } from '../../utils/paro';

function ParoCalculator(props: any) {
  const { theme } = useTheme();
  const averageSalaryRef = useRef<TextInput>();
  const resultRef = useRef<ScrollView>();

  const [averageSalary, setAverageSalary] = useState<number>(2000);
  const [timeWorked, setTimeWorked] = useState<string>('15');
  const [childInCharge, setChildInCharge] = useState<string>('none');
  const [resultScroll, setResultScroll] = useState<LayoutRectangle | null>(null);
  const [paroResult, setParoResult] = useState<number>(0);
  const [isShowResult, setIsShowResult] = useState(false);

  const showResult = isShowResult && !!averageSalary && !!timeWorked && !!childInCharge;

  const handleShowResult = () => {
    setIsShowResult(true);
    const result = paroCalculator({ averageSalary, childInCharge });
    setParoResult(result);
    setTimeout(
      () => resultRef.current?.scrollTo({ y: resultScroll?.y, animated: true }), 
    100);
  }

  const handleInputChange = (value: string, input: ParoInputNames ) => {
    switch (input) {
      case ParoInputNames .AVERAGE_SALARY:
        setAverageSalary(Number(value))
        break;
      case ParoInputNames .TIME_WORKED:
        setTimeWorked(value)
        break;
      case ParoInputNames .CHILDREN_IN_CHARGE:
        setChildInCharge(value)
        break;
    }
    if (isShowResult) {
      setIsShowResult(false);
    }
  }

  const handleRecalculate = () => {
    setIsShowResult(false);
    setParoResult(0);
    averageSalaryRef.current?.focus();
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
        stickyHeaderIndices={[1]}
      >
        <Banner 
          screenName={props.route.name}
        />
        <SecondSvg />
        <SafeAreaProvider
          style={{ 
            ...styles.centeredContainer,
            backgroundColor: theme?.colors.background
          }} 
        >
        <Input
          ref={averageSalaryRef as any}
          shake={() => { }}
          label={() => <InputLabel bold>Media de base de cotización en los últimos 6 meses</InputLabel>}
          rightIcon={<Icon
            name='logo-euro'
            type='ionicon'
            color={theme?.colors.primary}
          />}
          value={averageSalary ? averageSalary.toString() : ''}
          onChangeText={(value) => handleInputChange(value, ParoInputNames .AVERAGE_SALARY)}
          keyboardType="numeric"
          placeholder='Ej: 24000'
        />
        <CustomDropdown
          bold
          value={timeWorked}
          onChange={(value) => handleInputChange(value, ParoInputNames .TIME_WORKED)}
          data={TIME_WORKED}
          label='Período de tiempo trabajado en los últimos 6 años'
        />
        <CustomDropdown
          bold
          value={childInCharge}
          onChange={(value) => handleInputChange(value, ParoInputNames .CHILDREN_IN_CHARGE)}
          data={CHILDREN_IN_CHARGE}
          label='Número de hijos a cargo'
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
            <ParoResult
              isVisible={showResult}
              result={paroResult}
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

export default ParoCalculator;