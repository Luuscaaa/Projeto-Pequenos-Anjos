import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { style } from "./style"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

export const Home = () => {
    return(
        <><View style={style.container}>
            <View style={style.boxSearch}>
                <MaterialIcons
                    name='search'
                    size={30}
                    color={'#083072'}
                    style={{}} />
                <TextInput
                    style={style.search}
                    placeholder="Pesquisar" />
            </View>
            <View style={style.boxAbout}>
                <ImageBackground
                    source={require('../../assets/images/backGroundSobre.jpg')}
                    resizeMode="cover"
                    style={style.imageBackground}
                    imageStyle={style.imageBorder}
                >
                    <TouchableOpacity onPress={() => router.navigate('/sobre-nos')}>
                        <Text style={style.textImage}> Sobre o Instituto </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={style.boxOptions}>
                <View style={style.boxButtons}>
                    <View style={style.backGroundButtons}>
                        <MaterialCommunityIcons
                            name="heart"
                            size={52}
                            color={'#EA728D'} />
                    </View>
                    <Text style={style.textCaptionButtons}> Doar </Text>
                </View>
                <View style={style.boxButtons}>
                    <View style={style.backGroundButtons}>
                        <MaterialIcons
                            name="people"
                            size={52}
                            color={'#083072'} />
                    </View>
                    <Text style={style.textCaptionButtons}> Conhecer {'\n'} Anjinhos </Text>
                </View>
                <View style={style.boxButtons}>
                    <View style={style.backGroundButtons}>
                        <MaterialIcons
                            name="perm-contact-cal"
                            size={52}
                            color={'#083072'} />
                    </View>
                    <Text style={style.textCaptionButtons}> Contato </Text>
                </View>
            </View>
            <View style={style.boxCampaigns}>
                <Text style={style.titleCampaign}> Companhas </Text>
                <ScrollView style={style.scrollView}>
                    <View style={style.boxImages}>
                        <ImageBackground
                            source={require('../../assets/images/natal.jpg')}
                            resizeMode="cover"
                            style={style.imageCampaign}
                            imageStyle={style.imageCampaignBorder}
                        >
                            <Text style={style.textCampaign}> Natal Solidário </Text>
                        </ImageBackground>
                    </View>
                    <View style={style.boxImages}>
                        <ImageBackground
                            source={require('../../assets/images/pascoa.jpg')}
                            resizeMode="cover"
                            style={style.imageCampaign}
                            imageStyle={style.imageCampaignBorder}
                        >
                            <Text style={style.textCampaign}> Páscoa do Amor </Text>
                        </ImageBackground>
                    </View>
                    <View style={style.boxImages}>
                        <ImageBackground
                            source={require('../../assets/images/brinquedo.jpg')}
                            resizeMode="cover"
                            style={style.imageCampaign}
                            imageStyle={style.imageCampaignBorder}
                        >
                            <Text style={style.textCampaign}> Doe um Brinquedo </Text>
                        </ImageBackground>
                    </View>
                    <View style={style.boxImages}>
                        <ImageBackground
                            source={require('../../assets/images/agasalhos.jpg')}
                            resizeMode="cover"
                            style={style.imageCampaign}
                            imageStyle={style.imageCampaignBorder}
                        >
                            <Text style={style.textCampaign}> Campanha de Inverno </Text>
                        </ImageBackground>
                    </View>
                    <View style={style.boxImages}>
                        <ImageBackground
                            source={require('../../assets/images/material-escolar.jpg')}
                            resizeMode="cover"
                            style={style.imageCampaign}
                            imageStyle={style.imageCampaignBorder}
                        >
                            <Text style={style.textCampaign}> Volta às Aulas </Text>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
        </View>
        <View style={style.containerTabBar}>
            <View style={style.tabBar}>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="home"
                        size={45}
                        color={'#083072'}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="heart"
                        size={45}
                        color={'#EA728D'} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons
                        name="person"
                        size={45}
                        color={'#083072'}
                    />
                </TouchableOpacity>
            </View>
        </View></>
    )
}