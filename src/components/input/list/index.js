import React from "react";
import { FlatList, Text, View, } from "react-native";
import {styles} from './styles';

const CharacterList = ({ item,  taskList, renderItem }) => {
    return (
    
        <View>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Characters</Text>
            </View>
            <FlatList
            style={styles.listContainer}
            data={taskList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
         </View>

    )
}

export default CharacterList;

