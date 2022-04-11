import { Icon, TextProps, useTheme } from '@rneui/themed';
import {StyleSheet, View } from 'react-native';
import InputLabel from '../InputLabel';
import RNPickerSelect from 'react-native-picker-select';
import { DataType } from '../../types';

interface Props extends TextProps {
  value: string;
  label: string
  onChange: (value: string) => void;
  data: DataType[];
}

function CustomDropdown(props: Props) {
  const { theme } = useTheme();

  const { label, value, onChange, data } = props;

  return (
    <View style={styles.container}>
      <InputLabel bold style={styles.textLabel}>
        {label}
      </InputLabel>
      <RNPickerSelect
        style={{
          viewContainer: {
            height: 50,
            borderWidth: 0,
            paddingHorizontal: 8,
            marginHorizontal: 10,
            marginTop: 10,
            paddingTop: 10,
          },
          inputIOS: {
            fontSize: 18,
            fontFamily: 'Futura'
          }
        }}
        items={data}
        placeholder={{}}
        value={value}
        onValueChange={onChange}
        Icon={() => {
          return <Icon name="chevron-down-outline" type="ionicon"
          size={25} color={theme?.colors.primary} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 18,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  textLabel: {
    marginLeft: 10,
    color: '#222',
  }
});

export default CustomDropdown;