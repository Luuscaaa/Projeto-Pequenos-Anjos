import { Image, StyleSheet, Text, View } from "react-native";



export default function Home () {
    return(
        <View style={style.container}>
            <Image 
                source={require('../assets/images/Pequenos_Anjos.jpeg')}
            />
            <Text style={style.title}> Primeira Tela </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#bde0fe'
    },
    logo: {
        height: '100%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20
    }
})