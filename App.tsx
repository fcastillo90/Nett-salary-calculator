import { StatusBar } from 'expo-status-bar';
import Src from './src';
import { ThemeProvider } from '@rneui/themed';
import theme from './src/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/translations'


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Src />
      </SafeAreaProvider>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}