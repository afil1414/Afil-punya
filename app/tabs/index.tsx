import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image source={require('../../assets/images/unismuh.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Unismuh Makassar merupakan universitas swasta unggulan yang berlokasi di Kota Makassar, Sulawesi Selatan. Kampus ini berlandaskan nilai-nilai Islam dan Muhammadiyah dalam membangun generasi yang unggul.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#264653', marginBottom: 12, textAlign: 'center' },
  image: { width: 320, height: 200, borderRadius: 10, marginVertical: 15 },
  text: { fontSize: 16, lineHeight: 24, textAlign: 'justify', color: '#333' },
});
