import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const Friends = [
  { id: '1', name: 'Gerti', surname: 'Calaj', age: 13 },
  { id: '2', name: 'Deon', surname: 'Beka', age: 15 },
  { id: '3', name: 'Amant', surname: 'Zabeli', age: 14 },
];

const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Friends}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.textLine}>Name: {item.name}</Text>
              <Text style={styles.textLine}>Surname: {item.surname}</Text>
              <Text style={styles.textLine}>Age: {item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  card: {
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#DBA111',
    padding: 16,
    marginHorizontal: 24,
    marginVertical: 12,
    backgroundColor: '#034694',
  },
  textLine: {
    color: '#DBA111',
    fontSize: 55,
    marginVertical: 2,
  },
});

export default ExampleScreen;
