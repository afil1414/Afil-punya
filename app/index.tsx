import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

const stambukPatokan = 105841113522;

const namaMahasiswa = [
  { nama: "Asep", font: "ubuntu" },
  { nama: "Zahrul", font: "roboto" },
  { nama: "zanzun", font: "spaceMono" },
  { nama: "Fuad Sanjaya", font: "openSans" },
  { nama: "Musni", font: "robotoItalic" },
  { nama: "Afil", font: "openSansItalic" },
  { nama: "Hiswan", font: "bitcount" },
  { nama: "Abdul", font: "inter" },
  { nama: "Hasrul", font: "bitcountVariable" },
  { nama: "Ari", font: "robotoMedium" },
];

// Urutkan berdasarkan stambuk
const sortedNama = [...namaMahasiswa]; // Dummy sorting dihilangkan karena tidak relevan

// Dummy filter agar program tetap jalan (karena tidak ada stambuk di data)
const sebelum = sortedNama.slice(0, 5);
const sesudah = sortedNama.slice(5);



export default function Index() {

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Nama Mahasiswa</Text>
      <Text style={styles.subTitle}>Sebelum Stambuk : {stambukPatokan}</Text>
      {sebelum.map((item, index) => (
        <View key={`sbl-${index}`} style={styles.card}>
          <Text style={[styles.namaText, { fontFamily: item.font }]}>
            {item.nama}
          </Text>
        </View>
      ))}

      <Text style={styles.subTitle}>Sesudah Stambuk : {stambukPatokan}</Text>
      {sesudah.map((item, index) => (
        <View key={`ssd-${index}`} style={styles.card}>
          <Text style={[styles.namaText, { fontFamily: item.font }]}>
            {item.nama}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: "#9ebbdfff",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#972b2bff",
    marginBottom: 30,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#09404eff",
    alignSelf: "flex-start",
  },
  card: {
  width: width * 0.2,
  backgroundColor: "#c4eff5ff",
  borderRadius: 16,
  paddingVertical: 18,
  paddingHorizontal: 20,
  marginBottom: 15,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 10.12,
  shadowRadius: 10,
  elevation: 5,
  borderWidth: 1,
  borderColor: "#00080fff",
  alignSelf: "flex-start", // ⬅️ Ini yang memindahkan card ke kanan
},
  namaText: {
    fontSize: 18,
    color: "#34495e",
    
  },
});
