import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import {DayMealPlanningCard}  from '../molecules/dayMealPlanningCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horisontalContainer:{
    flexDirection: 'row',
    alignItems:'center'
  },
  row: {
    flexDirection: "row",
  },
});

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

const HomeScreen = () => {
  // const [inputValue, onChangeInputValue] = React.useState("");
  const [text, setText] = React.useState('');
  const [notes, setNotes] = React.useState([{id:1, noteText:"testNote"}])
  const [mondayFood, setMondayFood] = React.useState("")


  return (
    <SafeAreaView><ScrollView >
      <View style={styles.container}>

      <DayMealPlanningCard props={{
        dayOfWeek:'Monday',
      }}/>
       <DayMealPlanningCard props={{
        dayOfWeek:'Tuesday',
      }}/>
      <DayMealPlanningCard props={{
        dayOfWeek:'Wednesday',
      }}/>
      <DayMealPlanningCard props={{
        dayOfWeek:'Thursday',
      }}/>
      <DayMealPlanningCard props={{
        dayOfWeek:'Friday',
      }}/>
            
      <StatusBar style="auto" />
      </View>
    </ScrollView></SafeAreaView>
  );
}

export default HomeScreen;





