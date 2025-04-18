import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#EAF2FA",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#004AAD",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 30,
    marginTop: 20
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 50,
    marginBottom: 70
  },
  socialItem: {
    alignItems: "center",
    width: '50%'
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  socialText: {
    fontSize: 14,
  },
  address: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 50,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: '#F6A5C0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    paddingVertical: 12
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
