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
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#b5838d',
        elevation: 20,
        backgroundColor: 'peach',
        borderRadius: 5,
        shadowColor: '#000',
        justifyContent: 'center',
        marginVertical: 5,
    }
  });
