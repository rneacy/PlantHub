import React , { useState } from 'react';
import { useFonts, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { AppLoading } from 'expo'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants'
import regPushNotifs from './Util/regnotifs.js'
import { PlantScreen, NewPlantScreen } from './Screens/PlantScreen'
import HomeScreen from './Screens/HomeScreen'
import { styles } from './Util/Styles'
import { ScreenHeadings } from './Util/Strings'

const AppTitle = "PlantHub"

const isBenStinkyToday = () => {
  return "Yes"
}

const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({Quicksand_500Medium, Quicksand_700Bold, Pacifico_400Regular});

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = {AppTitle}
        screenOptions = {{
          headerStyle: {
            backgroundColor: "#44aa44"
          },
          headerTintColor: "#fff",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        >
        <Stack.Screen name = {AppTitle} component = {HomeScreen} options = {{headerShown: false}}></Stack.Screen>
        <Stack.Screen name = "PlantScreen" component = {PlantScreen} options = {{title: ScreenHeadings.plantScreen}}></Stack.Screen>
        <Stack.Screen name = "NewPlantScreen" component = {NewPlantScreen} options = {{title: ScreenHeadings.newPlantScreen}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default App;