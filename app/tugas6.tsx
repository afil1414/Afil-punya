import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.iconRow}>
        <Ionicons name="planet" size={32} color="#1abc9c" />
        <FontAwesome name="bicycle" size={32} color="#e74c3c" />
        <MaterialIcons name="emoji-nature" size={32} color="#f39c12" />
        <Feather name="music" size={32} color="#8e44ad" />
        <AntDesign name="android1" size={32} color="#2ecc71" />
        <Entypo name="controller-play" size={32} color="#3498db" />
        <EvilIcons name="bell" size={38} color="#9b59b6" />
        <Foundation name="foot" size={32} color="#34495e" />
        <MaterialCommunityIcons name="teddy-bear" size={32} color="#e67e22" />
        <Octicons name="mark-github" size={32} color="#000" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
});

export default IconScreen;
