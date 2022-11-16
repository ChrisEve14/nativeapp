import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import { AddCharacter, CharacterDestiny, CharacterItem } from './components';
import CharacterList from './components/input/list';


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
      <CharacterList taskList={taskList} renderItem={renderItem} />
      <CharacterDestiny modalVisible={modalVisible} selectedCharacter={selectedCharacter} onHandleCancel={onHandleCancel} onHandleDeleteCharacter={onHandleDeleteCharacter} />
    </View>
  );
}