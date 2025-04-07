import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTop:{
        height: Dimensions.get('window').height/2,
        width: '100%',
        paddingHorizontal: 37,
        marginTop: 10,
        justifyContent: 'center',
    },
    boxBottom:{

    },
    boxButton:{
        height: Dimensions.get('window').height/4,
        width: '100%',
        alignItems: 'center',
        padding: 30,
    },
    titleInput:{
        marginLeft: 5,
        color: 'gray',
        marginTop: 20,
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
        backgroundColor: '#d7d7d7'
    },
    input: {
        height: '90%',
        width: '90%',
        borderRadius: 15,
        paddingLeft: 5,
        outlineColor: '#d7d7d7',
        backgroundColor: '#d7d7d7', 
    },
    button:{
        width: 200,
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.40,
        shadowRadius: 4.65,
        elevation: 7
    },
    textButton:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    login:{
        marginLeft: 5,
        color: '#878af6'
    }
})