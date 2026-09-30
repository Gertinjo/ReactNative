import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import Person from '../components/person.js';
import StudentDetails from "../components/StudentsDetail.js";
import Projects from "../components/Projects.js";

const StudentScreen = () => {
    return(
        <ScrollView style={styles.scrollView}>
                <StudentDetails
                name="John Doe"
                image={require("../assets/person.jpg")}
                description="John Doe — UI/UX Designer

Creative UI/UX Designer with 2+ years of experience designing modern, user-friendly web and mobile experiences. Skilled in Figma, wireframing, prototyping, and design systems.
"
                
            />
                <Projects>

                </Projects>
            </ScrollView>
        
    );

};

const styles = StyleSheet.create({
});
export default StudentScreen;