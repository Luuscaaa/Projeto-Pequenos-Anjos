import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Logo from "../../../assets/images/logo.jpg"
import { style } from './style'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from "expo-router"


export const Login = () => {
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo} 
                    style={style.logo} 
                />
                <Text style={style.title}> Bem-Vindo(a)! </Text>
            </View>
            <View style={style.boxMid}>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        placeholder="E-mail"
                    />
                    <MaterialIcons 
                        name= 'email'
                        size= {25}
                        color= '#4A90E2'
                    />
                </View>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        placeholder="Senha"
                        secureTextEntry
                    />
                    <MaterialIcons 
                        name= 'key'
                        size= {25}
                        color= '#4A90E2'
                    />
                </View>
            </View>
            <View style={style.boxButton}>
                <TouchableOpacity 
                    style={style.button}
                    onPress={() => router.navigate('/home')}  
                >
                    <Text style={style.textButton}> Entrar </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => router.navigate('/cadastro-usuario')}>
                <Text 
                    style={{
                        color: 'gray',
                        fontSize: 20, 
                        marginTop: 30}}
                > 
                Criar conta? Clique aqui
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/home')}>
                <Text 
                    style={{
                        color: 'gray',
                        fontSize: 20, 
                        marginTop: 20}}
                > 
                Acessar como visitante 
                </Text>
            </TouchableOpacity>
        </View>
    )
}