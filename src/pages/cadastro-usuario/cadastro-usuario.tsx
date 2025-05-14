import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { style } from "./style"
import { router } from "expo-router"
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

export const CadastroUsuario = () => {
    return(
        <><View style={style.container}>
            <View style={style.boxBackButton}>
                <Pressable>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={'grey'}
                        onPress={() => router.navigate('/login')} />
                </Pressable>
            </View>
            <Text style={style.title}> Voluntário </Text>
            <View style={style.boxForm}>
                <TextInput
                    style={style.input}
                    placeholder="Nome Completo"
                ></TextInput>
                <TextInput
                    style={style.input}
                    placeholder="Telefone"
                ></TextInput>
                <TextInput
                    style={style.input}
                    placeholder="E-mail"
                ></TextInput>
                <TextInput
                    style={style.input}
                    placeholder="Endereço"
                ></TextInput>
                <TextInput
                    style={style.input}
                    placeholder="CPF"
                ></TextInput>
                <TextInput
                    style={style.input}
                    placeholder="Profissão"
                ></TextInput>
            </View>
            <View style={style.boxButton}>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => router.navigate('/home')}
                >
                    <Text style={style.textButton}> Cadastrar </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={style.containerTabBar}>
            <View style={style.tabBar}>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="home"
                        size={45}
                        color={'#083072'}
                        onPress={() => router.navigate('/home')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="heart"
                        size={45}
                        color={'#EA728D'} 
                        onPress={() => router.navigate('/doar')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons
                        name="person"
                        size={45}
                        color={'#083072'} />
                </TouchableOpacity>
            </View>
        </View></>
    )
}