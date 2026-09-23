import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const ButtonScreen = () => {
    let counter, counterT = 0;
    return(
        <View>
            <Text>Click this button to get free money</Text>
            <Button
            title="Click NOW!"
            color="green"
            onPress={()=> console.log("Money earned", counter++)}
            
            />
            <TouchableOpacity style={styles.touch}
            activeOpacity={0.7}
            title="Click me now"
            color="blue" 
            onPress={() => console.log('Money earned', counterT++)}
  >
    <Text style={styles.T}>CLICK ME TO EARN 2X MONEY!</Text>
  </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
    touch: {
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#DBA111',
    padding: 16,
    marginHorizontal: 24,
    marginVertical: 12,
    backgroundColor: '#034694',
  },
  T:{
    color: 'white'
  },
}
)

export default ButtonScreen;