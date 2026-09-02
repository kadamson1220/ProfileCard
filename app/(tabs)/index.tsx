import { Image, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image style={styles.profileImage} source={{ uri: "https://picsum.photos/200"}} />
      <Text style={styles.textEdit}>Kayli Adamson</Text>
      <Text style={styles.bioEdit}>lorem ipsum lala doa erjakjeeamae florem sowerds</Text>
      <View style={styles.factsEdit}>
        <Text style={styles.fact}>• I go to school</Text>
        <Text style={styles.fact}>• I go to work</Text>
        <Text style={styles.fact}>• I go run</Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  factsEdit: {
    width: "100%",
    gap: 8,
  },
  fact: {
    fontSize: 16,
    //textAlign: "center",
  },
  card: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  profileImage:{
    width: 120, 
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  container: {
    backgroundColor: "lightblue",
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: "white",
    borderRadius: 20,
    borderStyle: "dotted",

  },
  textEdit: {
    color: "darkblue",
    fontSize: 30,
    fontWeight: "bold", 
    marginBottom: 10,
  },
  bioEdit: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,

  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
