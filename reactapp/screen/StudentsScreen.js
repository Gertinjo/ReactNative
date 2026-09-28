import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StudentsDetails from "../screen/StudentsDetail";

const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students</Text>

            <StudentsDetails
                name="Gerti"
                image={require("../assets/gerti.png")}
                description="Lorem"
            />

            <StudentsDetails
                name="Deon"
                image={require("../assets/deoni.jpg")}
                description="A"
            />

            <StudentsDetails
                name="Amant"
                image={require("../assets/amant.jpg")}
                description="A"
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

export default StudentsScreen;
