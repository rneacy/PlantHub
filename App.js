import React , { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button } from 'react-native';
import { useFonts, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { AppLoading } from 'expo'
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue"
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants'
import regPushNotifs from './Util/regnotifs.js'
import { PlantScreen, NewPlantScreen } from './Screens/PlantScreen.js'
import { styles } from './Util/Styles.js'

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
        <Stack.Screen name = "PlantScreen" component = {PlantScreen} options = {{title: "Your Plants"}}></Stack.Screen>
        <Stack.Screen name = "NewPlantScreen" component = {NewPlantScreen} options = {{title: "Add New Plant"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return(
    <View style = {styles.home}>
      <StatusBar style={'light-content'}/>
      <Text style = {styles.titleText}>
        Welcome to
        <Text style = {[styles.titleText, {fontSize: 60}]}>{"\n"}PlantHub</Text>
      </Text>

      <View style = { {paddingHorizontal: 50 }}>
        <AwesomeButtonC137
          stretch
          onPress = {() => {
            navigation.navigate("PlantScreen");
            /*navigation.reset({
              index: 0,
              routes: [{name: "PlantScreen"}] 
            });*/
          }}
        >
          Enter
        </AwesomeButtonC137>
      </View>
    </View>
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