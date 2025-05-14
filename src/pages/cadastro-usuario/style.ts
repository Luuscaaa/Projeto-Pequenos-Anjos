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
    boxForm: {
        width: '100%',
        maxWidth: 700,
        marginTop: 50,
    },
    input: {
        height: 60,
        width: '100%',
        borderRadius: 8,
        borderWidth: 2,
        paddingLeft: 10,
        borderColor: '#96C8FF',
        outlineColor: '#96C8FF',
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        marginBottom: 20,
    },
    boxButton:{
        width: '100%',
        maxWidth: 700,
        alignItems: 'center'
    },
    button:{
        width: '100%',
        height: 60,
        backgroundColor: '#083072',
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
});
