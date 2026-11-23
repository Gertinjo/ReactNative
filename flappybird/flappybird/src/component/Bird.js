import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Bird = ({birdBottom, birdLeft})=>{
return(
    <Image
    style={{
        position: 'absolute',
        left: birdLeft - (birdWidth/2),
        bottom: birdBottom - (birdHeight / 2),
        width: 40,
        height: 40      }
        }
        source={require('../../assets/bird1.png')}
        resizeMode="streched"
        />
);
}

const styles = StyleSheet.create({
tinyLogo:{
    width: 40,
    height: 40
}
});

export default Bird;