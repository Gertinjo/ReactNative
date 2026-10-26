import React from "react";
import {Text, View, StyleSheet, Button} from 'react-native';

const About = ({navigation}) => {
    return(
        <View>
            <Text>Welcome to About screen</Text>
            <Button 
            title='Go to Home Screen'
            onPress={()=> navigation.navigate('Home')}
            />
        </View>
    );
}


export default About;