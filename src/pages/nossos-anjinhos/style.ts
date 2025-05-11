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
    marginTop: 5
  },
  name:{
    fontSize: 35,
    fontWeight: 'bold'
  },
  age:{
    fontSize: 20,
    fontWeight: '600',
    marginRight: -5,
    marginTop: 10
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
    textAlign: 'justify',
  },
});
