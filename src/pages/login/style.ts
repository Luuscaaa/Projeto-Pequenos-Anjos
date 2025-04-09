import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F0FA'
    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 37,
        marginTop: 10
    },
    boxButton:{
        height: Dimensions.get('window').height/6,
        width: '100%',
        alignItems: 'center',
        padding: 30,
    },
    logo:{
        width: '80%',
        height: '80%',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        color: '#4A90E2',
        marginTop: 20
    },
    titleInput:{
        marginLeft: 5,
        color: 'gray',
        marginTop: 20
    },
    boxInput:{
        width: '100%',
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: '#FFFFFF'
    },
    input: {
        height: '90%',
        width: '90%',
        borderRadius: 15,
        paddingLeft: 5,
        outlineColor: '#FFFFFF',
        backgroundColor: '#FFFFFF', 
    },
    button:{
        width: '80%',
        height: 50,
        backgroundColor: '#F6A5C0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        paddingVertical: 12
    },
    textButton:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    textClick:{
        marginLeft: 5,
        color: '#878af6',
        fontSize: 16,
    }
})