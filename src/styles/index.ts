import { createTheme } from "@rneui/themed";

const theme = createTheme({
  Button: {
    buttonStyle:{
      borderRadius: 15,
      height: 50,
      width: '100%'
    }
  },
  Text: {
    style: {
      fontFamily: 'Futura'
    }
  },
  Input: {
    inputStyle:{
      color: '#222',
      fontSize: 24,
      marginLeft: 10,
      fontFamily: 'Futura'
    },
    containerStyle: {
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 18,
      paddingBottom: 8,
      marginBottom: 20,
    },
    inputContainerStyle: {
      width: '100%',
      height: 50,
      borderBottomWidth: 0,
      borderRadius: 15,
      paddingHorizontal: 8,
      marginTop: 10,
    },
    labelStyle:{
      color: '#222',
      fontFamily: 'Futura'
    },
  },
  lightColors: {
    background:'#f3f6f4',
    primary: '#03DDB2',
    secondary: '#FFFFFF'
  },

});

export default theme