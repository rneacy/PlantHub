import React , { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button, ToastAndroid } from 'react-native';
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

function addNewPlant(name, isWatered, plantStorage, plantStorageCallback) {
  plantStorageCallback(plantStorage.concat({"id": plantStorage[plantStorage.length - 1].id + 1, "name": name, "isWatered": isWatered}));
}

const AllPlants = (props) => {
  if(props.plants.length > 0){
    return (
      props.plants.map(item => (
        <React.Fragment key={item.id}>
          <PlantComponent name={item.name} isWatered={item.isWatered} />
        </React.Fragment>
      ))
    );
  }
  else{
    return (
      <Text>No plants</Text>
    );
  }
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
  },
  genericSubtitleText: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 24
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

const PlantScreen = ({navigation, route}) => {
  const [plants, getPlants] = useState(plantInfo);

  React.useEffect( () => {
    if (route.params?.newPlant) {
      addNewPlant(route.params.newPlant.name, route.params.newPlant.owner, plants, getPlants);
      ToastAndroid.showWithGravityAndOffset("Added new plant!", ToastAndroid.LONG, ToastAndroid.BOTTOM, 0, 200);
    }
  }, [route.params?.newPlant]);

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
          <Text>You have {plants.length} plants.</Text>
        </View>
        <ScrollView bounces>
          <AllPlants plants={plants}/>
        </ScrollView>
    </View>
  );
}

const NewPlantScreen = ({navigation, route}) => {
  return(
    <View style={[styles.container, {padding: 20, justifyContent: "center"}]}>
      <Text style = {[{paddingBottom: 5}, styles.genericSubtitleText]}>Enter your new plant's details.</Text>
      <NewPlantForm navigation = {navigation}/>

    </View>
  );
}

const NewPlantForm = ({navigation}) => {
  const [newPlantName, setNewPlantName] = useState("")
  const [newPlantOwner, setNewPlantOwner] = useState("")

  return(
    <View>
      <FormEntry label = "Name" callback = {setNewPlantName}/>
      <FormEntry label = "Owner" callback = {setNewPlantOwner}/>
      <AwesomeButtonBlue
        stretch
        onPress = {() => {navigation.navigate('PlantScreen', { newPlant: {"name": newPlantName, "owner": newPlantOwner}})}}
      >
        Add Plant  
      </AwesomeButtonBlue> 
    </View>
  )
}

const FormEntry = (props) => {
  const [value, onChangeText] = useState('');
  return (
    <>
      <View style = {{flex: 1, flexDirection: "row", marginBottom: 60}}>
        <View style={{flex: 2, height: 50, backgroundColor: '#ddd', justifyContent:"center"}}>
            <Text style={{textAlignVertical: "center", textAlign: "center", fontFamily: "Quicksand_700Bold"}}>{props.label}</Text>
        </View>
        <View style={{flex: 4, width: 50, height: 50, backgroundColor: '#d0d0d0', justifyContent:"center"}}>
          <TextInput
            style = {{padding: 5, paddingHorizontal: 10, marginHorizontal: 5, borderRadius: 3, backgroundColor: "#eeeeee", fontFamily: "Quicksand_500Medium"}}
            onChangeText= {text => {onChangeText(text); props.callback(text);}}
            value = {value}
          />
        </View>
      </View>
    </>
  );
}

export default App;