import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue',
        marginTop: 30
    },
    boxText:{
        height: '50%',
        width: '100%',
    },
    boxImage:{
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    boxImage2:{
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    image:{
        width: '49%',
        height: '80%',
    },
    text:{
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 30,
        marginHorizontal: 10
    }
})