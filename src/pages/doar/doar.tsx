import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Pressable, Text, TouchableOpacity, View } from "react-native"
import { style } from "./style"
import { Checkbox } from 'react-native-paper';
import { useState } from "react";


export const Doar = () => {

    const [checked, setChecked] = useState(false);

    return(
        <><View style={style.container}>
            <View style={style.boxBackButton}>
                <Pressable>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={'grey'}
                        onPress={() => router.navigate('/sobre-nos')} />
                </Pressable>
            </View>
            <Text style={style.title}> Doação </Text>
            <View style={style.boxValues}>
                <TouchableOpacity>
                    <View style={style.values}>
                        <Text style={style.textValues}> R$20 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.values}>
                        <Text style={style.textValues}> R$50 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.values}>
                        <Text style={style.textValues}> R$80 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.values}>
                        <Text style={style.textValues}> R$100 </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.boxPayments}>
                <MaterialIcons
                    name='pix'
                    size={30}
                    color={'#96C8FF'} />
                <Text style={style.textPayments}> Pix </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.boxPayments}>
                <MaterialIcons
                    name='credit-card'
                    size={30}
                    color={'#96C8FF'} />
                <Text style={style.textPayments}> Cartão de Crédito </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.boxPayments}>
                <MaterialIcons
                    name='credit-card'
                    size={30}
                    color={'#96C8FF'} />
                <Text style={style.textPayments}> Cartão de Débito </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.boxPayments}>
                <MaterialCommunityIcons
                    name='barcode-scan'
                    size={30}
                    color={'#96C8FF'} />
                <Text style={style.textPayments}> Boleto Bancário </Text>
            </TouchableOpacity>
            <View style={style.checkboxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    } }
                    color="#96C8FF"
                    uncheckedColor="#96C8FF" />
                <Text style={style.label}>Tornar recorrente</Text>
            </View>
            <View style={style.boxButton}>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => router.navigate('/doar')}
                >
                    <Text style={style.textButton}> Doar </Text>
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