import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal:10,
    marginVertical:5,
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical:0,
  },
})
 
export const RegularTextInput = ({props}) => {
  const { placeholder, value, onChangeText, inlineStyles } = props
	return (
		<TextInput 
      style={[styles.input, inlineStyles]}
      placeholder={placeholder}
		  onChangeText={onChangeText}
    />
	)
}