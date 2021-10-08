import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colorsBlue, colorsWhite } from '../../utils/colors';

export default function RoundedButton({
  text,
  textColor,
  buttonWidth,
  buttonHeight,
  buttonColor,
  buttonMargin,
  borderRadius,
  handleButtonPress,
}) {
  return (
    <TouchableOpacity
      style={{
        width: buttonWidth,
        height: buttonHeight,
        backgroundColor: buttonColor,
        marginVertical: buttonMargin,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius,
      }}
      onPress={handleButtonPress}
    >
      <Text style={{ color: textColor, fontFamily: 'poppins400' }}>{text}</Text>
    </TouchableOpacity>
  );
}

RoundedButton.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
  buttonColor: PropTypes.string,
  buttonMargin: PropTypes.number,
  borderRadius: PropTypes.number,
  handleButtonPress: PropTypes.func,
};

RoundedButton.defaultProps = {
  text: '',
  textColor: colorsWhite,
  buttonWidth: 0,
  buttonHeight: 0,
  buttonColor: colorsBlue,
  buttonMargin: 0,
  borderRadius: 5,
  handleButtonPress: () => {},
};
