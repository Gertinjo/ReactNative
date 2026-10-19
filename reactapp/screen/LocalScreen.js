
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import data from '../assets/phones.json';

import samsungS24 from '../assets/samsung-s24.jpg';
import macbookAir from '../assets/macbook-air-m2.jpg';
import dellXPS from '../assets/dell-xps-15.jpg';
import ipadPro from '../assets/ipad-pro.jpg';
import airpodsPro from '../assets/airpods-pro.jpg';
import sonyHeadphones from '../assets/sony-wh1000xm5.jpg';
import appleWatch from '../assets/apple-watch-series-9.jpg';
import playstation5 from '../assets/playstation-5.jpg';
import { Button } from "react-native-web";


const images = {
  'samsung-s24.jpg': samsungS24,
  'macbook-air-m2.jpg': macbookAir,
  'dell-xps-15.jpg': dellXPS,
  'ipad-pro.jpg': ipadPro,
  'airpods-pro.jpg': airpodsPro,
  'sony-wh1000xm5.jpg': sonyHeadphones,
  'apple-watch-series-9.jpg': appleWatch,
  'playstation-5.jpg': playstation5,
};

class LocalScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      phones: []
    };
  }

  componentDidMount() {
    this.setState({ phones: data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Phones</Text>

        <FlatList
          data={this.state.phones}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.phoneCard}>
                <Text>Name: {item.name}</Text>
                <Text>Category: {item.category}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Stock: {item.stock}</Text>

                {images[item.image] && (
                  <Image
                    source={images[item.image]}
                    style={styles.phoneImage}
                    resizeMode="contain"
                  />
                )}
                <Text>Description: {item.description}</Text>
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
  phoneCard: {
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
  phoneName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  phoneAddress: {
    fontStyle: 'italic',
    color: '#666',
    marginTop: 4,
  },
  phoneImage: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
});

export default LocalScreen;
