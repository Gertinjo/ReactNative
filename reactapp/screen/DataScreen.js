import React, { Component } from "react"; 
import { View, Text, StyleSheet, FlatList } from 'react-native'; 
import data from '../assets/data.json'; 

class UserScreen extends React.Component { 
  constructor() { 
    super(); 
    this.state = { 
      users: [] 
    }; 
  } 

  componentDidMount() { 
    this.setState({ users: data }); 
  } 

  render() { 
    return ( 
      <View style={styles.container}> 
        <Text style={styles.header}>Random Users</Text> 
        <FlatList 
          data={this.state.users} 
          keyExtractor={item => item.id.toString()} 
          renderItem={({ item }) => { 
            return ( 
              <View style={styles.userCard}> 
                <Text style={styles.userName}>Name: {item.name}</Text> 
                <Text>Email: {item.email}</Text> 
                <Text>Age: {item.age}</Text> 
              </View> 
            ); 
          }} 
        /> 
      </View> 
    ); 
  } 
} 

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    paddingTop: 50, 
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  userCard: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  userAddress: {
    fontStyle: 'italic',
    color: '#666',
    marginTop: 4,
  }
}); 

export default UserScreen;
