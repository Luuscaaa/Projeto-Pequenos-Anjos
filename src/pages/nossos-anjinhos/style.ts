import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#EAF2FA",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#004AAD",
    marginTop: 20,
    marginBottom: 50,
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 20,
    gap: 25,
    paddingHorizontal: 20,
  },

  card: {
    width: 150,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  cardName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  cardAge: {
    fontSize: 14,
    color: "#666",
  },

  button: {
    width: 115,
    height: 50,
    backgroundColor: '#F6A5C0',
    marginTop: 50,
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
    justifyContent: 'center',
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
