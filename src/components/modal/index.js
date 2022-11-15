import React from "react";
import { Modal, View, Text, Button } from "react-native";
import {styles} from './styles';

const CharacterDestiny = ({onHandleCancel, onHandleDeleteCharacter}) => {
    return (
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
    )
}


export default CharacterDestiny;