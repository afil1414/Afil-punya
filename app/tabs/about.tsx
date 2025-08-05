import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.text}>
        Aplikasi ini dibuat untuk memenuhi tugas mata kuliah pengembangan aplikasi mobile berbasis React Native menggunakan Expo. 
        Aplikasi ini terdiri dari 3 halaman:
      </Text>
      <View style={styles.list}>
        <Text style={styles.item}>• <Text style={styles.bold}>Home</Text>: Menampilkan informasi tentang Unismuh Makassar</Text>
        <Text style={styles.item}>• <Text style={styles.bold}>About</Text>: Menjelaskan fungsi dari aplikasi</Text>
        <Text style={styles.item}>• <Text style={styles.bold}>Profil</Text>: Menampilkan data diri mahasiswa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2a9d8f', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10, color: '#333' },
  list: { marginTop: 10 },
  item: { fontSize: 16, marginVertical: 4 },
  bold: { fontWeight: 'bold', color: '#264653' },
});
