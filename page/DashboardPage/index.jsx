import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { mockEvents as events } from '../../data/events';
import DashboardEventsCards from './DashboardEventCards';
import { eventsBackground, groupsIcon } from '../../data/icons';
import { colorsWhite } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsWhite,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

const DashboardPage = ({ navigation }) => {
  const handleEventsRedirect = (event) => navigation.navigate('EventsPage', { data: event });

  const renderDashboardEventCards = (event, i) => (
    <DashboardEventsCards
      key={event.id}
      eventDate={event.date}
      locationName={event.locationName}
      backgroundImg={eventsBackground[i % 2]}
      handleButtonNavigation={() => handleEventsRedirect(event)}
    />
  );
  const renderSections = [
    {
      title: 'My Upcoming Events',
      viewHeight: 260,
      component: (
        <FlatList
          horizontal
          data={events}
          renderItem={({ item, index }) => renderDashboardEventCards(item, index)}
        />
      ),
    },
    {
      title: 'My Upcoming Events',
      viewHeight: 260,
      component: (
        <FlatList
          horizontal
          data={events}
          renderItem={({ item, index }) => renderDashboardEventCards(item, index)}
        />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Dashboard" />
      <FlatList
        data={renderSections}
        renderItem={({ item, index }) => (
          <Section title={item.title} childrenViewHeight={item.viewHeight} key={index}>
            {item.component}
          </Section>
        )}
      />
    </View>
  );
};

DashboardPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

DashboardPage.defaultProps = {
  navigation: { navigate: () => {} },
};

export default DashboardPage;
