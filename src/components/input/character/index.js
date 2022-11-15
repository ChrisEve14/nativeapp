import React from "react";
import { TouchableOpacity, Text } from "react-native";
import {styles} from './styles';

const CharacterItem = ({item, onHandleSelected}) => {
    return (
        <TouchableOpacity style={styles.listItemContainer} onPress= {() => onHandleSelected(item)}>
            <Text style={styles.textItem}>{item.value}</Text>
        </TouchableOpacity>
    )
}

export default CharacterItem;
