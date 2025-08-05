import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil Mahasiswa</Text>
      <Image source={require('../../assets/images/profil.jpeg')} style={styles.image} />
      <View style={styles.dataBox}>
        <Text style={styles.item}><Text style={styles.label}>Nama:</Text> Afil Anugrah</Text>
        <Text style={styles.item}><Text style={styles.label}>NIM:</Text> 105841113522</Text>
        <Text style={styles.item}><Text style={styles.label}>Kelas:</Text> 6-D</Text>
        <Text style={styles.item}><Text style={styles.label}>Jurusan:</Text> Teknik Informatika</Text>
        <Text style={styles.item}><Text style={styles.label}>Fakultas:</Text> Teknik</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12, color: '#2a9d8f' },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  dataBox: { width: '100%', paddingHorizontal: 20 },
  item: { fontSize: 16, marginVertical: 6, color: '#333' },
  label: { fontWeight: 'bold', color: '#264653' },
});
