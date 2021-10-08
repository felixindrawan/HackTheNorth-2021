import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet, View, ImageBackground, TouchableOpacity,
} from 'react-native';
import DashboardEventCircleTextArea from './DashboardEventCircleTextArea';
import DashboardEventRectangleTextArea from './DashboardEventRectangleTextArea';

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 250,
    marginRight: 10,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default function DashboardEventsCards({
  eventDate,
  backgroundImg,
  locationName,
  handleButtonNavigation,
}) {
  return (
    <TouchableOpacity onPress={handleButtonNavigation}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.image}>
          <DashboardEventCircleTextArea title={eventDate} />
          <DashboardEventRectangleTextArea title={locationName} />
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

DashboardEventsCards.propTypes = {
  backgroundImg: PropTypes.number,
  eventDate: PropTypes.string,
  handleButtonNavigation: PropTypes.func,
  locationName: PropTypes.string,
};

DashboardEventsCards.defaultProps = {
  backgroundImg: '',
  eventDate: '',
  handleButtonNavigation: () => {},
  locationName: '',
};
