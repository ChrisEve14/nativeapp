import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
        backgroundColor: '#9A848F',
      },
      modalDetailContainer: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9A848F',
      },
      modalDetailText: {
        fontSize: 16,
        color: 'white',
        marginBottom: 30,
      },
      selectedCharacter: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 20,
      },
      modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 20,
      },
})