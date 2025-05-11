import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E6F0FB',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  boxBackButton:{
    marginTop: 40,
    width: '100%',
    maxWidth: 700,

  },
  title:{
    fontSize: 35,
    color: '#083072',
    fontWeight: 'bold',
  },
  boxInfos:{
    borderWidth: 1,
    width: '100%',
    maxWidth: 700,
    height: '60%',
    marginTop: 60,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  titleInstituto:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView:{
    marginTop: 10,
    borderRadius: 8
  },
  text:{
    fontSize: 16,
    textAlign: 'justify'
  },
  boxButton:{
    width: '100%',
    maxWidth: 700,
    alignItems: 'center'
  },
  button:{
    width: '100%',
    height: 50,
    backgroundColor: '#083072',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 40
  },
  textButton:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  containerTabBar:{
    width: '100%',
    height: 80,
    backgroundColor: '#E6F0FB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBar:{
    width:'100%',
    maxWidth: 700,
    height:'100%',
    borderWidth: 1,
    borderColor: 'rgba(5, 5, 5, 0.3)',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  }
});
