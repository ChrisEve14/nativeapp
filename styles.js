import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FEEAFA',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginVertical: 70,
    },
    input: {
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: '#9A848F',
    },
    listContainer: {
        marginHorizontal: 20,
    },
    listTitle: {
      fontSize: 25,
      color: '#6d6875',
      justifyContent: 'center',
    },

    listItemContainer: {
      alignItems: 'center',
      elevation: 20,
      backgroundColor: 'peach',
      borderRadius: 5,
      shadowColor: '#000',
      marginVertical: 10,
    },
    textItem: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#b5838d',
        justifyContent: 'center',
        marginVertical: 5,
    },


    //Modal//
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      paddingVertical: 20,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalDetailContainer: {
      paddingVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalDetailText: {
      fontSize: 14,
      color: '#212121',
    },
    selectedCharacter: {
      fontSize: 14,
      color: '#212121',
      fontWeight: 'bold',
      paddingVertical: 20,
    },
    modalButtonContainer: {
      width: '70%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 20,
    }
  
  });
