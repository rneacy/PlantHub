import React , { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button} from 'react-native';
import { useFonts, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { AppLoading } from 'expo'
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue"
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppTitle = "PlantHub"

const isBenStinkyToday = () => {
  return "Yes"
}

const Stack = createStackNavigator();

const PlantComponent = (props) => {
  const [needsWatering, setNeedsWatering] = useState(true);
  return (
    <View style = {{padding: 20}}>
      <Text style = {styles.normalText}>
        <Text style = {{fontSize: 20}}>I am a plant and my name is </Text>
      </Text>
      <Text style = {{paddingBottom: 10, fontFamily:"Quicksand_500Medium"}}>
        <Text style={{fontWeight: "bold", fontSize:45}}>{props.name}!{"\n"}</Text>
        <Text style = {{fontSize: 30}}>{needsWatering ? "I need watering!" : "I'm quenched!"}</Text>
      </Text>

      <AwesomeButtonBlue 
        stretch borderRadius={12} 
        disabled = {!needsWatering} 
        onPress = {() => {
          setNeedsWatering(false);
        }}
        textSize = {25}
        >
        {needsWatering ? "Water me!" : "No more water for me!"}
      </AwesomeButtonBlue>
    </View>
  );
}

let plantInfo = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home: {
    flex: 1,
    backgroundColor: "#44aa44",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Pacifico_400Regular",
    color: "#fff",
    lineHeight: 70,
    textAlign: "center",
    textAlignVertical: "center",
  },
  normalText: {
    fontFamily:"Quicksand_500Medium"
  }
});

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
        }}
        >
        <Stack.Screen name = {AppTitle} component = {HomeScreen} options = {{headerShown: false}}></Stack.Screen>
        <Stack.Screen name = "PlantScreen" component = {PlantScreen} options = {{title: "Your Plants"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return(
    <View style = {styles.home}>
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

const PlantScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
        <ScrollView bounces>
          <PlantComponent name="Popo Romeo" isWatered = {false}/>
          <PlantComponent name="Zebbedy" isWatered = {false}/>
          <PlantComponent name="Unnamed plant" isWatered = {false} />
        </ScrollView>
    </View>
  );
}

export default App;