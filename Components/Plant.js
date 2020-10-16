import React from 'react'
import { styles } from '../Util/Styles.js'
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue"

const Plant = (props) => {
    const [needsWatering, setNeedsWatering] = React.useState(props.isWatered);
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

export default Plant;