import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

const StudentDetails = (props) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.hero}>

                <View style={styles.imageWrapper}>
                    <Image
                        source={props.image}
                        style={styles.img}
                    />
                </View>

            </View>

            <View style={styles.infoCard}>

                <Text style={styles.name}>
                    {props.name}
                </Text>

                <Text style={styles.role}>
                    UI/UX Designer
                </Text>

                <Text style={styles.description}>
                    {props.description}
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        HIRE HIM
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    // Entire component
    container: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#FFFDE0",
        paddingBottom: 30,
    },

    // Green area at the top
    hero: {
        width: 380,
        height: 330,

        backgroundColor: "#A8D1BD",

        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

        alignItems: "center",
        justifyContent: "flex-end",
    },

    // Circular image background
    imageWrapper: {
        width: 190,
        height: 190,

        borderRadius: 95,

        backgroundColor: "#FFFDE0",

        alignItems: "center",
        justifyContent: "center",

        marginBottom: 55,

        overflow: "hidden",
    },

    // Student image
    img: {
        width: "85%",
        height: "85%",

        resizeMode: "contain",
    },

    // Cream information card
    infoCard: {
        width: 340,
        minHeight: 280,

        backgroundColor: "#FFFDE0",

        borderRadius: 25,

        marginTop: -35,

        paddingTop: 30,
        paddingBottom: 30,
        paddingHorizontal: 25,

        alignItems: "center",

        // iOS shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,

        // Android shadow
        elevation: 5,
    },

    // Student name
    name: {
        fontSize: 25,
        fontWeight: "bold",

        color: "#111",

        textAlign: "center",

        marginBottom: 8,
    },

    // Student role
    role: {
        fontSize: 16,

        color: "#333",

        textAlign: "center",

        lineHeight: 21,

        marginBottom: 12,
    },

    // Description
    description: {
        fontSize: 15,

        color: "#333",

        textAlign: "center",

        lineHeight: 21,

        marginBottom: 15,
    },

    // Yellow button
    button: {
        width: 105,
        height: 65,

        backgroundColor: "#FFD000",

        borderRadius: 35,

        alignItems: "center",
        justifyContent: "center",

        marginTop: 5,
    },

    buttonText: {
        color: "#FFFFFF",

        fontSize: 14,

        fontWeight: "bold",

        textAlign: "center",

        lineHeight: 20,
    },
});

export default StudentDetails;
