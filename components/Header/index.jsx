import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { colorsBlue, colorsLightBlue } from '../../utils/colors';
import { fontsizeHeader } from '../../utils/fontsize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: fontsizeHeader,
    fontFamily: 'poppins700',
    color: colorsBlue,
  },
});

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: 250,
          width: '200%',
          zIndex: -1,
          backgroundColor: colorsLightBlue,
          top: 0,
          left: 0,
          right: 0,
          marginHorizontal: -20,
          marginTop: -20,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};
