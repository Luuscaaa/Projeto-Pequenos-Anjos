import { Image, Text, View } from "react-native"
import Playground from "../../../assets/images/playground.jpg"
import QuartoAstronauta from "../../../assets/images/quarto-astronauta.jpg"
import Entrada from "../../../assets/images/entrada.jpg"
import { style } from "../sobre-nos/style"


export const SobreNos = () => {
    return(
        <View style={style.container}> 
            <Text style={style.title}> INSTITUTO PEQUENOS ANJOS</Text>
            <View style={style.boxText}>
                <Text style={style.text}>
                    O Instituto Luta Pela Vida Pequenos Anjos é uma instituição sem fins lucrativos que, há mais de 8 anos, oferece apoio a pacientes de outros estados que vêm em busca de tratamento médico, como consultas, cirurgias e transplantes. A casa de apoio fornece moradia, alimentação, auxílio com consultas, medicamentos e suporte emocional tanto para os pacientes quanto para seus acompanhantes durante todo o tratamento.
                    A instituição depende da solidariedade para continuar funcionando, especialmente em tempos de crise, e reforça a importância da ajuda para quem enfrenta doenças e não tem recursos.
                </Text>
            </View>
            <View style={style.boxImage}>
                <Image 
                    source={QuartoAstronauta}
                    style={style.image}
                />
                <Image 
                    source={Playground}
                    style={style.image}
                />
            </View>
            <View style={style.boxImage2}>
                <Image
                    source={Entrada}
                    style={style.image}
                />
            </View>
        </View>
    )
}