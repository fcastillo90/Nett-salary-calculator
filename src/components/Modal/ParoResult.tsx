import { Text, Button, useTheme } from '@rneui/themed';
import { Modal, StyleSheet, View } from 'react-native';
import { NettSalaryCalculator } from '../../types';
import { forwardRef } from 'react';
import { getCurrencyFormatter } from '../../utils/currencyFormatter';

interface Props {
  result: number;
  onRecalculate: () => void;
  isVisible: boolean;
}

const ParoResult = forwardRef((props: Props, ref) => {
  const { result, onRecalculate, isVisible } = props;
  const { theme } = useTheme();

  return (
    <View 
      style={[styles.modalView]}
    >
      <View style={styles.innerContainer}>
        <View style={styles.salary}>
          <Text bold style={styles.text}>
            Importe Paro
          </Text>
          <Text 
            bold 
            style={{
              ...styles.salaryText,
              color: theme?.colors.primary,
              fontWeight: 'bold',
            }}
          >
            {getCurrencyFormatter(result)}
          </Text>
        </View>
        <Button
          style={{
            marginTop: 20,
          }}
          onPress={onRecalculate}
          title="Recalcular"
        />
      </View>
    </View>
  );
})

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: '100%',
    padding: 18,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    width: '100%'
  },
  salary: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  salaryText: {
    fontSize: 45,
    marginBottom: 25,
    marginLeft: 10
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 2,
    color: '#888'
  },
});

export default ParoResult;