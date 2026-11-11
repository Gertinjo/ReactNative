import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ProductDetail = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.imgWrapper}>
            <Image source={props.image} style={styles.img} />  
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{props.name}</Text>
          <Text>{props.category}</Text>
          <Text>{props.price}</Text>
          <Text>{props.stock}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
  },
  imgWrapper: {
    marginRight: 12,
  },
  img: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
    borderRadius: 8,
  },
  infoWrapper: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetail;
