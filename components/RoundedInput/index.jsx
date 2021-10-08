import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { colorsBlue } from '../../utils/colors';

export default function RoundedInput({
  placeholderText,
  inputText,
  inputWidth,
  inputHeight,
  borderColor,
  inputMargin,
  borderRadius,
  borderWidth,
  handleInputPress,
<<<<<<< HEAD
=======
  autocomplete,
  secureText,
  spellCheck,
>>>>>>> 35f027572480f557657949c437069cb0b587081c
}) {
  return (
    <TextInput
      placeholder={placeholderText}
      onChangeText={handleInputPress}
<<<<<<< HEAD
      value={inputText}
=======
      defaultValue={inputText}
>>>>>>> 35f027572480f557657949c437069cb0b587081c
      style={{
        fontFamily: inputText ? 'poppins400' : 'poppins300Italic',
        width: inputWidth,
        height: inputHeight,
        borderColor,
        marginVertical: inputMargin,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius,
        borderWidth,
        paddingLeft: 10,
      }}
<<<<<<< HEAD
=======
      autoCompleteType={autocomplete}
      secureTextEntry={secureText}
      spellCheck={spellCheck}
>>>>>>> 35f027572480f557657949c437069cb0b587081c
    />
  );
}

RoundedInput.propTypes = {
  placeholderText: PropTypes.string,
  inputText: PropTypes.string,
  inputWidth: PropTypes.number,
  inputHeight: PropTypes.number,
  borderColor: PropTypes.string,
  inputMargin: PropTypes.number,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  handleInputPress: PropTypes.func,
<<<<<<< HEAD
=======
  autocomplete: PropTypes.string,
  secureText: PropTypes.bool,
  spellCheck: PropTypes.bool,
>>>>>>> 35f027572480f557657949c437069cb0b587081c
};

RoundedInput.defaultProps = {
  placeholderText: '',
  inputText: '',
  inputWidth: 0,
  inputHeight: 0,
  borderColor: colorsBlue,
  inputMargin: 0,
  borderRadius: 5,
  borderWidth: 2,
  handleInputPress: () => {},
<<<<<<< HEAD
=======
  autocomplete: 'off',
  secureText: false,
  spellCheck: false,
>>>>>>> 35f027572480f557657949c437069cb0b587081c
};
