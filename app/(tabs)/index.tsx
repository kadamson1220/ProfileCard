import { Image, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image style={styles.profileImage} source={require('../../assets/images/profile2.jpeg')}/>
      <Text style={styles.textEdit}>Kayli Adamson</Text>
      <Text style={styles.bioEdit}>Student at IUI pursuing a dual degree in Computer Science and Digital Forensics, and a certification in Full-Stack.</Text>

      
    </View>
    <View style={styles.factsEdit}>
        <Text style={styles.fact}>• I am a server, website manager, and DFU intern</Text>
        <Text style={styles.fact}>• I enjoy running and cycling</Text>
        <Text style={styles.fact}>• I like gold jewelry</Text>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  factsEdit: {
    width: 300,
    gap: 8,
    backgroundColor: "lavender",
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  fact: {
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 7,
    borderColor: "lavender",
    borderStyle: "dotted",
  },
 profileImage: {
  width: 170,
  height: 170,
  borderRadius: 85,
  marginBottom: 15,
},
  container: {
    backgroundColor: "lightblue",
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 15,
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
