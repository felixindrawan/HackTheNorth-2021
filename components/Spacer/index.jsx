import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function Spacer({ width, height, color }) {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: color,
      }}
    />
  );
}

Spacer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Spacer.defaultProps = {
  width: 0,
  height: 2,
  color: 'transparent',
};
