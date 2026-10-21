import React from "react";
import { Text, View, StyleSheet, Button } from "react-native"; 
import Productsdetails from "../components/products";

// Change ({ navigation }) to ({ setScreen })
const ProductsScreen = ({ setScreen }) => { 
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.text}>Products</Text>

            <Productsdetails
                name="Samsung S24"
                image={require("../assets/samsung-s24.jpg")}
                price="700"
                stock="yes"
            />
            <Productsdetails
                name="MacBook Air M2"
                image={require("../assets/macbook-air-m2.jpg")}
                price="690"
                stock="yes"
            />
            <Productsdetails
                name="Dell Xps 15"
                image={require("../assets/dell-xps-15.jpg")}
                price="460"
                stock="yes"
            />
            <Productsdetails
                name="Playstation 5"
                image={require("../assets/playstation-5.jpg")}
                price="500"
                stock="yes"
            /> 
            
            {/* Change navigation.navigate to setScreen('Details') */}
            <Button
                title="View Details"
                color="green"
                onPress={() => setScreen("ProductsDetailScreen")} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginVertical: 20,
        textAlign: "center",
    },
});

export default ProductsScreen;
