import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, ImageBackground, ImageSourcePropType } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { style } from "../nossos-anjinhos/style";
import AppIntroSlider from 'react-native-app-intro-slider'
import React, { useEffect, useState } from "react";

interface Crianca {
  id: number;
  nome: string;
  idade: number;
  descricao: string;
  foto: string;
}


export const NossosAnjinhos = () => {
  const router = useRouter();
  const [dados, setDados] = useState<Crianca[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/criancas') // troque pelo IP da sua máquina
      .then(res => res.json())
      .then(json => setDados(json))
      .catch(err => console.error(err));
  }, []);

  function renderCards({ item }: { item: Crianca }) {
    return (
      <View style={style.containCards}>
        <Image
          source={{ uri: item.foto }}
          style={style.image}
        />
        <View style={style.boxDados}>
          <Text style={style.name}>{item.nome}</Text>
          <Text style={style.age}>{item.idade} anos</Text>
        </View>
        <View style={style.viewScroll}>
          <ScrollView style={style.scrollView}>
            <Text style={style.text}>{item.descricao}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <><View style={style.container}>
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
          data={dados}
          activeDotStyle={{
            backgroundColor: '#009CFF',
            width: 30
          }} />
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
  );
};
