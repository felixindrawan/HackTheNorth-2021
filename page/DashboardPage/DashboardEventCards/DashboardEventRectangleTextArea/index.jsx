import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorsBlue, colorsWhite } from '../../../../utils/colors';
import { fontsizeSectionTitle } from '../../../../utils/fontsize';

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: colorsWhite,
    position: 'absolute',
    bottom: 20,
    left: -20,
    paddingRight: 10,
  },
  title: {
    fontSize: fontsizeSectionTitle,
    fontFamily: 'poppins400',
    color: colorsBlue,
  },
});

export default function DashboardEventRectangleTextArea({ title }) {
  return (
    <View style={styles.container}>
      <View style={{ width: 'auto' }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

DashboardEventRectangleTextArea.propTypes = {
  title: PropTypes.string,
};

DashboardEventRectangleTextArea.defaultProps = {
  title: '',
};
