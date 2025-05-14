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
  boxCard:{
    width: '100%',
    maxWidth: 700,
    height: 500,
    backgroundColor: 'white',
    marginTop: 50,
    padding: 20,
    borderRadius: 8
  },
  containCards:{
    width: '100%',
    height: 250,
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  boxDados:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 7
  },
  name:{
    fontSize: 35,
    fontWeight: 'bold',
  },
  age:{
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 18,
    marginTop: 7,
  },
  viewScroll:{
    width: '100%',
    height: 100,
  },
  scrollView:{
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
  },
  text:{
    fontSize: 18,
    textAlign: 'auto',
  },
  boxButton:{
    width: '100%',
    maxWidth: 700,
    alignItems: 'center',
    marginTop: 30
    },
  button:{
    width: '100%',
    height: 60,
    backgroundColor: '#EA728D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20
  },
  textButton:{
    fontSize: 22,
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
