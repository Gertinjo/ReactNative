import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icons = (props) => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name={props.name} size={27} color="#22D4FF" />
      </View>
      <Text style={styles.iconText}>{props.iconText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    width: 70,
  },
  iconWrapper: {
    backgroundColor: "#384053",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 6,
  },
  iconText: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Icons;
