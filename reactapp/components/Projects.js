import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

const Projects = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>PROJECTS</Text>

                <TouchableOpacity style={styles.viewAllButton}>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.projectsContainer}>

                <View style={styles.projectCard}>
                    <Image
                        source={require("../assets/Project1.jpg")}
                        style={styles.projectImage}
                    />

                    <View style={styles.projectInfo}>
                        <Text style={styles.projectName}>
                            Project
                        </Text>

                        <Text style={styles.projectDescription}>
                            Student project
                        </Text>
                    </View>
                </View>

                <View style={styles.projectCard}>
                    <Image
                        source={require("../assets/Project2.jpg")}
                        style={styles.projectImage}
                    />

                    <View style={styles.projectInfo}>
                        <Text style={styles.projectName}>
                            Project
                        </Text>

                        <Text style={styles.projectDescription}>
                            Student project
                        </Text>
                    </View>
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFFDE0",
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 30,
    },

    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111",
    },

    viewAllButton: {
        backgroundColor: "#FFD000",
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 25,
    },

    viewAllText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },

    projectsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    projectCard: {
        width: "48%",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        overflow: "hidden",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.12,
        shadowRadius: 4,

        elevation: 3,
    },

    projectImage: {
        width: "100%",
        height: 130,
        resizeMode: "cover",
    },

    projectInfo: {
        padding: 12,
    },

    projectName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111",
        marginBottom: 4,
    },

    projectDescription: {
        fontSize: 12,
        color: "#666",
    },
});

export default Projects;
