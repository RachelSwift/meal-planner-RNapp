import React from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { RegularTextInput } from '../atoms/textInput';

const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    width:'90%',
    borderWidth:0.5,
    flexDirection:'column',
    padding:5
  },
  column: {
    flexDirection: "columns",
    width:'100%'
    // alignItems:'center',
    // flex:1,
  },
  dayOfWeek:{
    textAlign:'center',
    padding:10
  },
  inputFeild:{
    color:'yellow'
    // alignSelf:'center'
  }
});


export const DayMealPlanningCard = ({props}) => {
  const {dayOfWeek, inlineStyles} = props
  const [closed, setClosed] = React.useState(true)
  const [lunchMeal, setLunchMeal] = React.useState('')
  const [dinnerMeal, setDinnerMeal] = React.useState('')


  return (<>
    {
      closed ?
        (<Pressable style={styles.container} onPress={() => setClosed(!closed)}>
          <Text style={{textAlign:'center'}}>{dayOfWeek}</Text>
        </Pressable>)
      :
      (
        <View style={styles.container}>
        <Pressable onPress={() => setClosed(!closed)}>
          <Text style={styles.dayOfWeek}>{dayOfWeek}: </Text>
        </Pressable>

        <RegularTextInput inlineStyles={styles.inputFeild} props={{
          placeholder:'Lunch',
          value:lunchMeal !== ''? lunchMeal : '',
          onChange: (newText) => setLunchMeal(newText),
          inlineStyles:{},
        }} />

        <RegularTextInput inlineStyles={styles.inputFeild} props={{
          // value:meal,
          placeholder:'Dinner',
          value:dinnerMeal !== ''? dinnerMeal : '',
          onChange: (newText) => setDinnerMeal(newText),
          inlineStyles:{},
        }} />
      </View>)
    }
    
    </>)
};
