import React from "react";
import {Text, View, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <Text>Welcome to Home screen</Text>
            <Button 
            title='Go to About Screen'
            onPress={()=> navigation.navigate('About')}
            />
        </View>
    );
}

export default Home;