import React from 'react'
import { FormEntry } from '../Components/Form'
import PlantComponent from '../Components/Plant'
import { styles } from '../Util/Styles'
import { ToastAndroid } from 'react-native'
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue"
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button } from 'react-native';
import { PlantScreenStrings } from '../Util/Strings'

//* MAIN PLANT DISPLAY SCREEN
export const PlantScreen = ({navigation, route}) => {
    const [plants, getPlants] = React.useState([]);
  
    React.useEffect( () => {
        if (route.params?.newPlant) {
            addNewPlant(route.params.newPlant.name, route.params.newPlant.owner, plants, getPlants);
            ToastAndroid.showWithGravityAndOffset("Added new plant!", ToastAndroid.LONG, ToastAndroid.BOTTOM, 0, 200);
        }
    }, [route.params?.newPlant]);
  
    return(
        <View style={styles.container}>
            <View style={{padding: 10, backgroundColor: '#dddddd'}}>
                <AwesomeButtonC137
                    stretch
                    onPress = {() => {
                        navigation.navigate("NewPlantScreen");
                    }}
                >
                {PlantScreenStrings.addNewPlant}
                </AwesomeButtonC137>
                <Text style = {[styles.normalText, {paddingTop: 10, textAlign: "center", textAlignVertical:"center"}]}>You have {plants.length} plants.</Text>
            </View>
            <ScrollView bounces>
                <AllPlants plants={plants}/>
            </ScrollView>
        </View>
    );
}

//* SCREEN FOR ADDING NEW PLANTS
export const NewPlantScreen = ({navigation, route}) => {
    return(
        <View style={[styles.container, {padding: 20, justifyContent: "center"}]}>
            <Text style = {[{paddingBottom: 5}, styles.genericSubtitleText]}>{PlantScreenStrings.newPlantDetails}</Text>
            <NewPlantForm navigation = {navigation}/>
        </View>
    );
}

//* FORM COMPONENT FOR NEW PLANT SCREEN
const NewPlantForm = ({navigation}) => {
    const [newPlantName, setNewPlantName] = React.useState("")
    const [newPlantOwner, setNewPlantOwner] = React.useState("")

    return(
        <View>
            <FormEntry label = {PlantScreenStrings.plantName} callback = {setNewPlantName}/>
            <FormEntry label = {PlantScreenStrings.plantOwner} callback = {setNewPlantOwner}/>
            <AwesomeButtonBlue
                stretch
                onPress = {() => {navigation.navigate('PlantScreen', { newPlant: {"name": newPlantName, "owner": newPlantOwner}})}}
            >
            {PlantScreenStrings.addPlantButton} 
            </AwesomeButtonBlue> 
        </View>
    )
}

//* COMPONENT TO DISPLAY ALL STORED PLANTS
const AllPlants = (props) => {
    if(props.plants.length > 0){
        return (
            props.plants.map(item => (
                <React.Fragment key={item.id}>
                    <PlantComponent id={item.id} name={item.name} isWatered={item.isWatered} />
                </React.Fragment>
            ))
        );
    }
    else{
        return (
            <View style={{flex: 1, justifyContent:"center", padding:20}}>
                <Text 
                    style={[styles.genericSubtitleTextLarge, {textAlignVertical: "center", textAlign:"center"}]}
                >
                    {PlantScreenStrings.noPlants}
                </Text>
                <Text style={[styles.genericSubtitleText, {textAlign:"center",paddingTop:10, color:"#888"}]}>{PlantScreenStrings.noPlantsAdd}</Text>
            </View>
        );
    }
}

function addNewPlant(name, isWatered, plantStorage, plantStorageCallback) {
    var isFirst = plantStorage.length < 1;
    plantStorageCallback(plantStorage.concat({"id": isFirst ? 0 : plantStorage[plantStorage.length - 1].id + 1, "name": name, "isWatered": isWatered}));
}