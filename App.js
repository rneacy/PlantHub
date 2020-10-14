import React , { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button} from 'react-native';
import { useFonts, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { AppLoading } from 'expo'
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue"
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const AppTitle = "PlantHub"

const isBenStinkyToday = () => {
  return "Yes"
}

const Stack = createStackNavigator();

const PlantComponent = (props) => {
  const [needsWatering, setNeedsWatering] = useState(props.isWatered);
  return (
    <View style = {{padding: 20, paddingTop: 5, paddingBottom: 35}}>
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

let plantInfo = [
  {"id": 0, "name": "Popo Romeo", "isWatered": false},
  {"id": 1, "name": "Pepe Rosso", "isWatered": true},
  {"id": 2, "name": "Poo poo", "isWatered": true},
  {"id": 3, "name": "Wee wee", "isWatered": true},
];

function addNewPlant(name, isWatered) {
  plantInfo.push({"id": plantInfo.slice[plantInfo.length - 1].id, "name": name, "isWatered": isWatered});
}

const AllPlants = (props) => {
  return (
    plantInfo.map(item => (
      <React.Fragment key={item.id}>
        <PlantComponent name={item.name} isWatered={item.isWatered} />
      </React.Fragment>
    ))
  );
}

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
        <View style={{padding: 10}}>
          <AwesomeButtonC137
            stretch
            onPress = {() => {
              navigation.navigate("NewPlantScreen");
            }}
          >
            Add New Plant
          </AwesomeButtonC137>
        </View>
        <ScrollView bounces>
          <AllPlants />
        </ScrollView>
    </View>
  );
}

const NewPlantScreen = ({navigation}) => {
  return(
    <Text>New plants woo!</Text>
  );
}


export default App;