import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6F0FB',
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    boxBackButton: {
        marginTop: 40,
        width: '100%',
        maxWidth: 700,
    },
    title: {
        fontSize: 35,
        color: '#083072',
        fontWeight: 'bold',
    },
    boxValues:{
        width: '100%',
        maxWidth: 700,
        marginTop: 50,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    values:{
        borderWidth: 2,
        width: 70,
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: '#96C8FF'
    },
    textValues:{
        fontSize: 20,
        color: '#083072'
    },
    boxPayments:{
        width: '100%',
        maxWidth: 700,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderColor: '#96C8FF',
        paddingLeft: 10,
        marginBottom: 20
    },
    textPayments:{
        fontSize: 25,
        marginLeft: 5,
        color: '#083072',
        marginBottom: 2
    },
    checkboxContainer: {
        width: '100%',
        maxWidth: 700,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        marginTop: 30
   },
    label: {
        marginLeft: 5,
        fontSize: 20,
        color: '#083072',
        textAlign: 'center',
        marginTop: 3
    },
    boxButton:{
        width: '100%',
        maxWidth: 700,
        alignItems: 'center',
        marginTop: 30
    },
    button:{
        width: '100%',
        height: 60,
        backgroundColor: '#EA728D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20
    },
    textButton:{
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    containerTabBar:{
        width: '100%',
        height: 80,
        backgroundColor: '#E6F0FB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBar:{
        width:'100%',
        maxWidth: 700,
        height:'100%',
        borderWidth: 1,
        borderColor: 'rgba(5, 5, 5, 0.3)',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    }
})