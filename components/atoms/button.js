import React from 'react';
import { Button } from 'react-native';


export const DefaultButton = ({props}) => {
  const { onPress, title } = props
  return(
    <Button 
      onPress={onPress}
      title={title}
    />
  )
}