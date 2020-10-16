import React from 'react'
import { FormEntry } from '../Components/Form'
import PlantComponent from '../Components/Plant'
import { styles } from '../Util/Styles'
import { ToastAndroid } from 'react-native'
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue"
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button, StatusBar } from 'react-native';

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

export default HomeScreen;