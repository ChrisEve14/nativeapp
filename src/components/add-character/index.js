import React from "react";
import { View, TextInput, Button } from 'react-native'
import {styles} from './styles';

const AddCharacter = ({ task, onHandleTask, onHandleChange}) => {
    return(
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        value={task}
        placeholder="Add your character"
        onChangeText={onHandleChange}
      />
      <Button disabled={!task} title='Add' color='#9A848F' onPress={onHandleTask} />
      </View>
    )
}

export default AddCharacter;


  {/* // //   onChangeText={text => {
    // //      console.warn(text);
    // //     setTask(text)}}/> */}