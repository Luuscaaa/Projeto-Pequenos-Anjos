import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { style } from "../nossos-anjinhos/style";

import anjinho1 from "../../../assets/images/ana.jpg";
import anjinho2 from "../../../assets/images/joao.jpg";
import anjinho3 from "../../../assets/images/maria.jpg";
import anjinho4 from "../../../assets/images/lucas.jpg";
import anjinho5 from "../../../assets/images/geovanne.jpg";
import anjinho6 from "../../../assets/images/nathalia.jpg";

export const NossosAnjinhos = () => {
  const router = useRouter();

  const anjinhos = [
    { id: 1, nome: "Ana Clara", idade: "6 anos", imagem: anjinho1 },
    { id: 2, nome: "João Pedro", idade: "8 anos", imagem: anjinho2 },
    { id: 3, nome: "Maria Eduarda", idade: "5 anos", imagem: anjinho3 },
    { id: 4, nome: "Lucas Gabriel", idade: "7 anos", imagem: anjinho4 },
    { id: 4, nome: "Geovanne Silva", idade: "3 anos", imagem: anjinho5 },
    { id: 4, nome: "Nathalia", idade: "4 anos", imagem: anjinho6 },
  ];

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.title}>CONHEÇA OS NOSSOS ANJINHOS</Text>

      <View style={style.cardContainer}>
        {anjinhos.map((anjinho) => (
          <View key={anjinho.id} style={style.card}>
            <Image source={anjinho.imagem} style={style.cardImage} />
            <Text style={style.cardName}>{anjinho.nome}</Text>
            <Text style={style.cardAge}>{anjinho.idade}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={style.button} onPress={() => router.push("/sobre-nos")}>
        <Text style={style.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
