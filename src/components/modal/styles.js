import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      },
})