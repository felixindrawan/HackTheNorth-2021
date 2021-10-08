import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
<<<<<<< HEAD
  StyleSheet, ImageBackground, View, Image, Text,
=======
  StyleSheet, ImageBackground, View, Image, Text, StatusBar,
>>>>>>> 35f027572480f557657949c437069cb0b587081c
} from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import RoundedInput from '../../components/RoundedInput';
import blueWaveBackground from '../../assets/background/blue-wave-welcome.png';
import { colorsBlue, colorsWhite, colorsYellow } from '../../utils/colors';
import mapEventLogo from '../../assets/graphics/welcome_globe.png';
import { stringMapEvent, stringWelcomeTo } from '../../utils/strings';
import { fontsizeAppTitle, fontsizeHeader } from '../../utils/fontsize';
<<<<<<< HEAD
import { addUser } from '../../api/MapEventApi';
=======
import Spacer from '../../components/Spacer';
>>>>>>> 35f027572480f557657949c437069cb0b587081c

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  mapEventLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  welcomeTo: {
    fontSize: fontsizeHeader,
    fontFamily: 'poppins600',
    color: colorsBlue,
  },
  mapEvent: {
    fontSize: fontsizeAppTitle,
    fontFamily: 'poppins800',
    color: colorsBlue,
  },
});

export default function WelcomePage({ navigation }) {
  const [username, setUsername] = useState('');
<<<<<<< HEAD
=======
  const [password, setPassword] = useState('');
>>>>>>> 35f027572480f557657949c437069cb0b587081c
  const handleSignUpButton = () => {
    navigation.navigate('DashboardPage');
  };
  const handleSignInButton = () => {
    navigation.navigate('DashboardPage');
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
=======
      <StatusBar hidden />
>>>>>>> 35f027572480f557657949c437069cb0b587081c
      <ImageBackground source={blueWaveBackground} resizeMode="cover" style={styles.background}>
        <Image source={mapEventLogo} style={styles.mapEventLogo} />
        <View style={styles.title}>
          <Text style={styles.welcomeTo}>{stringWelcomeTo}</Text>
          <Text style={styles.mapEvent}>{stringMapEvent}</Text>
        </View>
        <RoundedInput
          placeholderText="Username"
          inputText={username}
          inputWidth={200}
          inputHeight={40}
          inputMargin={5}
<<<<<<< HEAD
          handleInputPress={() => {}}
        />
        <RoundedInput
          placeholderText="Password"
          inputText={username}
          inputWidth={200}
          inputHeight={40}
          inputMargin={5}
          handleInputPress={() => {}}
=======
          handleInputPress={(text) => {
            setUsername(text);
          }}
        />
        <RoundedInput
          placeholderText="Password"
          inputText={password}
          inputWidth={200}
          inputHeight={40}
          inputMargin={5}
          handleInputPress={(text) => {
            setPassword(text);
          }}
          secureText
>>>>>>> 35f027572480f557657949c437069cb0b587081c
        />
        <RoundedButton
          text="Sign In"
          textColor={colorsWhite}
          buttonWidth={200}
          buttonHeight={40}
          buttonColor={colorsBlue}
          buttonMargin={5}
          handleButtonPress={handleSignInButton}
        />
<<<<<<< HEAD
=======
        <Spacer width={200} height={20} />
>>>>>>> 35f027572480f557657949c437069cb0b587081c
        <RoundedButton
          text="Create an Account"
          textColor={colorsBlue}
          buttonWidth={200}
          buttonHeight={40}
          buttonColor={colorsYellow}
          buttonMargin={5}
          handleButtonPress={handleSignUpButton}
        />
      </ImageBackground>
    </View>
  );
}

WelcomePage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

WelcomePage.defaultProps = {
  navigation: { navigate: () => {} },
};
