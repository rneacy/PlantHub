import React from 'react'
import { styles } from '../Util/Styles'
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue"
import { PlantComponentStrings } from '../Util/Strings'

const Plant = (props) => {
    const [needsWatering, setNeedsWatering] = React.useState(props.isWatered);
    return (
        <View style = {{padding: 20, paddingTop: (props.id === 0) ? 20 : 5, paddingBottom: 35}}>
            <Text style = {styles.normalText}>
                <Text style = {{fontSize: 20}}>{PlantComponentStrings.myName}</Text>
            </Text>
            <Text style = {{paddingBottom: 10, fontFamily:"Quicksand_500Medium"}}>
                <Text style={{fontWeight: "bold", fontSize:45}}>{props.name}!{"\n"}</Text>
                <Text style = {{fontSize: 30}}>{needsWatering ? PlantComponentStrings.needWatering : PlantComponentStrings.quenched}</Text>
            </Text>

            <AwesomeButtonBlue 
                stretch borderRadius={12} 
                disabled = {!needsWatering} 
                onPress = {() => {
                    setNeedsWatering(false);
                }}
                textSize = {20}
            >
                {needsWatering ? PlantComponentStrings.waterMe : PlantComponentStrings.noMoreWater}
            </AwesomeButtonBlue>
        </View>
    );
}

export default Plant;