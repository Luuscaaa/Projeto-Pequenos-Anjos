import { View, Text, Image, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { style } from "../sobre-nos/style";

import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const SobreNos = () => {
  const router = useRouter();

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
      <Text style={style.title}> Sobre Nós </Text>
      <View style={style.boxInfos}>
        <Text style={style.titleInstituto}> Pequenos Anjos </Text>
        <ScrollView style={style.scrollView}>
          <View>
            <Text style={style.text}>
              O Instituto Luta Pela Vida Pequenos Anjos é uma instituição não Governamental Sem Fins Lucrativos. {'\n'}{'\n'}
              Com mais de 8 anos atendendo pacientes que vem para tratamento de outros Estados como Consultas Médicas, Tratamentos, Cirurgias e Transplantes, sabemos o quanto é difícil estar sozinho em busca de tratamento, e acima de tudo o paciente em tratamento e sua família precisa de amparo, carinho e um ambiente que possa proporcionar segurança. {'\n'}{'\n'}
              Nossa casa de apoio dará Moradia e Alimentação dar ajuda para marcar consultas, remédios, alimentação especial para quem precisa.
              {'\n'}{'\n'}
              Todo suporte necessário, para que esses pacientes tenham um bom atendimento, e uma boa recuperação no seu período de tratamento. Oferecemos apoio aos acompanhante e ao paciente, até o termino do tratamento ou tenha seu tratamento controlado. {'\n'}{'\n'}
              Precisamos de ajuda para manter nossa Casa de Apoio funcionando. {'\n'}{'\n'}
              Mas isso só será possível se tivermos sua solidariedade, pois o Brasil está em crise, imagina pra quem não tem recurso e nem saúde é muito pior.{'\n'}{'\n'}
              Missão - Temos como objetivo atender Pacientes que vem de outros Estados tratar do Câncer e outras doenças. {'\n'}{'\n'}
              Visão - Dar apoio e acolhimento para a recuperação dos Adultos e Crianças.{'\n'}{'\n'}
              Valores - Solidariedade, respeito, amor ao próximo e caridade a quem mais precisa
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={style.boxButton}>
        <TouchableOpacity
          style={style.button}
          onPress={() => router.navigate('/cadastro')}
        >
          <Text style={style.textButton}> Tornar-se Voluntário </Text>
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
              onPress={() => router.navigate('/home')}
             />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="heart"
              size={45}
              color={'#EA728D'} />
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
