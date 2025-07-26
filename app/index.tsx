import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

const stambukPatokan = 105841113522;

const namaMahasiswa = [
  { nama: "Baco", font: "ubuntu" },
  { nama: "Bece", font: "roboto" },
  { nama: "Asep", font: "spaceMono" },
  { nama: "Fuad Sanjaya", font: "openSans" },
  { nama: "Musni", font: "robotoItalic" },
  { nama: "Abdullah", font: "openSansItalic" },
  { nama: "Hiswann", font: "bitcount" },
  { nama: "Afil", font: "inter" },
  { nama: "Ari", font: "bitcountVariable" },
  { nama: "Muh Irsyad Jafar", font: "robotoMedium" },
];

const sortedNama = [...namaMahasiswa];

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
    backgroundColor: "#EEF2F7",
    alignItems: "center",
  
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "blue",
    marginBottom: 30,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "red",
    alignSelf: "flex-start",
  },
  card: {
    width: width * 0.9,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#e6ecf1",
  },
  namaText: {
    fontSize: 20,
    color: "#34495e",
    textAlign: "center"
  },
});
