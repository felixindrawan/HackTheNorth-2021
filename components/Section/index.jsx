import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colorsBlue } from '../../utils/colors';
import { fontsizeText } from '../../utils/fontsize';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontFamily: 'poppins700',
    color: colorsBlue,
    fontSize: fontsizeText,
    marginBottom: 20,
  },
});

export default function Section({ title, childrenViewHeight, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ height: childrenViewHeight }}>{children}</View>
    </View>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  childrenViewHeight: PropTypes.number,
};

Section.defaultProps = {
  children: <></>,
  title: '',
  childrenViewHeight: 0,
};
