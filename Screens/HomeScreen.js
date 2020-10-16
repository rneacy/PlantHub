import React from 'react'
import { styles } from '../Util/Styles'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { View, Text, StatusBar } from 'react-native';
import { HomeScreenStrings } from '../Util/Strings'


const HomeScreen = ({navigation}) => {
    return(
      <View style = {styles.home}>
        <StatusBar style={'light-content'}/>
        <Text style = {styles.titleText}>
          {HomeScreenStrings.welcome}
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
            {HomeScreenStrings.enter}
          </AwesomeButtonC137>
        </View>
      </View>
    );
}

export default HomeScreen;