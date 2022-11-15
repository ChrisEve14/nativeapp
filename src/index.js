import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { AddCharacter, CharacterItem } from './components';


export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  }

  const onHandleSelected = (item) => {
    setSelectedCharacter(item);
    setModalVisible(true);

  }

  const renderItem = ({item}) => (
    <CharacterItem item={item} onHandleSelected={onHandleSelected}/>
  )

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDeleteCharacter = () => {
   setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedCharacter.id))
   setModalVisible(!modalVisible);
  }

  const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddCharacter task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
       <Text style={styles.listTitle}>Characters</Text>
       </View>
       <FlatList
        style={styles.listContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        <Modal visible={modalVisible} animationType='slide'>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Character's name</Text>
          </View>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>Are you sure you want to delete your character?</Text>
            <Text style={styles.selectedCharacter}>{selectedCharacter?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#9A848F'
              onPress={onHandleCancel}
            />
            <Button 
              title='Delete'
              color='#9A848F'
              onPress={onHandleDeleteCharacter}
            />
          </View>
        </Modal>
    </View>
  );
}