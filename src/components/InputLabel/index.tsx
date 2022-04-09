import { Text, TextProps } from '@rneui/themed';

function InputLabel(props: TextProps) {
  const { children, ...extraProps } = props;

  return (
    <Text 
      h2 
      h2Style={{
        fontSize: 18,
        marginLeft: 10,
        color: '#222',
      }} 
      {...extraProps}
    >
      {children}
    </Text>
  );
}

export default InputLabel;