import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { style } from "../sobre-nos/style";

import InstagramLogo from "../../../assets/images/instagram.jpg";
import FacebookLogo from "../../../assets/images/facebook.jpg";

export const SobreNos = () => {
  const router = useRouter();

  return (
    <View style={style.container}>
      <Text style={style.title}>INSTITUTO PEQUENOS ANJOS</Text>

      <Text style={style.text}>
        O Instituto Luta Pela Vida Pequenos Anjos é uma instituição sem fins
        lucrativos que, há mais de 8 anos, oferece apoio a pacientes de outros
        estados que vêm em busca de tratamento médico, como consultas, cirurgias
        e transplantes. A casa de apoio fornece moradia, alimentação, auxílio
        com consultas, medicamentos e suporte emocional tanto para os pacientes
        quanto para seus acompanhantes durante todo o tratamento.
        {"\n\n"}
        A instituição depende da solidariedade para continuar funcionando,
        especialmente em tempos de crise, e reforça a importância da ajuda para
        quem enfrenta doenças e não tem recursos.
      </Text>

      <View style={style.socialContainer}>
        <View style={style.socialItem}>
          <Image source={InstagramLogo} style={style.socialIcon} />
          <Text style={style.socialText}>@institutopequenosanjosoficial</Text>
        </View>
        <View style={style.socialItem}>
          <Image source={FacebookLogo} style={style.socialIcon} />
          <Text style={style.socialText}>/Pequenos Anjos</Text>
        </View>
      </View>

      <Text style={style.address}>
        Endereço: Rua 2º Tenente Aviador Mário Luiz Figueiroa, 212 - Guarulhos - SP{"\n"}{"\n"}
        Telefone: (11) 91234-5678
      </Text>

      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.button} onPress={() => router.push("/cadastro")}>
          <Text style={style.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={() => router.push("/nossos-anjinhos")}>
          <Text style={style.buttonText}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
