import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, Modal } from 'react-native';
import { styles } from './styles'


export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  }

  const onHandleSelected = (item) => {
    setSelectedCharacter(item);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) =>{
    <View style={styles.listItemContainer}>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  }

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
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        value={task}
        placeholder="Add your character"
        onChangeText={text => setTask(text)}/>

        <Button disabled={!task} title='Add' color='#9A848F' onPress={onHandleTask}/>
      </View>

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