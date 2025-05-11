import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, ImageBackground, ImageSourcePropType } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { style } from "../nossos-anjinhos/style";
import AppIntroSlider from 'react-native-app-intro-slider'
import React, { useState } from "react";

type Crianca = {
  key: string,
  nome: string;
  idade: number;
  descricao: string;
  imagem: ImageSourcePropType;
};

const criancas: Crianca[] = [
  
  {
    key: '1',
    nome: 'Laura',
    idade: 3,
    descricao:'Precisa de tratamento odontológico para cuidar da sua saúde bucal devido a cáries e má higienização. Precisa de tratamento odontológico para cuidar da sua saúde bucal devido a cáries e má higienização.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  {
    key: '2',
    nome: 'Rafael',
    idade: 4,
    descricao:'Precisa de óculos para correção de visão e apoio no aprendizado escolar.',
    imagem: require('../../../assets/images/ana.jpg'),
  },
  {
    key: '3',
    nome: 'Ana',
    idade: 5,
    descricao:'Precisa de sessões de fonoaudiologia para melhorar sua comunicação.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  {
    key: '3',
    nome: 'Ana',
    idade: 5,
    descricao:'Precisa de sessões de fonoaudiologia para melhorar sua comunicação.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  {
    key: '3',
    nome: 'Ana',
    idade: 5,
    descricao:'Precisa de sessões de fonoaudiologia para melhorar sua comunicação.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  {
    key: '3',
    nome: 'Ana',
    idade: 5,
    descricao:'Precisa de sessões de fonoaudiologia para melhorar sua comunicação.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  {
    key: '3',
    nome: 'Ana',
    idade: 5,
    descricao:'Precisa de sessões de fonoaudiologia para melhorar sua comunicação.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  {
    key: '3',
    nome: 'Ana',
    idade: 5,
    descricao:'Precisa de sessões de fonoaudiologia para melhorar sua comunicação.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  {
    key: '3',
    nome: 'Ana',
    idade: 5,
    descricao:'Precisa de sessões de fonoaudiologia para melhorar sua comunicação.',
    imagem: require('../../assets/images/agasalhos.jpg'),
  },
  
];

export const NossosAnjinhos = () => {

  const router = useRouter();

  function renderCards ({ item }: { item: Crianca }): any{
    return(
      <View style={style.containCards}>
        <Image
          source={ item.imagem }
          style={style.image}
        />
        <View style={style.boxDados}>
          <Text style={style.name}> {item.nome} </Text>
          <Text style={style.age}> {item.idade} </Text>
          <Text style={style.age}> anos </Text>          
        </View>
        <View style={style.viewScroll}>
          <ScrollView style={style.scrollView}>
              <Text style={style.text}>{item.descricao}</Text>
          </ScrollView>
        </View>
      </View>
    )
  }

  return (
    <View style={style.container}>
      <View style={style.boxBackButton}>
        <Pressable>
          <Ionicons
            name="arrow-back"
            size={24}
            color={'grey'}
            onPress={() => router.navigate('/home')} />
        </Pressable>
      </View>
      <Text style={style.title}> Anjinhos </Text>
      <View style={style.boxCard}>
        <AppIntroSlider
          renderItem={renderCards}
          data={criancas}
          activeDotStyle={{
            backgroundColor: '#009CFF',
            width: 30
          }}
        />
      </View>
    </View>
  );
};
