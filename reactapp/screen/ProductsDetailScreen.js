import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

const ProductsDetailScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Full Product Catalog Details</Text>

            {/* Product 1 */}
            <View style={styles.card}>
                <Image source={require("../assets/samsung-s24.jpg")} style={styles.image} />
                <Text style={styles.title}>Samsung S24</Text>
                <Text style={styles.price}>Price: $700</Text>
                <Text style={styles.stock}>In Stock: Yes</Text>
                <Text style={styles.description}>
                    Latest flagship smartphone featuring high-end AI capabilities, crystal clear cameras, and smooth performance.
                </Text>
            </View>

            {/* Product 2 */}
            <View style={styles.card}>
                <Image source={require("../assets/macbook-air-m2.jpg")} style={styles.image} />
                <Text style={styles.title}>MacBook Air M2</Text>
                <Text style={styles.price}>Price: $690</Text>
                <Text style={styles.stock}>In Stock: Yes</Text>
                <Text style={styles.description}>
                    Supercharged by the M2 chip. Features an incredibly thin aluminum enclosure and up to 18 hours of battery life.
                </Text>
            </View>

            {/* Product 3 */}
            <View style={styles.card}>
                <Image source={require("../assets/dell-xps-15.jpg")} style={styles.image} />
                <Text style={styles.title}>Dell Xps 15</Text>
                <Text style={styles.price}>Price: $460</Text>
                <Text style={styles.stock}>In Stock: Yes</Text>
                <Text style={styles.description}>
                    Stunning infinity edge display combined with powerful processing performance for demanding creative workflows.
                </Text>
            </View>

            {/* Product 4 */}
            <View style={styles.card}>
                <Image source={require("../assets/playstation-5.jpg")} style={styles.image} />
                <Text style={styles.title}>Playstation 5</Text>
                <Text style={styles.price}>Price: $500</Text>
                <Text style={styles.stock}>In Stock: Yes</Text>
                <Text style={styles.description}>
                    Experience lightning-fast loading speeds, deep immersion with haptic feedback support, and a massive library of next-gen games.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15,
    },
    card: {
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
        padding: 15,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        alignItems: "center"
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
        resizeMode: "contain",
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    price: {
        fontSize: 18,
        color: "green",
        fontWeight: "600",
        marginBottom: 2,
    },
    stock: {
        fontSize: 14,
        color: "gray",
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        color: "#444",
        lineHeight: 20,
        paddingHorizontal: 10,
    },
});

export default ProductsDetailScreen;
