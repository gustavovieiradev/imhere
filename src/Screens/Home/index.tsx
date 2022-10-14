import { FlatList, ListRenderItem, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {

  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Nome1', 'Nome2', 'Nome3', 'Nome4', 'Nome5'];

  function handleAddParticipant() {
    console.log('add participant')
  }

  function handleParticipantRemove(name: string) {

  }

  const renderItem: ListRenderItem<string> = ({ item }) => {
    return (
      <Participant name={item} onRemove={() => handleParticipantRemove(item)} key={item} />
    );
  };

  const renderEmptyComponent = () => {
    return (
      <Text style={styles.listEmptyText}>
        Nenhum participante cadastrado
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>
      
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome do participante" placeholderTextColor="#6b6b6b" />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
      />



    </View>
  );
}