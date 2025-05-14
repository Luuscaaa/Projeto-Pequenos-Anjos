import { ActivityIndicator, Text, View } from "react-native"
import { style } from "./style"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useFocusEffect, useRouter } from "expo-router"
import { useCallback } from "react"

const SplashScreen = () => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        router.push('/login');
      }, 5000);

      return () => clearTimeout(timer);
    }, [])
  )

  return (
    <View style={style.container}>
          <MaterialCommunityIcons
              name="heart"
              size={120}
              color={'#EA728D'} />
          <Text style={style.title}> INSTITUTO LUTA {'\n'} PELA VIDA {'\n'} PEQUENOS ANJOS</Text>
          <Text style={style.text}> Cuidar com amor é {'\n'} o nosso maior dom</Text>
          <ActivityIndicator color="#282828" style={{ marginTop: 40 }}/>
    </View>
  );
}

export const Loading = () => {
  return (
    <SplashScreen />
  );
}