import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export const DismissKeyboardHOC = (Comp: React.ElementType) => {
  return ({ children, ...props }: any) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};

export const DismissKeyboardView = DismissKeyboardHOC(View)

export default DismissKeyboardView;