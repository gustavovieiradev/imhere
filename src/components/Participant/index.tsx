import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
  name: string;
}

export const Participant: React.FC<Props> = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

    </View>
  )
}