import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

// import { Container } from './styles';

export const Participant: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Gustavo</Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

    </View>
  )
}