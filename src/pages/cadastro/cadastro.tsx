import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { style } from '../cadastro/style'
import { router } from "expo-router"

export const Cadastro = () => {
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.titleInput}> NOME COMPLETO: </Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                </View>
                <Text style={style.titleInput}> E-MAIL: </Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                </View>
                <Text style={style.titleInput}> ENDEREÇO: </Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                </View>
                <Text style={style.titleInput}> SENHA: </Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                </View>
            </View>
            <View style={style.boxButton}>
                <TouchableOpacity 
                    style={style.button}
                    onPress={() => router.navigate('/sobre-nos')}  
                >
                    <Text style={style.textButton}> Cadastrar </Text>
                </TouchableOpacity>
            </View>
            <Text style={{color: 'gray', fontSize: 16, paddingBottom: 50}}> Já tem conta? 
                <TouchableOpacity 
                    style={style.login}
                    onPress={() => router.navigate('..')}  
                >
                    Login
                </TouchableOpacity>
            </Text>
        </View>
    )
}