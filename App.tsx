import { StatusBar } from 'expo-status-bar';
import Src from './src';
import { ThemeProvider } from '@rneui/themed';
import theme from './src/styles';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Src />
        <StatusBar style="dark" />
    </ThemeProvider>
  );
}