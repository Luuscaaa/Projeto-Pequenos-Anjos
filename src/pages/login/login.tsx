import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Logo from "../../../assets/images/logo.jpg"
import { style } from './style'
import { MaterialIcons} from '@expo/vector-icons'
import { router } from "expo-router"


export const Login = () => {
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo} 
                    style={style.logo} 
                />
                <Text style={style.title}> Seja Bem-Vindo! </Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}> E-MAIL: </Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                    <MaterialIcons 
                        name= 'email'
                        size= {20}
                        color= 'gray'
                    />
                </View>
                <Text style={style.titleInput}> SENHA: </Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                    />
                    <MaterialIcons 
                        name= 'remove-red-eye'
                        size= {20}
                        color= 'gray'
                    />
                </View>
            </View>
            <View style={style.boxButton}>
                <TouchableOpacity 
                    style={style.button}
                    onPress={() => router.navigate('/sobre-nos')}  
                >
                    <Text style={style.textButton}> Entrar </Text>
                </TouchableOpacity>
            </View>
            <Text style={{color: 'gray', fontSize: 16}}> Não tem conta? 
                <TouchableOpacity 
                    style={style.cliqueAqui}
                    onPress={() => router.navigate('/cadastro')}        
                >
                    Clique Aqui
                </TouchableOpacity>
            </Text>
        </View>
    )
}