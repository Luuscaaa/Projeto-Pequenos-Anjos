import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F0FB',
        paddingHorizontal: 30
    },
    boxTop:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid:{
        width: '100%',
        maxWidth: 1000,
        marginTop: 30,
        gap: 10
    },
    boxButton:{
        width: '100%',
        maxWidth: 1000,
        alignItems: 'center',
    },
    logo:{
        width: '90%',
        maxWidth: 300,
        height: 200,
        borderRadius: 15
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#083072',
        marginTop: 30
    },
    boxInput:{
        width: '100%',
        height: 50,
        borderRadius: 8,
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
        borderRadius: 8,
        paddingLeft: 5,
        outlineColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        fontSize: 18
    },
    button:{
        width: '100%',
        height: 50,
        backgroundColor: '#083072',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 40
    },
    textButton:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    textClick:{
        marginTop: 30,
        color: '#blue',
        fontSize: 16,
    }
})