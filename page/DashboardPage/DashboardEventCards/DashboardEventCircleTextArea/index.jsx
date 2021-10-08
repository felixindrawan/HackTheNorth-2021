import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorsBlue, colorsWhite } from '../../../../utils/colors';
import { fontsizeSectionTitle } from '../../../../utils/fontsize';

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorsWhite,
    position: 'absolute',
    top: -20,
    right: -20,
  },
  title: {
    fontSize: fontsizeSectionTitle,
    fontFamily: 'poppins700',
    color: colorsBlue,
  },
});

export default function DashboardEventCircleTextArea({ title }) {
  return (
    <View style={styles.container}>
      <View style={{ width: 100 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

DashboardEventCircleTextArea.propTypes = {
  title: PropTypes.string,
};

DashboardEventCircleTextArea.defaultProps = {
  title: '',
};
