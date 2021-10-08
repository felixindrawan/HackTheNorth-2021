import React, { useState, useEffect } from 'react';
import {
  Poppins_100Thin as poppins100,
  Poppins_100Thin_Italic as poppins100Italic,
  Poppins_200ExtraLight as poppins200,
  Poppins_200ExtraLight_Italic as poppins200Italic,
  Poppins_300Light as poppins300,
  Poppins_300Light_Italic as poppins300Italic,
  Poppins_400Regular as poppins400,
  Poppins_400Regular_Italic as poppins400Italic,
  Poppins_500Medium as poppins500,
  Poppins_500Medium_Italic as poppins500Italic,
  Poppins_600SemiBold as poppins600,
  Poppins_600SemiBold_Italic as poppins600Italic,
  Poppins_700Bold as poppins700,
  Poppins_700Bold_Italic as poppins700Italic,
  Poppins_800ExtraBold as poppins800,
  Poppins_800ExtraBold_Italic as poppins800Italic,
  Poppins_900Black as poppins900,
  Poppins_900Black_Italic as poppins900Italic,
  useFonts,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './page/WelcomePage';
import DashboardPage from './page/DashboardPage';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); // Ignore all log notifications
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [fontsLoaded] = useFonts({
    poppins100,
    poppins100Italic,
    poppins200,
    poppins200Italic,
    poppins300,
    poppins300Italic,
    poppins400,
    poppins400Italic,
    poppins500,
    poppins500Italic,
    poppins600,
    poppins600Italic,
    poppins700,
    poppins700Italic,
    poppins800,
    poppins800Italic,
    poppins900,
    poppins900Italic,
  });

  useEffect(() => {
    const usersRef = firestore().collection('users');
    auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setIsLoading(false);
            setUser(userData);
          })
          .catch((e) => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  if (!fontsLoaded || isLoading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="DashboardPage" component={DashboardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
